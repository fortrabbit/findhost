/**
 * Fetches one provider's logo, draws it as a square PNG and files it under
 * public/logos/, so the page serves it from our own origin. A reader's browser
 * never asks a provider for anything: a register that hotlinked 178 favicons
 * would hand every provider the address of everybody browsing it.
 *
 *   node scripts/logo.ts <id> --url <image> --page <where it was found>
 *   node scripts/logo.ts <id>
 *
 * With --url the image is a square mark someone chose on the provider's own
 * pages, and is filed as `mark`. Without it the script reads the home page,
 * collects every icon it declares, and keeps the largest, filed as `favicon`.
 * Nothing changes when the fetch fails, so a provider being down never takes a
 * logo away. Run by the fetch-logo skill; never by the build.
 */
import { existsSync, mkdirSync, readFileSync, rmdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { crc32, deflateSync } from 'node:zlib';
import { parse as parseYaml, stringify } from 'yaml';
import { initWasm, Resvg } from '@resvg/resvg-wasm';
import { hasAffiliateParams } from '../src/lib/affiliate.ts';
import { logoDir, logoFile, logoManifest, logoSize, type LogoEntry } from '../src/lib/logos.ts';

/**
 * A chosen mark should be drawn for the size it is shown at. A favicon is
 * whatever the provider has, and a 16px one drawn crisp still names the
 * company better than an emoji does.
 */
const minSide = { mark: 48, favicon: 16 };
/** Below this a raster is enlarged by whole multiples with hard edges, since smoothing it would blur it. */
const pixelBelow = 64;
/** A wordmark wider than this shrinks to a line inside a square tile. */
const maxAspect = 1.5;
const userAgent = 'FindHost logo fetch (+https://www.findhost.app/about/)';

const fail = (message: string): never => {
  console.error(`logo: ${message}`);
  process.exit(1);
};

/*
 * What the tile needs to know about the picture. An icon painted edge to edge
 * in a colour brings its own background and drops our margin; painted on
 * white, it is our tile already and keeps the margin. One drawn in white on
 * transparent would vanish on the white tile, so it gets a dark one.
 */
const assess = (pixels: Uint8Array) => {
  const edge = logoSize - 1;
  const corners = [0, edge * logoSize, edge, edge * logoSize + edge].map((index) =>
    pixels.subarray(index * 4, index * 4 + 4),
  );
  const opaque = corners.every((pixel) => pixel[3]! > 200);
  const fills = opaque && !corners.every((pixel) => Math.min(pixel[0]!, pixel[1]!, pixel[2]!) > 240);
  let weight = 0;
  let luminance = 0;
  for (let at = 0; at < pixels.length; at += 4) {
    const alpha = pixels[at + 3]! / 255;
    if (alpha < 0.5) continue;
    weight += alpha;
    luminance += (alpha * (0.2126 * pixels[at]! + 0.7152 * pixels[at + 1]! + 0.0722 * pixels[at + 2]!)) / 255;
  }
  const light = !opaque && weight > 0 && luminance / weight > 0.85;
  return { ...(fills ? { fills } : {}), ...(light ? { light } : {}) };
};

const startRenderer = () => initWasm(readFileSync('node_modules/@resvg/resvg-wasm/index_bg.wasm'));
const draw = (mime: string, bytes: Buffer, side = logoSize) => {
  const pixelated = mime !== 'image/svg+xml' && side < pixelBelow;
  const size = pixelated ? side * Math.floor(logoSize / side) : logoSize;
  const offset = (logoSize - size) / 2;
  return new Resvg(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${logoSize}" height="${logoSize}"><image href="data:${mime};base64,${bytes.toString('base64')}" x="${offset}" y="${offset}" width="${size}" height="${size}" preserveAspectRatio="xMidYMid meet"${pixelated ? ' image-rendering="optimizeSpeed"' : ''}/></svg>`,
  ).render();
};

/* Re-reads the files on disk, no network: for when `assess` changes. */
if (process.argv.includes('--recheck')) {
  await startRenderer();
  const manifest = parseYaml(readFileSync(logoManifest, 'utf8')) as Record<string, LogoEntry>;
  for (const [key, entry] of Object.entries(manifest)) {
    const { fills, light, ...rest } = entry;
    manifest[key] = { ...rest, ...assess(draw('image/png', readFileSync(join(logoDir, logoFile(key)))).pixels) };
  }
  writeFileSync(logoManifest, stringify(manifest));
  console.log(`rechecked ${Object.keys(manifest).length}`);
  process.exit(0);
}

const args = process.argv.slice(2);
const option = (name: string) => {
  const at = args.indexOf(`--${name}`);
  return at === -1 ? undefined : args[at + 1];
};
const id = args.find((arg, index) => !arg.startsWith('--') && !args[index - 1]?.startsWith('--'));
const chosen = option('url');
const page = option('page');
if (!id) fail('usage: node scripts/logo.ts <id> [--url <image> --page <page>]');
if (chosen && !page) fail('--url needs --page, the provider page the image was found on');

const recordFile = join('src/content/providers', `${id}.md`);
if (!existsSync(recordFile)) fail(`no record ${recordFile}`);
const record = parseYaml(readFileSync(recordFile, 'utf8').split(/^---$/m)[1]!) as { urls?: { home?: string } };
const home = record.urls?.home;
if (!chosen && !home) fail(`${id} has no urls.home to look for icons on`);
const held = existsSync(logoManifest)
  ? (parseYaml(readFileSync(logoManifest, 'utf8')) as Record<string, LogoEntry> | null)?.[id!]
  : undefined;
if (!chosen && held?.kind === 'mark') fail(`${id} already has a chosen mark; the favicon would replace it`);

const get = async (url: string) => {
  const response = await fetch(url, {
    headers: { 'user-agent': userAgent },
    redirect: 'follow',
    signal: AbortSignal.timeout(15_000),
  });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response;
};

interface Image {
  url: string;
  mime: string;
  bytes: Buffer;
  width: number;
  height: number;
}

const jpegSize = (bytes: Buffer) => {
  let at = 2;
  while (at + 9 < bytes.length) {
    if (bytes[at] !== 0xff) return undefined;
    const marker = bytes[at + 1]!;
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { width: bytes.readUInt16BE(at + 7), height: bytes.readUInt16BE(at + 5) };
    }
    at += 2 + bytes.readUInt16BE(at + 2);
  }
  return undefined;
};

const svgSize = (text: string) => {
  const root = text.match(/<svg\b[^>]*>/i)?.[0] ?? '';
  const box = root.match(/viewBox\s*=\s*["']\s*[-\d.]+[\s,]+[-\d.]+[\s,]+([\d.]+)[\s,]+([\d.]+)/i);
  const width = Number(box?.[1] ?? root.match(/\bwidth\s*=\s*["']([\d.]+)/i)?.[1]);
  const height = Number(box?.[2] ?? root.match(/\bheight\s*=\s*["']([\d.]+)/i)?.[1]);
  /* Vector draws at any size, so it outranks every raster; the ratio is what counts. */
  const ratio = width > 0 && height > 0 ? width / height : 1;
  return ratio >= 1 ? { width: 10_000 * ratio, height: 10_000 } : { width: 10_000, height: 10_000 / ratio };
};

/** A PNG from raw RGBA, so a BMP icon can go through the same renderer as everything else. */
const encodePng = (width: number, height: number, rgba: Uint8Array) => {
  const chunk = (type: string, data: Buffer) => {
    const body = Buffer.concat([Buffer.from(type, 'latin1'), data]);
    const length = Buffer.alloc(4);
    length.writeUInt32BE(data.length);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(body));
    return Buffer.concat([length, body, crc]);
  };
  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(height, 4);
  header.set([8, 6, 0, 0, 0], 8);
  const rows = Buffer.alloc(height * (width * 4 + 1));
  for (let y = 0; y < height; y++) rows.set(rgba.subarray(y * width * 4, (y + 1) * width * 4), y * (width * 4 + 1) + 1);
  return Buffer.concat([
    Buffer.from('\x89PNG\r\n\x1a\n', 'latin1'),
    chunk('IHDR', header),
    chunk('IDAT', deflateSync(rows)),
    chunk('IEND', Buffer.alloc(0)),
  ]);
};

/**
 * An icon's BMP entry: a header, an optional palette, the colour rows bottom
 * up, then a one-bit transparency mask. 32-bit entries carry their own alpha
 * and the mask is ignored; everything shallower takes its transparency from it.
 */
const decodeBmp = (data: Buffer) => {
  const headerSize = data.readUInt32LE(0);
  const width = data.readInt32LE(4);
  const height = data.readInt32LE(8) / 2;
  const depth = data.readUInt16LE(14);
  if (data.readUInt32LE(16) !== 0 || ![1, 4, 8, 24, 32].includes(depth)) return undefined;
  const colours = depth <= 8 ? data.readUInt32LE(32) || 1 << depth : 0;
  const palette = headerSize;
  const pixels = palette + colours * 4;
  const stride = Math.ceil((width * depth) / 32) * 4;
  const mask = pixels + stride * height;
  const maskStride = Math.ceil(width / 32) * 4;
  if (mask > data.length) return undefined;

  const rgba = new Uint8Array(width * height * 4);
  for (let y = 0; y < height; y++) {
    const row = pixels + (height - 1 - y) * stride;
    for (let x = 0; x < width; x++) {
      const out = (y * width + x) * 4;
      let at: number;
      if (depth >= 24) at = row + x * (depth / 8);
      else {
        const bit = x * depth;
        const index = (data[row + (bit >> 3)]! >> (8 - depth - (bit & 7))) & ((1 << depth) - 1);
        at = palette + index * 4;
      }
      rgba[out] = data[at + 2]!;
      rgba[out + 1] = data[at + 1]!;
      rgba[out + 2] = data[at]!;
      if (depth === 32) rgba[out + 3] = data[at + 3]!;
      else {
        const masked =
          mask + maskStride * height <= data.length &&
          (data[mask + (height - 1 - y) * maskStride + (x >> 3)]! >> (7 - (x & 7))) & 1;
        rgba[out + 3] = masked ? 0 : 255;
      }
    }
  }
  return encodePng(width, height, rgba);
};

/** An .ico is a directory of bitmaps, PNG or BMP. The largest wins, as a PNG either way. */
const largestIcoEntry = (bytes: Buffer) => {
  let best: Buffer | undefined;
  let bestSide = 0;
  for (let entry = 0; entry < bytes.readUInt16LE(4); entry++) {
    const at = 6 + entry * 16;
    const side = bytes[at] || 256;
    if (side <= bestSide) continue;
    const data = bytes.subarray(bytes.readUInt32LE(at + 12), bytes.readUInt32LE(at + 12) + bytes.readUInt32LE(at + 8));
    const png = data.subarray(0, 4).toString('latin1') === '\x89PNG' ? data : decodeBmp(data);
    if (png) {
      best = png;
      bestSide = side;
    }
  }
  return best;
};

/** Reads the format and the size off the bytes; a Content-Type header is a guess by somebody else. */
const sniff = (url: string, raw: Buffer): Image | string => {
  let bytes = raw;
  if (bytes.readUInt32BE(0) === 0x00000100) {
    const entry = largestIcoEntry(bytes);
    if (!entry) return 'an .ico with no entry it can read';
    bytes = entry;
  }
  const head = bytes.subarray(0, 12).toString('latin1');
  if (head.startsWith('\x89PNG'))
    return { url, mime: 'image/png', bytes, width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) };
  if (head.startsWith('GIF8'))
    return { url, mime: 'image/gif', bytes, width: bytes.readUInt16LE(6), height: bytes.readUInt16LE(8) };
  if (bytes[0] === 0xff && bytes[1] === 0xd8) {
    const size = jpegSize(bytes);
    return size ? { url, mime: 'image/jpeg', bytes, ...size } : 'a JPEG with no readable size';
  }
  if (head.startsWith('RIFF') && head.endsWith('WEBP')) return 'WebP, which the renderer cannot read';
  const text = bytes.toString('utf8');
  /* Anchored: a soft-404 page carrying an inline icon is HTML, not an SVG. */
  if (/^\s*(<\?xml[^>]*>\s*)?(<!--[\s\S]*?-->\s*)*(<!doctype svg[^>]*>\s*)?<svg\b/i.test(text))
    return { url, mime: 'image/svg+xml', bytes, ...svgSize(text) };
  return 'not an image';
};

const fetchImage = async (url: string) => {
  try {
    return sniff(url, Buffer.from(await (await get(url)).arrayBuffer()));
  } catch (error) {
    return (error as Error).message;
  }
};

const attributes = (tag: string) =>
  Object.fromEntries(
    [...tag.matchAll(/([\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)].map((match) => [
      match[1]!.toLowerCase(),
      match[2] ?? match[3] ?? match[4] ?? '',
    ]),
  );

/** Every icon the home page declares, its web manifest's icons, and the two addresses browsers try unasked. */
const declaredIcons = async (homeUrl: string) => {
  const response = await get(homeUrl);
  const base = response.url;
  const html = await response.text();
  const urls = new Set<string>();
  let manifest: string | undefined;

  for (const [tag] of html.matchAll(/<link\b[^>]*>/gi)) {
    const link = attributes(tag);
    const rel = (link.rel ?? '').toLowerCase().split(/\s+/);
    /* An inline data: icon has no address to cite, and the manifest records where each logo came from. */
    if (!link.href || link.href.startsWith('data:')) continue;
    /* mask-icon is Safari's one-colour silhouette, drawn to be tinted. */
    if (rel.includes('icon') || rel.some((name) => name.startsWith('apple-touch-icon'))) {
      urls.add(new URL(link.href, base).href);
    }
    if (rel.includes('manifest')) manifest = new URL(link.href, base).href;
  }

  if (manifest) {
    try {
      const icons = ((await (await get(manifest)).json()) as { icons?: { src: string; purpose?: string }[] }).icons;
      for (const icon of icons ?? []) {
        if (!icon.purpose?.includes('monochrome')) urls.add(new URL(icon.src, manifest).href);
      }
    } catch (error) {
      console.error(`logo: manifest skipped, ${(error as Error).message}`);
    }
  }

  urls.add(new URL('/apple-touch-icon.png', base).href);
  urls.add(new URL('/favicon.ico', base).href);
  return [...urls];
};

const pick = async (): Promise<{ image: Image; kind: LogoEntry['kind']; page: string }> => {
  if (chosen) {
    const image = await fetchImage(chosen);
    if (typeof image === 'string') return fail(`${chosen}: ${image}`);
    return { image, kind: 'mark', page: page! };
  }

  const images: Image[] = [];
  const urls = await declaredIcons(home!).catch((error: Error) => fail(`${home}: ${error.message}`));
  for (const url of urls) {
    const image = await fetchImage(url);
    console.log(`  ${typeof image === 'string' ? `skip  ${image}` : `${image.width}×${image.height}`}  ${url}`);
    if (typeof image !== 'string') images.push(image);
  }
  const usable = images.filter(
    (image) => Math.max(image.width, image.height) / Math.min(image.width, image.height) <= maxAspect,
  );
  const largest = usable.sort((a, b) => Math.min(b.width, b.height) - Math.min(a.width, a.height))[0];
  if (!largest) return fail(`${id}: no square icon on ${home}`);
  return { image: largest, kind: 'favicon', page: home! };
};

const { image, kind, page: foundOn } = await pick();
const aspect = Math.max(image.width, image.height) / Math.min(image.width, image.height);
if (aspect > maxAspect) fail(`${image.url} is ${image.width}×${image.height}, too wide to read in a square`);
if (Math.min(image.width, image.height) < minSide[kind]) {
  fail(`${image.url} is ${image.width}×${image.height}, under ${minSide[kind]}px; the emoji tile stays`);
}
for (const url of [image.url, foundOn]) if (hasAffiliateParams(url)) fail(`affiliate parameters in ${url}`);

/*
 * Every format is drawn through resvg as an <image> inside a square, which
 * centres and scales it, and throws away whatever an SVG carried besides its
 * picture. The tile behind it is CSS, so the PNG stays transparent.
 */
await startRenderer();
const rendered = draw(image.mime, image.bytes, Math.max(image.width, image.height));
if (!rendered.pixels.some((value, index) => index % 4 === 3 && value > 0)) fail(`${image.url} rendered empty`);

mkdirSync(logoDir, { recursive: true });
writeFileSync(join(logoDir, logoFile(id!)), rendered.asPng());

/* Several agents fetch at once; a directory is the one lock every filesystem creates atomically. */
const lock = `${logoManifest}.lock`;
for (let tries = 0; ; tries++) {
  try {
    mkdirSync(lock);
    break;
  } catch {
    if (tries > 100) fail(`${lock} held for 10s; remove it if no fetch is running`);
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
}
try {
  const manifest = (existsSync(logoManifest) ? parseYaml(readFileSync(logoManifest, 'utf8')) : {}) as Record<
    string,
    LogoEntry
  >;
  manifest[id!] = {
    kind,
    image: image.url,
    page: foundOn,
    fetchedAt: new Date().toISOString().slice(0, 10),
    ...assess(rendered.pixels),
  };
  const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
  writeFileSync(logoManifest, stringify(sorted));
} finally {
  rmdirSync(lock);
}

console.log(`${id}: ${kind} ${image.width}×${image.height} ${image.url}`);

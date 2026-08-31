/**
 * Share cards: the picture a link to a record turns into on Slack, Mastodon,
 * LinkedIn and the rest. Drawn from the record, so a card cannot disagree with
 * the page it points at.
 *
 * Nothing here runs a browser. Satori lays the card out and writes SVG with the
 * text already converted to outlines; resvg turns that into PNG. Both are
 * JavaScript and WebAssembly with no native binary behind them, which is the
 * whole reason they were chosen — Pagefind's Rust binary installs from optional
 * dependencies and does not resolve on the deploy container (FR-6305), and a
 * build step that only works on a laptop is not a build step.
 */
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import { initWasm, Resvg } from '@resvg/resvg-wasm';

/*
 * These packages are read as files rather than imported — a font, a WebAssembly
 * module and 3,723 emoji. `require.resolve` is the usual way to find them and
 * the wrong one here: an exports map decides what a package will admit to
 * having, and @resvg/resvg-wasm does not admit to its own package.json. The
 * directory is on disk either way.
 */
const nodeModules = (() => {
  let here = dirname(fileURLToPath(import.meta.url));
  while (!existsSync(join(here, 'node_modules'))) {
    const up = dirname(here);
    if (up === here) return join(process.cwd(), 'node_modules');
    here = up;
  }
  return join(here, 'node_modules');
})();

const packageDir = (name: string) => join(nodeModules, name);

/** Facebook's number, and everyone else followed it. */
export const cardWidth = 1200;
export const cardHeight = 630;

/**
 * The page sets Charter and falls back through the serifs a system happens to
 * have. A renderer has no system, so the card needs a file — Charis SIL is
 * Charter's open descendant and the closest thing to what a reader on a Mac
 * already sees.
 *
 * WOFF rather than WOFF2: satori reads font tables with opentype.js, which
 * inflates WOFF and cannot decompress WOFF2's Brotli.
 *
 * The extended cut is a second family rather than more of the first. Satori
 * picks one file per family and stops — two faces both called Charis SIL means
 * the ASCII one answers for every letter and Poznań loses its ń to a tofu box.
 * Named apart, it is a fallback family and the glyph is found.
 */
const bodyFace = 'Charis SIL';
const extendedFace = 'Charis SIL Extended';

const faces = [
  { file: 'charis-sil-latin-400-normal.woff', name: bodyFace, weight: 400 },
  { file: 'charis-sil-latin-700-normal.woff', name: bodyFace, weight: 700 },
  { file: 'charis-sil-latin-ext-400-normal.woff', name: extendedFace, weight: 400 },
  { file: 'charis-sil-latin-ext-700-normal.woff', name: extendedFace, weight: 700 },
] as const;

let fonts: { name: string; data: Buffer; weight: 400 | 700; style: 'normal' }[] | undefined;

const loadFonts = () => {
  const dir = join(packageDir('@fontsource/charis-sil'), 'files');
  fonts ??= faces.map((face) => ({
    name: face.name,
    data: readFileSync(join(dir, face.file)),
    weight: face.weight,
    style: 'normal' as const,
  }));
  return fonts;
};

let started: Promise<void> | undefined;

/** resvg's WebAssembly compiles once per process, and complains if asked twice. */
const startRenderer = () => {
  started ??= initWasm(readFileSync(join(packageDir('@resvg/resvg-wasm'), 'index_bg.wasm')));
  return started;
};

/**
 * Twemoji names its files by codepoint. The variation selector that asks for the
 * colour form is dropped from the name — except in a keycap, where it is part of
 * the sequence rather than a request about it.
 */
const emojiFile = (grapheme: string) => {
  const points = [...grapheme].map((character) => character.codePointAt(0)!);
  const keycap = points.includes(0x20e3);
  const kept = keycap ? points : points.filter((point) => point !== 0xfe0f);
  return `${kept.map((point) => point.toString(16)).join('-')}.svg`;
};

/**
 * An emoji is a picture, not a letter, and no text font on the card holds one.
 * Satori swaps a grapheme for an image when handed one, so the file is read off
 * disk and inlined — the build never reaches the network for a rabbit.
 */
const emojiImage = (grapheme: string): string | undefined => {
  try {
    const svg = readFileSync(join(packageDir('@twemoji/svg'), emojiFile(grapheme)));
    return `data:image/svg+xml;base64,${svg.toString('base64')}`;
  } catch {
    return undefined;
  }
};

const graphemesOf = (text: string) =>
  [...new Intl.Segmenter('en', { granularity: 'grapheme' }).segment(text)].map((part) => part.segment);

/** Every grapheme in the card that no font will draw, mapped to a picture of it. */
const emojiIn = (text: string) => {
  const images: Record<string, string> = {};
  for (const grapheme of graphemesOf(text)) {
    if (!/\p{Extended_Pictographic}|\p{Regional_Indicator}/u.test(grapheme)) continue;
    const image = emojiImage(grapheme);
    if (image) images[grapheme] = image;
  }
  return images;
};

export interface CardSpec {
  /** The headline. A provider's name, or the title of the page. */
  name: string;
  /** A sentence of what it is. Absent on records nobody has written one for yet. */
  description?: string;
  /** Short facts, joined with a middot. Whatever the page would lead with. */
  facts?: string[];
  /** The band of colour the page carries, where it carries one. */
  figure?: { emoji: string; color: string; textColor: string; text: string };
  /** Small print above the rule, opposite the wordmark. */
  strapline?: string;
}

/*
 * Display sizes are chosen by length rather than measured. Satori cannot report
 * a width before it lays out, and a second pass to find one is not worth it for
 * four buckets — a long name simply gets set smaller, exactly as it would be by
 * hand.
 */
const displaySize = (name: string) => (name.length <= 14 ? 96 : name.length <= 22 ? 78 : name.length <= 32 ? 64 : 50);

const ink = '#000000';
const paper = '#ffffff';

/*
 * Satori takes React elements. There is no React here and no reason to add one
 * for four nested boxes, so the tree is written as the plain objects React would
 * have produced.
 */
type Box = { type: string; props: Record<string, unknown> };

const box = (style: Record<string, unknown>, children?: unknown): Box => ({
  type: 'div',
  props: { style: { display: 'flex', ...style }, ...(children === undefined ? {} : { children }) },
});

const compose = (spec: CardSpec): Box => {
  const { name, description, facts = [], figure, strapline = 'A register of web hosting providers' } = spec;

  const body: Box[] = [
    /* The masthead, and under it the heavy rule the site uses to open a page. */
    box(
      {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        fontSize: 25,
        fontWeight: 700,
        letterSpacing: '0.09em',
        textTransform: 'uppercase',
      },
      [box({}, 'FindHost'), box({ fontWeight: 400, letterSpacing: '0.04em' }, strapline)],
    ),
    box({ height: 6, background: ink, marginTop: 14 }),
    box(
      { fontSize: displaySize(name), fontWeight: 700, lineHeight: 1.04, marginTop: 38, letterSpacing: '-0.015em' },
      name,
    ),
  ];

  if (description) {
    body.push(
      box(
        {
          fontSize: 31,
          lineHeight: 1.38,
          marginTop: 24,
          /* Three lines is what fits under the longest name without crowding the facts. */
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
        },
        description,
      ),
    );
  }

  /* Everything above sits where it falls; the facts are pinned to the floor. */
  body.push(box({ flexGrow: 1, minHeight: 16 }));

  if (facts.length > 0) {
    body.push(box({ height: 2, background: ink }));
    body.push(box({ fontSize: 27, marginTop: 15, letterSpacing: '0.005em' }, facts.join('  ·  ')));
  }

  /*
   * `minHeight: 0` is what lets this block give way. Without it a flex item
   * refuses to shrink below its contents, so a three-line description pushed the
   * colour band off the bottom edge of the card rather than losing a line of
   * itself.
   */
  const parts: Box[] = [
    box({ flexDirection: 'column', flexGrow: 1, minHeight: 0, overflow: 'hidden', padding: '48px 72px 40px' }, body),
  ];

  /*
   * The one place the site allows colour, kept full-bleed at the foot of the
   * card. It is also the only thing that tells 233 otherwise identical cards
   * apart at thumbnail size in a feed.
   */
  if (figure) {
    parts.push(
      box(
        {
          flexShrink: 0,
          padding: '24px 72px 26px',
          background: figure.color,
          color: figure.textColor,
          fontSize: 28,
          lineHeight: 1.3,
          alignItems: 'center',
          gap: 18,
        },
        [box({ fontSize: 34, lineHeight: 1 }, figure.emoji), box({}, figure.text)],
      ),
    );
  }

  return box(
    {
      width: cardWidth,
      height: cardHeight,
      flexDirection: 'column',
      background: paper,
      color: ink,
      fontFamily: `${bodyFace}, ${extendedFace}`,
    },
    parts,
  );
};

/*
 * `Uint8Array<ArrayBuffer>` rather than the plain alias: since TypeScript 5.7 a
 * bare Uint8Array may sit on a SharedArrayBuffer, which a Response body may not.
 * resvg always hands back its own buffer, so saying so is the whole fix.
 */
/** One card, as PNG bytes. */
export async function shareCard(spec: CardSpec): Promise<Uint8Array<ArrayBuffer>> {
  await startRenderer();

  const svg = await satori(compose(spec) as never, {
    width: cardWidth,
    height: cardHeight,
    fonts: loadFonts(),
    graphemeImages: emojiIn(
      [spec.name, spec.description, spec.figure?.emoji, spec.figure?.text].filter(Boolean).join(' '),
    ),
  });

  return new Resvg(svg, { fitTo: { mode: 'width', value: cardWidth } }).render().asPng() as Uint8Array<ArrayBuffer>;
}

/*
 * Where each kind of card lives, so an endpoint and the meta tag pointing at it
 * cannot drift apart. Facet cards sit a level down because /og/<name>.png is
 * already the records' shape, and a facet named like a provider would otherwise
 * be two routes claiming one address.
 */

/** A record's card: /og/fortrabbit.png */
export const cardPath = (slug: string) => `/og/${slug}.png`;

/** A facet's index card: /og/categories/index.png */
export const facetCardPath = (facet: string) => `/og/${facet}/index.png`;

/** One facet value's card: /og/categories/paas.png */
export const valueCardPath = (facet: string, slug: string) => `/og/${facet}/${slug}.png`;

/** A standalone page's card: /og/page/reach.png, beside its note at notes/page/reach.md */
export const pageCardPath = (name: string) => `/og/page/${name}.png`;

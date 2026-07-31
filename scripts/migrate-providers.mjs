/**
 * Move the hosting-guide provider profiles into FindHost records.
 * Run from ~/Sites/findhost so the `yaml` package resolves.
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { parse, stringify } from 'yaml';

const SRC = '/Users/hagbardceline/Sites/frbit-frontend/apps/www/content/hosting-guide/providers';
const DST = '/Users/hagbardceline/Sites/findhost/src/content/providers';
const WWW = 'https://www.fortrabbit.com';

const CATEGORY = {
  '01.shared-hosting': 'shared',
  '02.vps': 'vps',
  '03.server-management': 'server-management',
  '04.vanity-hosting': 'vanity-hosting',
  '05.serverless': 'serverless',
  '06.paas': 'paas',
  '07.iaas': 'iaas',
  '07.lcnc': 'lcnc',
};

// Homepages, supplied here because the source prose carries no outbound links.
// A provider whose URL is not known is not migrated — a guessed URL is exactly
// the kind of unchecked fact this dataset exists not to publish.
const URL_MAP = {
  'hosting-com': 'https://www.hosting.com',
  bluehost: 'https://www.bluehost.com',
  dreamhost: 'https://www.dreamhost.com',
  godaddy: 'https://www.godaddy.com',
  hostgator: 'https://www.hostgator.com',
  hostinger: 'https://www.hostinger.com',
  knownhost: 'https://www.knownhost.com',
  nixihost: 'https://nixihost.com',
  arcustech: 'https://www.arcustech.com',
  contabo: 'https://contabo.com',
  digitalocean: 'https://www.digitalocean.com',
  hetzner: 'https://www.hetzner.com',
  linode: 'https://www.linode.com',
  'liquid-web': 'https://www.liquidweb.com',
  ovh: 'https://www.ovhcloud.com',
  uberspace: 'https://uberspace.de',
  vultr: 'https://www.vultr.com',
  apiscp: 'https://apiscp.com',
  cloudways: 'https://www.cloudways.com',
  coolify: 'https://coolify.io',
  'laravel-forge': 'https://forge.laravel.com',
  ploi: 'https://ploi.io',
  runcloud: 'https://runcloud.io',
  'server-pilot': 'https://serverpilot.io',
  spinupwp: 'https://spinupwp.com',
  xcloud: 'https://xcloud.host',
  'craft-cloud': 'https://craftcms.com/cloud',
  flywheel: 'https://getflywheel.com',
  kinsta: 'https://kinsta.com',
  servd: 'https://servd.host',
  wpengine: 'https://wpengine.com',
  'aws-lambda': 'https://aws.amazon.com/lambda/',
  'cloudflare-workers': 'https://workers.cloudflare.com',
  'digitalocean-functions': 'https://www.digitalocean.com/products/functions',
  'google-cloud-run': 'https://cloud.google.com/run',
  'laravel-vapor': 'https://vapor.laravel.com',
  'scaleway-functions': 'https://www.scaleway.com/en/serverless-functions/',
  vercel: 'https://vercel.com',
  wasmer: 'https://wasmer.io',
  fly: 'https://fly.io',
  heroku: 'https://www.heroku.com',
  hostim: 'https://hostim.dev',
  'laravel-cloud': 'https://cloud.laravel.com',
  'ploi-cloud': 'https://ploi.cloud',
  railway: 'https://railway.com',
  render: 'https://render.com',
  sevalla: 'https://sevalla.com',
  upsun: 'https://upsun.com',
  aws: 'https://aws.amazon.com',
  azure: 'https://azure.microsoft.com',
  gcp: 'https://cloud.google.com',
  upcloud: 'https://upcloud.com',
  bubble: 'https://bubble.io',
  duda: 'https://www.duda.co',
  jimdo: 'https://www.jimdo.com',
  lovable: 'https://lovable.dev',
  shopify: 'https://www.shopify.com',
  squarespace: 'https://www.squarespace.com',
  webflow: 'https://webflow.com',
  weebly: 'https://www.weebly.com',
  wix: 'https://www.wix.com',
};

// Slug fixes and rebrands. The filename is the id is the URL, so a rename here
// is a rename of the record.
const RENAME = { archustech: 'arcustech', 'a2-hosting': 'hosting-com' };

// Sections and paragraphs written in our voice that never say our name, so
// nothing mechanical can find them. Listed by hand, here rather than in the
// records, so re-running the migration reproduces the same result.
const DROP_SECTIONS = {
  hetzner: ['## Data protection'],
  aws: ['## Alternatives'],
  uberspace: ['### Privacy'],
  'craft-cloud': ['## The alternative'],
};

const DROP_TEXT = {
  ploi: ['We abstract the AWS infrastructure underneath', 'One plan, one invoice, one place to ask for help.'],
  'ploi-cloud': ['Both platforms are tailored for freelancers, agencies, and startups'],
  upcloud: ['We are still considering UpCloud as an alternative'],
  'craft-cloud': ['Looking to switch?'],
  aws: ['not economical'],
};

// Facts the source carries in our own voice, restated as data. A relationship
// between us and a listed provider belongs on the record, not edited out of it.
const EXTRA = {
  hostim: {
    editorialNote:
      'Hostim is run by a former fortrabbit employee. Disclosed because fortrabbit publishes this site; it changes nothing about how the record is written.',
  },
};

const splitFrontmatter = (raw) => {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  return { data: parse(match[1]), body: match[2] };
};

/**
 * Remove the pitch at two grains.
 *
 * A section whose heading argues our case goes entirely — it was written to
 * sell and cannot be salvaged. A section that merely mentions us in passing
 * keeps its subject matter and loses only those sentences, because deleting
 * the whole thing throws away a real description of someone else's product.
 * A section left empty by that scrub is dropped too.
 */
const isOurs = (text) => text.toLowerCase().includes('fortrabbit');

let partiallyScrubbed = false;

const scrub = (text) =>
  text
    .split(/\n{2,}/)
    .map((paragraph) => {
      const sentences = paragraph.split(/(?<=[.!?]) (?=[A-Z“"'\[])/);
      const kept = sentences.filter((sentence) => !isOurs(sentence));
      // A paragraph that lost a sentence but not all of them may now refer back
      // to something that is no longer there — worth a human reading it.
      if (kept.length && kept.length !== sentences.length) partiallyScrubbed = true;
      return kept.join(' ').trim();
    })
    .filter(Boolean)
    .join('\n\n');

const depitch = (body) => {
  const parts = body.split(/^(## .*)$/m);
  let out = scrub(parts[0]);

  for (let i = 1; i < parts.length; i += 2) {
    if (isOurs(parts[i])) continue;
    const content = scrub(parts[i + 1]);
    if (content) out += `\n\n${parts[i]}\n\n${content}`;
  }
  return out;
};

/** MDC components have no equivalent here. Run before anything reflows the text. */
const stripComponents = (body) => {
  body = body.replace(/^::[A-Za-z]+[\s\S]*?^::\s*$/gm, '');
  body = body.replace(/:ContentLink\{href="([^"]+)"\s+text="([^"]+)"\}/g, '[$2]($1)');
  body = body.replace(
    /:ContentQuote\{author="([^"]+)"\s+text="([^"]+)"\}/g,
    (_m, author, text) => `> ${text}\n>\n> — ${author}`,
  );
  body = body.replace(/:ContentQuote\{text="([^"]+)"\}/g, (_m, text) => `> ${text}`);
  return body.replace(/::?ContactUs(\{[^}]*\})?/g, '');
};

/** Remove a `##`/`###` section by heading, up to the next heading of any level. */
const dropSection = (body, heading) => {
  const start = body.indexOf(heading);
  if (start === -1) return body;
  const rest = body.slice(start + heading.length);
  const next = rest.search(/^#{2,3} /m);
  return body.slice(0, start) + (next === -1 ? '' : rest.slice(next));
};

const dropParagraph = (body, marker) =>
  body
    .split(/\n{2,}/)
    .filter((paragraph) => !paragraph.includes(marker))
    .join('\n\n');

const rewrite = (body, pathToCategory) => {
  body = body.replace(/\/hosting-guide\/providers\/([a-z0-9-]+)\/([a-z0-9-]+)/g, (whole, _dir, name) => {
    const slug = RENAME[name] ?? name;
    return URL_MAP[slug] ? `/provider/${slug}/` : `${WWW}${whole}`;
  });
  body = body.replace(/\/hosting-guide\/providers\/([a-z0-9-]+)/g, (whole, dir) =>
    pathToCategory[dir] ? `/category/${pathToCategory[dir]}/` : `${WWW}${whole}`,
  );
  // Links into fortrabbit's own marketing pages lose the link and keep the words.
  body = body.replace(/\[([^\]]+)\]\(\/software\/[a-z0-9-]+\)/g, '$1');
  body = body.replace('/hosting-guide/intro', '/guide/why-hosting-is-hard/');
  body = body.replace(/\]\(\/hosting-guide\/?\)/g, '](/guide/)');
  body = body.replace('/hosting-guide/tips', '/guide/how-to-choose/');
  body = body.replace(
    /\]\((\/(?:alternatives|solutions|pricing|why|company|legal|docs|blog|support|contact|hosting-guide|raw)[^)]*)\)/g,
    `](${WWW}$1)`,
  );
  return body;
};

mkdirSync(DST, { recursive: true });

const directories = readdirSync(SRC).filter((name) => statSync(join(SRC, name)).isDirectory());
const pathToCategory = Object.fromEntries(
  directories.map((name) => [name.split('.').slice(1).join('.'), CATEGORY[name]]),
);

const skipped = [];
const scrubbed = [];
let written = 0;

for (const directory of directories.sort()) {
  const category = CATEGORY[directory];

  for (const file of readdirSync(join(SRC, directory)).sort()) {
    if (!file.endsWith('.md') || file === 'index.md' || /^\d+\.overview\.md$/.test(file)) continue;

    const { data, body: rawBody } = splitFrontmatter(readFileSync(join(SRC, directory, file), 'utf8'));
    const slug = RENAME[file.replace(/\.md$/, '')] ?? file.replace(/\.md$/, '');

    if (!URL_MAP[slug]) {
      skipped.push(`${directory}/${file} — no known homepage`);
      continue;
    }

    let body = stripComponents(rawBody);
    for (const heading of DROP_SECTIONS[slug] ?? []) body = dropSection(body, heading);
    for (const marker of DROP_TEXT[slug] ?? []) body = dropParagraph(body, marker);

    partiallyScrubbed = false;
    body = depitch(body);
    if (partiallyScrubbed) scrubbed.push(slug);
    body = body.replace(/^## Why not.*$/gm, '## Reservations');
    body = rewrite(body, pathToCategory);
    body = body.replace(/\n{3,}/g, '\n\n').trim();

    // The lead was written to sell; keep only the part that describes the provider.
    let description = (data['navigation.excerpt'] ?? data.lead ?? '')
      .split(/(?<=[.!?]) /)
      .filter((sentence) => !sentence.toLowerCase().includes('fortrabbit'))
      .join(' ')
      .trim();
    if (!description) {
      const firstParagraph = body.split(/\n{2,}/).find((paragraph) => !paragraph.startsWith('#')) ?? '';
      description = firstParagraph
        .split(/(?<=[.!?]) /)[0]
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .trim();
    }
    if (description.length > 200) {
      const first = description.split(/(?<=[.!?]) /)[0];
      description = first.length <= 200 ? first : description.slice(0, 197).trimEnd() + '…';
    }

    const record = { id: slug, name: data.title ?? slug, url: URL_MAP[slug], category };
    if (description) record.description = description;
    // A partial figure is not a figure — absent beats half-filled.
    const figure = data.figure ?? {};
    if (figure.emoji && figure.color && figure.textColor && figure.text) {
      record.figure = {
        emoji: String(figure.emoji).trim(),
        color: figure.color,
        textColor: figure.textColor,
        text: figure.text,
      };
    }
    Object.assign(record, EXTRA[slug] ?? {});
    record.ai = data.ai ?? 'co-authored';

    writeFileSync(join(DST, `${slug}.md`), `---\n${stringify(record, { lineWidth: 0 }).trim()}\n---\n\n${body}\n`);
    written += 1;
  }
}

console.log(`${written} records written`);
for (const line of skipped) console.log(`  skipped: ${line}`);
if (scrubbed.length) console.log(`  read for dangling references: ${scrubbed.join(', ')}`);

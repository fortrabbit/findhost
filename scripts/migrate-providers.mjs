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
  'a2-hosting': 'https://www.a2hosting.com', bluehost: 'https://www.bluehost.com',
  dreamhost: 'https://www.dreamhost.com', godaddy: 'https://www.godaddy.com',
  hostgator: 'https://www.hostgator.com', hostinger: 'https://www.hostinger.com',
  knownhost: 'https://www.knownhost.com', nixihost: 'https://nixihost.com',
  arcustech: 'https://www.arcustech.com', contabo: 'https://contabo.com',
  digitalocean: 'https://www.digitalocean.com', hetzner: 'https://www.hetzner.com',
  linode: 'https://www.linode.com', 'liquid-web': 'https://www.liquidweb.com',
  ovh: 'https://www.ovhcloud.com', uberspace: 'https://uberspace.de', vultr: 'https://www.vultr.com',
  apiscp: 'https://apiscp.com', cloudways: 'https://www.cloudways.com', coolify: 'https://coolify.io',
  'laravel-forge': 'https://forge.laravel.com', ploi: 'https://ploi.io', runcloud: 'https://runcloud.io',
  'server-pilot': 'https://serverpilot.io', spinupwp: 'https://spinupwp.com', xcloud: 'https://xcloud.host',
  'craft-cloud': 'https://craftcms.com/cloud', flywheel: 'https://getflywheel.com',
  kinsta: 'https://kinsta.com', servd: 'https://servd.host', wpengine: 'https://wpengine.com',
  'aws-lambda': 'https://aws.amazon.com/lambda/', 'cloudflare-workers': 'https://workers.cloudflare.com',
  'digitalocean-functions': 'https://www.digitalocean.com/products/functions',
  'google-cloud-run': 'https://cloud.google.com/run', 'laravel-vapor': 'https://vapor.laravel.com',
  'scaleway-functions': 'https://www.scaleway.com/en/serverless-functions/',
  vercel: 'https://vercel.com', wasmer: 'https://wasmer.io',
  fly: 'https://fly.io', heroku: 'https://www.heroku.com', 'laravel-cloud': 'https://cloud.laravel.com',
  railway: 'https://railway.com', render: 'https://render.com', sevalla: 'https://sevalla.com',
  upsun: 'https://upsun.com',
  aws: 'https://aws.amazon.com', azure: 'https://azure.microsoft.com', gcp: 'https://cloud.google.com',
  upcloud: 'https://upcloud.com',
  bubble: 'https://bubble.io', duda: 'https://www.duda.co', jimdo: 'https://www.jimdo.com',
  lovable: 'https://lovable.dev', shopify: 'https://www.shopify.com',
  squarespace: 'https://www.squarespace.com', webflow: 'https://webflow.com',
  weebly: 'https://www.weebly.com', wix: 'https://www.wix.com',
};

const RENAME = { archustech: 'arcustech' };

const splitFrontmatter = (raw) => {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  return { data: parse(match[1]), body: match[2] };
};

/** Drop a whole `## …` section when heading or body matches. */
const dropSectionsWhere = (body, matches) => {
  const parts = body.split(/^(## .*)$/m);
  let out = matches('', parts[0]) ? '' : parts[0];
  for (let i = 1; i < parts.length; i += 2) {
    if (!matches(parts[i], parts[i + 1])) out += parts[i] + parts[i + 1];
  }
  return out;
};

const rewrite = (body, pathToCategory) => {
  body = body.replace(/:ContentLink\{href="([^"]+)"\s+text="([^"]+)"\}/g, '[$2]($1)');
  body = body.replace(
    /:ContentQuote\{author="([^"]+)"\s+text="([^"]+)"\}/g,
    (_m, author, text) => `> ${text}\n>\n> — ${author}`,
  );
  body = body.replace(/::?ContactUs\{[^}]*\}\n?/g, '');

  body = body.replace(/\/hosting-guide\/providers\/([a-z0-9-]+)\/([a-z0-9-]+)/g, (whole, _dir, name) => {
    const slug = RENAME[name] ?? name;
    return URL_MAP[slug] ? `/provider/${slug}/` : `${WWW}${whole}`;
  });
  body = body.replace(
    /\/hosting-guide\/providers\/([a-z0-9-]+)/g,
    (whole, dir) => (pathToCategory[dir] ? `/category/${pathToCategory[dir]}/` : `${WWW}${whole}`),
  );
  body = body.replace('/hosting-guide/intro', '/guide/why-hosting-is-hard/');
  body = body.replace('/hosting-guide/tips', '/guide/how-to-choose/');
  body = body.replace(/\]\((\/(?:alternatives|solutions|pricing|why|company|legal|docs|blog|support|contact|hosting-guide|raw)[^)]*)\)/g, `](${WWW}$1)`);
  return body;
};

mkdirSync(DST, { recursive: true });

const directories = readdirSync(SRC).filter((name) => statSync(join(SRC, name)).isDirectory());
const pathToCategory = Object.fromEntries(directories.map((name) => [name.split('.').slice(1).join('.'), CATEGORY[name]]));

const skipped = [];
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

    // Drop the pitch wholesale: any section that talks about us at all. A
    // section arguing our case cannot also be a neutral description of someone
    // else's product, and rewriting it would just be pitching in another voice.
    let body = dropSectionsWhere(rawBody, (heading, content) =>
      `${heading}\n${content}`.toLowerCase().includes('fortrabbit'),
    );
    body = body.replace(/^## Why not.*$/gm, '## Reservations');
    body = rewrite(body, pathToCategory);
    // Stray pitch paragraphs survive section-dropping — "Looking to switch? …"
    body = body
      .split(/\n{2,}/)
      .filter((paragraph) => !paragraph.toLowerCase().includes('fortrabbit'))
      .join('\n\n');
    body = body.replace(/\n{3,}/g, '\n\n').trim();

    // The lead was written to sell; keep only the part that describes the provider.
    let description = (data['navigation.excerpt'] ?? data.lead ?? '')
      .split(/(?<=[.!?]) /)
      .filter((sentence) => !sentence.toLowerCase().includes('fortrabbit'))
      .join(' ')
      .trim();
    if (!description) {
      const firstParagraph = body.split(/\n{2,}/).find((paragraph) => !paragraph.startsWith('#')) ?? '';
      description = firstParagraph.split(/(?<=[.!?]) /)[0].replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim();
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
    record.ai = data.ai ?? 'co-authored';

    writeFileSync(join(DST, `${slug}.md`), `---\n${stringify(record, { lineWidth: 0 }).trim()}\n---\n\n${body}\n`);
    written += 1;
  }
}

console.log(`${written} records written`);
for (const line of skipped) console.log(`  skipped: ${line}`);

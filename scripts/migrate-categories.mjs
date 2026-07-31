import { readFileSync, writeFileSync, readdirSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { parse, stringify } from 'yaml';

const SRC = '/Users/hagbardceline/Sites/frbit-frontend/apps/www/content/hosting-guide/providers';
const DST = '/Users/hagbardceline/Sites/findhost/src/content/categories';
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

const providerSlugs = new Set(
  readdirSync('/Users/hagbardceline/Sites/findhost/src/content/providers').map((file) => file.replace(/\.md$/, '')),
);

const directories = readdirSync(SRC).filter((name) => statSync(join(SRC, name)).isDirectory());
const pathToCategory = Object.fromEntries(directories.map((name) => [name.split('.').slice(1).join('.'), CATEGORY[name]]));

const dropSectionsWhere = (body, matches) => {
  const parts = body.split(/^(## .*)$/m);
  let out = matches('', parts[0]) ? '' : parts[0];
  for (let i = 1; i < parts.length; i += 2) {
    if (!matches(parts[i], parts[i + 1])) out += parts[i] + parts[i + 1];
  }
  return out;
};

mkdirSync(DST, { recursive: true });

for (const directory of directories.sort()) {
  const overview = readdirSync(join(SRC, directory)).find((file) => /^\d+\.overview\.md$/.test(file));
  if (!overview) continue;

  const raw = readFileSync(join(SRC, directory, overview), 'utf8');
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const data = parse(match[1]);

  let body = dropSectionsWhere(match[2], (heading, content) =>
    `${heading}\n${content}`.toLowerCase().includes('fortrabbit'),
  );
  body = body.replace(/:ContentLink\{href="([^"]+)"\s+text="([^"]+)"\}/g, '[$2]($1)');
  body = body.replace(/::?ContactUs\{[^}]*\}\n?/g, '');
  body = body.replace(/\/hosting-guide\/providers\/([a-z0-9-]+)\/([a-z0-9-]+)/g, (whole, _dir, name) =>
    providerSlugs.has(name) ? `/provider/${name}/` : `${WWW}${whole}`,
  );
  body = body.replace(/\/hosting-guide\/providers\/([a-z0-9-]+)/g, (whole, dir) =>
    pathToCategory[dir] ? `/category/${pathToCategory[dir]}/` : `${WWW}${whole}`,
  );
  body = body.replace('/hosting-guide/intro', '/guide/why-hosting-is-hard/');
  body = body.replace('/hosting-guide/tips', '/guide/how-to-choose/');
  body = body.replace(
    /\]\((\/(?:alternatives|solutions|pricing|why|company|legal|docs|blog|support|contact|hosting-guide|raw)[^)]*)\)/g,
    `](${WWW}$1)`,
  );
  body = body
    .split(/\n{2,}/)
    .filter((paragraph) => !paragraph.toLowerCase().includes('fortrabbit'))
    .join('\n\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  let description = (data['navigation.excerpt'] ?? data.lead ?? '')
    .split(/(?<=[.!?]) /)
    .filter((sentence) => !sentence.toLowerCase().includes('fortrabbit'))
    .join(' ')
    .trim();
  if (description.length > 200) description = description.slice(0, 197).trimEnd() + '…';

  const record = { id: CATEGORY[directory], title: data.title?.replace(/^About /, '') ?? CATEGORY[directory] };
  if (description) record.description = description;
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

  writeFileSync(join(DST, `${CATEGORY[directory]}.md`), `---\n${stringify(record, { lineWidth: 0 }).trim()}\n---\n\n${body}\n`);
  console.log(`${CATEGORY[directory]} ← ${directory}/${overview}`);
}

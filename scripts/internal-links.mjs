/*
 * Every internal link in the built site, checked against the built site.
 *
 * Unlike scripts/linkcheck.mjs, which reports on the third-party web and gates
 * nothing, this one fails: an internal link points at a page we generate
 * ourselves, so a broken one is our mistake and always fixable. Renaming a
 * route or a facet value is exactly the change that leaves one behind.
 *
 *   pnpm run build && node scripts/internal-links.mjs
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const dist = 'dist';

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const pages = walk(dist).filter((path) => path.endsWith('.html'));
const exists = new Set(walk(dist).map((path) => relative(dist, path)));

/** A directory-format build answers `/x/` with `x/index.html`. */
const resolves = (href) => {
  const path = href.replace(/^\/|\/$/g, '');
  if (!path) return exists.has('index.html');
  return exists.has(path) || exists.has(`${path}/index.html`) || exists.has(`${path}.html`);
};

const broken = [];

for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  for (const [, href] of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    const target = href.split(/[#?]/)[0];
    if (!target || resolves(target)) continue;
    broken.push({ page: relative(dist, page), href: target });
  }
}

/*
 * The sitemap too, which is the one place a dead route hides from the check
 * above: no page has to link to a path for the sitemap to offer it to a crawler.
 * Its entries are absolute, so they are reduced to paths first.
 */
const sitemap = join(dist, 'sitemap.xml');
if (existsSync(sitemap)) {
  for (const [, loc] of readFileSync(sitemap, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const target = loc.replace(/^https?:\/\/[^/]+/, '').split(/[#?]/)[0];
    if (!resolves(target)) broken.push({ page: 'sitemap.xml', href: target });
  }
}

if (!broken.length) {
  console.log(`${pages.length} pages and the sitemap, no broken internal links.`);
  process.exit(0);
}

console.log(`${broken.length} broken internal links:\n`);
for (const { page, href } of broken) console.log(`  ${href}  <-  ${page}`);
process.exit(1);

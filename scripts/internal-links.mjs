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
const uncanonical = [];

/*
 * `trailingSlash: 'always'`, so /categories/paas/ is the address and
 * /categories/paas is not one. Most static hosts redirect the second to the
 * first, and `astro preview` answers it with a 404 — either way it is a
 * redirect we should never be spending, because every link here is ours to
 * write correctly. A path with a dot in its last segment is a file: /x.md,
 * /providers.json, /favicon.svg.
 */
const canonical = (href) => href.endsWith('/') || href.split('/').pop().includes('.');

for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  for (const [, href] of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    const target = href.split(/[#?]/)[0];
    if (!target) continue;
    if (!resolves(target)) broken.push({ page: relative(dist, page), href: target });
    else if (!canonical(target)) uncanonical.push({ page: relative(dist, page), href: target });
  }
}

/*
 * The sitemap too, which is the one place a dead route hides from the check
 * above: no page has to link to a path for the sitemap to offer it to a crawler.
 * Its entries are absolute, so they are reduced to paths first.
 */
const sitemap = join(dist, 'sitemap.xml');
const locs = existsSync(sitemap) ? [...readFileSync(sitemap, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)] : [];
for (const [, loc] of locs) {
  const target = loc.replace(/^https?:\/\/[^/]+/, '').split(/[#?]/)[0];
  if (!resolves(target)) broken.push({ page: 'sitemap.xml', href: target });
}

/*
 * And the two llms indexes, for the same reason: they offer every note and every
 * pair page as a link, and a note whose id resolves to no value is a 404 only
 * they publish. Their links are absolute and mixed with outbound ones, so only
 * those on the site's own host — the one the sitemap is written for — count.
 */
const own = locs[0]?.[1].match(/^https?:\/\/[^/]+/)?.[0];
for (const name of own ? ['llms.txt', 'llms-full.txt'] : []) {
  const file = join(dist, name);
  if (!existsSync(file)) continue;
  for (const [, href] of readFileSync(file, 'utf8').matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)) {
    if (!href.startsWith(`${own}/`)) continue;
    const target = href.slice(own.length).split(/[#?]/)[0];
    if (!resolves(target)) broken.push({ page: name, href: target });
  }
}

if (!broken.length && !uncanonical.length) {
  console.log(`${pages.length} pages, the sitemap and llms.txt, no broken internal links, every one canonical.`);
  process.exit(0);
}

if (broken.length) {
  console.log(`${broken.length} broken internal links:\n`);
  for (const { page, href } of broken) console.log(`  ${href}  <-  ${page}`);
}

if (uncanonical.length) {
  console.log(`\n${uncanonical.length} links missing their trailing slash:\n`);
  for (const { page, href } of uncanonical) console.log(`  ${href}  <-  ${page}`);
}

process.exit(1);

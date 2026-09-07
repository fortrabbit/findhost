/**
 * Tell IndexNow which pages a push changed. Runs in CI after the build, on
 * `push: main` only; the deploy runs beside it, and a ping that lands before
 * the page does is fine because the fetch comes minutes later.
 *
 *   node scripts/indexnow.ts <before> <after>   pages the commits in between reach
 *   node scripts/indexnow.ts --all              every page in the sitemap, once
 *
 * The key is the one file under public/ whose name is its own content, which is
 * how IndexNow verifies it: no secret, so nothing to configure. Bing owns the
 * endpoint and shares what it receives with the other engines behind the
 * protocol; Google is not one of them and reads the sitemap's <lastmod> instead.
 *
 * A failure here is printed and does not fail the run. Search engines finding a
 * page late is a delay; a deploy blocked on a third party's uptime is a policy
 * this project has already declined for outbound links.
 */
import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathsToPing, sitemapPaths } from '../src/lib/indexnow.ts';

const site = process.env.SITE_URL?.trim();
if (!site) {
  console.error('SITE_URL is not set: IndexNow needs the public origin the pages are served from.');
  process.exit(1);
}
const { host } = new URL(site);

const key = readdirSync('public')
  .filter((name) => name.endsWith('.txt'))
  .find((name) => readFileSync(join('public', name), 'utf8').trim() === name.slice(0, -4))
  ?.slice(0, -4);
if (!key) {
  console.error('No IndexNow key under public/: expected <key>.txt whose content is <key>.');
  process.exit(1);
}

const sitemap = sitemapPaths(readFileSync('dist/sitemap.xml', 'utf8'));

const [before, after] = process.argv.slice(2);
let paths: string[];
if (before === '--all' || /^0+$/.test(before ?? '')) {
  /* A first push, or a force push: no earlier commit to diff against, so everything. */
  paths = sitemap;
} else if (before && after) {
  const changed = execFileSync('git', ['diff', '--name-only', before, after], { encoding: 'utf8' })
    .split('\n')
    .filter(Boolean);
  paths = pathsToPing(changed, sitemap);
} else {
  console.error('Usage: node scripts/indexnow.ts <before> <after> | --all');
  process.exit(1);
}

if (paths.length === 0) {
  console.log('IndexNow: nothing published changed.');
  process.exit(0);
}

const urlList = paths.map((path) => `${site.replace(/\/$/, '')}${path}`);
const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
});

/* 200 and 202 both mean accepted; 202 is "key not verified yet", which resolves on Bing's side. */
if (response.ok) {
  console.log(`IndexNow: submitted ${urlList.length} URL${urlList.length === 1 ? '' : 's'} (HTTP ${response.status}).`);
  process.exit(0);
}
console.error(`IndexNow: HTTP ${response.status} ${response.statusText} for ${urlList.length} URLs.`);
console.error(await response.text());
process.exit(1);

/**
 * Look every record up in the Green Web Foundation directory.
 *
 * They verify renewable-energy claims against published evidence, yearly. We do
 * not, and will not be staffed to — so the honest move is to record their
 * directory id and link out, rather than restate their conclusion as ours.
 *
 * This reads the directory itself. It used to ask the greencheck API instead,
 * which answers a different question: "are the IPs serving this domain in a
 * green range". Those come apart, and not rarely. AWS was archived from the
 * dataset in March 2025 for want of an internal owner, so every site hosted on
 * it now answers "not green" whatever its own listing says — which is how our
 * own record sat unlisted while being directory entry 1315, with its evidence
 * published on that very page.
 *
 * https://www.thegreenwebfoundation.org/news/an-update-on-finding-representatives-for-large-hosting-providers/
 *
 * Matched on the website the directory itself links to, never on the name:
 * "Host Europe" and "hosteurope" are the same company, and two unrelated firms
 * can share a word.
 *
 *   node scripts/greenweb-lookup.mjs          report only
 *   node scripts/greenweb-lookup.mjs --write  write the confident matches
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';

const providersDir = 'src/content/providers';
const directoryUrl = 'https://app.greenweb.org/directory/';
const write = process.argv.includes('--write');

const domainOf = (url) => {
  try {
    return new URL(url).host.replace(/^www\./, '').toLowerCase();
  } catch {
    return undefined;
  }
};

/*
 * The directory is server-rendered, one <article> per provider, carrying its own
 * id and a link to the provider's site. No JSON API offers the same list, and
 * scraping the page a person would read is at least the same source they would
 * check us against.
 */
const page = await fetch(directoryUrl).then((response) => {
  if (!response.ok) throw new Error(`${directoryUrl} answered ${response.status}`);
  return response.text();
});

const listings = new Map();

for (const match of page.matchAll(
  /<article id="(\d+)"[^>]*class="provider-listing[^"]*"[\s\S]*?<h4[^>]*>([\s\S]*?)<\/h4>/g,
)) {
  const [, id, heading] = match;
  const site = domainOf(heading.match(/href="(https?:\/\/[^"]+)"/)?.[1] ?? '');
  const name = heading
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (site && !listings.has(site)) listings.set(site, { id: Number(id), name });
}

if (listings.size < 100) {
  throw new Error(`only ${listings.size} listings parsed — the directory's markup has probably changed`);
}

const found = [];
const stale = [];
let already = 0;

for (const file of readdirSync(providersDir).filter((name) => name.endsWith('.md'))) {
  const path = join(providersDir, file);
  const raw = readFileSync(path, 'utf8');
  const data = parse(raw.match(/^---\n([\s\S]*?)\n---/)[1]);

  const site = domainOf(data.urls?.home ?? '');
  if (!site) continue;

  const listed = listings.get(site);

  /*
   * A recorded id the directory no longer offers. Listings are archived — that
   * is what happened to AWS — and an id pointing at nothing is worse than no id,
   * because the record goes on claiming a verification that has lapsed.
   */
  if (data.greenWebId !== undefined) {
    already += 1;
    if (!listed) stale.push(`${data.id} — carries greenWebId ${data.greenWebId}, no listing for ${site}`);
    else if (listed.id !== data.greenWebId) {
      stale.push(`${data.id} — carries greenWebId ${data.greenWebId}, directory says ${listed.id}`);
    }
    continue;
  }

  if (listed) found.push({ path, raw, id: data.id, greenWebId: listed.id, name: listed.name });
}

/*
 * The id and the page it was read on, together. A field written without its
 * source is the one thing this register tells everyone else not to do, and
 * twenty-nine of them arriving in one commit is exactly when that slips.
 */
const checkedAt = process.env.CHECKED_AT ?? new Date().toISOString().slice(0, 10);

const cite = (raw, greenWebId) => {
  const source = `  - { field: greenWebId, url: '${directoryUrl}#${greenWebId}', checkedAt: ${checkedAt} }`;
  const withId = raw.replace(/^(---\n[\s\S]*?)(\n---\n)/, `$1\ngreenWebId: ${greenWebId}$2`);

  return /^sources:\s*$/m.test(withId)
    ? withId.replace(/^sources:[ \t]*$/m, `sources:\n${source}`)
    : withId.replace(/^(---\n[\s\S]*?)(\n---\n)/, `$1\nsources:\n${source}$2`);
};

for (const match of found) {
  console.log(`  ${match.id} → ${match.greenWebId} (${match.name})`);
  if (!write) continue;

  writeFileSync(match.path, cite(match.raw, match.greenWebId));
}

console.log(`\n${listings.size} providers in the directory, ${already} of ours already carry an id.`);
console.log(`${found.length} newly matched${write ? ', written' : ' (dry run)'}.`);
console.log(`${stale.length} need a person to look:`);
for (const line of stale) console.log(`  ${line}`);

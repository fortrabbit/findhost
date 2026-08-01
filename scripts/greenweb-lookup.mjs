/**
 * Look every record up in the Green Web Foundation directory.
 *
 * They verify renewable-energy claims against published evidence, yearly. We do
 * not, and will not be staffed to — so the honest move is to record their
 * directory id and link out, rather than restate their conclusion as ours.
 *
 * The greencheck API answers "who hosts this domain", which is not the same
 * question as "is this provider listed". A record is only accepted when the API
 * says the provider's own site is hosted by the provider itself; anything else
 * is printed for a person to check, because a mismatched id would attach
 * someone else's verification to this record.
 *
 *   node scripts/greenweb-lookup.mjs          report only
 *   node scripts/greenweb-lookup.mjs --write  write the confident matches
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';

const DIR = 'src/content/providers';
const write = process.argv.includes('--write');

const host = (url) => new URL(url).host.replace(/^www\./, '');

const files = readdirSync(DIR).filter((file) => file.endsWith('.md'));
const matched = [];
const mismatched = [];
const unlisted = [];

for (const file of files) {
  const path = join(DIR, file);
  const raw = readFileSync(path, 'utf8');
  const data = parse(raw.match(/^---\n([\s\S]*?)\n---/)[1]);
  if (data.greenWebId !== undefined) continue;

  const domain = host(data.urls.home);
  let result;

  try {
    const response = await fetch(`https://api.thegreenwebfoundation.org/greencheck/${domain}`);
    result = await response.json();
  } catch (error) {
    mismatched.push(`${data.id} — lookup failed: ${error.message}`);
    continue;
  }

  if (!result.listed_provider || !result.hosted_by_id) {
    unlisted.push(`${data.id} (${domain})`);
    continue;
  }

  const listedHost = result.hosted_by_website ? host(result.hosted_by_website) : '';

  if (listedHost !== domain) {
    mismatched.push(`${data.id} (${domain}) — directory says hosted by ${result.hosted_by} at ${listedHost}`);
    continue;
  }

  matched.push({ file, path, raw, id: data.id, greenWebId: result.hosted_by_id, name: result.hosted_by });
}

for (const match of matched) {
  console.log(`  ${match.id} → ${match.greenWebId} (${match.name})`);
  if (!write) continue;

  const patched = match.raw.replace(/^(---\n[\s\S]*?)(\n---\n)/, `$1\ngreenWebId: ${match.greenWebId}$2`);
  writeFileSync(match.path, patched);
}

console.log(`\n${matched.length} listed and self-hosted${write ? ', written' : ' (dry run)'}`);
console.log(`${unlisted.length} not in the directory: ${unlisted.join(', ') || 'none'}`);
console.log(`${mismatched.length} need a person to look:`);
for (const line of mismatched) console.log(`  ${line}`);

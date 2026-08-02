/**
 * Guards zod cannot express. Runs in CI on every pull request, after the build.
 *
 * Everything here fails loudly with a filename, because the alternative is a
 * malformed contribution merging and rendering wrong.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { parse as parseYaml } from 'yaml';

const providersDir = 'src/content/providers';
const taxonomyFile = 'src/data/taxonomy.yml';
const publicDir = 'public';

const errors: string[] = [];
const fail = (file: string, message: string) => errors.push(`${file}: ${message}`);

const frontmatter = (raw: string) => {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  return parseYaml(match[1]) as Record<string, unknown>;
};

const taxonomy = parseYaml(readFileSync(taxonomyFile, 'utf8')) as {
  id: string;
  field: string;
  multiple?: boolean;
  values: { id: string }[];
}[];

const files = readdirSync(providersDir).filter((name) => name.endsWith('.md'));
const seen = new Map<string, string>();

const records = files.map((file) => ({ file, data: frontmatter(readFileSync(join(providersDir, file), 'utf8')) }));

/*
 * Every key any record uses. A `sources` entry names either one of these — a
 * field, which gets a numbered marker beside its value — or a claim made in the
 * prose, which is cited inline. Knowing which is which is what lets the guard
 * below tell a stale citation from a prose one.
 */
const fieldNames = new Set(records.flatMap(({ data }) => (data ? Object.keys(data) : [])));

// Kept apart in the count only. Every guard below runs on a hidden record too —
// a rejected name is still published, and a field this dataset may never carry
// is no more acceptable on a page nobody links to.
const hiddenStatuses = new Set(['draft', 'out-of-scope']);
let hidden = 0;

// A ranking field is the one thing this dataset may never grow. CI4, mechanically.
const forbidden = ['rank', 'ranking', 'score', 'rating', 'boost', 'weight', 'stars', 'position', 'featured'];

for (const { file, data } of records) {
  if (!data) {
    fail(file, 'no frontmatter');
    continue;
  }

  const slug = file.replace(/\.md$/, '');

  if (hiddenStatuses.has(String(data.status))) hidden += 1;

  if (data.id !== slug) {
    fail(file, `id "${String(data.id)}" does not match the filename — the id is the URL`);
  }

  const duplicate = seen.get(String(data.id));
  if (duplicate) fail(file, `duplicate id, already used by ${duplicate}`);
  seen.set(String(data.id), file);

  for (const key of Object.keys(data)) {
    if (forbidden.includes(key.toLowerCase())) {
      fail(file, `"${key}" is a ranking field — this dataset carries no scores`);
    }
  }

  for (const asset of ['mark', 'logo'] as const) {
    const value = data[asset];
    if (typeof value === 'string' && !existsSync(join(publicDir, value))) {
      fail(file, `${asset} "${value}" is not in ${publicDir}/`);
    }
  }

  /*
   * A source for a field the record does not carry numbers a footnote nothing
   * points at, and claims the fact was checked when the page shows no fact. It
   * happens when a band is pulled and its citation is left behind.
   */
  for (const source of (data.sources ?? []) as { field?: string }[]) {
    const field = String(source.field);
    if (fieldNames.has(field) && data[field] === undefined) {
      fail(file, `cites a source for "${field}", which this record does not carry`);
    }
  }

  for (const facet of taxonomy) {
    const value = data[facet.field];
    if (value === undefined || value === null) continue;

    const allowed = new Set(facet.values.map((entry) => String(entry.id)));
    const used = Array.isArray(value) ? value.map(String) : [String(value)];

    for (const entry of used) {
      if (!allowed.has(entry)) {
        fail(file, `${facet.field} "${entry}" is not defined in ${taxonomyFile}`);
      }
    }
  }
}

if (errors.length) {
  console.error(`\n${errors.length} problem${errors.length === 1 ? '' : 's'}:\n`);
  for (const error of errors) console.error(`  ${error}`);
  console.error('');
  process.exit(1);
}

console.log(`${files.length - hidden} listed records, ${hidden} hidden, ${taxonomy.length} facets, no problems.`);

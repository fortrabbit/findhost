/**
 * Guards zod cannot express. Runs in CI on every pull request, after the build.
 *
 * Everything here fails loudly with a filename, because the alternative is a
 * malformed contribution merging and rendering wrong.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { parse as parseYaml } from 'yaml';
import { dictionaryFile, facetFields, fields } from '../src/lib/fields.ts';

const providersDir = 'src/content/providers';
const publicDir = 'public';

const errors: string[] = [];
const fail = (file: string, message: string) => errors.push(`${file}: ${message}`);

const frontmatter = (raw: string) => {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  return parseYaml(match[1]) as Record<string, unknown>;
};

/*
 * The dictionary first. Everything downstream — the schema's enums, the record
 * page's rows, the filter panel — is built from it, so a duplicate entry or a
 * facet without a vocabulary is a silent hole rather than a loud one.
 */
const seenField = new Set<string>();
const seenFacet = new Set<string>();

for (const field of fields) {
  if (seenField.has(field.id)) fail(dictionaryFile, `duplicate entry for "${field.id}"`);
  seenField.add(field.id);

  if (!field.label) fail(dictionaryFile, `"${field.id}" has no label`);

  if (field.facet) {
    if (seenFacet.has(field.facet)) fail(dictionaryFile, `two fields claim the facet "${field.facet}"`);
    seenFacet.add(field.facet);
    if (!field.values.length) fail(dictionaryFile, `"${field.id}" is a facet with no values to filter by`);
  }

  const values = new Set<string>();
  for (const value of field.values) {
    if (values.has(value.id)) fail(dictionaryFile, `"${field.id}" lists "${value.id}" twice`);
    values.add(value.id);
    if (!value.label) fail(dictionaryFile, `"${field.id}" value "${value.id}" has no label`);
  }
}

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

  for (const field of fields) {
    if (!field.values.length) continue;

    const value = data[field.id];
    if (value === undefined || value === null) continue;

    const allowed = new Set(field.values.map((entry) => entry.id));
    const used = Array.isArray(value) ? value.map(String) : [String(value)];

    for (const entry of used) {
      if (!allowed.has(entry)) {
        fail(file, `${field.id} "${entry}" is not defined in ${dictionaryFile}`);
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

console.log(
  `${files.length - hidden} listed records, ${hidden} hidden, ${fields.length} fields, ${facetFields.length} of them facets, no problems.`,
);

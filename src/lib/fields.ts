/**
 * The field dictionary, read once and handed to everything that needs to know
 * what a field is called, what values it may hold and where it is shown.
 *
 * Three surfaces used to answer that separately — the zod schema, the facet
 * definitions and the record page's own list of rows — and they only agreed by
 * hand. They read this instead. Nothing here may import `astro:content`:
 * content.config.ts builds its enums from this file, and scripts/validate.ts
 * runs it under plain Node.
 *
 * A module that Node runs directly — anything with a unit test, or a script —
 * must import this as `./fields.ts`. Vite resolves the extension for itself;
 * Node does not, and the failure is a module-not-found at test time.
 */
import { readFileSync } from 'node:fs';
import { parse as parseYaml } from 'yaml';

export interface FieldValue {
  id: string;
  label: string;
  /** For the filter panel, which is a narrow column. Absent means the label already fits. */
  short?: string;
  /** Excluded from the register and from every count. Only `status` uses it. */
  hidden?: boolean;
  /**
   * Out of the register by default and back in through a filter, keeping its
   * page and its place in the index. The value names the group it joins, so
   * "stopped trading" and "never sold hosting" are two answers rather than one
   * bucket. Only `status` uses it.
   */
  aside?: string;
  /**
   * Recorded and shown on the record, but never offered as a filter. The absence
   * answers — no shell, no free tier — are facts worth checking and worth
   * reading, and nobody has ever filtered a register down to the hosts that
   * cannot do something.
   */
  noFilter?: boolean;
  /**
   * Other values of the same field this one cannot be held without. WooCommerce
   * is WordPress: a record offering the first and not the second is filtered out
   * of `/software/wordpress/` while being exactly what that page is for.
   * validate.ts enforces it; nothing fills it in silently.
   */
  implies?: string[];
  /**
   * The field this value reads, and the values of it that count as a yes. Set on
   * every value of a derived field and on no other: nothing carries a derived
   * field in its frontmatter, so it is computed per record rather than recorded.
   */
  from?: string;
  when?: string[];
}

export interface Field {
  /** The frontmatter field name. */
  id: string;
  label: string;
  /** The record-page section. Absent means the field is validated but never shown. */
  group?: string;
  /** The URL segment where the field is filterable. Absent means shown but not filtered. */
  facet?: string;
  /**
   * The vocabulary is a scale, so the panel keeps the dictionary's order rather
   * than sorting by count. Price bands and notice periods run low to high; a
   * list of unrelated names does not run anywhere and sorts by popularity.
   */
  ordered?: boolean;
  /**
   * The URL segment comes from the label rather than the id. Only `regions`
   * needs it: the ids are ISO 3166 codes because that is what the data is read
   * as everywhere else, but /regions/netherlands/ is the address a reader can
   * guess and a search engine can read, and /regions/NL/ is not.
   */
  slugFromLabel?: boolean;
  /**
   * The values are record ids rather than a vocabulary of their own: the
   * register is the vocabulary. A relation is drawn as a link to that record and
   * read back from the other end — the brands a group owns, the platforms that
   * run on an infrastructure provider — so one line of frontmatter puts a fact
   * on two pages.
   */
  relation?: boolean;
  filterOrder?: number;
  multiple: boolean;
  /** How the value is drawn where it is not a label lookup. */
  render?: 'yes-no' | 'money' | 'multiple';
  values: FieldValue[];
}

interface Entry extends Omit<Field, 'multiple' | 'values'> {
  multiple?: boolean;
  values?: FieldValue[];
  valuesFrom?: string;
}

/** Every value of `render` the record page knows how to draw. validate.ts rejects the rest. */
export const renderModes = ['yes-no', 'money', 'multiple'] as const;

/**
 * Sections of the record page, in the order the dictionary lists them. Declared
 * rather than inferred so a typo in `group:` fails instead of quietly minting a
 * ninth section on every record.
 */
export const groupNames = [
  'Identity',
  'Classification',
  'Tech stack',
  'Pricing',
  'Regions and law',
  'Environment',
  'Support',
  'Deployment',
  'Other features',
  'Automation',
] as const;

/**
 * The root is one namespace, shared by every provider record, every facet index
 * and every written page — `/hetzner/` and `/software/` are siblings. These are
 * the names already spoken for by a page or a generated file, so neither a
 * facet nor a record may take one. validate.ts checks both directions; a
 * collision here is a URL that silently resolves to the wrong thing.
 */
export const reservedSegments = [
  'providers',
  'stubs',
  'unlisted',
  'defunct',
  'guide',
  'about',
  'search',
  'find',
  'notes',
  '404',
  'robots.txt',
  'sitemap.xml',
  'llms.txt',
  'providers.json',
  'favicon.svg',
  '_astro',
];

/*
 * Project-relative, as Astro's own file loader takes it, and not resolved from
 * import.meta.url: the build bundles this module into dist/.prerender/, where a
 * path relative to the source file points at nothing.
 */
export const dictionaryFile = 'src/data/fields.yml';

const entries = parseYaml(readFileSync(dictionaryFile, 'utf8')) as Entry[];

/** What `valuesFrom` each entry declared, kept for validate.ts to check the target resolves. */
export const borrowedFrom = new Map(
  entries.filter((entry) => entry.valuesFrom).map((entry) => [entry.id, entry.valuesFrom!]),
);

const ownValues = new Map(entries.map((entry) => [entry.id, entry.values ?? []]));

/*
 * Followed to the end rather than one hop: a field borrowing from a field that
 * itself borrows would otherwise resolve to nothing, and an empty vocabulary is
 * exactly what validate.ts skips over. `seen` is there so a circular pair
 * returns empty rather than hanging the build.
 */
function resolveValues(id: string, seen = new Set<string>()): FieldValue[] {
  const own = ownValues.get(id) ?? [];
  if (own.length || seen.has(id)) return own;

  const from = borrowedFrom.get(id);
  if (!from) return [];

  seen.add(id);
  return resolveValues(from, seen);
}

export const fields: Field[] = entries.map((entry) => ({
  ...entry,
  multiple: entry.multiple ?? false,
  values: resolveValues(entry.id),
}));

export const fieldOf = new Map(fields.map((field) => [field.id, field]));

/**
 * Fields no record carries: every value reads another field instead. They are
 * computed per record in lib/facets.ts, are never in the zod schema, and are the
 * one kind of field `validate` does not expect to find in a record.
 */
export const derivedFields = fields.filter(
  (field) => field.values.length > 0 && field.values.every((value) => value.from),
);

export const isDerived = (id: string) => derivedFields.some((field) => field.id === id);

/**
 * Statuses that keep a record out of the register and out of every count. The
 * fact lives on the value in the dictionary, so the four files that used to
 * re-list these ids cannot disagree about which they are.
 */
export const hiddenStatuses = new Set(
  (fieldOf.get('status')?.values ?? []).filter((value) => value.hidden).map((value) => value.id),
);

/**
 * Statuses that put a record beside the register rather than in it, each mapped
 * to the group it joins. Off the count, still a page, offered back one checkbox
 * at a time.
 */
export const asideOf = new Map(
  (fieldOf.get('status')?.values ?? [])
    .filter((value) => value.aside)
    .map((value) => [value.id, { key: value.aside!, label: value.short ?? value.label }]),
);

/** Filterable field by URL segment. Throws, because a segment that names nothing is a bug, not an absence. */
export function facetOf(segment: string): Field {
  const field = fields.find((candidate) => candidate.facet === segment);
  if (!field) throw new Error(`"${segment}" is not a facet in ${dictionaryFile}`);
  return field;
}

/**
 * A field's value ids, for building a zod enum. Throws rather than returning an
 * empty list: a schema silently accepting anything is worse than a failed build.
 */
export function vocabulary(id: string): [string, ...string[]] {
  const values = fieldOf.get(id)?.values ?? [];
  if (!values.length) throw new Error(`${id} has no vocabulary in ${dictionaryFile}`);
  return values.map((value) => value.id) as [string, ...string[]];
}

/**
 * A value's URL segment. The id unless the field says otherwise — and where it
 * does, the label with its accents folded, so Türkiye is /turkiye/ rather than a
 * percent-encoded string nobody can read or type.
 */
export function slugOf(field: Field, value: { id: string; label: string }): string {
  return field.slugFromLabel ? slugify(value.label) : value.id;
}

/** A readable URL segment from a reader's word for something. */
export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** The reader's word for a value. Falls back to the id, which is at least true. */
export function labelOf(field: string, value: unknown): string {
  const held = String(value);
  return fieldOf.get(field)?.values.find((option) => option.id === held)?.label ?? held;
}

/** Filterable fields, in the order the filter panel offers them. */
export const facetFields = fields
  .filter((field) => field.facet)
  .sort((a, b) => (a.filterOrder ?? Infinity) - (b.filterOrder ?? Infinity));

/** Displayed fields, grouped and ordered as the dictionary lists them. */
export function fieldGroups(): { label: string; fields: Field[] }[] {
  const groups: { label: string; fields: Field[] }[] = [];

  for (const field of fields) {
    if (!field.group) continue;
    const group = groups.find((candidate) => candidate.label === field.group);
    if (group) group.fields.push(field);
    else groups.push({ label: field.group, fields: [field] });
  }

  return groups;
}

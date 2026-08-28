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
  /**
   * The URL segment, where neither the id nor the slugified label will do. Price
   * bands need it: the label carries a thousands separator, and "$500 to $1,500"
   * slugifies to `500-to-1-500`, which reads as a range nobody wrote.
   */
  slug?: string;
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
  /**
   * Where one question has more than one answer worth reading. "Does this
   * provider make a green-energy claim?" is answered by its own claim and by a
   * third party's directory, and a reader filtering on it wants either — so the
   * value reads both rather than splitting into two boxes that mean the same
   * thing to everyone but us.
   */
  sources?: { from: string; when: string[] }[];
  /**
   * How the value page says what its records have in common — "42 providers
   * *deploy from a git commit*". Set where the field's own template does not
   * read as English for this value; otherwise the field's is used.
   */
  subject?: string;
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
   * The URL segment comes from the label rather than the id, for the fields
   * whose ids are a code or a scale: `regions` holds ISO 3166 because that is
   * what the data is read as everywhere else, and `priceFrom` holds a size run
   * because that is what a record reads as. Neither is guessable as an address
   * — /regions/netherlands/ and /entry-price/under-5-a-month/ are, and a search
   * engine can read them. A value whose label does not slugify cleanly overrides
   * the result with a `slug` of its own.
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
  /**
   * How every value page under this facet phrases what its records have in
   * common, with `{label}` and `{lower}` standing in for the value's own word.
   * A value may override it with a `subject` of its own.
   */
  subject?: string;
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
/**
 * Every field a derived value reads, with the answers that count as a yes. The
 * single-source form is the common one and stays as it reads; `sources` is for a
 * value more than one field can answer.
 */
export const sourcesOf = (value: FieldValue): { from: string; when: string[] }[] =>
  value.sources ?? (value.from ? [{ from: value.from, when: value.when ?? [] }] : []);

const derivedFields = fields.filter(
  (field) => field.values.length > 0 && field.values.every((value) => sourcesOf(value).length > 0),
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
 * A value's URL segment. The value's own `slug` first, then the label with its
 * accents folded where the field asks for it — so Türkiye is /turkiye/ rather
 * than a percent-encoded string nobody can read or type — and otherwise the id.
 *
 * A note is still keyed by the value's id, not by this. The two differ wherever
 * a field slugs from its label, and the id is the stable name: /regions/nl/ was
 * never the address, and notes/regions/NL.md would still be the file.
 */
export function slugOf(field: Field, value: { id: string; label: string }): string {
  const own = field.values.find((candidate) => candidate.id === value.id)?.slug;
  if (own) return own;

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

/**
 * What a value page says its records have in common, as the clause that follows
 * the count: "42 providers deploy from a git commit, listed alphabetically."
 *
 * The value's own wording wins, then the field's template, then a form built
 * from the labels. It reads out of the dictionary rather than out of the page
 * template because it is a fact about the field, and a page that phrases its own
 * facet is where twenty facets' worth of English ends up living in one route.
 */
export function subjectOf(field: Field, value: { id: string; label: string }, count = 0): string {
  const own = field.values.find((candidate) => candidate.id === value.id)?.subject;
  const template = own ?? field.subject;
  if (!template) return `record ${field.label.toLowerCase()}: ${value.label}`;

  return inflect(template.replaceAll('{label}', value.label).replaceAll('{lower}', value.label.toLowerCase()), count);
}

/**
 * `{plural|singular}` picks a form: "operate{|s} in {label}" reads as "operate"
 * for a page listing several and "operates" for a page listing one.
 *
 * The alternatives live in `fields.yml` beside the phrase they inflect, because
 * English about a field belongs in the dictionary. Conjugating in TypeScript
 * would mean a rule table that has to know "publish" takes -es and "are" becomes
 * "is", and would still guess wrong on the next verb somebody writes.
 *
 * A phrase with no marker is used as written — a modal ("can be left") and a
 * relative clause ("we like") are already right in both numbers.
 */
function inflect(phrase: string, count: number): string {
  return phrase.replaceAll(/\{([^{}|]*)\|([^{}|]*)\}/g, (_, plural: string, singular: string) =>
    count === 1 ? singular : plural,
  );
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

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
}

export interface Field {
  /** The frontmatter field name. */
  id: string;
  label: string;
  /** The record-page section. Absent means the field is validated but never shown. */
  group?: string;
  /** The URL segment where the field is filterable. Absent means shown but not filtered. */
  facet?: string;
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
  'Automation',
] as const;

/**
 * Top-level paths a facet may not claim. A facet segment becomes `/<facet>/`, so
 * one of these would shadow a real page and the collision would only show as a
 * missing route.
 */
export const reservedSegments = [
  'providers',
  'guide',
  'map',
  'about',
  'policies',
  'pricing',
  'search',
  'find',
  'notes',
  '404',
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
 * Statuses that keep a record out of the register and out of every count. The
 * fact lives on the value in the dictionary, so the four files that used to
 * re-list these ids cannot disagree about which they are.
 */
export const hiddenStatuses = new Set(
  (fieldOf.get('status')?.values ?? []).filter((value) => value.hidden).map((value) => value.id),
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

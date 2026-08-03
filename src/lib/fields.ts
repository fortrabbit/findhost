/**
 * The field dictionary, read once and handed to everything that needs to know
 * what a field is called, what values it may hold and where it is shown.
 *
 * Three surfaces used to answer that separately — the zod schema, the facet
 * definitions and the record page's own list of rows — and they only agreed by
 * hand. They read this instead. Nothing here may import `astro:content`:
 * content.config.ts builds its enums from this file, and scripts/validate.ts
 * runs it under plain Node.
 */
import { readFileSync } from 'node:fs';
import { parse as parseYaml } from 'yaml';

export interface FieldValue {
  id: string;
  label: string;
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

/*
 * Project-relative, as Astro's own file loader takes it, and not resolved from
 * import.meta.url: the build bundles this module into dist/.prerender/, where a
 * path relative to the source file points at nothing.
 */
export const dictionaryFile = 'src/data/fields.yml';

const entries = parseYaml(readFileSync(dictionaryFile, 'utf8')) as Entry[];
const vocabularies = new Map(entries.map((entry) => [entry.id, entry.values ?? []]));

export const fields: Field[] = entries.map((entry) => ({
  ...entry,
  multiple: entry.multiple ?? false,
  values: entry.values ?? (entry.valuesFrom ? (vocabularies.get(entry.valuesFrom) ?? []) : []),
}));

export const fieldOf = new Map(fields.map((field) => [field.id, field]));

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

/**
 * Turning records into the table every list and every filter reads.
 *
 * Kept apart from lib/facets.ts, which loads the collection: everything here is
 * a pure function of a record's frontmatter and the dictionary, so it can be
 * tested under plain Node. It may not import `astro:content` — that is the whole
 * reason the file exists, and the counting rules below are the ones most worth
 * having a test for.
 */
import { facetFields, isDerived, slugOf, sourcesOf, type Field } from './fields.ts';

export interface FacetValue {
  id: string;
  label: string;
  /** The URL segment, from lib/fields.ts — the id unless the field or the value says otherwise. */
  slug: string;
  /** The filter panel's version of the label, where the dictionary gives one. */
  short?: string;
  count: number;
}

export interface Facet {
  /** The URL segment: /software/kirby/. */
  id: string;
  label: string;
  /** The record field it reads. */
  field: string;
  /** The values are a scale, so the panel shows them in dictionary order rather than by count. */
  ordered?: boolean;
  multiple: boolean;
  values: FacetValue[];
  /** Records that do not say. Displayed, never silently dropped. */
  unknown: number;
  /*
   * Records where the field is explicitly null, meaning the question does not
   * apply — a panel that provisions onto your own cloud account operates no
   * regions of its own. Counting those as missing is the difference between
   * "64 records do not record this" and the truth, which is 49.
   */
  notApplicable: number;
}

export interface ProviderRow {
  id: string;
  name: string;
  description?: string;
  /** Ours, not the provider's: we like it. Drawn as a heart beside the name. */
  favorite?: boolean;
  /** When this record was last read against the provider's own pages. Absent means nobody has. */
  checkedAt?: Date;
  /** Present when a third party has verified the energy claim. Not a score. */
  greenWebId?: number | null;
  /** Headquarters, as the ISO code a list shows rather than the flag it does not. */
  country?: string;
  /** The record's own emoji and colours — the only colour any list carries. */
  figure?: { emoji: string; color: string; textColor: string; text: string };
  /** Facet fields only, keyed by field name. A missing key means unknown. */
  facets: Record<string, string | string[]>;
  /** Fields this record sets to null: the question does not apply, which is not the same as not knowing. */
  notApplicable: string[];
  /** Only on a hidden row: `draft` or `out-of-scope`. Absent on everything in the register. */
  status?: string;
}

/** Alphabetical, always — see the sort rule in CLAUDE.md. */
export const byName = (a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name, 'en');

/*
 * What a record answers for a field, as a list either way. A derived value reads
 * a source field that may hold one answer or several — `iacSupport: [terraform,
 * ansible]` is as much an answer to "any infrastructure as code?" as
 * `apiAvailable: public` is to "an API?" — and stringifying an array to compare
 * it matched nothing, silently.
 */
const held = (value: unknown): string[] =>
  value === undefined || value === null ? [] : Array.isArray(value) ? value.map(String) : [String(value)];

/** Whether one source of a derived value is answered by this record. */
const answers = (data: Record<string, unknown>, source: { from: string; when: string[] }) => {
  const given = held(data[source.from]);
  /* `*` means "recorded at all", for a source with no vocabulary to name. */
  return source.when.includes('*') ? given.length > 0 : given.some((answer) => source.when.includes(answer));
};

export function toRow(record: { id: string; data: Record<string, unknown> }): ProviderRow {
  const data = record.data;
  const facets: Record<string, string | string[]> = {};
  const notApplicable: string[] = [];

  for (const field of facetFields) {
    /*
     * A derived field is computed, not read. A record that answers at least one
     * of the source fields gets an answer here — the list of things it
     * documents, empty if none — because within a field it has been asked, a
     * silence is a no rather than a maybe.
     *
     * A record answering none of them is unknown, and has to be: a provider
     * nobody has recorded a price for has not thereby been found to bill in
     * advance. That is the difference between the facet saying "119 records do
     * not offer this" and the truth, which is that 37 of them were never asked.
     */
    if (isDerived(field.id)) {
      const asked = field.values.flatMap(sourcesOf).some(({ from }) => data[from] !== undefined && data[from] !== null);
      if (!asked) continue;

      facets[field.id] = field.values
        .filter((value) => sourcesOf(value).some((source) => answers(data, source)))
        .map((value) => value.id);
      continue;
    }

    const value = data[field.id];
    if (value === null) {
      notApplicable.push(field.id);
      continue;
    }
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      if (value.length) facets[field.id] = value.map(String);
    } else {
      facets[field.id] = String(value);
    }
  }

  return {
    id: record.id,
    name: String(data.name),
    description: data.description as string | undefined,
    favorite: data.favorite as boolean | undefined,
    checkedAt: data.checkedAt as Date | undefined,
    greenWebId: data.greenWebId as number | null | undefined,
    country: data.hqCountry as string | undefined,
    figure: data.figure as ProviderRow['figure'],
    facets,
    notApplicable,
  };
}

/** Whether a row holds one value of one field, list or scalar. */
export const rowHolds = (row: ProviderRow, field: string, value: string) => {
  const answer = row.facets[field];
  return Array.isArray(answer) ? answer.includes(value) : answer === value;
};

export function countValues(field: Field, providers: ProviderRow[]): Facet {
  const applicable = providers.filter((provider) => !provider.notApplicable.includes(field.id));
  const known = applicable.filter((provider) => provider.facets[field.id] !== undefined);

  /*
   * A `noFilter` value is still recorded and still shown on the record; it just
   * never becomes a row here, and so never becomes a page of its own either.
   */
  const values = field.values
    .filter((value) => !value.noFilter)
    .map((value) => ({
      id: value.id,
      label: value.label,
      slug: slugOf(field, value),
      ...(value.short ? { short: value.short } : {}),
      count: known.filter((provider) => rowHolds(provider, field.id, value.id)).length,
    }));

  return {
    id: field.facet!,
    label: field.label,
    field: field.id,
    ...(field.ordered ? { ordered: true } : {}),
    multiple: field.multiple,
    values,
    unknown: applicable.length - known.length,
    notApplicable: providers.length - applicable.length,
  };
}

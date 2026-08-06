import { facetFields, isDerived, slugOf, type Field } from './fields';
import { isListed, loadProviders } from './providers';
import { getCollection } from 'astro:content';

export interface FacetValue {
  id: string;
  label: string;
  /** The URL segment. The id for every facet but `regions`, where it is the country name. */
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
  publishedByUs?: boolean;
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
const byName = (a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name, 'en');

function toRow(record: { id: string; data: Record<string, unknown> }): ProviderRow {
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
      const asked = field.values.some((value) => data[value.from!] !== undefined && data[value.from!] !== null);
      if (!asked) continue;

      facets[field.id] = field.values
        .filter((value) => value.when!.includes(String(data[value.from!])))
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
    publishedByUs: data.publishedByUs as boolean | undefined,
    greenWebId: data.greenWebId as number | null | undefined,
    country: data.hqCountry as string | undefined,
    figure: data.figure as ProviderRow['figure'],
    facets,
    notApplicable,
  };
}

/*
 * The hidden records, on their own, for the one place that offers to show them:
 * a checkbox in the find view. They are deliberately not merged into `providers`
 * — a stub has almost no fields, so folding it in would move every facet's
 * unknown count and quietly change what the register claims.
 */
export async function loadDrafts(): Promise<ProviderRow[]> {
  const records = (await getCollection('providers')).filter((record) => !isListed(record));

  return records
    .map((record) => ({
      ...toRow(record as never),
      status: String(record.data.status),
    }))
    .sort(byName);
}

function countValues(field: Field, providers: ProviderRow[]): Facet {
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
      count: known.filter((provider) => {
        const held = provider.facets[field.id];
        return Array.isArray(held) ? held.includes(value.id) : held === value.id;
      }).length,
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

export async function loadFacets(): Promise<{ facets: Facet[]; providers: ProviderRow[] }> {
  const records = await loadProviders();
  const providers = records.map((record) => toRow(record as never)).sort(byName);

  // Dictionary order is the record page's; the panel offers the most-asked
  // first, which is what `filterOrder` in fields.yml sorts these by.
  return { facets: facetFields.map((field) => countValues(field, providers)), providers };
}

/**
 * Where a facet's own index lives. One rule for all of them, including
 * `regions`: its index is written by hand in pages/regions.astro so it can
 * carry the map, but it answers to the same address as every other.
 */
export const facetIndex = (facetId: string) => `/${facetId}/`;

/**
 * Every facet value that at least one record uses — the pages worth generating.
 *
 * `category` is one of them now. It used to have a bespoke route so the
 * explainer could head the list; the explainer lives in a note instead, and
 * what is left is a facet value page like every other.
 */
export async function facetRoutes() {
  const { facets, providers } = await loadFacets();

  return facets.flatMap((facet) =>
    facet.values
      .filter((value) => value.count > 0)
      .map((value) => ({
        params: { facet: facet.id, value: value.slug },
        props: {
          facet,
          value,
          matches: providers.filter((provider) => {
            const held = provider.facets[facet.field];
            return Array.isArray(held) ? held.includes(value.id) : held === value.id;
          }),
        },
      })),
  );
}

import { getCollection } from 'astro:content';
import { isListed, loadProviders } from './providers';

export interface FacetValue {
  id: string;
  label: string;
  count: number;
}

export interface Facet {
  id: string;
  label: string;
  field: string;
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
  /** Rendered as coins in every list, so no reader is shown a currency they do not use. */
  entryPriceBand?: string;
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

type Taxonomy = Awaited<ReturnType<typeof getCollection<'taxonomy'>>>;

function toRow(record: { id: string; data: Record<string, unknown> }, taxonomy: Taxonomy): ProviderRow {
  const data = record.data;
  const facets: Record<string, string | string[]> = {};
  const notApplicable: string[] = [];

  for (const facet of taxonomy) {
    const value = data[facet.data.field];
    if (value === null) {
      notApplicable.push(facet.data.field);
      continue;
    }
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      if (value.length) facets[facet.data.field] = value.map(String);
    } else {
      facets[facet.data.field] = String(value);
    }
  }

  return {
    id: record.id,
    name: String(data.name),
    description: data.description as string | undefined,
    publishedByUs: data.publishedByUs as boolean | undefined,
    greenWebId: data.greenWebId as number | null | undefined,
    entryPriceBand: data.entryPriceBand as string | undefined,
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
  const taxonomy = await getCollection('taxonomy');
  const records = (await getCollection('providers')).filter((record) => !isListed(record));

  return records
    .map((record) => ({
      ...toRow(record as never, taxonomy),
      status: String(record.data.status),
    }))
    .sort(byName);
}

export async function loadFacets(): Promise<{ facets: Facet[]; providers: ProviderRow[] }> {
  const taxonomy = await getCollection('taxonomy');
  const records = await loadProviders();

  const providers: ProviderRow[] = records
    .map((record) => {
      const data = record.data as Record<string, unknown>;
      const facets: Record<string, string | string[]> = {};
      const notApplicable: string[] = [];

      for (const facet of taxonomy) {
        const value = data[facet.data.field];
        if (value === null) {
          notApplicable.push(facet.data.field);
          continue;
        }
        if (value === undefined) continue;
        if (Array.isArray(value)) {
          if (value.length) facets[facet.data.field] = value.map(String);
        } else {
          facets[facet.data.field] = String(value);
        }
      }

      return {
        id: record.id,
        name: record.data.name,
        description: record.data.description,
        publishedByUs: record.data.publishedByUs,
        greenWebId: record.data.greenWebId,
        entryPriceBand: record.data.entryPriceBand,
        figure: record.data.figure,
        facets,
        notApplicable,
      };
    })
    .sort(byName);

  const facets: Facet[] = taxonomy.map((facet) => {
    const applicable = providers.filter((provider) => !provider.notApplicable.includes(facet.data.field));
    const known = applicable.filter((provider) => provider.facets[facet.data.field] !== undefined);

    const values = facet.data.values.map((value) => ({
      id: value.id,
      label: value.label,
      count: known.filter((provider) => {
        const held = provider.facets[facet.data.field];
        return Array.isArray(held) ? held.includes(value.id) : held === value.id;
      }).length,
    }));

    return {
      id: facet.data.id,
      label: facet.data.label,
      field: facet.data.field,
      multiple: facet.data.multiple,
      values,
      unknown: applicable.length - known.length,
      notApplicable: providers.length - applicable.length,
    };
  });

  // Taxonomy order, not alphabetical: the file is arranged most-asked first and
  // the filter panel should read the same way.
  return { facets, providers };
}

/**
 * Every facet value that at least one record uses — the pages worth generating.
 *
 * `category` is one of them now. It used to have a bespoke route so the
 * explainer could head the list; the explainer lives in the guide instead, and
 * what is left is a facet value page like every other.
 */
export async function facetRoutes() {
  const { facets, providers } = await loadFacets();

  return facets.flatMap((facet) =>
    facet.values
      .filter((value) => value.count > 0)
      .map((value) => ({
        params: { facet: facet.id, value: value.id },
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

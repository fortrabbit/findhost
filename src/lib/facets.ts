import { getCollection } from 'astro:content';

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
  /** Records where this field is absent. Displayed, never silently dropped. */
  unknown: number;
}

export interface ProviderRow {
  id: string;
  name: string;
  description?: string;
  publishedByUs?: boolean;
  /** Facet fields only, keyed by field name. A missing key means unknown. */
  facets: Record<string, string | string[]>;
}

/** Alphabetical, always — see the sort rule in CLAUDE.md. */
const byName = (a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name, 'en');

export async function loadFacets(): Promise<{ facets: Facet[]; providers: ProviderRow[] }> {
  const taxonomy = await getCollection('taxonomy');
  const records = await getCollection('providers');

  const providers: ProviderRow[] = records
    .map((record) => {
      const data = record.data as Record<string, unknown>;
      const facets: Record<string, string | string[]> = {};

      for (const facet of taxonomy) {
        const value = data[facet.data.field];
        if (value === undefined || value === null) continue;
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
        facets,
      };
    })
    .sort(byName);

  const facets: Facet[] = taxonomy
    .map((facet) => {
      const known = providers.filter((provider) => provider.facets[facet.data.field] !== undefined);

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
        unknown: providers.length - known.length,
      };
    })
    .sort((a, b) => a.id.localeCompare(b.id, 'en'));

  return { facets, providers };
}

/** Every facet value that at least one record uses — the pages worth generating. */
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

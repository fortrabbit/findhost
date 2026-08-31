import { asideOf, facetFields, fields } from './fields';
import { asideGroup, isListed, loadAsideProviders, loadProviders } from './providers';
import { byName, countValues, rowHolds, toRow, type Facet, type FacetValue, type ProviderRow } from './rows';
import { pairIndexPath, pairPages, pairPath, type PairPage } from './pairs';
import { getCollection } from 'astro:content';

/*
 * The shapes live in lib/rows.ts, with the functions that build them, and are
 * re-exported here because this is where every page reaches for them.
 */
export type { Facet, FacetValue, ProviderRow } from './rows';

/*
 * Counted once per build rather than once per page. Every record page, every
 * facet page and the sitemap ask for the same table, which is a full pass over
 * the collection each time — a few hundred pages doing identical work.
 *
 * Only in a build. `astro dev` recomputes on every request, because a cache that
 * outlives an edit to a record is a dev server serving yesterday's data, which
 * is a worse bug than a slow build.
 */
const once = <T>(work: () => Promise<T>): (() => Promise<T>) => {
  let held: Promise<T> | undefined;
  return () => {
    if (!import.meta.env.PROD) return work();
    held ??= work();
    return held;
  };
};

/*
 * The hidden records, on their own, for the one place that offers to show them:
 * a checkbox in the find view. They are deliberately not merged into `providers`
 * — a stub has almost no fields, so folding it in would move every facet's
 * unknown count and quietly change what the register claims.
 */
export const loadDrafts = once(async (): Promise<ProviderRow[]> => {
  const records = (await getCollection('providers')).filter((record) => !isListed(record));

  return records
    .map((record) => ({
      ...toRow(record as never),
      status: String(record.data.status),
    }))
    .sort(byName);
});

export interface Aside {
  /** The group's id, which is also its page: /defunct/, /unlisted/, /stubs/. */
  key: string;
  /** The word the register uses for it, and the heading of its page. */
  label: string;
  rows: ProviderRow[];
}

/**
 * The groups beside the register, from the dictionary rather than from the
 * records — a group with nothing in it yet still has a page and still says so,
 * which is how "we would list a defunct provider" is visible before there is one.
 */
export const loadAsides = once(async (): Promise<Aside[]> => {
  const groups = new Map<string, Aside>();
  /* First status to claim a key names the group: more than one can share it,
     and the later label would otherwise rename what the earlier one opened. */
  for (const { key, label } of asideOf.values()) if (!groups.has(key)) groups.set(key, { key, label, rows: [] });

  for (const record of await loadAsideProviders()) {
    groups.get(asideGroup(record)!)!.rows.push({ ...toRow(record as never), status: String(record.data.status) });
  }

  return [...groups.values()].map((group) => ({ ...group, rows: group.rows.sort(byName) }));
});

/**
 * Every group that sits beside the register, addressed the same way: the ones
 * the dictionary defines, and the records we have not finished. Whoever asks
 * for one asks for all three the same way, so a page, a link and a count never
 * disagree about what exists.
 */
export const asideGroups = once(async (): Promise<Aside[]> => {
  return [...(await loadAsides()), { key: 'stubs', label: 'Stubs', rows: await loadDrafts() }];
});

export const asideGroupOf = async (key: string): Promise<Aside> => {
  const group = (await asideGroups()).find((candidate) => candidate.key === key);
  if (!group) throw new Error(`No group beside the register called "${key}"`);
  return group;
};

export const loadFacets = once(async (): Promise<{ facets: Facet[]; providers: ProviderRow[] }> => {
  const records = await loadProviders();
  const providers = records.map((record) => toRow(record as never)).sort(byName);

  // Dictionary order is the record page's; the panel offers the most-asked
  // first, which is what `filterOrder` in fields.yml sorts these by.
  return { facets: facetFields.map((field) => countValues(field, providers)), providers };
});

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
          matches: providers.filter((provider) => rowHolds(provider, facet.field, value.id)),
        },
      })),
  );
}

/**
 * Every pair page that is built: two facet values, one address. The gate lives
 * in lib/pairs.ts, which is pure; this is the half that needs the collection.
 */
export async function pairRoutes() {
  const { facets, providers } = await loadFacets();

  return pairPages(facets, fields, providers).map((page) => ({
    params: { facet: page.a.id, value: page.av.slug, with: page.b.id, withValue: page.bv.slug },
    props: page,
  }));
}

/**
 * The rung between a value page and a pair page: /runtimes/php/regions/ lists
 * every country PHP hosting has a page for. Without it a reader who deletes the
 * last segment of a URL that works lands on a 404 between two pages that exist.
 */
export async function pairIndexRoutes() {
  const { facets, providers } = await loadFacets();
  const grouped = new Map<string, { facet: Facet; value: FacetValue; with: Facet; pages: PairPage[] }>();

  for (const page of pairPages(facets, fields, providers)) {
    const key = `${page.a.id}/${page.av.slug}/${page.b.id}`;
    const held = grouped.get(key) ?? { facet: page.a, value: page.av, with: page.b, pages: [] };
    held.pages.push(page);
    grouped.set(key, held);
  }

  return [...grouped.values()].map((group) => ({
    params: { facet: group.facet.id, value: group.value.slug, with: group.with.id },
    props: group,
  }));
}

/**
 * The combinations a value page can offer, grouped by the facet it combines
 * with. Read from *both* ends: a pairing has one direction in the path, and
 * /regions/germany/ is half of /runtimes/php/regions/germany/ whichever half
 * declared it. Linking it from one parent only left the other with no way
 * through, which is a hole in the site rather than a property of the pairing.
 *
 * `index` is the rung above the pair pages, and only the declaring side has
 * one: /runtimes/php/regions/ exists, /regions/germany/runtimes/ does not,
 * because a second index over the same pages would be the duplicate the one
 * direction exists to prevent.
 */
export async function pairsFor(facetId: string, valueId: string) {
  const { facets, providers } = await loadFacets();

  const groups = new Map<
    string,
    { label: string; index?: string; rows: { href: string; label: string; count: number }[] }
  >();

  for (const page of pairPages(facets, fields, providers)) {
    const heads = page.a.id === facetId && page.av.id === valueId;
    const tails = page.b.id === facetId && page.bv.id === valueId;
    if (!heads && !tails) continue;

    const other = heads ? page.b : page.a;
    const held = groups.get(other.id) ?? {
      label: other.label,
      ...(heads ? { index: pairIndexPath(page.a, page.av, page.b) } : {}),
      rows: [],
    };

    held.rows.push({
      href: pairPath(page),
      label: heads ? page.bv.label : page.av.label,
      count: page.matches.length,
    });
    groups.set(other.id, held);
  }

  /* Longest lists first: on a row of links the count is the only reason to pick one. */
  for (const group of groups.values()) group.rows.sort((one, other) => other.count - one.count);

  return [...groups.values()];
}

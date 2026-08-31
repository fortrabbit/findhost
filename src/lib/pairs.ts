/**
 * Two facets as one page: /runtimes/php/regions/germany/.
 *
 * One facet value is a page already. Combining two happened in a query string
 * and nowhere else, so a narrowed register had no address — nothing to crawl,
 * nothing to export, nothing to cite. These are the addresses.
 *
 * Pure, so `node --test` can reach the gate below without loading the content
 * collection. The gate is the whole point of the file: mass-generated facet
 * combinations are the doorway-page pattern, and what separates this from that
 * is refusing to build most of them.
 */
import { fieldOf, titleWithOf, type Field } from './fields.ts';
import { rowHolds, type Facet, type FacetValue, type ProviderRow } from './rows.ts';

/**
 * A page has to list enough to be a list. Below this it says almost nothing and
 * reads as thin, which is the accusation this dataset exists to be clear of.
 */
export const pairFloor = 8;

/**
 * And it has to *narrow*. The intersection over the smaller of the two sides:
 * 1.00 means the second value adds nothing at all.
 *
 * This is the gate that volume gets wrong. `/software/wordpress/use-cases/cms/`
 * lists 86 records and scores 0.93 — WordPress is a CMS, so the page is the
 * WordPress page with a second heading. `/categories/vps/regions/germany/` lists
 * 15 and scores 0.31, and is a question somebody types. The densest pairings in
 * the data are mostly the emptiest pages in it.
 */
export const pairCeiling = 0.7;

export interface Pairing {
  a: Facet;
  b: Facet;
  /** Written down and not built. The pairing keeps its place in the dictionary. */
  draft: boolean;
}

export interface PairPage {
  a: Facet;
  av: FacetValue;
  b: Facet;
  bv: FacetValue;
  /** Records holding both values. */
  matches: ProviderRow[];
  /** What each side holds on its own, which is what the prose compares against. */
  aTotal: number;
  bTotal: number;
}

/** The path, which fixes the order: the facet that declared the pairing leads. */
export const pairPath = (page: Pick<PairPage, 'a' | 'av' | 'b' | 'bv'>) =>
  `/${page.a.id}/${page.av.slug}/${page.b.id}/${page.bv.slug}/`;

/** Where the pairings from one value are listed — the rung between the two pages. */
export const pairIndexPath = (a: Facet, av: FacetValue, b: Facet) => `/${a.id}/${av.slug}/${b.id}/`;

/** One card per pairing rather than per page: 9 renders instead of 162. */
export const pairingKey = (a: Facet, b: Facet) => `${a.id}-${b.id}`;

/**
 * Every pairing the dictionary declares, `draft` included — validate.ts checks
 * the ones that are not built too, so a pairing cannot rot while switched off.
 */
export function pairings(facets: Facet[], fields: Field[]): Pairing[] {
  const facetOf = new Map(facets.map((facet) => [facet.id, facet]));

  return fields.flatMap((field) => {
    const a = field.facet ? facetOf.get(field.facet) : undefined;
    if (!a) return [];

    return (field.pairs ?? []).flatMap((pair) => {
      const b = facetOf.get(pair.with);
      return b ? [{ a, b, draft: pair.draft ?? false }] : [];
    });
  });
}

/** How well a value pair narrows: 0 is disjoint, 1 is one value inside the other. */
export const narrowing = (both: number, aOnly: number, bOnly: number) => {
  const smaller = Math.min(aOnly, bOnly);
  return smaller === 0 ? 1 : both / smaller;
};

/**
 * The pages a pairing earns. Both gates apply, and a facet with no `titleWith`
 * for the value produces nothing — a page that cannot name itself in English is
 * not a page, and validate.ts fails the build rather than letting it disappear
 * quietly.
 */
export function pagesOf(pairing: Pairing, providers: ProviderRow[]): PairPage[] {
  const { a, b } = pairing;
  const held = (facet: Facet, value: FacetValue) =>
    providers.filter((provider) => rowHolds(provider, facet.field, value.id));

  const pages: PairPage[] = [];

  for (const av of a.values.filter((value) => value.count > 0)) {
    const aHeld = held(a, av);

    for (const bv of b.values.filter((value) => value.count > 0)) {
      const bHeld = held(b, bv);
      const matches = aHeld.filter((provider) => rowHolds(provider, b.field, bv.id));

      if (matches.length < pairFloor) continue;
      if (narrowing(matches.length, aHeld.length, bHeld.length) > pairCeiling) continue;
      if (!titleWithOf(fieldOf.get(b.field)!, bv)) continue;

      pages.push({ a, av, b, bv, matches, aTotal: aHeld.length, bTotal: bHeld.length });
    }
  }

  return pages;
}

/** Every pair page that is actually built, draft pairings left out. */
export function pairPages(facets: Facet[], fields: Field[], providers: ProviderRow[]): PairPage[] {
  return pairings(facets, fields)
    .filter((pairing) => !pairing.draft)
    .flatMap((pairing) => pagesOf(pairing, providers));
}

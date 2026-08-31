import type { APIRoute } from 'astro';
import { loadFacets } from '../../../lib/facets';
import { fields } from '../../../lib/fields';
import { pairings, pairPages, pairingKey } from '../../../lib/pairs';
import { shareCard } from '../../../lib/og';

/*
 * One card per pairing rather than per page. Rasterising is most of the build —
 * 794 cards at about 48ms each — so a card for every pair page would cost more
 * than every pair page put together. A shared card can only say what is true of
 * all of them, which is the two facets and how many pages they made.
 */
export async function getStaticPaths() {
  const { facets, providers } = await loadFacets();
  const built = pairPages(facets, fields, providers);

  return pairings(facets, fields)
    .filter((pairing) => !pairing.draft)
    .map((pairing) => ({
      params: { pairing: pairingKey(pairing.a, pairing.b) },
      props: {
        pairing,
        pages: built.filter((page) => page.a.id === pairing.a.id && page.b.id === pairing.b.id).length,
      },
    }));
}

export const GET: APIRoute = async ({ props }) => {
  const { pairing, pages } = props;

  const png = await shareCard({
    name: `${pairing.a.label} and ${pairing.b.label}`,
    description: `The register narrowed to one ${pairing.a.label.toLowerCase()} value and one ${pairing.b.label.toLowerCase()} value, with the narrowing in the address.`,
    facts: [`${pages} ${pages === 1 ? 'combination' : 'combinations'}`, 'At least 8 providers each'],
  });

  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};

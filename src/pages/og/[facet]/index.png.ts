import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { loadFacets } from '../../../lib/facets';
import { shareCard } from '../../../lib/og';

/*
 * Every facet, `regions` included. Its index is written by hand in
 * pages/regions.astro so it can carry the map, but it is a facet index like any
 * other and a card is the one thing that does not care how the page was drawn.
 */
export async function getStaticPaths() {
  const { facets } = await loadFacets();
  return facets.map((facet) => ({ params: { facet: facet.id }, props: { facet } }));
}

export const GET: APIRoute = async ({ props }) => {
  const { facet } = props;
  const inUse = facet.values.filter((value: { count: number }) => value.count > 0);

  const note = (await getCollection('notes')).find((entry) => entry.id === facet.id);

  const png = await shareCard({
    name: note?.data.title ?? facet.label,
    description: note?.data.description ?? note?.data.lead ?? `Every value recorded for ${facet.label.toLowerCase()}.`,
    /*
     * What the field covers, and what it does not. A facet with a hundred blanks
     * is a gap in our work rather than a fact about the market, and a card that
     * quietly left the blanks out would be claiming otherwise.
     */
    facts: [
      `${inUse.length} ${inUse.length === 1 ? 'value' : 'values'}`,
      facet.unknown > 0 ? `${facet.unknown} unrecorded` : 'recorded throughout',
    ],
    figure: note?.data.figure,
  });

  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};

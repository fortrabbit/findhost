import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { facetRoutes, loadFacets } from '../../../lib/facets';
import { fieldOf, subjectOf } from '../../../lib/fields';
import { summarise } from '../../../lib/summarise';
import { valueTitle } from '../../../lib/seo';
import { shareCard } from '../../../lib/og';

export async function getStaticPaths() {
  return facetRoutes();
}

export const GET: APIRoute = async ({ props }) => {
  const { facet, value, matches } = props;
  const { facets } = await loadFacets();

  /*
   * Derived the way pages/[facet]/[value].astro derives them, so a card and the
   * page it belongs to cannot end up describing the same set differently. A note
   * overrides both or neither.
   */
  const note = (await getCollection('notes')).find((entry) => entry.id === `${facet.id}/${value.id}`);
  const summary = summarise(matches, facets, facet.id, subjectOf(fieldOf.get(facet.field)!, value, matches.length));

  const png = await shareCard({
    name: note?.data.title ?? valueTitle(facet.id, value),
    description: note?.data.description ?? note?.data.lead ?? summary,
    facts: [facet.label, `${matches.length} ${matches.length === 1 ? 'provider' : 'providers'}`],
    figure: note?.data.figure,
  });

  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};

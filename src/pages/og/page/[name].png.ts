import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { loadProviders } from '../../../lib/providers';
import { shareCard } from '../../../lib/og';

/*
 * A card for each page that carries its own note under `notes/page/`. One route
 * rather than a file per page, for the same reason the facets share one: the
 * card and the page read the same note, so neither can describe the thing the
 * other does not.
 */
export async function getStaticPaths() {
  const notes = await getCollection('notes');
  return notes
    .filter((note) => note.id.startsWith('page/'))
    .map((note) => ({ params: { name: note.id.slice('page/'.length) }, props: { note } }));
}

export const GET: APIRoute = async ({ props }) => {
  const { note } = props;

  const providers = await loadProviders();
  const measured = providers.filter((provider) => provider.data.referringSubnets).length;

  const png = await shareCard({
    name: note.data.title ?? note.id,
    description: note.data.description ?? note.data.lead ?? '',
    /*
     * What the page covers and what it does not, the same admission the facet
     * cards make: a figure for four fifths of the register is not a figure for
     * the register, and a card that showed only the count would imply it was.
     */
    facts: [`${measured} measured`, `${providers.length - measured} without a figure`],
    figure: note.data.figure,
  });

  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};

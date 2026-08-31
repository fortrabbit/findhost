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

/*
 * The counts under the title, where the page has any. They belong to the page
 * rather than to the route: /reach/ is about a measurement that covers part of
 * the register, and a card that showed only the count would imply it covered
 * all of it. A page with nothing to count gets a card with nothing under it,
 * which is the honest shape rather than a missing one.
 */
const factsFor: Record<string, () => Promise<string[]>> = {
  reach: async () => {
    const providers = await loadProviders();
    const measured = providers.filter((provider) => provider.data.referringSubnets).length;

    return [`${measured} measured`, `${providers.length - measured} without a figure`];
  },
};

export const GET: APIRoute = async ({ params, props }) => {
  const { note } = props;

  const png = await shareCard({
    name: note.data.title ?? note.id,
    description: note.data.description ?? note.data.lead ?? '',
    facts: await factsFor[params.name!]?.(),
    figure: note.data.figure,
  });

  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};

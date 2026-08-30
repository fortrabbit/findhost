import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { facetRoutes, loadFacets } from '../../lib/facets';
import { fieldOf, subjectOf } from '../../lib/fields';
import { summarise } from '../../lib/summarise';
import { attribution, valueTitle } from '../../lib/seo';

/**
 * A facet value as markdown: the list, and what the list means.
 *
 * This is the shape of page anything asking a question arrives at — which hosts
 * run PHP, who operates in Germany — so it is the one worth handing over as text
 * rather than as a filtered HTML table. A record's export answers about one
 * provider; this answers about a set, which is the question people actually ask.
 */
export async function getStaticPaths() {
  return facetRoutes();
}

export const GET: APIRoute = async ({ props, site }) => {
  const { facet, value, matches } = props;
  const origin = site?.origin ?? '';
  const { facets } = await loadFacets();

  const note = (await getCollection('notes')).find((entry) => entry.id === `${facet.id}/${value.id}`);
  const summary = summarise(matches, facets, facet.id, subjectOf(fieldOf.get(facet.field)!, value, matches.length));

  const lines = [
    `# ${note?.data.title ?? valueTitle(facet.id, value.label)}`,
    '',
    `Source: ${origin}/${facet.id}/${value.slug}/`,
    `Facet: ${facet.label} — every value: ${origin}/${facet.id}/`,
    '',
    summary,
    '',
    /* The written explainer where one exists, which is where the meaning is. */
    ...(note?.body?.trim() ? [note.body.trim(), ''] : []),
    /*
     * Unknowns stated rather than implied. A list of thirty is a different claim
     * depending on whether ten records were not asked, and a reader given only
     * the thirty cannot tell.
     */
    ...(facet.unknown > 0
      ? [
          `${facet.unknown} ${facet.unknown === 1 ? 'record does' : 'records do'} not record this field and cannot appear here either way.`,
          '',
        ]
      : []),
    ...(facet.notApplicable > 0
      ? [
          `For ${facet.notApplicable} ${facet.notApplicable === 1 ? 'record' : 'records'} the question does not apply.`,
          '',
        ]
      : []),
    `## Providers (${matches.length})`,
    '',
    ...matches.map(
      (provider: { id: string; name: string }) =>
        `- [${provider.name}](${origin}/${provider.id}/) — ${origin}/${provider.id}.md`,
    ),
    '',
    '---',
    '',
    ...attribution,
    '',
  ];

  return new Response(lines.join('\n'), { headers: { 'content-type': 'text/markdown; charset=utf-8' } });
};

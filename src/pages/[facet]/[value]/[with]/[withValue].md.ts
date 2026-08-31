import type { APIRoute } from 'astro';
import { loadFacets, pairRoutes } from '../../../../lib/facets';
import { fieldOf, subjectOf, titleWithOf } from '../../../../lib/fields';
import { pairPath } from '../../../../lib/pairs';
import { attribution, valueTitle } from '../../../../lib/seo';
import { summarisePair } from '../../../../lib/summarise';

/**
 * A pair page as markdown. "Which hosts run PHP in Germany" is the shape of
 * question this whole route exists to answer, so it is the one most worth
 * handing over as text rather than as HTML somebody has to parse a table out of.
 */
export async function getStaticPaths() {
  return pairRoutes();
}

export const GET: APIRoute = async ({ props, site }) => {
  const { a, av, b, bv, matches, aTotal, bTotal } = props;
  const origin = site?.origin ?? '';
  const { facets, providers } = await loadFacets();

  const aField = fieldOf.get(a.field)!;
  const bField = fieldOf.get(b.field)!;

  const widerRows = providers.filter((provider) => {
    const held = provider.facets[aTotal >= bTotal ? a.field : b.field];
    const id = aTotal >= bTotal ? av.id : bv.id;
    return Array.isArray(held) ? held.includes(id) : held === id;
  });

  /* Derived the way the page derives them, so the two cannot describe one set differently. */
  const summary = summarisePair(
    {
      aId: a.id,
      bId: b.id,
      aSubject: subjectOf(aField, av, matches.length),
      bSubject: subjectOf(bField, bv, matches.length),
      matches,
      aTotal,
      bTotal,
      widerRows,
    },
    facets,
  );

  const lines = [
    `# ${valueTitle(a.id, av.label)} ${titleWithOf(bField, bv)}`,
    '',
    `Source: ${origin}${pairPath({ a, av, b, bv })}`,
    `Both halves on their own: ${origin}/${a.id}/${av.slug}/ and ${origin}/${b.id}/${bv.slug}/`,
    '',
    summary,
    '',
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

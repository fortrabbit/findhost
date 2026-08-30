import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { loadFacets } from '../../lib/facets';
import { attribution } from '../../lib/seo';

/** A facet as markdown: what the field asks, and every value it has an answer for. */
export async function getStaticPaths() {
  const { facets } = await loadFacets();
  return facets.map((facet) => ({ params: { facet: facet.id }, props: { facet } }));
}

export const GET: APIRoute = async ({ props, site }) => {
  const { facet } = props;
  const origin = site?.origin ?? '';

  const inUse = facet.values.filter((value: { count: number }) => value.count > 0);
  const unused = facet.values.filter((value: { count: number }) => value.count === 0);

  const note = (await getCollection('notes')).find((entry) => entry.id === facet.id);

  const lines = [
    `# ${note?.data.title ?? facet.label}`,
    '',
    `Source: ${origin}/${facet.id}/`,
    '',
    ...(note?.body?.trim() ? [note.body.trim(), ''] : []),
    `${inUse.length} ${inUse.length === 1 ? 'value' : 'values'} in use.`,
    ...(facet.unknown > 0
      ? [`${facet.unknown} ${facet.unknown === 1 ? 'record does' : 'records do'} not record this field.`]
      : []),
    ...(facet.notApplicable > 0
      ? [`For ${facet.notApplicable} ${facet.notApplicable === 1 ? 'record' : 'records'} the question does not apply.`]
      : []),
    '',
    '## Values',
    '',
    ...inUse.map(
      (value: { slug: string; label: string; count: number }) =>
        `- [${value.label}](${origin}/${facet.id}/${value.slug}/) — ${value.count} ${value.count === 1 ? 'provider' : 'providers'} — ${origin}/${facet.id}/${value.slug}.md`,
    ),
    '',
    /*
     * A defined value nothing holds is a gap in our coverage rather than a
     * statement about the market, and saying so is the difference between an
     * empty answer and a wrong one.
     */
    ...(unused.length
      ? [
          `Defined and not yet held by any record: ${unused.map((value: { label: string }) => value.label).join(', ')}.`,
          '',
        ]
      : []),
    '---',
    '',
    ...attribution,
    '',
  ];

  return new Response(lines.join('\n'), { headers: { 'content-type': 'text/markdown; charset=utf-8' } });
};

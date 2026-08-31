import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { loadFacets } from '../lib/facets';
import { loadProviders } from '../lib/providers';

/**
 * The dataset is the asset and being cited is the distribution thesis, so the
 * machine-readable index is a launch feature rather than a nicety. Everything
 * here is a link to something that exists; nothing is summarised twice.
 */
export const GET: APIRoute = async ({ site }) => {
  const origin = site?.origin ?? '';
  const providers = (await loadProviders()).sort((a, b) => a.data.name.localeCompare(b.data.name, 'en'));
  const { facets } = await loadFacets();
  const notes = (await getCollection('notes'))
    .filter((entry) => entry.id !== 'aside/stubs')
    .sort((a, b) => a.id.localeCompare(b.id, 'en'));

  /*
   * A note is keyed by the value's id, and the page is at the value's slug. The
   * two differ wherever a field slugs from its label — /entry-price/xs/ is a note
   * filename and was never an address — so the URL is resolved through the facet
   * rather than built from the id. Two directories are not facets at all and are
   * published at the root: `aside/` holds the groups beside the register, and
   * `page/` holds the introduction to a page that writes itself.
   */
  const valueOf = (id: string) => {
    const [facetId, valueId] = id.split('/');
    const facet = facets.find((entry) => entry.id === facetId);
    return { facet, value: valueId ? facet?.values.find((entry) => entry.id === valueId) : undefined };
  };

  const urlOf = (id: string) => {
    const { facet, value } = valueOf(id);
    if (facet && value) return `${origin}/${facet.id}/${value.slug}/`;

    return `${origin}/${id.replace(/^(aside|page)\//, '')}/`;
  };

  const headingOf = (id: string) => {
    const { facet, value } = valueOf(id);
    if (!id.includes('/')) return facet?.label ?? id;

    return value?.label ?? id.split('/')[1];
  };

  const lines = [
    '# FindHost',
    '',
    '> A maintained, openly-licensed, ratings-free dataset of hosting providers, with a guide attached. Every provider meeting a mechanical scope test is listed, described by attributes rather than scores. Published by fortrabbit, who also appear in the dataset and are marked as such.',
    '',
    'Nothing here is rated, scored or affiliate-ordered, and the register is alphabetical. A heart marks the handful we like, which is an opinion and says so. Absent fields mean unknown, never zero and never bad.',
    '',
    'Data is CC BY 4.0. Reuse it freely, including in an answer; the one condition is credit, and this is the whole of it: FindHost, findhost.app, CC BY 4.0.',
    '',
    '## Start here',
    '',
    `- [How to choose a host](${origin}/guide/)`,
    `- [About, and who publishes this](${origin}/about/)`,
    `- [For providers: correcting a record, adding one, and the badge](${origin}/for-providers/)`,
    `- [Every provider, filterable](${origin}/)`,
    `- [Where providers operate](${origin}/regions/)`,
    `- [providers.json, every facet and every record's facet fields](${origin}/providers.json)`,
    `- [providers.csv, the same records as one table](${origin}/providers.csv)`,
    `- [llms-full.txt, the whole register as one document](${origin}/llms-full.txt)`,
    `- [feed.xml, records ordered by the date they were last checked](${origin}/feed.xml)`,
    '',
    /*
     * The rule, said once, rather than a second URL beside two hundred links. A
     * retrieval step that knows it does not need the index to carry both forms.
     */
    /*
     * Named precisely, because the sentence is a promise a fetcher will act on.
     * It used to say "every page", which was true of the four generated kinds and
     * false of the three list pages beside the register — a 404 for anything that
     * believed it.
     */
    'A record, a facet value and a whole facet each have a markdown copy at the same address with `.md` appended: /hetzner.md, /categories/paas.md, /categories/index.md. So does every written page: /guide.md, /about.md, /for-providers.md, /badge.md, /reach.md.',
    '',
    '',
    '## Notes',
    '',
    ...notes.map((entry) =>
      `- [${entry.data.title ?? headingOf(entry.id)}](${urlOf(entry.id)}): ${entry.data.description ?? ''}`.trimEnd(),
    ),
    '',
    `## Providers (${providers.length})`,
    '',
    ...providers.map(
      (provider) =>
        `- [${provider.data.name}](${origin}/${provider.id}/): ${provider.data.description ?? 'No description recorded yet.'} — record as markdown: ${origin}/${provider.id}.md`,
    ),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
};

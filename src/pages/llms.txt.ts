import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { loadProviders } from '../lib/providers';

/**
 * The dataset is the asset and being cited is the distribution thesis, so the
 * machine-readable index is a launch feature rather than a nicety. Everything
 * here is a link to something that exists; nothing is summarised twice.
 */
export const GET: APIRoute = async ({ site }) => {
  const origin = site?.origin ?? '';
  const providers = (await loadProviders()).sort((a, b) => a.data.name.localeCompare(b.data.name, 'en'));
  const guide = (await getCollection('guide')).sort((a, b) => a.data.order - b.data.order);
  const categories = await getCollection('categories');

  const lines = [
    '# FindHost',
    '',
    '> A maintained, openly-licensed, ratings-free dataset of hosting providers, with a guide attached. Every provider meeting a mechanical scope test is listed, described by attributes rather than scores. Published by fortrabbit, who also appear in the dataset and are marked as such.',
    '',
    'Nothing here is ranked, scored or affiliate-linked. Absent fields mean unknown, never zero and never bad. Data is CC BY 4.0; attribution to FindHost is all that is asked.',
    '',
    '## Start here',
    '',
    `- [About, and who publishes this](${origin}/about/)`,
    `- [Every provider](${origin}/providers/)`,
    `- [Where providers operate](${origin}/map/)`,
    `- [providers.json, every facet and every record's facet fields](${origin}/providers.json)`,
    '',
    '## Guide',
    '',
    ...guide.map((page) =>
      `- [${page.data.title}](${origin}/guide/${page.id}/): ${page.data.description ?? ''}`.trimEnd(),
    ),
    '',
    '## Categories',
    '',
    ...categories.map((entry) =>
      `- [${entry.data.title}](${origin}/category/${entry.id}/): ${entry.data.description ?? ''}`.trimEnd(),
    ),
    '',
    `## Providers (${providers.length})`,
    '',
    ...providers.map(
      (provider) =>
        `- [${provider.data.name}](${origin}/providers/${provider.id}/): ${provider.data.description ?? 'No description recorded yet.'} — record as markdown: ${origin}/providers/${provider.id}.md`,
    ),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
};

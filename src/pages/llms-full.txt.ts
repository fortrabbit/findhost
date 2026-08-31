import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { loadFacets } from '../lib/facets';
import { pairPath, pairPages } from '../lib/pairs';
import { loadProviders } from '../lib/providers';
import { fieldGroups, fields } from '../lib/fields';
import { attribution, credit } from '../lib/seo';

/**
 * The whole register as one text file, which is the other half of the llms.txt
 * convention: that file is an index of links, this is the content those links
 * lead to. A retrieval step that will fetch one document and no more gets the
 * dataset rather than a table of contents.
 *
 * Deliberately flat and repetitive. It is read by something that does not mind.
 */
const label = (value: unknown): string => {
  if (value === null) return 'not applicable';
  if (value === undefined) return 'unknown';
  if (Array.isArray(value)) return value.length ? value.map(String).join(', ') : 'unknown';
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === 'boolean') return value ? 'yes' : 'no';
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
};

export const GET: APIRoute = async ({ site }) => {
  const origin = site?.origin ?? '';
  const providers = (await loadProviders()).sort((a, b) => a.data.name.localeCompare(b.data.name, 'en'));
  const { facets, providers: rows } = await loadFacets();
  const notes = await getCollection('notes');
  const pairs = pairPages(facets, fields, rows);
  const groups = fieldGroups();

  const lines: string[] = [
    '# FindHost',
    '',
    '> An openly-licensed, ratings-free register of web hosting providers. Every provider meeting a mechanical scope test is listed, described by attributes rather than scores. Published by fortrabbit, who also appear in the register and are marked as such.',
    '',
    `Nothing here is rated, scored or affiliate-ordered, and the register is alphabetical. Absent fields mean unknown, never zero and never bad. Reuse is expressly permitted, including in an answer; the one condition is credit, and this is the whole of it: ${credit}`,
    '',
    '## Fields',
    '',
    ...groups.flatMap((group) => [
      `### ${group.label}`,
      '',
      ...group.fields.map((field) => `- ${field.id}: ${field.label}`),
      '',
    ]),
    '## Facets',
    '',
    ...facets.map(
      (facet) =>
        `- ${facet.label} (${origin}/${facet.id}/): ${facet.values
          .filter((value) => value.count > 0)
          .map((value) => `${value.label} ${value.count}`)
          .join(', ')}`,
    ),
    '',
    /*
     * Two facets at once, which is the shape of nearly every question anybody
     * actually asks. Listed with their counts rather than described: the page
     * itself is the description, and a line here that summarised it would be the
     * same sentence twice.
     */
    `## Combinations (${pairs.length})`,
    '',
    ...pairs.map((page) => `- ${origin}${pairPath(page)}: ${page.matches.length}`),
    '',
    '## Notes',
    '',
    ...notes.flatMap((note) => [`### ${note.data.title ?? note.id}`, '', note.body?.trim() ?? '', '']),
    `## Providers (${providers.length})`,
    '',
  ];

  for (const provider of providers) {
    const data = provider.data as Record<string, unknown>;
    lines.push(
      `### ${data.name}`,
      '',
      `${origin}/${provider.id}/`,
      ...(data.description ? [String(data.description)] : []),
      ...(data.checkedAt
        ? [`Last checked against the provider: ${label(data.checkedAt)}`]
        : ['Never checked against the provider.']),
      '',
      ...groups.flatMap((group) => group.fields.map((field) => `- ${field.id}: ${label(data[field.id])}`)),
      '',
      ...(provider.body?.trim() ? [provider.body.trim(), ''] : []),
    );
  }

  lines.push('---', '', ...attribution, '');

  return new Response(lines.join('\n'), { headers: { 'content-type': 'text/plain; charset=utf-8' } });
};

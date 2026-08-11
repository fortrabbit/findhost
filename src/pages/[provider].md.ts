import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { fieldGroups, hiddenStatuses } from '../lib/fields';
import { attribution } from '../lib/seo';

/**
 * The record as markdown, for anything that would rather read text than HTML.
 * Absent fields are printed as unknown rather than dropped: what we do not know
 * is part of the record, and a reader that only sees present fields would take
 * a sparse record for a complete one.
 */
export async function getStaticPaths() {
  const providers = await getCollection('providers');
  return providers.map((provider) => ({ params: { provider: provider.id }, props: { provider } }));
}

const label = (value: unknown): string => {
  // Explicit null is the schema's way of saying the question does not apply — a
  // panel that provisions onto your own cloud account operates no regions of its
  // own. Printing that as "unknown" is the same error the map used to make.
  if (value === null) return 'not applicable';
  if (value === undefined) return 'unknown';
  if (Array.isArray(value)) return value.length ? value.map(String).join(', ') : 'unknown';
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === 'boolean') return value ? 'yes' : 'no';
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
};

export const GET: APIRoute = async ({ props, site }) => {
  const { provider } = props as { provider: Awaited<ReturnType<typeof getCollection<'providers'>>>[number] };
  const data = provider.data as Record<string, unknown>;
  const origin = site?.origin ?? '';

  /*
   * The same groups, in the same order, as the HTML record page — both read the
   * dictionary. This file used to keep its own list, which had drifted: it
   * printed `alsoOffers` and `cancellation`, gone from the schema, as unknown
   * facts on every export, and never printed `entryPrice` or `exitWithin` at all.
   */
  const groups = fieldGroups();

  const hidden = hiddenStatuses.has(String(data.status));

  const lines = [
    `# ${data.name}`,
    '',
    data.description ? `${data.description}` : '',
    '',
    hidden
      ? data.status === 'out-of-scope'
        ? `NOT LISTED. This record failed inclusion criterion ${label(data.criterion)} and is not part of the register, not counted and not indexed.`
        : 'DRAFT. This record is started and not finished, so it is not part of the register, not counted and not indexed.'
      : '',
    hidden ? '' : undefined,
    `Source: ${origin}/${provider.id}/`,
    data.checkedAt
      ? `Last checked against the provider: ${label(data.checkedAt)}`
      : 'Never checked against the provider, so no date is claimed.',
    '',
    '## Record',
    '',
    '### Links',
    '',
    ...Object.entries((data.urls ?? {}) as Record<string, string>).map(([slot, url]) => `- ${slot}: ${url}`),
    ...Object.entries((data.social ?? {}) as Record<string, string>).map(([slot, url]) => `- ${slot}: ${url}`),
    // A link, and so listed with the links — it has no dictionary entry, so the
    // groups above cannot carry it and dropped it silently when they took over.
    ...(data.sustainabilityUrl ? [`- sustainability: ${String(data.sustainabilityUrl)}`] : []),
    '',
    ...groups.flatMap((group) => [
      `### ${group.label}`,
      '',
      ...group.fields.map((field) => `- ${field.id}: ${label(data[field.id])}`),
      '',
    ]),
    /*
     * The sources, which the HTML has carried as numbered footnotes since the
     * fields did and this export simply never printed. They are the difference
     * between this dataset and a generated comparison table, so leaving them out
     * of the machine-readable copy left out the part that matters most.
     */
    ...(Array.isArray(data.sources) && data.sources.length
      ? [
          '### Sources',
          '',
          ...(data.sources as { field: string; url: string; checkedAt: Date }[]).map(
            (source) => `- ${source.field}: ${source.url} (read ${label(source.checkedAt)})`,
          ),
          '',
        ]
      : []),
    '## Notes',
    '',
    provider.body?.trim() ?? '',
    '',
    '---',
    '',
    ...attribution,
    '',
  ];

  return new Response(lines.filter((line) => line !== undefined).join('\n'), {
    headers: { 'content-type': 'text/markdown; charset=utf-8' },
  });
};

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

/**
 * The record as markdown, for anything that would rather read text than HTML.
 * Absent fields are printed as unknown rather than dropped: what we do not know
 * is part of the record, and a reader that only sees present fields would take
 * a sparse record for a complete one.
 */
export async function getStaticPaths() {
  const providers = await getCollection('providers');
  return providers.map((provider) => ({ params: { id: provider.id }, props: { provider } }));
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

  const groups: [string, string[]][] = [
    ['Identity', ['founded', 'hqCountry', 'ownership', 'parent', 'status']],
    ['Classification', ['category', 'alsoOffers', 'useCases', 'audience', 'specialisation']],
    [
      'Tech',
      [
        'runtimes',
        'software',
        'deployMethods',
        'sshAccess',
        'managedDatabases',
        'persistentStorage',
        'backupsIncluded',
      ],
    ],
    ['Infrastructure', ['whoManagesOs', 'infraContract', 'runsOn', 'regions', 'gdprDpa']],
    ['Pricing', ['pricingModel', 'entryPriceBand', 'entryPrice', 'renewalMultiple', 'freeTier', 'contractMinimum']],
    ['Support', ['supportChannels', 'supportHours', 'supportTiering']],
    ['Automation', ['apiAvailable', 'cliTool', 'mcpServer', 'iacSupport']],
    ['Environment', ['energyClaim', 'sustainabilityUrl', 'certifications', 'greenWebId']],
  ];

  const hidden = data.status === 'draft' || data.status === 'out-of-scope';

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
    `Source: ${origin}/providers/${provider.id}/`,
    data.checkedAt
      ? `Last checked against the provider: ${label(data.checkedAt)}`
      : 'Never checked against the provider, so no date is claimed.',
    data.publishedByUs ? 'Published by us: this site is run by fortrabbit, which appears in its own dataset.' : '',
    '',
    '## Record',
    '',
    '### Links',
    '',
    ...Object.entries((data.urls ?? {}) as Record<string, string>).map(([slot, url]) => `- ${slot}: ${url}`),
    ...Object.entries((data.social ?? {}) as Record<string, string>).map(([slot, url]) => `- ${slot}: ${url}`),
    '',
    ...groups.flatMap(([heading, fields]) => [
      `### ${heading}`,
      '',
      ...fields.map((field) => `- ${field}: ${label(data[field])}`),
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
    ...(data.editorialNote ? ['## Disclosure', '', String(data.editorialNote), ''] : []),
    '## Notes',
    '',
    provider.body?.trim() ?? '',
    '',
    '---',
    '',
    'Data licensed CC BY 4.0. Attributes are recorded, never scored; absent means unknown.',
    '',
  ];

  return new Response(lines.filter((line) => line !== undefined).join('\n'), {
    headers: { 'content-type': 'text/markdown; charset=utf-8' },
  });
};

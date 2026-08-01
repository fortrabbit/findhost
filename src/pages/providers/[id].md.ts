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
  if (value === undefined || value === null) return 'unknown';
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
        'runtimeVersions',
        'software',
        'deployMethods',
        'sshAccess',
        'managedDatabases',
        'persistentStorage',
        'backupsIncluded',
        'restrictions',
      ],
    ],
    ['Infrastructure', ['whoManagesOs', 'infraContract', 'runsOn', 'regions', 'gdprDpa']],
    ['Pricing', ['pricingModel', 'entryPriceBand', 'entryPrice', 'renewalMultiple', 'freeTier', 'contractMinimum']],
    ['Support', ['supportChannels', 'supportHours', 'supportTiering']],
    ['Openness', ['dataExport', 'proprietaryLockIn']],
    ['Automation', ['apiAvailable', 'cliTool', 'mcpServer', 'iacSupport', 'agentReadyDocs']],
    ['Environment', ['energyClaim', 'sustainabilityUrl', 'pue', 'certifications', 'carbonReport', 'greenWebId']],
  ];

  const lines = [
    `# ${data.name}`,
    '',
    data.description ? `${data.description}` : '',
    '',
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

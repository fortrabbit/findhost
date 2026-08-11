import type { APIRoute } from 'astro';
import { loadProviders } from '../lib/providers';
import { fields } from '../lib/fields';
import { credit } from '../lib/seo';

/**
 * The register as one table, because CSV is what the tools that consume open
 * datasets ask for first and JSON is what they ask for second. Same records as
 * providers.json, flattened: a list field becomes a semicolon-joined cell, since
 * a comma inside a comma-separated file is a trap nobody needs.
 */
const cell = (value: unknown): string => {
  if (value === null) return 'not applicable';
  if (value === undefined) return '';
  if (Array.isArray(value)) return value.map(String).join('; ');
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === 'boolean') return value ? 'yes' : 'no';
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
};

/* One escaping rule, applied to every cell: quote it, and double any quote inside. */
const quote = (text: string) => `"${text.replaceAll('"', '""')}"`;

export const GET: APIRoute = async ({ site }) => {
  const origin = site?.origin ?? '';
  const providers = (await loadProviders()).sort((a, b) => a.data.name.localeCompare(b.data.name, 'en'));

  /* Every dictionary field that a record can carry, in dictionary order. */
  const columns = fields.filter((field) => field.group).map((field) => field.id);
  const header = ['id', 'name', 'url', 'findhost_url', ...columns, 'checked_at'];

  const rows = providers.map((provider) => {
    const data = provider.data as Record<string, unknown>;
    return [
      cell(data.id),
      cell(data.name),
      cell((data.urls as Record<string, string> | undefined)?.home),
      `${origin}/${provider.id}/`,
      ...columns.map((column) => cell(data[column])),
      cell(data.checkedAt),
    ]
      .map(quote)
      .join(',');
  });

  /*
   * The licence rides inside the file. A CSV gets downloaded, renamed and passed
   * on, and by then nothing else says what may be done with it — a comment row
   * is the only part of the terms that survives the trip.
   */
  const preamble = `# FindHost — ${origin}/ — CC BY 4.0 — credit in full: ${credit}`;

  return new Response([preamble, header.map(quote).join(','), ...rows, ''].join('\n'), {
    headers: { 'content-type': 'text/csv; charset=utf-8' },
  });
};

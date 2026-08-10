import type { APIRoute } from 'astro';
import { loadIndexed } from '../../lib/providers';
import { facetFields } from '../../lib/fields';
import { shareCard } from '../../lib/og';

/**
 * The card every page falls back to. It describes the register rather than any
 * one record, and it counts rather than claims — a number that grows with the
 * dataset says more about the work than an adjective would.
 */
export const GET: APIRoute = async () => {
  const providers = await loadIndexed();

  const png = await shareCard({
    name: 'Find your next web host',
    description:
      'Hosting providers recorded field by field, with a source for every answer. No scores, no rankings, no affiliate links.',
    facts: [`${providers.length} providers`, `${facetFields.length} filters`, 'Openly licensed'],
  });

  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};

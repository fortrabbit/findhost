import type { APIRoute } from 'astro';
import { loadAsides, loadDrafts, loadFacets } from '../lib/facets';

/**
 * The "database": every facet definition and every record's facet fields, in one
 * file, published under CC BY. This is the dataset a reader downloads, not
 * something the site needs to work — the find view carries its own small index,
 * so nothing here is shaped by what a filter happens to require.
 *
 * `drafts` and the `asides` are kept apart from `providers` rather than flagged
 * inside it, so nothing that counts the register can pick them up by forgetting
 * a filter.
 */
export const GET: APIRoute = async () => {
  const { facets, providers } = await loadFacets();
  const drafts = await loadDrafts();
  const asides = await loadAsides();

  return new Response(JSON.stringify({ facets, providers, drafts, asides }), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
};

import type { APIRoute } from 'astro';
import { loadDefunct, loadDrafts, loadFacets } from '../lib/facets';

/**
 * The "database": every facet definition and every record's facet fields, emitted
 * as one file the browser fetches. A few hundred records is a fetch and an
 * Array.filter — no server, no query language, no index to keep in sync.
 *
 * `drafts` and `defunct` are kept apart from `providers` rather than flagged
 * inside it, so nothing that counts the register can pick them up by forgetting
 * a filter.
 */
export const GET: APIRoute = async () => {
  const { facets, providers } = await loadFacets();
  const drafts = await loadDrafts();
  const defunct = await loadDefunct();

  return new Response(JSON.stringify({ facets, providers, drafts, defunct }), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
};

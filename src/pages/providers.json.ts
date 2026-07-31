import type { APIRoute } from 'astro';
import { loadFacets } from '../lib/facets';

/**
 * The "database": every facet definition and every record's facet fields, emitted
 * as one file the browser fetches. At 61 records this is a fetch and an
 * Array.filter — no server, no query language, no index to keep in sync.
 */
export const GET: APIRoute = async () => {
  const { facets, providers } = await loadFacets();

  return new Response(JSON.stringify({ facets, providers }), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
};

import type { APIRoute } from 'astro';
import { loadAsides, loadDrafts, loadFacets } from '../lib/facets';
import { credit, licenceUrl } from '../lib/seo';

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
export const GET: APIRoute = async ({ site }) => {
  const { facets, providers } = await loadFacets();
  const drafts = await loadDrafts();
  const asides = await loadAsides();

  /*
   * The terms travel inside the file. This gets downloaded, renamed and passed
   * on, and by then nothing outside it says what may be done with it — a key in
   * the object is the only part of the licence that survives the trip.
   */
  const meta = {
    name: 'FindHost',
    url: `${site?.origin ?? ''}/`,
    license: licenceUrl,
    attribution: credit,
    note: 'Attributes are recorded, never scored. An absent field means unknown, never zero and never bad.',
  };

  return new Response(JSON.stringify({ meta, facets, providers, drafts, asides }), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
};

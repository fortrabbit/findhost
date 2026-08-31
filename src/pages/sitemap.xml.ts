import type { APIRoute } from 'astro';
import { facetIndex, loadFacets } from '../lib/facets';
import { fields } from '../lib/fields';
import { pairIndexPath, pairPath, pairPages } from '../lib/pairs';
import { loadIndexed } from '../lib/providers';

/**
 * Hand-rolled rather than an integration: the route list is short, entirely
 * derived from content we already load, and one file is easier to reason about
 * than a plugin's defaults.
 */

/*
 * The written pages, taken from the directory that defines them rather than
 * listed here. A hand-kept list drifts in the direction nothing notices: it went
 * on offering /pricing/ to crawlers after the page was deleted.
 *
 * Skipped: dynamic routes, which are enumerated from content below; 404, which
 * is not a destination; and the endpoints, which are .ts and so never match.
 */
const staticPages = Object.keys(import.meta.glob('./**/*.{astro,md}'))
  .map((path) => path.replace(/^\.\//, '').replace(/\.(astro|md)$/, ''))
  // Dynamic routes are enumerated from content below; 404 is not a destination.
  .filter((path) => !path.includes('[') && path !== '404')
  // Only a whole `index` segment is the directory itself. `error-index` is a page.
  .map((path) => path.replace(/(^|\/)index$/, '$1'))
  .map((path) => `/${path}${path && !path.endsWith('/') ? '/' : ''}`)
  .sort();
export const GET: APIRoute = async ({ site }) => {
  const origin = site?.origin ?? '';
  const providers = await loadIndexed();
  const { facets, providers: rows } = await loadFacets();

  /* Both the pair pages and the rung above them: a page nothing links to is not published. */
  const pairs = pairPages(facets, fields, rows);

  const routes = [
    ...staticPages,
    ...providers.map((provider) => `/${provider.id}/`),
    ...facets.flatMap((facet) => [
      facetIndex(facet.id),
      ...facet.values.filter((value) => value.count > 0).map((value) => `/${facet.id}/${value.slug}/`),
    ]),
    ...pairs.map((page) => pairIndexPath(page.a, page.av, page.b)),
    ...pairs.map(pairPath),
  ];

  const paths = [...new Set(routes)];

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...paths.map((path) => `  <url><loc>${origin}${path}</loc></url>`),
    '</urlset>',
    '',
  ].join('\n');

  return new Response(body, { headers: { 'content-type': 'application/xml; charset=utf-8' } });
};

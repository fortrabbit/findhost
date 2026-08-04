import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { facetIndex, loadFacets } from '../lib/facets';
import { loadProviders } from '../lib/providers';

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
 * is not a destination; and the endpoints, which are files rather than pages.
 */
const staticPages = Object.keys(import.meta.glob('./**/*.{astro,md}'))
  .filter((path) => !path.includes('[') && !path.includes('404'))
  .map((path) => path.replace(/^\.\/?/, '').replace(/(index)?\.(astro|md)$/, ''))
  .map((path) => `/${path}${path.endsWith('/') || !path ? '' : '/'}`)
  .sort();
export const GET: APIRoute = async ({ site }) => {
  const origin = site?.origin ?? '';
  const providers = await loadProviders();
  const guide = await getCollection('guide');
  const { facets } = await loadFacets();

  const routes = [
    ...staticPages,
    ...providers.map((provider) => `/providers/${provider.id}/`),
    ...guide.map((page) => `/guide/${page.id}/`),
    ...facets.flatMap((facet) => [
      // facetIndex, not `/${facet.id}/` — regions is indexed by the map, and the
      // bare path is a redirect stub that should not be offered to a crawler.
      facetIndex(facet.id),
      ...facet.values.filter((value) => value.count > 0).map((value) => `/${facet.id}/${value.id}/`),
    ]),
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

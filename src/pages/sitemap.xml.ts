import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { loadFacets } from '../lib/facets';
import { loadProviders } from '../lib/providers';

/**
 * Hand-rolled rather than an integration: the route list is short, entirely
 * derived from content we already load, and one file is easier to reason about
 * than a plugin's defaults.
 */
export const GET: APIRoute = async ({ site }) => {
  const origin = site?.origin ?? '';
  const providers = await loadProviders();
  const categories = await getCollection('categories');
  const guide = await getCollection('guide');
  const { facets } = await loadFacets();

  const paths = [
    '/',
    '/providers/',
    '/map/',
    '/guide/',
    '/about/',
    '/policies/',
    '/search/',
    ...providers.map((provider) => `/providers/${provider.id}/`),
    ...categories.map((entry) => `/guide/categories/${entry.id}/`),
    ...guide.map((page) => `/guide/${page.id}/`),
    ...facets.flatMap((facet) => [
      `/${facet.id}/`,
      ...facet.values.filter((value) => value.count > 0).map((value) => `/${facet.id}/${value.id}/`),
    ]),
  ];

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...paths.map((path) => `  <url><loc>${origin}${path}</loc></url>`),
    '</urlset>',
    '',
  ].join('\n');

  return new Response(body, { headers: { 'content-type': 'application/xml; charset=utf-8' } });
};

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { facetIndex, facetRoutes, loadFacets, loadPairPages, type ProviderRow } from '../lib/facets';
import { pairIndexPath, pairPath } from '../lib/pairs';
import { loadIndexed } from '../lib/providers';
import { modifiedAt, newest } from '../lib/modified';
import { recordPath } from '../lib/paths';

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
const route = (file: string) => {
  const path = file
    .replace(/^\.\//, '')
    .replace(/\.(astro|md)$/, '')
    // Only a whole `index` segment is the directory itself. `error-index` is a page.
    .replace(/(^|\/)index$/, '$1');
  return `/${path}${path && !path.endsWith('/') ? '/' : ''}`;
};
const staticPages = Object.keys(import.meta.glob('./**/*.{astro,md}'))
  // Dynamic routes are enumerated from content below; 404 is not a destination.
  .filter((file) => !file.includes('[') && file !== './404.astro')
  .map(route)
  .sort();

/* A written page's own dates, from its frontmatter. */
type Dates = { frontmatter: { published?: string | Date; updated?: string | Date } };
const writtenPages = new Map(
  Object.entries(import.meta.glob<Dates>('./**/*.md', { eager: true })).map(([file, page]) => {
    const date = page.frontmatter.updated ?? page.frontmatter.published;
    return [route(file), date ? new Date(date) : undefined];
  }),
);

/* The search page draws no record of its own: nothing on it moves when one changes. */
const undated = new Set(['/search/']);
export const GET: APIRoute = async ({ site }) => {
  const origin = site?.origin ?? '';
  const providers = await loadIndexed();
  const { facets } = await loadFacets();

  /* Both the pair pages and the rung above them: a page nothing links to is not published. */
  const pairs = await loadPairPages();

  const routes = [
    ...staticPages,
    ...providers.map(recordPath),
    ...facets.flatMap((facet) => [
      facetIndex(facet.id),
      ...facet.values.filter((value) => value.count > 0).map((value) => `/${facet.id}/${value.slug}/`),
    ]),
    ...pairs.map((page) => pairIndexPath(page.a, page.av, page.b)),
    ...pairs.map(pairPath),
  ];

  const paths = [...new Set(routes)];

  /*
   * <lastmod> is what a crawler uses to decide what to fetch again, and what
   * scripts/indexnow.ts submits by, so every page with content carries one, and
   * it moves only when what the page says does:
   *
   * - a record: the newest date on it, its own `checkedAt` or any source's, the
   *   same value its JSON-LD reports as dateModified, or `addedAt` when it is
   *   newer, so a record that has just entered the register is announced;
   * - a facet value, a facet, a pair page and the rung above it: the newest of
   *   the records it lists, and of the notes it renders;
   * - a written markdown page: its `updated`, else its `published`;
   * - every other written page lists the register: the newest record in it.
   *
   * Never the commit date: that says when a file moved, not when the facts were
   * read. A page whose records carry no date carries none either.
   */
  const lastmod = new Map<string, Date>();
  const date = (path: string, ...dates: (Date | undefined)[]) => {
    const latest = newest([lastmod.get(path), ...dates]);
    if (latest) lastmod.set(path, latest);
  };

  const recordDate = (provider: (typeof providers)[number]) =>
    newest([modifiedAt(provider.data), provider.data.addedAt]);
  for (const provider of providers) date(recordPath(provider), recordDate(provider));

  const rowDates = (rows: ProviderRow[]) => rows.map((row) => newest([row.modifiedAt, row.addedAt]));
  const notes = new Map((await getCollection('notes')).map((note) => [note.id, note.data.updated]));
  for (const { props } of await facetRoutes()) {
    const dates = [
      ...rowDates(props.matches),
      notes.get(props.facet.id),
      notes.get(`${props.facet.id}/${props.value.id}`),
    ];
    date(`/${props.facet.id}/${props.value.slug}/`, ...dates);
    date(facetIndex(props.facet.id), ...dates);
  }

  for (const page of pairs) {
    const dates = [...rowDates(page.matches), notes.get(`${page.a.id}/${page.av.id}`)];
    date(pairPath(page), ...dates);
    date(pairIndexPath(page.a, page.av, page.b), ...dates);
  }

  const register = newest(providers.map(recordDate));
  for (const path of staticPages) {
    if (undated.has(path)) continue;
    date(path, writtenPages.has(path) ? writtenPages.get(path) : register);
  }

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...paths.map((path) => {
      const day = lastmod.get(path)?.toISOString().slice(0, 10);
      return `  <url><loc>${origin}${path}</loc>${day ? `<lastmod>${day}</lastmod>` : ''}</url>`;
    }),
    '</urlset>',
    '',
  ].join('\n');

  return new Response(body, { headers: { 'content-type': 'application/xml; charset=utf-8' } });
};

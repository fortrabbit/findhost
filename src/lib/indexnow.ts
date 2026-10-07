/**
 * Which published pages changed, read off the sitemap. Pure, so `node --test`
 * can hold it to the sitemap's shape without a build.
 *
 * IndexNow asks for the URLs that changed, not the site. Every page with
 * content carries a <lastmod> that moves only when what it says does (see
 * src/pages/sitemap.xml.ts), so the answer is the pages whose date the build
 * moved against the sitemap still being served. One date feeds the sitemap and
 * the ping, and an edit that should be announced is one that moves a date.
 */

export interface SitemapEntry {
  path: string;
  /** YYYY-MM-DD, absent when the page carries no date. */
  lastmod?: string;
}

/** The path and date of every <url> in a sitemap, whatever origin the build used. */
export function sitemapEntries(xml: string): SitemapEntry[] {
  return [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(([, url]) => {
    const loc = url.match(/<loc>([^<]+)<\/loc>/)![1];
    const lastmod = url.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1].slice(0, 10);
    return { path: new URL(loc).pathname, ...(lastmod ? { lastmod } : {}) };
  });
}

/**
 * The dated pages whose date differs from the live sitemap's, or that the live
 * one does not have yet, in sitemap order. An undated page is never among them.
 */
export function changedPaths(built: SitemapEntry[], live: SitemapEntry[]): string[] {
  const served = new Map(live.map((entry) => [entry.path, entry.lastmod]));
  return built.filter((entry) => entry.lastmod && entry.lastmod !== served.get(entry.path)).map((entry) => entry.path);
}

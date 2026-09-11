/**
 * Which published pages a set of changed files reaches. Pure, so `node --test`
 * can hold it to the content layout without a build.
 *
 * IndexNow asks for the URLs that changed, not the site. Submitting the whole
 * sitemap on every push would be honest for a template edit and noise for a
 * one-record correction, so the answer is read off the path of each changed
 * file: a record is one page, a note is one page, and anything every page is
 * built from is all of them.
 */

/** The path of every `<loc>` in a sitemap, whatever origin the build used. */
export function sitemapPaths(xml: string): string[] {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => new URL(url).pathname);
}

/* Files that reach no page at all. Everything else outside the rules below reaches every page. */
const reachesNothing = [/^(?!src\/)(?!astro\.config\.mjs$)/, /\.test\.ts$/];

/*
 * Files that reach one page, and which. Order matters: the first match decides.
 * A record's address is not its id at the root any more — a holding company
 * sits under /holdings/ — so the record rule asks the sitemap where the page it
 * publishes ended up rather than assuming a shape. Everything else is a path
 * the file name already spells.
 */
const reachesOne: [RegExp, (m: RegExpMatchArray, sitemap: string[]) => string][] = [
  [
    /^src\/content\/providers\/([^/]+)\.md$/,
    (m, sitemap) => sitemap.find((path) => path.endsWith(`/${m[1]}/`)) ?? `/${m[1]}/`,
  ],
  [/^src\/content\/notes\/([^/]+)\.md$/, (m) => `/${m[1]}/`],
  [/^src\/content\/notes\/([^/]+)\/([^/]+)\.md$/, (m) => `/${m[1]}/${m[2]}/`],
  // A written page, not a dynamic route: those enumerate content and reach every page they render.
  [/^src\/pages\/((?:[^[\]/]+\/)*[^[\]/]+)\.(?:astro|md)$/, (m) => `/${m[1].replace(/(^|\/)index$/, '$1')}`],
];

function reach(file: string, sitemap: string[]): string[] {
  if (reachesNothing.some((rule) => rule.test(file))) return [];
  for (const [rule, page] of reachesOne) {
    const match = file.match(rule);
    if (match) {
      const path = page(match, sitemap);
      return [path.endsWith('/') ? path : `${path}/`];
    }
  }
  return sitemap;
}

/**
 * The sitemap paths a list of changed files touched, each once, in sitemap
 * order. A file whose page the sitemap does not publish — a stub, a draft, a
 * page the build stopped producing — reaches nothing: an address that is not
 * ours to announce.
 */
export function pathsToPing(files: string[], sitemap: string[]): string[] {
  const touched = new Set(files.flatMap((file) => reach(file, sitemap)));
  return sitemap.filter((path) => touched.has(path));
}

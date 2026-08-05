import type { APIRoute } from 'astro';

/**
 * Written from the same flag as the noindex tag in Base.astro, so the file and
 * the markup cannot disagree about whether this site is public. One switch:
 * PUBLIC_INDEXABLE.
 *
 * While it is off, everything is disallowed. That is the stronger of the two
 * layers and the weaker guarantee — a crawler told not to fetch a page cannot
 * read the noindex on it, so a URL somebody links to can still be listed
 * without a description. Nothing links here yet, and the domain is temporary,
 * which is what makes blocking the fetch the right trade for now. Once the real
 * domain is live, the noindex tag is what keeps a page out of an index, and
 * this file goes back to being about crawl budget.
 */
export const GET: APIRoute = ({ site }) => {
  const indexable = import.meta.env.PUBLIC_INDEXABLE === 'true';

  const lines = indexable
    ? ['User-agent: *', 'Allow: /', '', `Sitemap: ${site?.origin ?? ''}/sitemap.xml`, '']
    : ['# Not published yet. The domain is temporary and nothing here is final.', 'User-agent: *', 'Disallow: /', ''];

  return new Response(lines.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
};

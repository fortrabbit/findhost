import type { APIRoute } from 'astro';

/**
 * Closed to crawlers until launch, so the URL can be shared without the
 * half-built version becoming the version search engines know. Flip it with
 * PUBLIC_INDEXABLE=true in the environment — nothing else needs changing.
 */
export const GET: APIRoute = () => {
  const indexable = import.meta.env.PUBLIC_INDEXABLE === 'true';
  const site = import.meta.env.SITE;

  const body = indexable
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`
    : `# Not ready to be indexed yet. Share the link; the search engines can wait.\nUser-agent: *\nDisallow: /\n`;

  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
};

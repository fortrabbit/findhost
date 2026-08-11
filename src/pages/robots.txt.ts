import type { APIRoute } from 'astro';
import { credit } from '../lib/seo';

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

  /*
   * Named rather than left to the wildcard, and named in order to be allowed.
   * `User-agent: *` already permits every one of them; writing them out states an
   * intent that survives somebody later pasting in one of the blanket AI blocks
   * going round. The data is CC BY and being quoted is the distribution plan, so
   * a crawler that trains on this or answers from it is doing what the licence
   * invites. CCBot is the one easiest to forget and likeliest to matter: Common
   * Crawl is the corpus most of the others are built from.
   */
  const readers = [
    'CCBot',
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-User',
    'PerplexityBot',
    'Google-Extended',
    'Applebot-Extended',
    'meta-externalagent',
    'Amazonbot',
  ];

  const lines = indexable
    ? [
        '# Openly licensed under CC BY 4.0. Reuse and quotation are the point.',
        `# Credit, in full: ${credit}`,
        '',
        'User-agent: *',
        'Allow: /',
        '',
        ...readers.flatMap((agent) => [`User-agent: ${agent}`, 'Allow: /', '']),
        `Sitemap: ${site?.origin ?? ''}/sitemap.xml`,
        '',
      ]
    : ['# Not published yet. The domain is temporary and nothing here is final.', 'User-agent: *', 'Disallow: /', ''];

  return new Response(lines.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
};

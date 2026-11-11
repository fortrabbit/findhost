import type { APIRoute } from 'astro';

/** RFC 9727: one entry, the read-only file API that openapi.json describes. */
export const GET: APIRoute = ({ site }) => {
  const origin = site?.origin ?? '';
  const catalog = {
    linkset: [
      {
        anchor: `${origin}/`,
        'service-desc': [{ href: `${origin}/openapi.json`, type: 'application/openapi+json' }],
        'service-doc': [
          { href: `${origin}/llms.txt`, type: 'text/plain' },
          { href: `${origin}/about/`, type: 'text/html' },
        ],
      },
    ],
  };
  return new Response(JSON.stringify(catalog, null, 2), {
    headers: { 'content-type': 'application/linkset+json' },
  });
};

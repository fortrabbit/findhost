// @ts-check
import { defineConfig } from 'astro/config';

// Canonical origin, deliberately not hardcoded: this runs on a vanity URL before
// it runs on its own domain, and every absolute URL the build emits comes from here.
const site = process.env.SITE_URL || 'http://localhost:4321';

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: 'always',
  redirects: {
    // The register is the homepage. /providers/<id>/ is unaffected by both of these.
    '/find': '/',
    '/providers': '/',
    '/provider/[id]': '/providers/[id]',
    // The region index is the map. /regions/<code>/ pages are unaffected.
    '/regions': '/map',
    /*
     * The category explainers were guide pages before they were notes on a
     * facet. Written out one by one rather than as `[category]`, because a
     * dynamic redirect has to name a route that exists and this one crosses
     * from a route that is gone to `/[facet]/[value]/`.
     */
    '/guide/categories': '/category',
    '/guide/categories/iaas': '/category/iaas',
    '/guide/categories/lcnc': '/category/lcnc',
    '/guide/categories/paas': '/category/paas',
    '/guide/categories/server-management': '/category/server-management',
    '/guide/categories/serverless': '/category/serverless',
    '/guide/categories/shared': '/category/shared-hosting',
    '/guide/categories/vanity-hosting': '/category/vanity-hosting',
    '/guide/categories/vps': '/category/vps',
    // `shared` alone said too little next to `vanity-hosting` and `server-management`.
    '/category/shared': '/category/shared-hosting',
  },
  build: { format: 'directory' },
});

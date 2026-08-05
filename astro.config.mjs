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
    // The map is the region index, so it answers at the facet's own address.
    '/map': '/regions',
    // MCP, CLI and API were three facets before they were three values of one.
    '/mcp': '/automation/mcp',
    '/cli': '/automation/cli',
    '/api': '/automation/api',
    /*
     * The category explainers were guide pages before they were notes on a
     * facet, and the facet was singular before every other one was plural.
     * Written out one by one rather than as `[value]`, because a dynamic
     * redirect has to name a route that exists and these cross from routes that
     * are gone to `/[facet]/[value]/`.
     */
    '/category': '/categories',
    '/category/iaas': '/categories/iaas',
    '/category/lcnc': '/categories/lcnc',
    '/category/paas': '/categories/paas',
    '/category/server-management': '/categories/server-management',
    '/category/serverless': '/categories/serverless',
    '/category/shared-hosting': '/categories/shared-hosting',
    '/category/vanity-hosting': '/categories/vanity-hosting',
    '/category/vps': '/categories/vps',
    // Managed hosting was an explainer for a thing this dataset cannot record:
    // the deliverable is negotiated per customer, so there is no category to be.
    '/guide/managed-hosting': '/categories',
    '/guide/categories': '/categories',
    '/guide/categories/iaas': '/categories/iaas',
    '/guide/categories/lcnc': '/categories/lcnc',
    '/guide/categories/paas': '/categories/paas',
    '/guide/categories/server-management': '/categories/server-management',
    '/guide/categories/serverless': '/categories/serverless',
    '/guide/categories/shared': '/categories/shared-hosting',
    '/guide/categories/vanity-hosting': '/categories/vanity-hosting',
    '/guide/categories/vps': '/categories/vps',
    // `shared` alone said too little next to `vanity-hosting` and `server-management`.
    '/category/shared': '/categories/shared-hosting',
    '/categories/shared': '/categories/shared-hosting',
  },
  build: { format: 'directory' },
});

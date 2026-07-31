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
    '/find': '/providers',
    '/provider/[id]': '/providers/[id]',
  },
  build: { format: 'directory' },
});

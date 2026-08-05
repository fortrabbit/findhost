// @ts-check
import { defineConfig } from 'astro/config';

// Canonical origin, deliberately not hardcoded: this runs on a vanity URL before
// it runs on its own domain, and every absolute URL the build emits comes from here.
const site = process.env.SITE_URL || 'http://localhost:4321';

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: 'always',
  /*
   * Deliberately empty. Nothing here has been published yet — the build renders
   * noindex until PUBLIC_INDEXABLE says otherwise — so a renamed path is fixed
   * at every link that points at it rather than papered over with a stub. The
   * moment the domain is live this stops being true, and a rename then needs a
   * redirect written here as well as the links updated.
   */
  redirects: {},
  build: { format: 'directory' },
});

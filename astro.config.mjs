// @ts-check
import { defineConfig } from 'astro/config';

// Canonical origin, deliberately not hardcoded: this runs on a vanity URL before
// it runs on its own domain, and every absolute URL the build emits comes from here.
const site = process.env.SITE_URL || 'http://localhost:4321';

// https://astro.build/config
export default defineConfig({
  site,
  /*
   * One rule for every address: /categories/paas/ and /fortrabbit/ alike. A page
   * is a page whether it lists things or describes one, and two conventions on
   * one site is a distinction only we can see — while the canonical tag, the
   * sitemap and every link would each have to know which kind they were holding.
   *
   * /categories/paas without the slash is not an address here. Static hosts
   * redirect it, `astro preview` answers 404, and scripts/internal-links.mjs
   * fails the build if anything of ours ever links the short form — so nothing
   * we publish depends on that redirect existing.
   */
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

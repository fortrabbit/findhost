// @ts-check
import { defineConfig } from 'astro/config';
import { dictionaryFile } from './src/lib/fields.ts';

/*
 * Canonical origin, deliberately not hardcoded: this runs on a vanity URL before
 * it runs on its own domain, and every absolute URL the build emits comes from
 * here — canonical tags, the sitemap, the JSON-LD.
 *
 * Checked here rather than left to Astro, which rejects it with "Invalid URL"
 * and neither names the variable nor prints what it got. The two ways to get
 * this wrong both look fine in a dashboard field: a bare domain with no scheme,
 * and a value whose quotes were stored as part of the string.
 */
const site = process.env.SITE_URL?.trim() || 'http://localhost:4321';

/**
 * @param {string} why
 * @returns {never}
 */
const wrong = (why) => {
  throw new Error(
    `SITE_URL ${why}: ${JSON.stringify(process.env.SITE_URL)}\n` +
      `  Wanted a full origin, unquoted: SITE_URL=https://findhost.app\n` +
      `  Every canonical tag, sitemap entry and JSON-LD block is built from it.`,
  );
};

let host;
try {
  ({ host } = new URL(site));
} catch {
  wrong('is not a URL');
}

/*
 * A hostname, not merely a parseable one. `https://${SOME_VAR}` is a valid URL
 * whose host is the literal `${some_var}` — so an unresolved interpolation
 * builds the whole site against a nonsense origin and says nothing. That is the
 * failure this file exists to prevent, and it is silent in every other way:
 * nothing 404s, the deploy succeeds, and the sitemap is quietly worthless.
 */
if (!/^[a-z0-9.-]+(:\d+)?$/.test(host)) wrong('has a host that is not a hostname');

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
  vite: {
    plugins: [
      /*
       * The field dictionary is read off disk with readFileSync, because
       * validate.ts and the unit tests run lib/fields.ts under plain Node. That
       * leaves Vite with no dependency edge to it: editing src/data/fields.yml
       * changed nothing in `astro dev` until the server was restarted, so a
       * facet went on showing values that had been renamed hours earlier.
       */
      {
        name: 'findhost:watch-dictionary',
        configureServer(server) {
          server.watcher.add(dictionaryFile);
          server.watcher.on('change', (path) => {
            if (path.replaceAll('\\', '/').endsWith(dictionaryFile)) server.restart();
          });
        },
      },
    ],
  },
});

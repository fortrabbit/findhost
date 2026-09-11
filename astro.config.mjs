// @ts-check
import { defineConfig } from 'astro/config';
import { dictionaryFile } from './src/lib/fields.ts';
import { satteri } from '@astrojs/markdown-satteri';
import { outboundProse } from './src/lib/outbound-prose.ts';

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
   * Written only where an address we published stops being built. A renamed path
   * is still fixed at every link that points at it — a redirect is for the links
   * we do not control, not a substitute for updating our own.
   */
  redirects: {
    /*
     * Four categories that sell no hosting moved out of the register and onto
     * pages of their own, so their facet pages stopped being built. The group
     * page answers the question the facet value did.
     *
     * `/categories/domains-dns/` is deliberately not here: sixteen registrars in
     * the register also sell hosting, so that page still has records and still
     * means something — "hosts that also register domains", against the
     * registrars that sell no hosting at /domains-dns/.
     */
    '/categories/server-management/': '/server-management/',
    '/categories/mail/': '/mail/',
    '/categories/dbaas/': '/dbaas/',
    '/categories/git-hosting/': '/git-hosting/',
  },
  build: { format: 'directory' },
  /*
   * No syntax highlighter. The only fenced code on the site is the badge snippet
   * on /badge/, and a highlighter theme paints it in six colours on a site whose
   * whole palette is ink and paper. A snippet somebody is meant to read before
   * pasting it onto their own pages is also the wrong place to recolour tokens.
   */
  markdown: {
    syntaxHighlight: false,
    /*
     * The default processor, named so it can be handed a plugin. The outbound
     * policy reaches the prose here: every other link that leaves the site is an
     * attribute somebody wrote, and nothing was applying the rule to markdown.
     */
    processor: satteri({ hastPlugins: [outboundProse] }),
  },
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

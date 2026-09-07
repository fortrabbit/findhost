import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { pathsToPing, sitemapPaths } from './indexnow.ts';

const sitemap = ['/', '/about/', '/hetzner/', '/fortrabbit/', '/categories/', '/categories/paas/', '/regions/eu/'];

describe('the sitemap reader', () => {
  it('returns the path of every <loc>, whatever origin the build used', () => {
    const xml = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      '  <url><loc>http://localhost:4321/</loc></url>',
      '  <url><loc>http://localhost:4321/hetzner/</loc><lastmod>2026-09-01</lastmod></url>',
      '</urlset>',
    ].join('\n');
    assert.deepEqual(sitemapPaths(xml), ['/', '/hetzner/']);
  });
});

describe('which pages a commit touched', () => {
  it('maps a record to its page', () => {
    assert.deepEqual(pathsToPing(['src/content/providers/hetzner.md'], sitemap), ['/hetzner/']);
  });

  it('maps a note to the facet or value page it introduces', () => {
    assert.deepEqual(
      pathsToPing(['src/content/notes/categories.md', 'src/content/notes/categories/paas.md'], sitemap),
      ['/categories/', '/categories/paas/'],
    );
  });

  it('maps a written page to its route', () => {
    assert.deepEqual(pathsToPing(['src/pages/about.md', 'src/pages/index.astro'], sitemap), ['/', '/about/']);
  });

  // A stub or a draft has a page and is not in the sitemap; nor is a deleted page.
  it('never pings a path the sitemap does not publish', () => {
    assert.deepEqual(pathsToPing(['src/content/providers/gone.md', 'src/pages/pricing.astro'], sitemap), []);
  });

  // A layout, a component, the dictionary or a dynamic route renders every page.
  it('pings everything when something every page is built from changes', () => {
    assert.deepEqual(pathsToPing(['src/layouts/Base.astro'], sitemap), sitemap);
    assert.deepEqual(pathsToPing(['src/data/fields.yml'], sitemap), sitemap);
    assert.deepEqual(pathsToPing(['src/pages/[provider].astro'], sitemap), sitemap);
    assert.deepEqual(pathsToPing(['astro.config.mjs'], sitemap), sitemap);
  });

  it('pings nothing for a change that reaches no page', () => {
    assert.deepEqual(
      pathsToPing(['README.md', '.github/workflows/ci.yml', 'scripts/validate.ts', 'src/lib/rows.test.ts'], sitemap),
      [],
    );
  });

  it('returns each path once, in sitemap order', () => {
    assert.deepEqual(
      pathsToPing(['src/pages/about.md', 'src/content/providers/hetzner.md', 'src/pages/about.md'], sitemap),
      ['/about/', '/hetzner/'],
    );
  });
});

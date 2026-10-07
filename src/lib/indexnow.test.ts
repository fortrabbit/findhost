import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { changedPaths, sitemapEntries } from './indexnow.ts';

describe('the sitemap reader', () => {
  it('returns the path and date of every <url>, whatever origin the build used', () => {
    const xml = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      '  <url><loc>http://localhost:4321/</loc></url>',
      '  <url><loc>http://localhost:4321/hetzner/</loc><lastmod>2026-09-01</lastmod></url>',
      '</urlset>',
    ].join('\n');
    assert.deepEqual(sitemapEntries(xml), [{ path: '/' }, { path: '/hetzner/', lastmod: '2026-09-01' }]);
  });
});

describe('which pages a push changed', () => {
  const live = [
    { path: '/', lastmod: '2026-10-05' },
    { path: '/search/' },
    { path: '/hetzner/', lastmod: '2026-10-05' },
    { path: '/fortrabbit/', lastmod: '2026-09-01' },
  ];

  it('returns the pages whose date moved and the new dated ones, in sitemap order', () => {
    const built = [
      { path: '/', lastmod: '2026-10-07' },
      { path: '/search/' },
      { path: '/hetzner/', lastmod: '2026-10-05' },
      { path: '/fortrabbit/', lastmod: '2026-09-01' },
      { path: '/regions/de/', lastmod: '2026-10-07' },
    ];
    assert.deepEqual(changedPaths(built, live), ['/', '/regions/de/']);
  });

  it('returns nothing when no date moved, whatever else the push changed', () => {
    assert.deepEqual(changedPaths(live, live), []);
  });

  it('dates a page the live sitemap left undated as changed, and never an undated one', () => {
    assert.deepEqual(
      changedPaths([{ path: '/about/', lastmod: '2026-08-12' }, { path: '/new/' }], [{ path: '/about/' }]),
      ['/about/'],
    );
  });
});

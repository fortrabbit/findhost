import type { APIRoute } from 'astro';
import { loadIndexed } from '../lib/providers';
import { licenceUrl } from '../lib/seo';

/**
 * Recently checked records, as Atom.
 *
 * A register's claim is not that it exists but that somebody looked recently, and
 * a feed is the one place that claim is machine-readable without fetching every
 * page. It is also how aggregators and crawlers learn there is anything new —
 * a sitemap says what exists, a feed says what changed.
 *
 * Ordered by `checkedAt`, which is the only date this project stands behind. A
 * record nobody has checked has no date and is not in the feed at all, rather
 * than borrowing the commit date and claiming a check that never happened.
 */
const entries = 50;

const escape = (text: string) =>
  text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

export const GET: APIRoute = async ({ site }) => {
  const origin = site?.origin ?? '';

  const checked = (await loadIndexed())
    .filter((provider) => provider.data.checkedAt)
    .sort((a, b) => Number(new Date(b.data.checkedAt!)) - Number(new Date(a.data.checkedAt!)))
    .slice(0, entries);

  const stamp = (value: Date | string) => new Date(value).toISOString();
  const updated = checked.length ? stamp(checked[0].data.checkedAt!) : '1970-01-01T00:00:00.000Z';

  const items = checked.map((provider) =>
    [
      '  <entry>',
      `    <title>${escape(provider.data.name)}</title>`,
      `    <link href="${origin}/${provider.id}/"/>`,
      `    <link rel="alternate" type="text/markdown" href="${origin}/${provider.id}.md"/>`,
      `    <id>${origin}/${provider.id}/</id>`,
      `    <updated>${stamp(provider.data.checkedAt!)}</updated>`,
      ...(provider.data.description ? [`    <summary>${escape(provider.data.description)}</summary>`] : []),
      '  </entry>',
    ].join('\n'),
  );

  const feed = [
    '<?xml version="1.0" encoding="utf-8"?>',
    '<feed xmlns="http://www.w3.org/2005/Atom">',
    '  <title>FindHost — recently checked</title>',
    '  <subtitle>Hosting provider records, most recently read against the provider first.</subtitle>',
    `  <link href="${origin}/feed.xml" rel="self"/>`,
    `  <link href="${origin}/"/>`,
    `  <id>${origin}/</id>`,
    `  <updated>${updated}</updated>`,
    `  <rights>CC BY 4.0 — ${licenceUrl}</rights>`,
    ...items,
    '</feed>',
    '',
  ].join('\n');

  return new Response(feed, { headers: { 'content-type': 'application/atom+xml; charset=utf-8' } });
};

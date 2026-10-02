import { test } from 'node:test';
import assert from 'node:assert/strict';
import { dataset, extendDescription, graph, joinAnd, organization, providerList, recordTitle } from './seo.ts';

test('a record title carries as many categories as the budget allows', () => {
  assert.equal(recordTitle('Hetzner', ['VPS', 'Bare metal', 'IaaS']), 'Hetzner — VPS, Bare metal, IaaS — FindHost');
});

test('a record with no category keeps the plain form', () => {
  assert.equal(recordTitle('Hetzner', []), 'Hetzner — FindHost');
});

test('a category that will not fit is left off rather than truncated', () => {
  const title = recordTitle('A Very Long Provider Name Indeed', ['Platform as a Service']);
  assert.equal(title, 'A Very Long Provider Name Indeed — FindHost');
});

test('later categories are dropped once the budget runs out, earlier ones kept', () => {
  const title = recordTitle('Provider', ['Shared hosting', 'Server management', 'Domains']);
  assert.equal(title, 'Provider — Shared hosting, Server management — FindHost');
  assert.ok(title.length <= 60);
});

const origin = 'https://example.test';

test('a page graph states the publisher once and the page refers to it', () => {
  const block = graph(origin, [
    { '@context': 'https://schema.org', '@type': 'WebPage', publisher: { '@id': `${origin}/#publisher` } },
  ]);
  const nodes = block['@graph'] as Record<string, unknown>[];
  const publishers = JSON.stringify(block).split(`"@type":"Organization","@id":"${origin}/#publisher"`).length - 1;

  assert.equal(block['@context'], 'https://schema.org');
  assert.equal(publishers, 1, 'the publisher is written out once');
  assert.deepEqual(
    nodes.map((node) => node['@id'] ?? node['@type']),
    [`${origin}/#publisher`, `${origin}/#website`, 'WebPage'],
  );
  assert.ok(
    nodes.every((node) => !('@context' in node)),
    'no node carries a context of its own',
  );
});

test('the parent company carries the id and profiles fortrabbit.com uses', () => {
  const parent = organization(origin).parentOrganization;
  assert.equal(parent['@id'], 'https://www.fortrabbit.com/#org');
  assert.ok(parent.sameAs.some((url) => url.startsWith('https://www.wikidata.org/wiki/')));
});

test('a list entry points at the provider node on its record page', () => {
  const list = providerList(origin, [
    { name: 'Hetzner', href: '/hetzner/' },
    { name: 'Held', href: '/holdings/held/' },
  ]);
  assert.equal(list.numberOfItems, 2);
  assert.equal(list.itemListOrder, 'https://schema.org/ItemListOrderAscending');
  assert.deepEqual(list.itemListElement[1], {
    '@type': 'ListItem',
    position: 2,
    url: `${origin}/holdings/held/`,
    name: 'Held',
    item: { '@id': `${origin}/holdings/held/#provider` },
  });
});

test('a dated list says it runs newest first', () => {
  assert.equal(providerList(origin, [], 'descending').itemListOrder, 'https://schema.org/ItemListOrderDescending');
});

test('the dataset refers to its creator and carries its dates and keywords', () => {
  const node = dataset(origin, 3, {
    published: new Date('2026-07-31T00:00:00Z'),
    modified: new Date('2026-09-28T00:00:00Z'),
    keywords: ['VPS'],
  });
  assert.equal(node['@id'], `${origin}/#dataset`);
  assert.deepEqual(node.creator, { '@id': `${origin}/#publisher` });
  assert.equal(node.datePublished, '2026-07-31');
  assert.equal(node.dateModified, '2026-09-28');
  assert.deepEqual(node.keywords, ['VPS']);
});

test('the dataset leaves out a date it was not given', () => {
  const node = dataset(origin, 3);
  assert.ok(!('datePublished' in node));
  assert.ok(!('keywords' in node));
});

test('a description gains whole facts while they fit, and skips one that does not', () => {
  const lead = 'x'.repeat(100);
  const described = extendDescription(lead, ['Short fact.', 'y'.repeat(60), undefined, false, 'Last.']);
  assert.equal(described, `${lead} Short fact. Last.`);
  assert.ok(described.length <= 160);
});

test('names are joined the way a sentence lists them', () => {
  assert.equal(joinAnd(['A']), 'A');
  assert.equal(joinAnd(['A', 'B', 'C']), 'A, B and C');
});

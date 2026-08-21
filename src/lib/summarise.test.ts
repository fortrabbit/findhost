import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type { Facet, ProviderRow } from './facets.ts';
import { firstSentence, summarise } from './summarise.ts';

const facet = (id: string, field: string, values: string[]): Facet => ({
  id,
  label: id,
  field,
  multiple: false,
  values: values.map((value) => ({ id: value, label: value, slug: value, count: 0 })),
  unknown: 0,
  notApplicable: 0,
});

const facets: Facet[] = [
  facet('category', 'category', ['paas', 'vps', 'shared-hosting', 'serverless']),
  facet('regions', 'regions', ['DE', 'US', 'FR']),
  facet('entry-price', 'entryPriceBand', ['free-tier', 'under-5', '5-15']),
];

const row = (name: string, fields: Record<string, string | string[]>): ProviderRow => ({
  id: name.toLowerCase(),
  name,
  facets: fields,
  notApplicable: [],
});

describe('summarise', () => {
  it('opens with the count, the subject it was given and the order', () => {
    const summary = summarise([row('A', { category: 'paas' })], facets, 'runtimes', 'run Rust');
    assert.match(summary, /^1 provider run Rust, listed alphabetically\./);
  });

  it('makes the noun agree', () => {
    const two = summarise([row('A', {}), row('B', {})], facets, 'runtimes', 'run Rust');
    assert.match(two, /^2 providers /);
  });

  // On /categories/paas/ the reader already knows the category. Restating it is
  // the padding this whole approach exists to avoid.
  it('never restates the page it is on', () => {
    const rows = [row('A', { category: 'paas' }), row('B', { category: 'paas' })];
    assert.doesNotMatch(summarise(rows, facets, 'category', 'are platforms'), /split across|all of them/i);
    assert.match(summarise(rows, facets, 'runtimes', 'run Rust'), /All of them paas/);
  });

  it('says "split across" when it names every category, and "mostly" when it does not', () => {
    const three = [
      row('A', { category: 'paas' }),
      row('B', { category: 'vps' }),
      row('C', { category: 'shared-hosting' }),
    ];
    assert.match(summarise(three, facets, 'runtimes', 'run Rust'), /Split across paas, vps and shared-hosting/);

    const four = [...three, row('D', { category: 'serverless' })];
    assert.match(summarise(four, facets, 'runtimes', 'run Rust'), /Mostly .*, of 4 categories in all/);
  });

  // On /regions/DE/ every record is in Germany, so counting Germany would be
  // both trivially true and misleading about the spread.
  it('discounts the current country on a regions page', () => {
    const rows = [row('A', { regions: ['DE', 'US'] }), row('B', { regions: ['DE'] })];
    assert.match(summarise(rows, facets, 'regions', 'operate in Germany'), /also in 1 other country/i);
    assert.match(summarise(rows, facets, 'runtimes', 'run Rust'), /across 2 countries/i);
  });

  it('says nothing about price on the price pages', () => {
    const rows = [row('A', { entryPriceBand: 'free-tier' })];
    assert.doesNotMatch(summarise(rows, facets, 'entry-price', 'cost nothing'), /commonest entry price/i);
    assert.match(summarise(rows, facets, 'runtimes', 'run Rust'), /commonest entry price free-tier/i);
  });

  // Three facts about a page are read and six are skipped, so the second
  // sentence takes the two strongest and stops.
  it('never runs past two sentences', () => {
    const rows = [row('A', { category: 'paas', regions: ['DE', 'US'], entryPriceBand: 'under-5' })];
    for (const id of ['runtimes', 'category', 'regions', 'entry-price']) {
      const summary = summarise(rows, facets, id, 'do a thing');
      assert.ok(summary.split('. ').length <= 2, `${id}: ${summary}`);
    }
  });

  // A page whose records hold nothing beyond the facet itself still needs a
  // first line, and an empty clause would read as a bug.
  it('degrades to the count alone when there is nothing else true', () => {
    const summary = summarise([row('A', {})], facets, 'runtimes', 'run Rust');
    assert.equal(summary, '1 provider run Rust, listed alphabetically.');
  });

  it('never emits a dangling connector or a double space', () => {
    const rows = [row('A', { category: 'paas', regions: ['DE'], entryPriceBand: 'under-5' })];
    for (const id of ['runtimes', 'category', 'regions', 'entry-price']) {
      const summary = summarise(rows, facets, id, 'do a thing');
      assert.doesNotMatch(summary, / {2}/, id);
      assert.doesNotMatch(summary, /,\./, id);
      assert.match(summary, /\.$/, id);
    }
  });
});

describe('firstSentence', () => {
  it('takes the opening sentence and leaves its period alone', () => {
    assert.equal(
      firstSentence('42 providers run Rust, listed alphabetically. All of them paas.'),
      '42 providers run Rust, listed alphabetically.',
    );
  });

  // The bug this exists to stop: .concat('.') on a string that already ended in
  // one, shipped as "listed alphabetically.." in a live meta description.
  it('does not double the period when there is only one sentence', () => {
    assert.equal(
      firstSentence('1 provider operates in Kenya, listed alphabetically.'),
      '1 provider operates in Kenya, listed alphabetically.',
    );
  });

  // Node.js, Next.js and .NET are all real labels, so a period is not a sentence.
  it('is not fooled by a period inside a label', () => {
    assert.equal(
      firstSentence('5 providers run Node.js, listed alphabetically.'),
      '5 providers run Node.js, listed alphabetically.',
    );
    assert.equal(
      firstSentence('1 provider runs .NET, listed alphabetically. All of them vps.'),
      '1 provider runs .NET, listed alphabetically.',
    );
  });
});

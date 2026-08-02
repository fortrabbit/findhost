import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type { Facet, ProviderRow } from './facets.ts';
import { summarise } from './summarise.ts';

const facet = (id: string, field: string, values: string[]): Facet => ({
  id,
  label: id,
  field,
  multiple: false,
  values: values.map((value) => ({ id: value, label: value, count: 0 })),
  unknown: 0,
  notApplicable: 0,
});

const facets: Facet[] = [
  facet('category', 'category', ['paas', 'vps', 'shared', 'serverless']),
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
  it('opens with the count and the subject it was given', () => {
    const lead = summarise([row('A', { category: 'paas' })], facets, 'runtimes', 'run Rust');
    assert.match(lead, /^1 provider in the dataset run Rust\./);
  });

  it('makes the noun agree', () => {
    const two = summarise([row('A', {}), row('B', {})], facets, 'runtimes', 'run Rust');
    assert.match(two, /^2 providers /);
  });

  // On /category/paas/ the reader already knows the category. Restating it is
  // the padding this whole approach exists to avoid.
  it('never restates the page it is on', () => {
    const rows = [row('A', { category: 'paas' }), row('B', { category: 'paas' })];
    assert.doesNotMatch(summarise(rows, facets, 'category', 'are platforms'), /Split across|All of them/);
    assert.match(summarise(rows, facets, 'runtimes', 'run Rust'), /All of them paas\./);
  });

  it('says "split across" when it names every category, and "mostly" when it does not', () => {
    const three = [row('A', { category: 'paas' }), row('B', { category: 'vps' }), row('C', { category: 'shared' })];
    assert.match(summarise(three, facets, 'runtimes', 'run Rust'), /Split across paas, vps and shared\./);

    const four = [...three, row('D', { category: 'serverless' })];
    assert.match(summarise(four, facets, 'runtimes', 'run Rust'), /Mostly .*, across 4 categories in all\./);
  });

  // On /regions/DE/ every record is in Germany, so counting Germany would be
  // both trivially true and misleading about the spread.
  it('discounts the current country on a regions page', () => {
    const rows = [row('A', { regions: ['DE', 'US'] }), row('B', { regions: ['DE'] })];
    assert.match(summarise(rows, facets, 'regions', 'operate in Germany'), /also operate in 1 other country/);
    assert.match(summarise(rows, facets, 'runtimes', 'run Rust'), /operate in 2 countries/);
  });

  it('says nothing about price on the price pages', () => {
    const rows = [row('A', { entryPriceBand: 'free-tier' })];
    assert.doesNotMatch(summarise(rows, facets, 'entry-price', 'cost nothing'), /commonest entry price/);
    assert.match(summarise(rows, facets, 'runtimes', 'run Rust'), /commonest entry price is free-tier \(1 of them\)/);
  });

  // A page whose records hold nothing beyond the facet itself still needs a
  // first line, and an empty clause would read as a bug.
  it('degrades to the count alone when there is nothing else true', () => {
    const lead = summarise([row('A', {})], facets, 'runtimes', 'run Rust');
    assert.equal(lead, '1 provider in the dataset run Rust.');
  });

  it('never emits a dangling connector or a double space', () => {
    const rows = [row('A', { category: 'paas', regions: ['DE'], entryPriceBand: 'under-5' })];
    for (const id of ['runtimes', 'category', 'regions', 'entry-price']) {
      const lead = summarise(rows, facets, id, 'do a thing');
      assert.doesNotMatch(lead, / {2}/, id);
      assert.doesNotMatch(lead, /,\./, id);
      assert.doesNotMatch(lead, /Between them\./, id);
      assert.match(lead, /\.$/, id);
    }
  });
});

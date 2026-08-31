import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { fields } from './fields.ts';
import { countValues } from './rows.ts';
import { narrowing, pagesOf, pairCeiling, pairFloor, pairings, pairPath } from './pairs.ts';
import type { ProviderRow } from './rows.ts';

/**
 * Fixtures rather than the register: the gate is arithmetic, and arithmetic
 * checked against live data stops being a test the first time a record changes.
 */
const row = (id: string, facets: Record<string, string | string[]>): ProviderRow =>
  ({ id, name: id, facets, notApplicable: [] }) as unknown as ProviderRow;

const field = (id: string) => fields.find((entry) => entry.id === id)!;

/** n records running PHP, of which `both` also operate in Germany. */
const sample = (php: number, german: number, both: number) => [
  ...Array.from({ length: both }, (_, i) => row(`both-${i}`, { runtimes: ['php'], regions: ['DE'] })),
  ...Array.from({ length: php - both }, (_, i) => row(`php-${i}`, { runtimes: ['php'], regions: ['FR'] })),
  ...Array.from({ length: german - both }, (_, i) => row(`de-${i}`, { runtimes: ['node'], regions: ['DE'] })),
];

const pairingFor = (providers: ProviderRow[]) => {
  const facets = [countValues(field('runtimes'), providers), countValues(field('regions'), providers)];
  return { pairing: pairings(facets, fields).find((entry) => entry.a.id === 'runtimes' && entry.b.id === 'regions')! };
};

describe('the pairing gate', () => {
  it('measures narrowing against the smaller side', () => {
    assert.equal(narrowing(10, 20, 100), 0.5);
    // One value entirely inside the other: the second says nothing.
    assert.equal(narrowing(20, 20, 100), 1);
  });

  it('builds a combination that narrows', () => {
    const providers = sample(40, 30, 12);
    const { pairing } = pairingFor(providers);
    const pages = pagesOf(pairing, providers);

    const germany = pages.find((page) => page.av.id === 'php' && page.bv.id === 'DE');
    assert.ok(germany, 'PHP and Germany should be a page');
    assert.equal(germany.matches.length, 12);
    assert.equal(pairPath(germany), '/runtimes/php/regions/germany/');
  });

  it('refuses one that lists too few', () => {
    const providers = sample(40, 30, pairFloor - 1);
    const { pairing } = pairingFor(providers);

    assert.equal(
      pagesOf(pairing, providers).some((page) => page.av.id === 'php' && page.bv.id === 'DE'),
      false,
    );
  });

  it('refuses one that narrows nothing, however many it lists', () => {
    // Every German record also runs PHP, so the pair page is the Germany page.
    const providers = sample(80, 40, 40);
    const { pairing } = pairingFor(providers);
    const page = pagesOf(pairing, providers).find((entry) => entry.av.id === 'php' && entry.bv.id === 'DE');

    assert.equal(narrowing(40, 80, 40), 1);
    assert.equal(page, undefined);
  });

  it('holds the two gates where they were set', () => {
    assert.ok(pairFloor >= 5, 'a page below five records lists nothing');
    assert.ok(pairCeiling <= 0.8, 'above this a combination repeats the page it narrows');
  });
});

describe('what the dictionary declares', () => {
  it('names each pairing once, in one direction', () => {
    const providers = sample(40, 30, 12);
    const facets = [countValues(field('runtimes'), providers), countValues(field('regions'), providers)];
    const both = pairings(facets, fields).map((pairing) => [pairing.a.id, pairing.b.id].sort().join('+'));

    assert.deepEqual(both, [...new Set(both)]);
  });
});

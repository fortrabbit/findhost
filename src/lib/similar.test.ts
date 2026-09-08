import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { comparedFields, similarTo, similarFloor, similarCap } from './similar.ts';
import type { ProviderRow } from './rows.ts';

/* Fixtures rather than the register: the rule is arithmetic, and arithmetic checked against live data breaks the first time a record changes. */
const row = (id: string, facets: Record<string, string | string[]>): ProviderRow =>
  ({ id, name: id, facets, notApplicable: [] }) as unknown as ProviderRow;

const self = row('self', { category: ['paas'], regions: ['DE', 'FI'], software: ['laravel'], priceFrom: 'md' });

describe('similar providers', () => {
  it('compares the fields a reader chooses on', () => {
    assert.deepEqual(comparedFields, ['category', 'regions', 'software', 'runtimes', 'priceFrom', 'whoManagesOs']);
  });

  it('orders by how many fields are shared, then by name', () => {
    const rows = [
      self,
      row('b-two', { category: ['paas'], regions: ['DE'] }),
      row('a-two', { category: ['paas'], priceFrom: 'md' }),
      row('three', { category: ['paas'], regions: ['FI'], software: ['laravel'] }),
    ];
    assert.deepEqual(
      similarTo(self, rows).map((match) => match.row.id),
      ['three', 'a-two', 'b-two'],
    );
  });

  it('counts a field once however many values it shares', () => {
    const rows = [self, row('many', { category: ['paas'], regions: ['DE', 'FI'] })];
    assert.equal(similarTo(self, rows)[0].shared.length, 2);
  });

  it('names what is shared, value by value', () => {
    const rows = [self, row('other', { category: ['paas', 'vps'], regions: ['FI', 'US'] })];
    assert.deepEqual(similarTo(self, rows)[0].shared, [
      { field: 'category', values: ['paas'] },
      { field: 'regions', values: ['FI'] },
    ]);
  });

  it('leaves out the record itself and anything below the floor', () => {
    const rows = [self, row('one', { category: ['paas'] }), row('none', { regions: ['US'] })];
    assert.equal(similarFloor, 2);
    assert.deepEqual(similarTo(self, rows), []);
  });

  it('stops at the cap', () => {
    const rows = [
      self,
      ...Array.from({ length: 30 }, (_, i) => row(`r-${i}`, { category: ['paas'], regions: ['DE'] })),
    ];
    assert.equal(similarTo(self, rows).length, similarCap);
    assert.equal(similarCap, 10);
  });

  it('treats an unknown field as neither shared nor different', () => {
    const rows = [self, row('quiet', { category: ['paas'], regions: ['DE'] })];
    // Nothing recorded for software or price on the other side: two shared, no penalty.
    assert.equal(similarTo(self, rows)[0].shared.length, 2);
  });
});

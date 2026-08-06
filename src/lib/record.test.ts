import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { energy, footnotes, price } from './record.ts';

describe('price', () => {
  it('keeps the provider currency rather than converting', () => {
    assert.match(price({ amount: 4.51, currency: 'EUR', period: 'month' })!, /4\.51/);
    assert.match(price({ amount: 399, currency: 'INR', period: 'month' })!, /399/);
    assert.match(price({ amount: 399, currency: 'INR', period: 'month' })!, /a month$/);
  });

  it('drops decimals only when the amount is whole', () => {
    assert.match(price({ amount: 25, currency: 'USD', period: 'month' })!, /\$25 /);
    assert.match(price({ amount: 2.5, currency: 'USD', period: 'month' })!, /\$2\.50 /);
  });

  /*
   * Two places round Exoscale's €0.0056 an hour up to €0.01 — a figure 79% above
   * the truth, in a dataset whose whole argument is that other people's prices
   * do not match the invoice.
   */
  it('does not round a sub-cent rate into a different number', () => {
    assert.match(price({ amount: 0.0056, currency: 'EUR', period: 'hour' })!, /€0\.0056 /);
    assert.match(price({ amount: 0.008, currency: 'USD', period: 'hour' })!, /\$0\.008 /);
    assert.match(price({ amount: 0.05, currency: 'USD', period: 'hour' })!, /\$0\.05 /);
  });

  it('names the period it was recorded against', () => {
    assert.match(price({ amount: 120, currency: 'USD', period: 'year' })!, /a year$/);
    assert.match(price({ amount: 0.5, currency: 'USD', period: 'hour' })!, /an hour$/);
  });
});

describe('energy', () => {
  // An absent claim is not a claim about absence, so it renders nothing at all.
  it('says nothing where nothing was published', () => {
    assert.equal(energy(undefined), undefined);
    assert.equal(energy('none-published'), undefined);
  });

  it('keeps the three claims distinct', () => {
    const claims = ['24-7-cfe', 'annual-matched', 'offset', 'grid-mix-disclosed'].map(energy);
    assert.ok(claims.every(Boolean));
    assert.equal(new Set(claims).size, claims.length, 'two claims read the same');
  });
});

describe('footnotes', () => {
  const read = new Date('2026-08-01');

  it('groups fields that share a source into one note', () => {
    const { notes, numberOf } = footnotes([
      { field: 'founded', url: 'https://a.example/about', checkedAt: read },
      { field: 'hqCountry', url: 'https://a.example/about', checkedAt: read },
      { field: 'regions', url: 'https://a.example/cloud', checkedAt: read },
    ]);

    assert.equal(notes.length, 2);
    assert.deepEqual(notes[0]!.fields, ['founded', 'hqCountry']);
    assert.equal(numberOf.get('founded'), 1);
    assert.equal(numberOf.get('hqCountry'), 1);
    assert.equal(numberOf.get('regions'), 2);
  });

  // The superscript is the whole mechanism: a fact with no marker is visibly an
  // unsourced assertion, so an unsourced field must never borrow a number.
  it('gives no number to a field nobody sourced', () => {
    const { numberOf } = footnotes([{ field: 'founded', url: 'https://a.example/', checkedAt: read }]);
    assert.equal(numberOf.get('ownership'), undefined);
  });

  it('handles a record with no sources at all', () => {
    const { notes, numberOf } = footnotes(undefined);
    assert.deepEqual(notes, []);
    assert.equal(numberOf.size, 0);
  });

  it('numbers notes in the order they are rendered', () => {
    const { notes, numberOf } = footnotes([
      { field: 'a', url: 'https://one.example/', checkedAt: read },
      { field: 'b', url: 'https://two.example/', checkedAt: read },
      { field: 'c', url: 'https://one.example/', checkedAt: read },
    ]);

    assert.deepEqual(
      notes.map((note) => note.url),
      ['https://one.example/', 'https://two.example/'],
    );
    assert.equal(numberOf.get('c'), 1);
  });
});

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { coins, energy, flag, footnotes, price } from './record.ts';

describe('coins', () => {
  it('counts up with the band', () => {
    assert.equal(coins('under-5'), '🪙');
    assert.equal(coins('5-15'), '🪙🪙');
    assert.equal(coins('over-500'), '🪙🪙🪙🪙🪙🪙');
  });

  // A free tier answers "what does it cost" with a different kind of answer,
  // and zero coins would be indistinguishable from an unrecorded band.
  it('says free in words rather than showing nothing', () => {
    assert.equal(coins('free-tier'), 'free');
  });

  it('renders nothing for an absent or unknown band', () => {
    assert.equal(coins(undefined), undefined);
    assert.equal(coins('made-up'), undefined);
  });

  // The scale must stay monotonic: if a cheaper band ever printed more coins
  // than a dearer one, every list on the site would quietly mislead.
  it('never gives a cheaper band more coins than a dearer one', () => {
    const bands = ['under-5', '5-15', '15-50', '50-150', '150-500', 'over-500'];
    const lengths = bands.map((band) => [...coins(band)!].length);
    assert.deepEqual(
      lengths,
      [...lengths].sort((a, b) => a - b),
    );
    assert.equal(new Set(lengths).size, bands.length, 'two bands render identically');
  });
});

describe('flag', () => {
  it('turns a country code into regional indicators', () => {
    assert.equal(flag('DE'), '🇩🇪');
    assert.equal(flag('de'), '🇩🇪');
  });

  it('declines anything that is not a two-letter code', () => {
    assert.equal(flag(undefined), undefined);
    assert.equal(flag('DEU'), undefined);
    assert.equal(flag(''), undefined);
  });
});

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

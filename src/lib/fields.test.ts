import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { fieldOf, subjectOf } from './fields.ts';

const subject = (field: string, value: { id: string; label: string }, count: number) =>
  subjectOf(fieldOf.get(field)!, value, count);

describe('subjectOf', () => {
  // The bug this exists to stop: "1 provider operate in Kenya", live on
  // /regions/kenya/ and on every other facet value held by a single record.
  it('agrees with the count', () => {
    const one = { id: 'KE', label: 'Kenya' };
    assert.equal(subject('regions', one, 1), 'operates in Kenya');
    assert.equal(subject('regions', one, 12), 'operate in Kenya');
  });

  it('inflects a verb that takes -es rather than -s', () => {
    const value = { id: 'phone', label: 'Phone' };
    assert.equal(subject('supportChannels', value, 1), 'publishes a phone number');
    assert.equal(subject('supportChannels', value, 9), 'publish a phone number');
  });

  it('swaps a whole word where -s would be wrong', () => {
    const value = { id: 'independent', label: 'Independent' };
    assert.equal(subject('ownership', value, 1), 'is independent');
    assert.equal(subject('ownership', value, 3), 'are independent');
  });

  // "can be left …" and "we like …" are already right in both numbers, so they
  // carry no marker and must come back exactly as written.
  it('leaves an unmarked phrase alone', () => {
    const value = fieldOf.get('exitWithin')!.values[0]!;
    assert.match(subject('exitWithin', value, 1), /^can be left /);
    assert.equal(subject('exitWithin', value, 1), subject('exitWithin', value, 4));
  });

  it('never leaves an inflection marker in the rendered phrase', () => {
    for (const field of fieldOf.values()) {
      for (const value of field.values) {
        for (const count of [1, 2]) {
          const phrase = subjectOf(field, value, count);
          assert.doesNotMatch(phrase, /[{}|]/, `${field.id}/${value.id}: ${phrase}`);
        }
      }
    }
  });
});

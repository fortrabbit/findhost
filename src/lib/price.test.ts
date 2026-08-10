import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { fieldOf } from './fields.ts';
import { priceBands } from './price.ts';

describe('the price scale', () => {
  it('has seven bands and no free one', () => {
    assert.equal(priceBands.length, 7);
    // Free is what a provider gives away; this records what it charges.
    assert.equal(
      priceBands.some((band) => /free/i.test(band.label)),
      false,
    );
  });

  it('runs cheap to expensive, which is what makes it a scale', () => {
    assert.deepEqual(
      priceBands.map((band) => band.id),
      ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
    );
  });

  /*
   * The ids were once free-tier, under-5, 5-15 and so on. A record still
   * carrying one has to fail the schema rather than file itself under nothing.
   */
  it('does not recognise the ids it replaced', () => {
    for (const old of ['free-tier', 'under-5', '5-15']) {
      assert.ok(!priceBands.some((band) => band.id === old), `${old} should be gone`);
    }
  });

  /*
   * validate.ts asserts this too, on every build — repeated here because that
   * check is the reason the bands are written out twice, and a test that fails
   * in a second is a faster way to find out than a build that does.
   */
  it('says the same thing as the dictionary', () => {
    const dictionary = (fieldOf.get('priceFrom')?.values ?? []).map((value) => `${value.id}: ${value.label}`);
    assert.deepEqual(
      priceBands.map((band) => `${band.id}: ${band.label}`),
      dictionary,
    );
  });
});

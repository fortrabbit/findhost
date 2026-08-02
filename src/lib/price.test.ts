import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { bandIndex, bandLabel, gaugeSlices, priceBands, priceSentence, sliceHeight } from './price.ts';

describe('the scale', () => {
  it('has seven bands and no free one', () => {
    assert.equal(priceBands.length, 7);
    assert.equal(gaugeSlices, 7);
    // Free is what a provider gives away; this records what it charges.
    assert.equal(
      priceBands.some((band) => /free/i.test(band.label)),
      false,
    );
  });

  it('orders from cheap to expensive, because the gauge fills left to right', () => {
    const indexes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].map(bandIndex);
    assert.deepEqual(indexes, [0, 1, 2, 3, 4, 5, 6]);
  });

  it('does not recognise the bands it replaced', () => {
    // The old ids were free-tier, under-5, 5-15 and so on. A record still
    // carrying one must fail the schema rather than render as an empty gauge.
    assert.equal(bandIndex('under-5'), -1);
    assert.equal(bandIndex('free-tier'), -1);
    assert.equal(bandLabel('5-15'), undefined);
  });
});

describe('sliceHeight', () => {
  it('rises across the scale and never reaches zero', () => {
    const heights = Array.from({ length: gaugeSlices }, (_, index) => sliceHeight(index));

    assert.ok(heights[0]! > 0, 'the first band has to be visible');
    assert.equal(heights.at(-1), 1);

    for (let index = 1; index < heights.length; index += 1) {
      assert.ok(heights[index]! > heights[index - 1]!, `band ${index} must be taller than ${index - 1}`);
    }
  });
});

describe('priceSentence', () => {
  it('says both ends of a range', () => {
    assert.equal(priceSentence('xs', 'lg'), 'From under $5 a month up to $50 to $150 a month');
  });

  it('says so when only the start is known, rather than implying a ceiling', () => {
    assert.equal(priceSentence('sm', undefined), 'Starts $5 to $15 a month');
    assert.equal(priceSentence('sm', 'sm'), 'Starts $5 to $15 a month');
  });

  /* An absent band means unknown, so there is nothing to announce. */
  it('is absent when the band is', () => {
    assert.equal(priceSentence(undefined, undefined), undefined);
    assert.equal(priceSentence(undefined, 'lg'), undefined);
  });
});

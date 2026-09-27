import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { contrast } from './contrast.ts';

describe('contrast', () => {
  it('measures black on white as 21:1 either way round', () => {
    assert.equal(contrast('rgb(0, 0, 0)', '#ffffff'), 21);
    assert.equal(contrast('#FFFFFF', 'rgb(0,0,0)'), 21);
  });

  it('matches the WCAG figure for a known pair', () => {
    assert.equal(contrast('rgb(183, 145, 52)', 'rgb(246, 242, 234)')!.toFixed(2), '2.64');
  });

  it('refuses a spelling it cannot read', () => {
    assert.equal(contrast('gold', '#fff'), undefined);
  });
});

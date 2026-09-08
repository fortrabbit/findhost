import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { modifiedAt, newest, updatedAfterCheck } from './modified.ts';

const day = (iso: string) => new Date(iso);

describe('the modified date', () => {
  it('is checkedAt when no source is newer', () => {
    const data = { checkedAt: day('2026-09-08'), sources: [{ checkedAt: day('2026-07-31') }] };
    assert.equal(modifiedAt(data)?.toISOString().slice(0, 10), '2026-09-08');
    assert.equal(updatedAfterCheck(data), undefined);
  });

  it('is the newest source when a script refreshed one field after the review', () => {
    const data = {
      checkedAt: day('2026-08-01'),
      sources: [{ checkedAt: day('2026-09-07') }, { checkedAt: day('2026-07-31') }],
    };
    assert.equal(modifiedAt(data)?.toISOString().slice(0, 10), '2026-09-07');
    assert.equal(updatedAfterCheck(data)?.toISOString().slice(0, 10), '2026-09-07');
  });

  it('comes from the sources alone when nobody has reviewed the record', () => {
    const data = { sources: [{ checkedAt: day('2026-09-07') }] };
    assert.equal(modifiedAt(data)?.toISOString().slice(0, 10), '2026-09-07');
    assert.equal(updatedAfterCheck(data)?.toISOString().slice(0, 10), '2026-09-07');
  });

  it('is absent when the record carries no date at all', () => {
    assert.equal(modifiedAt({}), undefined);
    assert.equal(newest([undefined, undefined]), undefined);
  });
});

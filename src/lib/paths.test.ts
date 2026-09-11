import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { isHolding, recordMarkdownPath, recordPath } from './paths.ts';

const record = (id: string, status?: string) => ({ id, data: { status } });

describe('recordPath', () => {
  it('leaves a listed record in the root namespace', () => {
    assert.equal(recordPath(record('hetzner')), '/hetzner/');
    assert.equal(recordPath(record('hetzner', 'active')), '/hetzner/');
  });

  it('puts a holding company under its own path', () => {
    assert.equal(recordPath(record('siris', 'unlisted')), '/holdings/siris/');
  });

  it('leaves every other group beside the register at the root', () => {
    assert.equal(recordPath(record('heart-internet', 'discontinued')), '/heart-internet/');
    assert.equal(recordPath(record('plesk', 'active')), '/plesk/');
  });

  it('writes the markdown twin from the same rule', () => {
    assert.equal(recordMarkdownPath(record('hetzner')), '/hetzner.md');
    assert.equal(recordMarkdownPath(record('siris', 'unlisted')), '/holdings/siris.md');
  });
});

describe('isHolding', () => {
  it('reads the dictionary rather than a list of its own', () => {
    assert.equal(isHolding(record('siris', 'unlisted')), true);
    assert.equal(isHolding(record('hetzner')), false);
  });
});

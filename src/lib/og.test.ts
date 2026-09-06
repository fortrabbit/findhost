import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { emojiFile } from './og.ts';

/*
 * Twemoji's filenames keep U+FE0F inside a joined sequence and drop it
 * everywhere else, including keycaps. The resolver asks the disk rather than
 * encoding that, so these pin the cases that used to come out as boxes.
 */
describe('emojiFile', () => {
  it('finds a plain emoji', () => {
    assert.match(emojiFile('🐇'), /1f407\.svg$/);
  });

  it('drops the variation selector from a plain emoji', () => {
    assert.match(emojiFile('☀️'), /[/\\]2600\.svg$/);
  });

  it('keeps the variation selector inside a joined sequence', () => {
    assert.match(emojiFile('🏳️‍🌈'), /1f3f3-fe0f-200d-1f308\.svg$/);
    assert.match(emojiFile('❤️‍🔥'), /2764-fe0f-200d-1f525\.svg$/);
    assert.match(emojiFile('🕵️‍♀️'), /1f575-fe0f-200d-2640-fe0f\.svg$/);
  });

  it('drops it from a keycap', () => {
    assert.match(emojiFile('1️⃣'), /[/\\]31-20e3\.svg$/);
  });

  it('finds a flag', () => {
    assert.match(emojiFile('🇩🇪'), /1f1e9-1f1ea\.svg$/);
  });

  it('refuses rather than draw a box', () => {
    assert.throws(() => emojiFile('\u{10FFFF}'), /No Twemoji image/);
  });
});

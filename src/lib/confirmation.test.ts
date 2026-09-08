import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { isConfirmation, isRecord, withoutDates } from './confirmation.ts';

const record = [
  '---',
  'id: hetzner',
  'name: Hetzner',
  'founded: 1997',
  'status: active',
  'checkedAt: 2026-08-01',
  'sources:',
  "  - { field: founded, url: 'https://www.hetzner.com/about/', checkedAt: 2026-07-31 }",
  "  - { field: regions, url: 'https://www.hetzner.com/cloud/', checkedAt: 2026-08-01 }",
  '---',
  '',
  'Hetzner Online GmbH was founded in 1997.',
].join('\n');

describe('a confirmation', () => {
  it('is a change to checkedAt dates and nothing else', () => {
    const after = record
      .replace('checkedAt: 2026-08-01\n', 'checkedAt: 2026-09-08\n')
      .replace('2026-07-31', '2026-09-08');
    assert.equal(isConfirmation(record, after), true);
  });

  it('includes setting a checkedAt where there was none', () => {
    const before = record.replace('checkedAt: 2026-08-01\n', '');
    assert.equal(isConfirmation(before, record), true);
  });

  it('is not a changed value, even with the dates bumped', () => {
    const after = record.replace('founded: 1997', 'founded: 1998').replace('2026-07-31', '2026-09-08');
    assert.equal(isConfirmation(record, after), false);
  });

  it('is not a status change', () => {
    assert.equal(isConfirmation(record, record.replace('status: active', 'status: discontinued')), false);
  });

  it('is not a moved source', () => {
    assert.equal(isConfirmation(record, record.replace('/about/', '/company/')), false);
  });

  it('is not a change to prose', () => {
    assert.equal(isConfirmation(record, record.replace('founded in 1997.', 'founded in 1997 in Gunzenhausen.')), false);
  });

  it('is not an added source, which is research', () => {
    const after = record.replace(
      '---\n\nHetzner',
      "  - { field: hqCountry, url: 'https://www.hetzner.com/about/', checkedAt: 2026-09-08 }\n---\n\nHetzner",
    );
    assert.equal(isConfirmation(record, after), false);
  });
});

describe('the date blanking', () => {
  it('leaves everything but the dates', () => {
    assert.equal(withoutDates(record).includes('2026'), false);
    assert.equal(withoutDates(record).includes('founded: 1997'), true);
  });
});

describe('what counts as a record', () => {
  it('is a markdown file directly under the providers directory', () => {
    assert.equal(isRecord('src/content/providers/hetzner.md'), true);
    assert.equal(isRecord('src/content/notes/categories.md'), false);
    assert.equal(isRecord('src/content/providers/README.md'), true);
  });
});

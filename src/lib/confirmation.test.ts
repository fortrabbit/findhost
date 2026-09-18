import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { changedFields, isConfirmation, isRecord, isSelfMerging, withoutDates } from './confirmation.ts';

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

describe('a sourced change', () => {
  it('is a field the record cites, so the routine merges it', () => {
    const after = record.replace('founded: 1997', 'founded: 1998').replace('2026-07-31', '2026-09-08');
    assert.equal(isSelfMerging(record, after), true);
  });

  it('is not a field nothing cites', () => {
    const after = record.replace('name: Hetzner', 'name: Hetzner Online');
    assert.equal(isSelfMerging(record, after), false);
  });

  it('is not a status change, however well cited', () => {
    const after = record
      .replace('status: active', 'status: discontinued')
      .replace('---\n\nHetzner', "  - { field: status, url: 'https://www.hetzner.com/news/', checkedAt: 2026-09-08 }\n---\n\nHetzner");
    assert.equal(isSelfMerging(record, after), false);
  });

  it('is not a change to prose', () => {
    assert.equal(isSelfMerging(record, record.replace('founded in 1997.', 'founded in 1998.')), false);
  });

  it('covers a confirmation, which changes no field at all', () => {
    const after = record.replace('checkedAt: 2026-08-01', 'checkedAt: 2026-09-08');
    assert.equal(isSelfMerging(record, after), true);
  });

  it('takes a list as one field, so a changed region is a changed regions', () => {
    const listed = record.replace('founded: 1997', 'regions:\n  - DE\n  - FI');
    const after = listed.replace('  - FI', '  - US');
    assert.deepEqual(changedFields(listed, after), ['regions']);
    assert.equal(isSelfMerging(listed, after), true);
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

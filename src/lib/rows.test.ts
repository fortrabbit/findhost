import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { fieldOf } from './fields.ts';
import { countValues, toRow, type ProviderRow } from './rows.ts';

/*
 * The counting rules, which are the ones that decide what the register claims.
 * Every bug this file would have caught was found by eye instead: a derived
 * value that stopped matching arrays, a `*` source that matched nothing, a
 * `notApplicable` field counted as missing. They are pure functions of a
 * record's frontmatter — there is no excuse for reading them off a page.
 */

const record = (id: string, data: Record<string, unknown>) => ({ id, data: { name: id, ...data } });

describe('toRow', () => {
  it('keeps a scalar as a scalar and a list as a list', () => {
    const row = toRow(record('a', { category: 'paas', runtimes: ['php', 'node'] }));
    assert.equal(row.facets.category, 'paas');
    assert.deepEqual(row.facets.runtimes, ['php', 'node']);
  });

  it('leaves a field nobody answered out entirely', () => {
    const row = toRow(record('a', {}));
    assert.equal(row.facets.category, undefined);
    assert.deepEqual(row.notApplicable, []);
  });

  /*
   * Not the same as unknown, and the difference is the whole reason the field
   * accepts null: a panel that provisions onto your own cloud account has no
   * regions of its own, and counting that as a gap inflates every facet.
   */
  it('separates "does not apply" from "not recorded"', () => {
    const row = toRow(record('a', { regions: null }));
    assert.deepEqual(row.notApplicable, ['regions']);
    assert.equal(row.facets.regions, undefined);
  });

  it('drops an empty list rather than recording an empty answer', () => {
    const row = toRow(record('a', { runtimes: [] }));
    assert.equal(row.facets.runtimes, undefined);
  });

  describe('a derived field', () => {
    it('answers no, not maybe, once any of its sources is recorded', () => {
      const row = toRow(record('a', { apiAvailable: 'none' }));
      assert.deepEqual(row.facets.automation, []);
    });

    it('stays unknown while none of its sources is recorded', () => {
      const row = toRow(record('a', { category: 'paas' }));
      assert.equal(row.facets.automation, undefined);
    });

    it('matches a source that holds a list, not only a scalar', () => {
      const row = toRow(record('a', { iacSupport: ['terraform', 'ansible'] }));
      assert.ok((row.facets.automation as string[]).includes('iac'));
    });

    /* `*` means recorded at all, for a source with no vocabulary to name. */
    it('takes any value at all where the source has no vocabulary', () => {
      const row = toRow(record('a', { greenWebId: 595 }));
      assert.deepEqual(row.facets.features, ['green']);
    });

    /*
     * One question, two fields that can answer it. Either alone is a yes, which
     * is what lets green energy be one value rather than the five that named our
     * filing instead of a reader's question.
     */
    it('holds a value either of its sources answers', () => {
      const own = toRow(record('a', { energyClaim: 'annual-matched' }));
      assert.deepEqual(own.facets.features, ['green']);

      const both = toRow(record('b', { energyClaim: 'annual-matched', greenWebId: 595 }));
      assert.deepEqual(both.facets.features, ['green']);
    });

    it('is asked but unheld where a source is recorded as the value that does not count', () => {
      const row = toRow(record('a', { energyClaim: 'none-published' }));
      assert.deepEqual(row.facets.features, []);
    });
  });
});

describe('countValues', () => {
  const category = fieldOf.get('category')!;

  const rows = (...answers: (string | null | undefined)[]): ProviderRow[] =>
    answers.map((answer, index) =>
      toRow(record(`r${index}`, answer === undefined ? {} : { category: answer })),
    );

  it('counts each value against the records that hold it', () => {
    const facet = countValues(category, rows('paas', 'paas', 'iaas'));
    assert.equal(facet.values.find((value) => value.id === 'paas')?.count, 2);
    assert.equal(facet.values.find((value) => value.id === 'iaas')?.count, 1);
  });

  it('reports what nobody recorded rather than dropping it', () => {
    const facet = countValues(category, rows('paas', undefined, undefined));
    assert.equal(facet.unknown, 2);
    assert.equal(facet.notApplicable, 0);
  });

  /* Out of the denominator entirely: not known, and not missing either. */
  it('takes "does not apply" out of the unknown count', () => {
    const facet = countValues(category, rows('paas', null, undefined));
    assert.equal(facet.notApplicable, 1);
    assert.equal(facet.unknown, 1);
  });

  /*
   * Recorded and shown on the record, never a filter and so never a page. "No
   * shell" is a fact worth reading and not a list anybody wants.
   */
  it('leaves a noFilter value out of the rows', () => {
    const shell = fieldOf.get('sshAccess')!;
    const unfiltered = shell.values.filter((value) => value.noFilter).map((value) => value.id);
    assert.ok(unfiltered.length > 0, 'sshAccess should still have a noFilter value');

    const facet = countValues(shell, []);
    for (const id of unfiltered) assert.ok(!facet.values.some((value) => value.id === id));
    assert.equal(facet.values.length, shell.values.length - unfiltered.length);
  });

  it('names the facet by its URL segment, not by its field', () => {
    const facet = countValues(category, []);
    assert.equal(facet.id, 'categories');
    assert.equal(facet.field, 'category');
  });
});

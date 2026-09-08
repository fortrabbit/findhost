/**
 * The records most like this one, by how many facts they share.
 *
 * Ordered by a count of shared fields, which is an order the register otherwise
 * refuses: the rule in CLAUDE.md forbids ordering by quality, and a shared-fact
 * count is not one — a provider at the top of this list is the one most like
 * the record being read, not the best of them. Every row says which facts it
 * shares, so the order explains itself and nothing is implied beyond it.
 *
 * Pure, so `node --test` can reach it without the content collection.
 */
import { byName, type ProviderRow } from './rows.ts';

/**
 * What a reader chooses on, most-asked first. Not every facet: sharing a
 * payment method or a support channel says little about whether two hosts are
 * alternatives to each other.
 */
export const comparedFields = ['category', 'regions', 'software', 'runtimes', 'priceFrom', 'whoManagesOs'] as const;

/**
 * Nearly every record holds a category, so one shared field is half the
 * register. Two is where a list starts to say something.
 */
export const similarFloor = 2;

export const similarCap = 20;

export interface Shared {
  field: string;
  values: string[];
}

export interface Similar {
  row: ProviderRow;
  /** Fields both hold a common value of, in `comparedFields` order, with the values in common. */
  shared: Shared[];
}

const valuesOf = (row: ProviderRow, field: string): string[] => {
  const held = row.facets[field];
  return held === undefined ? [] : Array.isArray(held) ? held : [held];
};

/**
 * One point per field, not per value: a host in twelve of the same countries is
 * not twelve times the alternative that a host in one of them is. A field
 * unknown on either side is left out — absent means unknown, never a mismatch.
 *
 * Category is the one field that has to match. An alternative sells the same
 * kind of thing: a shared host in the same country running the same software
 * at the same price is not one to a platform, and without this rule it led the
 * list.
 */
export function similarTo(self: ProviderRow, rows: ProviderRow[]): Similar[] {
  const mine = valuesOf(self, 'category');
  return rows
    .filter((row) => row.id !== self.id && valuesOf(row, 'category').some((value) => mine.includes(value)))
    .map((row) => ({
      row,
      shared: comparedFields.flatMap((field) => {
        const mine = valuesOf(self, field);
        const values = valuesOf(row, field).filter((value) => mine.includes(value));
        return values.length ? [{ field, values }] : [];
      }),
    }))
    .filter((match) => match.shared.length >= similarFloor)
    .sort((a, b) => b.shared.length - a.shared.length || byName(a.row, b.row))
    .slice(0, similarCap);
}

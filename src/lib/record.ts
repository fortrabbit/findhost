import { labelOf } from './fields.ts';

/*
 * The exact figure in the provider's own currency, so nobody reads a conversion
 * we invented. Intl gives us the right symbol and separators per currency.
 */
export function price(entry: { amount: number; currency: string; period: string } | undefined): string | undefined {
  if (!entry) return undefined;
  /*
   * Two decimal places is right for a monthly plan and wrong for an hourly rate.
   * Exoscale's cheapest instance is €0.0056 an hour, which rounds to €0.01 — a
   * figure 79% above the truth, published as a fact, in a dataset whose argument
   * is that everyone else's prices do not match the invoice. Below a unit the
   * places grow until two significant digits survive.
   */
  const whole = entry.amount % 1 === 0;
  const places = whole ? 0 : entry.amount >= 1 ? 2 : Math.min(6, Math.ceil(-Math.log10(Math.abs(entry.amount))) + 1);

  const money = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: entry.currency,
    minimumFractionDigits: whole ? 0 : 2,
    maximumFractionDigits: places,
  }).format(entry.amount);
  const per = { month: 'a month', year: 'a year', hour: 'an hour' }[entry.period] ?? 'a month';
  return `from ${money} ${per}`;
}

/*
 * Four different claims that marketing blurs into one word. The leaf is the
 * scannable part; the words are the honest part, and they are the dictionary's
 * own. The one rule that is not a label is the exclusion: `none-published` gets
 * no strip entry at all, an absent claim being no claim about absence.
 */
export function energy(claim: string | undefined): string | undefined {
  if (!claim || claim === 'none-published') return undefined;
  return labelOf('energyClaim', claim).toLowerCase();
}

export type Source = { field: string; url: string; checkedAt: Date };

/**
 * Group sources by URL, so one page cited for four fields is one footnote and
 * not four. Returns the numbered footnotes plus a lookup from field to number.
 */
export function footnotes(sources: Source[] | undefined) {
  const byUrl = new Map<string, { url: string; fields: string[]; checkedAt: Date }>();

  for (const source of sources ?? []) {
    const existing = byUrl.get(source.url);
    if (existing) existing.fields.push(source.field);
    else byUrl.set(source.url, { url: source.url, fields: [source.field], checkedAt: source.checkedAt });
  }

  const notes = [...byUrl.values()];
  const numberOf = new Map<string, number>();
  notes.forEach((note, index) => note.fields.forEach((field) => numberOf.set(field, index + 1)));

  return { notes, numberOf };
}

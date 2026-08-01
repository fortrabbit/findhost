/*
 * Presentation helpers for a single record. Nothing here computes a judgement —
 * the coin scale is a band rendered without a currency, not a rating, so it
 * never carries colour, never sorts, and cheaper never reads as better.
 */

const coinsPerBand: Record<string, number> = {
  'under-5': 1,
  '5-15': 2,
  '15-50': 3,
  '50-150': 4,
  '150-500': 5,
  'over-500': 6,
};

/** A free tier is a different kind of answer to "what does it cost", so it says so in words. */
export function coins(band: string | undefined): string | undefined {
  if (!band) return undefined;
  if (band === 'free-tier') return 'free';
  const count = coinsPerBand[band];
  return count ? '🪙'.repeat(count) : undefined;
}

/** Regional indicator pair. Two letters in, one flag out. */
export function flag(country: string | undefined): string | undefined {
  if (!country || country.length !== 2) return undefined;
  return String.fromCodePoint(...[...country.toUpperCase()].map((letter) => 0x1f1e6 + letter.charCodeAt(0) - 65));
}

/*
 * The exact figure in the provider's own currency, so nobody reads a conversion
 * we invented. Intl gives us the right symbol and separators per currency.
 */
export function price(entry: { amount: number; currency: string; period: string } | undefined): string | undefined {
  if (!entry) return undefined;
  const money = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: entry.currency,
    maximumFractionDigits: entry.amount % 1 === 0 ? 0 : 2,
  }).format(entry.amount);
  const per = { month: 'a month', year: 'a year', hour: 'an hour' }[entry.period] ?? 'a month';
  return `from ${money} ${per}`;
}

/*
 * Three different claims that marketing blurs into one word. The leaf is the
 * scannable part; the words are the honest part. `none-published` gets no strip
 * entry at all — an absent claim is not a claim about absence.
 */
const energyLabels: Record<string, string> = {
  '24-7-cfe': '24/7 carbon-free',
  'annual-matched': 'annually matched renewables',
  offset: 'offsets purchased',
};

export function energy(claim: string | undefined): string | undefined {
  return claim ? energyLabels[claim] : undefined;
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

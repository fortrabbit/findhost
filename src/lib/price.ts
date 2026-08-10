/*
 * The price scale, in one place because the dictionary names it and a policy
 * page describes it.
 *
 * lib/fields.ts reads the dictionary off disk, which is fine here and would not
 * be in a browser — so the bands are written out rather than derived, and
 * scripts/validate.ts asserts that this copy and the `priceFrom` vocabulary
 * still agree.
 *
 * Seven bands, in US dollars a month. The boundaries roughly triple, which is
 * what puts the variety where the shopping happens: a band covers $5 to $15 at
 * the bottom and $500 to $1500 at the top, so the cheap end gets as much of the
 * scale as the expensive end. Most of this market lives in the first three
 * bands, and a linear scale would squeeze all of it into one.
 *
 * A free tier is not a price and is not on this scale. It is recorded in
 * `freeTier`, because "free" describes what a provider gives away, and this
 * describes what it charges.
 */
export const priceBands = [
  { id: 'xs', label: 'Under $5 a month', short: 'XS' },
  { id: 'sm', label: '$5 to $15 a month', short: 'SM' },
  { id: 'md', label: '$15 to $50 a month', short: 'MD' },
  { id: 'lg', label: '$50 to $150 a month', short: 'LG' },
  { id: 'xl', label: '$150 to $500 a month', short: 'XL' },
  { id: '2xl', label: '$500 to $1,500 a month', short: '2XL' },
  { id: '3xl', label: 'Over $1,500 a month', short: '3XL' },
];

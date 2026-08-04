/*
 * The price scale, in one place because three surfaces draw it and a policy page
 * describes it.
 *
 * This file is written to be safe in the client bundle, because the gauge it
 * measures is drawn in the DOM whenever scripts/find.ts renders one. It may not
 * import lib/fields.ts, which reads the dictionary off disk — doing so puts
 * `node:fs` in the client bundle, the script throws on load, and the filter
 * panel never unhides. The bands below therefore repeat the `priceFrom`
 * vocabulary, and scripts/validate.ts asserts the two still agree.
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

export const bandIds = priceBands.map((band) => band.id);

export function bandIndex(id: string | undefined): number {
  return id === undefined ? -1 : bandIds.indexOf(id);
}

export function bandLabel(id: string | undefined): string | undefined {
  return priceBands.find((band) => band.id === id)?.label;
}

/**
 * What the gauge is announced as. A range says both ends; a lone `from` says so
 * rather than implying the top is unknown because it is low.
 */
export function priceSentence(from: string | undefined, to: string | undefined): string | undefined {
  const start = bandLabel(from);
  if (!start) return undefined;

  const end = bandLabel(to);
  if (!end || from === to) return `Starts ${start.toLowerCase()}`;

  return `From ${start.toLowerCase()} up to ${end.toLowerCase()}`;
}

/*
 * The outline: seven slices of equal width, rising left to right. The width is
 * equal because the scale underneath is already logarithmic — the slices carry
 * the shape, the boundaries carry the maths.
 */
export const gaugeSlices = priceBands.length;

/**
 * Height of slice `index` as a fraction of the tallest. The floor is well clear
 * of the tick an uncovered band draws — a record whose whole range is the first
 * band is common, and it has to read as a bar rather than as a slightly tall
 * tick.
 */
export function sliceHeight(index: number): number {
  const smallest = 0.28;
  return smallest + (1 - smallest) * (index / (gaugeSlices - 1));
}

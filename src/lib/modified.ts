/**
 * When a record last changed, for the dates a machine reads: the sitemap's
 * <lastmod>, the schema's dateModified, the feed's <updated>. Pure, so
 * `node --test` can hold it to the record shape without a build.
 *
 * `checkedAt` is the claim a person cares about: the record was read against
 * the provider's own pages on that date. But a record also changes when one
 * field is refreshed on its own — the monthly Majestic pull moves the reach
 * figure and dates that one source — and a crawler told nothing happened will
 * not come back for it. So the modified date is the newest date on the record,
 * its own `checkedAt` or any source's, and `checkedAt` keeps meaning what it
 * says on the page.
 */

type Dated = { checkedAt?: Date; sources?: { checkedAt: Date }[] };

export function newest(dates: (Date | undefined)[]): Date | undefined {
  return dates.reduce<Date | undefined>((best, date) => (date && (!best || date > best) ? date : best), undefined);
}

export function modifiedAt(data: Dated): Date | undefined {
  return newest([data.checkedAt, ...(data.sources ?? []).map((source) => source.checkedAt)]);
}

/** The modified date only when it says more than `checkedAt` does. */
export function updatedAfterCheck(data: Dated): Date | undefined {
  const modified = modifiedAt(data);
  return modified && (!data.checkedAt || modified > data.checkedAt) ? modified : undefined;
}

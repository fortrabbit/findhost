import type { Facet, ProviderRow } from './facets';

/**
 * Two sentences assembled from the records themselves.
 *
 * Every clause counts something on this page, so it cannot be wrong and it
 * cannot be padding — which is the only way to give a hundred-odd list pages an
 * opening line without becoming the thin-content farm this dataset exists to
 * correct. Where a value deserves real guidance it gets a written note as well;
 * this is the floor, not the ceiling.
 *
 * Two sentences and no more. Three facts about a page are read; six are skipped,
 * and a wall of counted nouns reads as filler however true each number is.
 */
export function summarise(matches: ProviderRow[], facets: Facet[], facetId: string, subject: string): string {
  const count = matches.length;
  const noun = count === 1 ? 'provider' : 'providers';

  /** Values of one facet held by the records on this page, commonest first. */
  const spread = (id: string) => {
    const facet = facets.find((entry) => entry.id === id);
    if (!facet) return [];

    return facet.values
      .map((value) => ({
        label: value.label,
        count: matches.filter((provider) => {
          const held = provider.facets[facet.field];
          return Array.isArray(held) ? held.includes(value.id) : held === value.id;
        }).length,
      }))
      .filter((value) => value.count > 0)
      .sort((a, b) => b.count - a.count);
  };

  /*
   * Candidates for the second sentence, best first. The page's own facet is
   * skipped: restating what the heading says is the duplication, not the length.
   */
  const clauses: string[] = [];

  if (facetId !== 'category') {
    const categories = spread('category');
    if (categories.length) {
      const named = categories.slice(0, 3).map((entry) => entry.label.toLowerCase());
      const joined = named.length > 1 ? `${named.slice(0, -1).join(', ')} and ${named.at(-1)}` : named[0];
      if (categories.length > named.length) clauses.push(`mostly ${joined}, of ${categories.length} categories in all`);
      else if (named.length > 1) clauses.push(`split across ${joined}`);
      else clauses.push(`all of them ${joined}`);
    }
  }

  const regions = spread('regions');
  if (regions.length) {
    const others = facetId === 'regions' ? regions.length - 1 : regions.length;
    const places = others === 1 ? 'country' : 'countries';
    if (others > 0)
      clauses.push(facetId === 'regions' ? `also in ${others} other ${places}` : `across ${others} ${places}`);
  }

  if (facetId !== 'entry-price') {
    const price = spread('entry-price');
    if (price.length) clauses.push(`commonest entry price ${price[0]!.label.toLowerCase()}`);
  }

  /*
   * A second clause only where the first left room for one. Capping by length
   * rather than by count is what keeps the sentence readable: "mostly a, b and
   * c, of seven categories in all" has spent the sentence on its own.
   */
  const context = clauses
    .slice(0, 2)
    .reduce(
      (held, clause) => (held && held.length + clause.length > 80 ? held : [held, clause].filter(Boolean).join(', ')),
      '',
    );

  return [
    `${count} ${noun} ${subject}, listed alphabetically.`,
    context && `${context[0]!.toUpperCase()}${context.slice(1)}.`,
  ]
    .filter(Boolean)
    .join(' ');
}

/**
 * The opening sentence, for the meta description — the second says who else is
 * on the page, which a search result has no room for.
 *
 * It splits on a period *and a space*, because a label may carry a period of its
 * own: "5 providers run Node.js, listed alphabetically" has three full stops and
 * one sentence. Re-terminating only where the split actually happened is what
 * keeps a one-sentence summary from ending in two.
 */
export function firstSentence(summary: string): string {
  const [first = summary] = summary.split('. ');
  return first.endsWith('.') ? first : `${first}.`;
}

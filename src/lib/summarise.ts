import type { Facet, ProviderRow } from './facets';

/**
 * A lead paragraph assembled from the records themselves.
 *
 * Every clause counts something on this page, so it cannot be wrong and it
 * cannot be padding — which is the only way to give a hundred-odd list pages an
 * opening line without becoming the thin-content farm this dataset exists to
 * correct. Where a value deserves real guidance it gets a written note as well;
 * this is the floor, not the ceiling.
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

  const sentences = [`${count} ${noun} in the dataset ${subject}.`];

  // The page's own facet is the one thing not worth restating back to the reader.
  if (facetId !== 'category') {
    const categories = spread('category');
    if (categories.length) {
      const named = categories.slice(0, 3).map((entry) => entry.label.toLowerCase());
      const rest = categories.length - named.length;
      const joined = named.length > 1 ? `${named.slice(0, -1).join(', ')} and ${named.at(-1)}` : named[0];
      if (rest > 0) sentences.push(`Mostly ${joined}, across ${categories.length} categories in all.`);
      else if (named.length > 1) sentences.push(`Split across ${joined}.`);
      else sentences.push(`All of them ${joined}.`);
    }
  }

  const tail: string[] = [];

  const regions = spread('regions');
  if (regions.length) {
    if (facetId === 'regions') {
      const others = regions.length - 1;
      if (others > 0) tail.push(`they also operate in ${others} other ${others === 1 ? 'country' : 'countries'}`);
    } else {
      tail.push(`they operate in ${regions.length} ${regions.length === 1 ? 'country' : 'countries'}`);
    }
  }

  if (facetId !== 'entry-price') {
    const price = spread('entry-price');
    if (price.length) {
      tail.push(`the commonest entry price is ${price[0]!.label.toLowerCase()} (${price[0]!.count} of them)`);
    }
  }

  if (tail.length) {
    sentences.push(`Between them ${tail.join(', and ')}.`);
  }

  return sentences.join(' ');
}

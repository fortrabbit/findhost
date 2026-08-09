/**
 * What a page calls itself to a search engine, and the structured data under it.
 *
 * Kept apart from the layout because both answers are editorial rather than
 * presentational: a title is the sentence a result is read as, and a schema is a
 * claim about what the page is.
 */

/*
 * Lower-cased to sit mid-sentence, unless the label carries capitals of its own:
 * "CMS sites" and "AI and LLM apps" are not sentence case, and flattening them
 * spells the acronym wrong in the one line a search result shows.
 */
const soften = (label: string) =>
  label === label.charAt(0) + label.slice(1).toLowerCase() ? label.toLowerCase() : label;

/**
 * A facet value page titled as the thing people search for. "Kirby" is what the
 * value is called; "Kirby hosting" is what somebody types.
 *
 * Only the facets where one pattern reads well for every value. The rest keep
 * the plain label, and any note may override both by setting `title`.
 */
const patterns: Record<string, (label: string) => string> = {
  software: (label) => `${label} hosting`,
  runtimes: (label) => `${label} hosting`,
  categories: (label) => `${label} providers`,
  regions: (label) => `Hosting in ${label}`,
  'use-cases': (label) => `Hosting for ${soften(label)}`,
  audience: (label) => `Hosting for ${soften(label)}`,
  currencies: (label) => `Hosting billed in ${label}`,
};

export const valueTitle = (facet: string, label: string) => patterns[facet]?.(label) ?? label;

/** The publisher, named the same way wherever it appears. */
export const organization = (origin: string) => ({
  '@type': 'Organization',
  '@id': `${origin}/#publisher`,
  name: 'FindHost',
  url: `${origin}/`,
  publishingPrinciples: `${origin}/about/`,
  parentOrganization: { '@type': 'Organization', name: 'fortrabbit GmbH', url: 'https://www.fortrabbit.com' },
});

/**
 * The register as a dataset, which is what it is: openly licensed, downloadable
 * whole, and meant to be reused with credit. The licence and the distribution
 * are the two fields that make this worth emitting at all.
 */
export const dataset = (origin: string, records: number) => ({
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'FindHost',
  description: `Attributes of ${records} hosting providers, recorded field by field. Ratings-free: no stars, no score, no affiliate ordering. A heart marks the handful we like, which is an opinion and says so.`,
  url: `${origin}/`,
  license: 'https://creativecommons.org/licenses/by/4.0/',
  isAccessibleForFree: true,
  creator: organization(origin),
  distribution: [
    {
      '@type': 'DataDownload',
      encodingFormat: 'application/json',
      contentUrl: `${origin}/providers.json`,
    },
  ],
});

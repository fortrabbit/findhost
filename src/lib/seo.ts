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

export const licenceUrl = 'https://creativecommons.org/licenses/by/4.0/';

/**
 * The whole of the condition, written once. Reuse is the point, so the ask has
 * to be short enough to paste and identical everywhere it appears — a credit
 * line that varies between the page, the download and the markdown export is a
 * credit line nobody can comply with exactly.
 */
export const credit = 'FindHost, findhost.app, CC BY 4.0';

/** The footer every machine-readable export ends on. */
export const attribution = [
  `Data licensed CC BY 4.0 (${licenceUrl}). Attributes are recorded, never scored; absent means unknown.`,
  `Credit, in full: ${credit}`,
];

/**
 * The register as a dataset, which is what it is: openly licensed, downloadable
 * whole, and meant to be reused with credit.
 *
 * `variableMeasured` is the field dictionary, which is the property schema.org
 * has for exactly this and the thing a machine needs to know before deciding the
 * data answers its question. `dateModified` is the newest `checkedAt` in the
 * register: freshness is the claim this dataset can make and an affiliate table
 * cannot, so it is worth stating in a form nobody has to read prose to find.
 */
export const dataset = (
  origin: string,
  records: number,
  options: { fields?: { id: string; label: string; group?: string }[]; modified?: Date } = {},
) => ({
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'FindHost',
  description: `Attributes of ${records} hosting providers, recorded field by field. Ratings-free: no stars, no score, no affiliate ordering. A heart marks the handful we like, which is an opinion and says so.`,
  url: `${origin}/`,
  license: licenceUrl,
  isAccessibleForFree: true,
  creator: organization(origin),
  ...(options.modified ? { dateModified: options.modified.toISOString().slice(0, 10) } : {}),
  ...(options.fields?.length
    ? {
        variableMeasured: options.fields
          .filter((field) => field.group)
          .map((field) => ({ '@type': 'PropertyValue', propertyID: field.id, name: field.label })),
      }
    : {}),
  distribution: [
    {
      '@type': 'DataDownload',
      encodingFormat: 'application/json',
      contentUrl: `${origin}/providers.json`,
    },
    /* CSV as well as JSON, because the tools that consume open datasets ask for it first. */
    {
      '@type': 'DataDownload',
      encodingFormat: 'text/csv',
      contentUrl: `${origin}/providers.csv`,
    },
  ],
});

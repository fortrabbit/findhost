import { titleOf } from './fields.ts';

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
export const soften = (label: string) =>
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
  headquarters: (label) => `Hosting companies based in ${label}`,
  'use-cases': (label) => `Hosting for ${soften(label)}`,
  audience: (label) => `Hosting for ${soften(label)}`,
  currencies: (label) => `Hosting billed in ${label}`,
};

/*
 * The dictionary first: a pattern that reads for every other value of a facet
 * still has one it does not, and the exception belongs beside the value rather
 * than as a branch here.
 */
export const valueTitle = (facet: string, value: { id: string; label: string }) =>
  titleOf(facet, value) ?? patterns[facet]?.(value.label) ?? value.label;

/** Roughly what a result shows of a title before it truncates. */
const titleBudget = 60;

const suffix = ' — FindHost';

/**
 * A record titled with a fact rather than with a name and a brand. "Hetzner —
 * FindHost" spends a third of the budget saying nothing about Hetzner, and the
 * categories are both the first thing the page shows and the words somebody
 * types.
 *
 * Given in dictionary order rather than the record's, so two records holding
 * the same categories title the same way, and only as many as fit — a title
 * cut off mid-word is worse than a shorter one. A record with no category, or
 * whose first one will not fit, keeps the plain form.
 */
export const recordTitle = (name: string, categories: string[]) => {
  const room = titleBudget - name.length - suffix.length;

  const fact = categories.reduce((kept, label) => {
    const next = kept ? `${kept}, ${label}` : label;
    return ` — ${next}`.length <= room ? next : kept;
  }, '');

  return `${name}${fact ? ` — ${fact}` : ''}${suffix}`;
};

/** The publisher, named the same way wherever it appears. */
export const organization = (origin: string) => ({
  '@type': 'Organization',
  '@id': `${origin}/#publisher`,
  name: 'FindHost',
  url: `${origin}/`,
  publishingPrinciples: `${origin}/about/`,
  /*
   * The repository, because it is the only external place the publisher of this
   * dataset exists independently of the dataset: every record's history, every
   * correction and every contributor is there under a name a reader can check.
   */
  sameAs: ['https://github.com/fortrabbit/findhost'],
  /*
   * The `@id` fortrabbit.com gives itself, so the two sites describe one company
   * rather than two that share a name.
   */
  parentOrganization: {
    '@type': 'Organization',
    '@id': 'https://www.fortrabbit.com/#org',
    name: 'fortrabbit GmbH',
    url: 'https://www.fortrabbit.com',
    sameAs: [
      'https://www.wikidata.org/wiki/Q141277820',
      'https://www.linkedin.com/company/fortrabbit',
      'https://github.com/fortrabbit',
    ],
  },
});

/*
 * Pointers to the two nodes every page carries. Written out in full once, by
 * `graph`, and referred to everywhere else, so no page states the publisher
 * twice and no two statements of it can differ.
 */
export const publisherRef = (origin: string) => ({ '@id': `${origin}/#publisher` });
export const websiteRef = (origin: string) => ({ '@id': `${origin}/#website` });

/** A provider as the subject of its record page, addressable from every list that names it. */
export const providerId = (origin: string, href: string) => `${origin}${href}#provider`;

/**
 * Providers as a list. Each entry points at the provider node on its record
 * page, so a list and a record say the same thing about who is meant.
 *
 * Ascending is the alphabetical order every list uses; the two dated lists say
 * descending, newest first.
 */
export const providerList = (
  origin: string,
  rows: { name: string; href: string }[],
  order: 'ascending' | 'descending' = 'ascending',
) => ({
  '@type': 'ItemList',
  numberOfItems: rows.length,
  itemListOrder: `https://schema.org/ItemListOrder${order === 'ascending' ? 'Ascending' : 'Descending'}`,
  itemListElement: rows.map((row, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `${origin}${row.href}`,
    name: row.name,
    item: { '@id': providerId(origin, row.href) },
  })),
});

/**
 * One page's structured data as a single graph: the publisher and the site
 * first, then whatever the page says about itself. One block, because an `@id`
 * reference resolves within the block it sits in; split across script tags it
 * would be a reference to nothing.
 */
export const graph = (origin: string, nodes: Record<string, unknown>[]) => ({
  '@context': 'https://schema.org',
  '@graph': [organization(origin), website(origin), ...nodes.map(({ '@context': _context, ...node }) => node)],
});

export const licenceUrl = 'https://creativecommons.org/licenses/by/4.0/';

/**
 * The site as an entity, and the one action it offers: the search at /search/,
 * which is a plain GET form and works without JavaScript like everything else.
 */
export const website = (origin: string) => ({
  '@type': 'WebSite',
  '@id': `${origin}/#website`,
  url: `${origin}/`,
  name: 'FindHost',
  inLanguage: 'en',
  license: licenceUrl,
  publisher: publisherRef(origin),
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${origin}/search/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
});

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
 * `datePublished` is the oldest `addedAt`, the day the register first held a
 * record.
 */
export const dataset = (
  origin: string,
  records: number,
  options: {
    fields?: { id: string; label: string; group?: string }[];
    modified?: Date;
    published?: Date;
    keywords?: string[];
  } = {},
) => ({
  '@type': 'Dataset',
  '@id': `${origin}/#dataset`,
  name: 'FindHost',
  description: `Attributes of ${records} hosting providers, recorded field by field. Ratings-free: no stars, no score, no affiliate ordering. A heart marks the handful we like, which is an opinion and says so.`,
  url: `${origin}/`,
  license: licenceUrl,
  isAccessibleForFree: true,
  isPartOf: websiteRef(origin),
  creator: publisherRef(origin),
  publisher: publisherRef(origin),
  ...(options.published ? { datePublished: options.published.toISOString().slice(0, 10) } : {}),
  ...(options.modified ? { dateModified: options.modified.toISOString().slice(0, 10) } : {}),
  ...(options.keywords?.length ? { keywords: options.keywords } : {}),
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
    /*
     * The two formats addressed to the readers most likely to find the dataset
     * through its schema rather than through a link: the index, and the whole
     * register as one document.
     */
    {
      '@type': 'DataDownload',
      encodingFormat: 'text/plain',
      contentUrl: `${origin}/llms.txt`,
    },
    {
      '@type': 'DataDownload',
      encodingFormat: 'text/plain',
      contentUrl: `${origin}/llms-full.txt`,
    },
  ],
});

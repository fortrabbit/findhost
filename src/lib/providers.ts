import { getCollection, type CollectionEntry } from 'astro:content';
import { hiddenStatuses } from './fields';

/*
 * Two statuses hide a record, and which two is `hidden: true` in the dictionary
 * rather than a list repeated here. `draft` is one we have started and not
 * finished; `out-of-scope` is one considered and failed against a numbered
 * criterion.
 *
 * Both keep a page — a decision nobody can link to is not a decision, and a
 * name that redirects somewhere else deserves to be findable by the name people
 * still search for. Neither is listed, counted, faceted, indexed or in the
 * sitemap: the dataset is what the register shows.
 */

export type Provider = CollectionEntry<'providers'>;

export function isListed(provider: Provider): boolean {
  return !hiddenStatuses.has(provider.data.status ?? 'active');
}

/**
 * Every page that shows, counts or indexes providers loads them through here,
 * so hiding a record is one field rather than a filter each page has to
 * remember. Only /providers/<id>/ reads the collection whole.
 */
export async function loadProviders(): Promise<Provider[]> {
  return (await getCollection('providers')).filter(isListed);
}

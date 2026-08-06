import { getCollection, type CollectionEntry } from 'astro:content';
import { defunctStatuses, hiddenStatuses } from './fields';

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
 * A provider that has stopped trading. Out of the register and out of its
 * counts, because "156 hosting providers" has to mean 156 a reader could buy
 * from today — and back in through a filter, because what happened to a host
 * people used is one of the more useful things a register can say.
 *
 * Unlike a stub it keeps everything else: the page is indexed, in the sitemap
 * and in search.
 */
export function isDefunct(provider: Provider): boolean {
  return defunctStatuses.has(provider.data.status ?? 'active');
}

/**
 * Every page that shows, counts or indexes providers loads them through here,
 * so hiding a record is one field rather than a filter each page has to
 * remember. Only /<id>/ reads the collection whole.
 */
export async function loadProviders(): Promise<Provider[]> {
  return (await getCollection('providers')).filter((provider) => isListed(provider) && !isDefunct(provider));
}

/** The ones that have stopped, on their own — the same shape, never merged into the count. */
export async function loadDefunctProviders(): Promise<Provider[]> {
  return (await getCollection('providers')).filter((provider) => isListed(provider) && isDefunct(provider));
}

/** Everything with an indexed page: the register plus the ones that stopped. Never the stubs. */
export async function loadIndexed(): Promise<Provider[]> {
  return (await getCollection('providers')).filter(isListed);
}

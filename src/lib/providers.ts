import { getCollection, type CollectionEntry } from 'astro:content';
import { asideOf, hiddenStatuses } from './fields';

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
 * Which group a record sits beside the register in, or nothing if it is in the
 * register. Out of the count either way — "156 hosting providers" has to mean
 * 156 a reader could buy from today — and back in through a checkbox, because
 * what happened to a host people used, and why a name people know is missing,
 * are both things a register should be able to answer.
 *
 * Unlike a stub these keep everything else: indexed, in the sitemap, in search.
 */
export function asideGroup(provider: Provider): string | undefined {
  return asideOf.get(provider.data.status ?? 'active')?.key;
}

/**
 * Every page that shows, counts or indexes providers loads them through here,
 * so hiding a record is one field rather than a filter each page has to
 * remember. Only /<id>/ reads the collection whole.
 */
export async function loadProviders(): Promise<Provider[]> {
  return (await getCollection('providers')).filter((provider) => isListed(provider) && !asideGroup(provider));
}

/** The ones beside it, grouped — the same shape, never merged into the count. */
export async function loadAsideProviders(): Promise<Provider[]> {
  return (await getCollection('providers')).filter((provider) => isListed(provider) && asideGroup(provider));
}

/** Everything with an indexed page: the register plus the ones that stopped. Never the stubs. */
export async function loadIndexed(): Promise<Provider[]> {
  return (await getCollection('providers')).filter(isListed);
}

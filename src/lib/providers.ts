import { getCollection, type CollectionEntry } from 'astro:content';
import { asideCategoryOf, asideOf, hiddenStatuses } from './fields';

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
 * register. Out of the count either way — "185 hosting providers" has to mean
 * 185 a reader could buy from today — and back in through a checkbox, because
 * what happened to a host people used, why a name people know is missing, and
 * which control panel to buy are all things this register can answer without
 * pretending the answers are hosts.
 *
 * Two fields put a record beside: a `status` that says what happened to it, and
 * a `category` that says it sells no hosting.
 *
 * Unlike a stub these keep everything else: indexed, in the sitemap, in search.
 */
export function asideGroup(provider: Provider): string | undefined {
  return asideOf.get(provider.data.status ?? 'active')?.key ?? asideKindGroup(provider);
}

/**
 * The half of `asideGroup` that reads `category`, on its own because one caller
 * needs to tell the two apart. A record beside the register because it stopped
 * trading has no alternatives to offer; a control panel has every other control
 * panel, and a reader can buy those today. See the similar list on /<id>/.
 */
export function asideKindGroup(provider: Provider): string | undefined {
  /*
   * Every value has to be an aside category for the record to leave, so a
   * company doing both stays a host: GoDaddy sells domains and shared hosting,
   * and it belongs in a register of hosting providers. A record with no category
   * at all is not evidence of anything, so it stays too.
   */
  const held = provider.data.category as string[] | null | undefined;
  if (!held?.length || !held.every((value) => asideCategoryOf.has(value))) return undefined;

  return asideCategoryOf.get(held[0]!)!.key;
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

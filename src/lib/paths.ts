/**
 * Where a record's page lives, and the markdown twin beside it.
 *
 * Kept apart from providers.ts, which reaches for `astro:content`, so the rule
 * that decides a published address is a pure function `node --test` can hold.
 */
import { asideOf } from './fields.ts';

/**
 * The one group whose records sit under a path of their own. A holding company
 * sells nothing: it has no runtimes, no regions and no price, and it is in the
 * dataset only because somebody looking for United Internet should find out
 * that Ionos is the part that hosts. The root namespace belongs to the register
 * and the facets, and a company that provides nothing does not belong in it.
 *
 * Nothing else moves — a defunct host keeps its root address. A path that
 * encodes a status has to move the day the status does, which for a host that
 * shut down would be the week people search for it hardest.
 */
export const holdings = 'holdings';

/** A record as an address needs: its id, and the status that may move it. */
export interface Addressable {
  id: string;
  data: { status?: unknown };
}

export function isHolding(record: Addressable): boolean {
  return asideOf.get(String(record.data.status ?? 'active'))?.key === holdings;
}

export function recordPath(record: Addressable): string {
  return isHolding(record) ? `/${holdings}/${record.id}/` : `/${record.id}/`;
}

/**
 * The same page as markdown, which is the directory path without its slash and
 * an extension instead. The two are written from one rule because a record page
 * links to its own twin, and the pair drifting apart is a link at a 404.
 */
export function recordMarkdownPath(record: Addressable): string {
  return `${recordPath(record).slice(0, -1)}.md`;
}

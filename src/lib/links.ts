/**
 * How a link that leaves the site is written, in one place.
 *
 * The record page has four of them — the address, the other provider URLs, the
 * social accounts and the numbered sources — and the prose in every record and
 * note has more. Five files asking one function is the point: the policy below
 * is one this register will change, and changing it in four of five places is
 * the failure this replaces.
 */

/*
 * The register's own repository. A link there goes to the project rather than
 * out of it, so none of the policy below applies — it is the one address on the
 * site that is ours and absolute.
 */
const own = 'https://github.com/fortrabbit/findhost';

/** Literal, so the policy is the type: neither attribute has a second value. */
export interface OutboundAttrs {
  rel?: 'nofollow';
  referrerpolicy?: 'no-referrer-when-downgrade';
}

/**
 * `record` for a link on a provider's own page, `page` for everywhere else.
 * The difference is the referrer, and only the referrer.
 */
export type LinkedFrom = 'record' | 'page';

/*
 * Everything outbound is nofollow. The direction is to follow listed records
 * eventually — all of them or none, never tied to the ♥️, and never a
 * discontinued record whose domain may have changed hands — but there is no
 * traffic worth passing yet, so the rule stays as it is and this is where it
 * stops being so.
 *
 * `no-referrer-when-downgrade` on a record's links only, against the
 * `strict-origin-when-cross-origin` the site sends for everything (see
 * public/.htaccess). A provider clicking their own link otherwise sees
 * findhost.app in their analytics and has to go hunting for the record; the path
 * is the useful half. It stays off every other page, because "/regions/de/, then
 * clicked out" is a lead signal we would be handing a vendor for free, and
 * because the header still covers any address that one day carries a token.
 *
 * Lossy either way: Brave and Safari trim referrers and extensions strip them.
 * Most visitors, not all.
 */
export const outboundLinkAttrs = (url: string, from: LinkedFrom = 'page'): OutboundAttrs => {
  if (url.startsWith(own)) return {};

  return from === 'record' ? { rel: 'nofollow', referrerpolicy: 'no-referrer-when-downgrade' } : { rel: 'nofollow' };
};

/**
 * The query parameters that mark a link as paid. One pattern, read by the
 * schema for every URL field and by validate.ts for every link in prose, so the
 * two cannot disagree about what an affiliate link looks like.
 *
 * Names are matched whole and with the usual suffixes — `ref`, `refid`,
 * `ref_id`, `aff_id`, `affiliate_code` — plus the click ids the big networks
 * append. Loose on purpose: a parameter this list is wrong about is a link
 * somebody rewrites, and a parameter it misses is a paid link published under
 * a byline that promised none.
 */
export const affiliateParams =
  /[?&](?:ref|refid|ref_id|referral|referrer|aff|affid|aff_id|affiliate|affiliate_?(?:id|code)|partner|partner_?id|a_aid|tap_a|via|fpr|irclickid|cjevent|gclid|fbclid|msclkid|click_?id|utm_[a-z]+)=/i;

export const hasAffiliateParams = (url: string) => affiliateParams.test(url);

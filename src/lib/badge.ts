/**
 * The snippet a provider puts on their own site to link back to their record.
 *
 * Everything about it is decided by one fact: it is published somewhere we do
 * not control and cannot amend. So it says one thing — that a record exists —
 * it fetches nothing, and it is short enough that the developer pasting it can
 * read it first. The rules are asserted in badge.test.ts, not left to review.
 *
 * Apart from lib/fields.ts, deliberately: the badge is not a field, not a facet
 * and not a value, and nothing here may learn what a record holds.
 */

/**
 * The words, everywhere. "Listed on" states a fact; "Featured on" would say we
 * picked them, and the ♥️ is an opinion published on our own pages — on a
 * stranger's footer it would read as an award, which is the business this
 * register exists to be the alternative to.
 */
export const badgeWords = 'Listed on FindHost';

/*
 * The stamp. A hairline rule and two lines of type, in the site's own
 * proportions, at a size that sits in a footer column.
 *
 * Drawn by hand rather than rasterised or outlined from the font the share
 * cards use. Outlined glyphs would render identically on every machine, and
 * would cost six kilobytes of bezier data — a blob nobody can check before
 * pasting it, from a project whose whole argument is that you should be able to
 * check things. A stranger's serif is the cheaper mistake.
 *
 * `currentColor` throughout, so the badge takes the ink of the footer it lands
 * in and is right in their light theme and their dark one without them choosing
 * a variant. Every length is pinned with `textLength`: the wordmark is set in
 * whatever serif the visitor has, and an unpinned line in a wide fallback grows
 * out through the rule around it, on a page we will never see.
 */
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="130" height="44" viewBox="0 0 130 44" role="img" fill="currentColor">
  <title>${badgeWords}</title>
  <rect x="0.5" y="0.5" width="129" height="43" rx="3" fill="none" stroke="currentColor" />
  <text x="13" y="17" font-family="ui-sans-serif, system-ui, sans-serif" font-size="8" textLength="58" lengthAdjust="spacing">LISTED ON</text>
  <text x="13" y="35" font-family="Charter, 'Bitstream Charter', Cambria, Georgia, serif" font-size="18" font-weight="600" textLength="104" lengthAdjust="spacingAndGlyphs">FindHost</text>
</svg>`;

/** The artwork on its own, for the preview on /badge/ and for the snippet. */
export const badgeSvg = () => svg;

/**
 * Where a badge points: the record, and nothing else.
 *
 * No `?ref=`, no campaign, no fragment. A tracking parameter on a badge from a
 * register that rejects affiliate links would be the unforced error, and the
 * referrer already says everything a count would.
 */
const recordUrl = (origin: string, id: string) => `${origin.replace(/\/+$/, '')}/${id}/`;

export interface BadgeSnippet {
  id: 'svg' | 'html' | 'markdown';
  /** What the reader is choosing between. */
  label: string;
  /** Which of the three fits where, in one line. */
  note: string;
  /** For the copy button's confirmation, and for the block's own labelling. */
  code: string;
}

/**
 * The same link three ways. Three because a provider's footer is one of three
 * things — a page with room for a graphic, a line of links, or a README — and a
 * fourth form would only vary the anchor text, which is the one thing that has
 * to stay the same wherever it appears.
 */
export const badgeSnippets = (origin: string, id: string): BadgeSnippet[] => {
  const url = recordUrl(origin, id);

  return [
    {
      id: 'svg',
      label: 'HTML, with the badge',
      note: 'Inline, so it loads nothing and takes the colour of the text around it.',
      code: `<a href="${url}">\n${svg.replace(/^/gm, '  ')}\n</a>`,
    },
    {
      id: 'html',
      label: 'HTML, text only',
      note: 'For a footer with no room for artwork.',
      code: `<a href="${url}">${badgeWords}</a>`,
    },
    {
      id: 'markdown',
      label: 'Markdown',
      note: 'For a README or a documentation page.',
      code: `[${badgeWords}](${url})`,
    },
  ];
};

/**
 * What the badge means, in the words the page, the record's block and the
 * markdown twin all use. One copy, for the reason the attribution line in
 * seo.ts is one copy: a promise that is worded three ways is three promises,
 * and this one has to survive being quoted back at us.
 */
export const badgeTerms = [
  'The badge means this provider has a record on FindHost.',
  'It is not an endorsement, not a rating, not a rank.',
  'It was not paid for and cannot be.',
  'Every provider meeting the scope test gets a record whether they display it or not, and taking the badge down changes nothing about the record.',
];

/**
 * Where it can go. Written down because the answer providers assume is "the
 * homepage", and a badge nobody will agree to put on a homepage is a badge
 * nobody puts anywhere.
 */
export const badgePlacements = [
  'A site footer',
  'An about or company page',
  'A colophon or credits page',
  'A trust or security page',
  'A README',
];

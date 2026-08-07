/**
 * FindHost Signal — an opinionated ordering, published in full.
 *
 * Two rules make this survivable for a register that otherwise refuses to rank.
 *
 * **It is computed, never recorded.** No provider carries a score in its
 * frontmatter; scripts/validate.ts still rejects any field named rank, score,
 * rating, boost or weight, and that guard is the reason this cannot be leaned
 * on. Nobody can raise a provider by editing its record — only by changing a
 * fact that is already public on the page, or by changing this table in a commit
 * anybody can read.
 *
 * **The table is the page.** /signal/ renders these weights rather than
 * describing them, so the published algorithm cannot drift from the running one.
 *
 * The register itself stays alphabetical. This is a second way to read it, and
 * it says whose taste it is.
 */

export interface Weight {
  /** What it rewards, in the words the page shows. */
  label: string;
  points: string;
  score: (data: Record<string, any>) => number;
}

const list = (value: unknown): string[] => (Array.isArray(value) ? value.map(String) : []);
const has = (value: unknown, wanted: string) => list(value).includes(wanted);

/*
 * Read as a sentence: what we think makes a hosting provider worth finding.
 * Order is the order the page prints, which is the order it was argued in.
 */
export const weights: Weight[] = [
  {
    label: 'Independently owned',
    points: '+5',
    score: (d) => (d.ownership === 'independent' ? 5 : 0),
  },
  {
    label: 'Owned by a larger group',
    points: '−1',
    score: (d) => (d.ownership === 'subsidiary' ? -1 : 0),
  },
  {
    label: 'Venture funded',
    points: '−5',
    score: (d) => (d.ownership === 'vc-backed' ? -5 : 0),
  },
  {
    /*
     * Capped, and the cap is the interesting part. Uncapped, this weight decided
     * the whole ranking: IONOS scored 53 of which 38 was age, and a telco founded
     * in 1988 sat above everything on the one axis nothing can catch up on. Ten
     * years is where "they will still be here next year" stops being news.
     */
    label: 'Years in business, up to ten',
    points: '+1 each',
    score: (d) => (typeof d.founded === 'number' ? Math.min(10, Math.max(0, 2026 - d.founded)) : 0),
  },
  {
    label: 'Owns its hardware',
    points: '+1',
    score: (d) => (has(d.infraContract, 'owns-metal') ? 1 : 0),
  },
  {
    label: 'Operates in more than one region',
    points: '+1',
    score: (d) => (list(d.regions).length > 1 ? 1 : 0),
  },
  {
    label: 'Manages the operating system',
    points: '+1',
    score: (d) => (d.whoManagesOs === 'managed' ? 1 : 0),
  },
  {
    label: 'Deploys from git',
    points: '+1',
    score: (d) => (has(d.deployMethods, 'git') ? 1 : 0),
  },
  {
    label: 'Collaboration beyond a single login',
    points: '+1',
    score: (d) => (d.collaboration === 'team' || d.collaboration === 'clients' ? 1 : 0),
  },
  {
    label: 'API, CLI or MCP server',
    points: '+1 each',
    score: (d) =>
      [
        d.apiAvailable === 'public' || d.apiAvailable === 'partner-only',
        d.cliTool === 'official' || d.cliTool === 'third-party',
        d.mcpServer === 'official' || d.mcpServer === 'community',
      ].filter(Boolean).length,
  },
  {
    label: 'Documented software',
    points: '+1 each',
    score: (d) => list(d.software).length,
  },
  {
    label: 'Use cases it markets itself for',
    points: '+1 each',
    score: (d) => list(d.useCases).length,
  },
  {
    label: 'Currencies it bills in',
    points: '+1 each',
    score: (d) => list(d.currencies).length,
  },
  {
    label: 'Starts under $5 a month',
    points: '+1',
    score: (d) => (d.priceFrom === 'xs' ? 1 : 0),
  },
  {
    label: 'Shared hosting',
    points: '−1',
    score: (d) => (has(d.category, 'shared-hosting') ? -1 : 0),
  },
  {
    label: 'Virtual private servers',
    points: '−1',
    score: (d) => (has(d.category, 'vps') ? -1 : 0),
  },
  {
    label: 'Support around the clock',
    points: '+2',
    score: (d) => (d.supportHours === '24-7' ? 2 : 0),
  },
  {
    label: 'Support in business hours',
    points: '+1',
    score: (d) => (d.supportHours === 'business-hours' ? 1 : 0),
  },
  {
    label: 'Somebody to chat to',
    points: '+1',
    score: (d) => (list(d.supportChannels).includes('chat') ? 1 : 0),
  },
];

/** The number, and what made it, for a record's frontmatter. */
export function signalOf(data: Record<string, any>) {
  const parts = weights.map((weight) => ({ label: weight.label, points: weight.score(data) }));
  return { total: parts.reduce((sum, part) => sum + part.points, 0), parts };
}

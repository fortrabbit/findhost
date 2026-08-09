/**
 * FindHost Signal — an opinionated ordering, published in full.
 *
 * Three rules make this survivable for a register that otherwise refuses to
 * rank.
 *
 * **It is computed, never recorded.** No provider carries a score in its
 * frontmatter; scripts/validate.ts still rejects any field named rank, score,
 * rating, boost or weight, and that guard is the reason this cannot be leaned
 * on. Nobody can raise a provider by editing its record — only by changing a
 * fact that is already public on its page, or by changing this table in a commit
 * anybody can read.
 *
 * **The table is the page.** /signal/ renders these weights rather than
 * describing them, so the published algorithm cannot drift from the running one.
 *
 * **A weight sleeps until the data can carry it.** This one took a mistake to
 * learn. The first version rewarded an MCP server, a staging environment and
 * team access — three fields answered by two or three records out of a hundred
 * and seventy-six, all of which fortrabbit happened to be among. It put the
 * publisher of the register nine points clear at the top, and what it was
 * measuring was not the hosting: it was which record we had researched most
 * carefully, which was our own.
 *
 * So a weight counts only while at least a fifth of the register answers the
 * field it reads. The dormant ones are listed on the page with their coverage,
 * and they wake up by themselves as the research fills in.
 *
 * The register itself stays alphabetical. This is a second way to read it, and
 * it says whose taste it is.
 */

import { loadProviders } from './providers';

export interface Weight {
  /** What it rewards, in the words the page shows. */
  label: string;
  points: string;
  /** The record fields it reads. A weight sleeps while any of them is thinly recorded. */
  reads: string[];
  score: (data: Record<string, any>) => number;
}

const list = (value: unknown): string[] => (Array.isArray(value) ? value.map(String) : []);
const has = (value: unknown, wanted: string) => list(value).includes(wanted);

/**
 * The share of the register that has to answer a field before a weight reading
 * it counts for anything. A fifth is low enough that a newly researched field
 * starts to matter early, and high enough that three records cannot decide the
 * order between them.
 */
export const coverageFloor = 0.2;

/*
 * Read as a sentence: what we think makes a hosting provider worth finding.
 * Order is the order the page prints, which is the order it was argued in.
 *
 * The heavy weights are on what a platform lets somebody do — deploy from a
 * commit, drive it from a script, hand it to a colleague — because that is what
 * this register is for. Longevity counts and is capped: five years is enough to
 * show a company is not a weekend project, and past that it measures age rather
 * than merit, on an axis nobody can ever catch up on.
 */
export const weights: Weight[] = [
  {
    label: 'Independently owned',
    points: '+5',
    reads: ['ownership'],
    score: (d) => (d.ownership === 'independent' ? 5 : 0),
  },
  {
    label: 'Owned by a larger group',
    points: '−2',
    reads: ['ownership'],
    score: (d) => (d.ownership === 'subsidiary' ? -2 : 0),
  },
  {
    label: 'Venture funded',
    points: '−3',
    reads: ['ownership'],
    score: (d) => (d.ownership === 'vc-backed' ? -3 : 0),
  },
  {
    label: 'Years in business, up to five',
    points: '+1 each',
    reads: ['founded'],
    score: (d) => (typeof d.founded === 'number' ? Math.min(5, Math.max(0, 2026 - d.founded)) : 0),
  },
  {
    label: 'Deploys from git',
    points: '+3',
    reads: ['deployMethods'],
    score: (d) => (has(d.deployMethods, 'git') ? 3 : 0),
  },
  {
    label: 'Deploys a container image',
    points: '+2',
    reads: ['deployMethods'],
    score: (d) => (has(d.deployMethods, 'docker-image') ? 2 : 0),
  },
  {
    label: 'A public API',
    points: '+3',
    reads: ['apiAvailable'],
    score: (d) => (d.apiAvailable === 'public' ? 3 : 0),
  },
  {
    label: 'An official command-line tool',
    points: '+3',
    reads: ['cliTool'],
    score: (d) => (d.cliTool === 'official' ? 3 : 0),
  },
  {
    label: 'An MCP server',
    points: '+3',
    reads: ['mcpServer'],
    score: (d) => (d.mcpServer === 'official' || d.mcpServer === 'community' ? 3 : 0),
  },
  {
    label: 'More than one person on the account',
    points: '+2',
    reads: ['collaboration'],
    score: (d) => (d.collaboration === 'team' || d.collaboration === 'clients' ? 2 : 0),
  },
  {
    label: 'Somewhere to try a deploy first',
    points: '+2',
    reads: ['staging'],
    score: (d) => (d.staging === 'included' ? 2 : 0),
  },
  {
    label: 'Runs an application it manages',
    points: '+2',
    reads: ['category'],
    score: (d) => (has(d.category, 'paas') ? 2 : 0),
  },
  {
    label: 'Runs containers',
    points: '+2',
    reads: ['category'],
    score: (d) => (has(d.category, 'caas') ? 2 : 0),
  },
  {
    label: 'Runs code on demand',
    points: '+2',
    reads: ['category'],
    score: (d) => (has(d.category, 'serverless') ? 2 : 0),
  },
  {
    label: 'Shared hosting',
    points: '−3',
    reads: ['category'],
    score: (d) => (has(d.category, 'shared-hosting') ? -3 : 0),
  },
  {
    label: 'Virtual private servers',
    points: '−3',
    reads: ['category'],
    score: (d) => (has(d.category, 'vps') ? -3 : 0),
  },
  {
    label: 'Manages the operating system',
    points: '+1',
    reads: ['whoManagesOs'],
    score: (d) => (d.whoManagesOs === 'managed' ? 1 : 0),
  },
  {
    label: 'Owns its hardware',
    points: '+1',
    reads: ['infraContract'],
    score: (d) => (has(d.infraContract, 'owns-metal') ? 1 : 0),
  },
  {
    label: 'Operates in more than one region',
    points: '+1',
    reads: ['regions'],
    score: (d) => (list(d.regions).length > 1 ? 1 : 0),
  },
  {
    label: 'Documented software, up to three',
    points: '+1 each',
    reads: ['software'],
    score: (d) => Math.min(3, list(d.software).length),
  },
  {
    label: 'Use cases it markets itself for, up to three',
    points: '+1 each',
    reads: ['useCases'],
    score: (d) => Math.min(3, list(d.useCases).length),
  },
  {
    label: 'Currencies it bills in, up to two',
    points: '+1 each',
    reads: ['currencies'],
    score: (d) => Math.min(2, list(d.currencies).length),
  },
  {
    label: 'Starts under $5 a month',
    points: '+1',
    reads: ['priceFrom'],
    score: (d) => (d.priceFrom === 'xs' ? 1 : 0),
  },
  {
    label: 'Support around the clock',
    points: '+2',
    reads: ['supportHours'],
    score: (d) => (d.supportHours === '24-7' ? 2 : 0),
  },
  {
    label: 'Somebody to chat to',
    points: '+1',
    reads: ['supportChannels'],
    score: (d) => (has(d.supportChannels, 'chat') ? 1 : 0),
  },
];

export interface Adjustment {
  points: number;
  by: string;
  on: Date;
  why: string;
}

/**
 * The number, and what made it, for one record against a given set of weights.
 *
 * The hand adjustment is added last and named as what it is. It exists because
 * the arithmetic cannot see everything and pretending otherwise would mean
 * bending a weight until the list looked right, which is the same act with the
 * evidence removed. Every one of them is printed on /signal/, with who made it,
 * when, and why.
 */
export function signalOf(data: Record<string, any>, active: Weight[] = weights) {
  const parts = active.map((weight) => ({ label: weight.label, points: weight.score(data) }));
  const adjustment = data.signalAdjustment as Adjustment | undefined;
  if (adjustment) parts.push({ label: `Hand adjustment by ${adjustment.by}`, points: adjustment.points });

  return { total: parts.reduce((sum, part) => sum + part.points, 0), parts, adjustment };
}

export interface SignalTable {
  /** The weights the data can carry. The score is the sum of these and nothing else. */
  awake: Weight[];
  /** The ones asleep, with the coverage keeping them there. */
  asleep: { weight: Weight; covered: number; of: number }[];
  of: (data: Record<string, any>) => ReturnType<typeof signalOf>;
}

let table: SignalTable | undefined;

/**
 * The weights as the data currently supports them. Built once per build:
 * coverage is a property of the whole register, so asking one record about it
 * would be asking the wrong question.
 */
export async function loadSignal(): Promise<SignalTable> {
  if (table) return table;

  const records = (await loadProviders()).map((provider) => provider.data as Record<string, unknown>);
  const covered = (field: string) =>
    records.filter((record) => record[field] !== undefined && record[field] !== null).length;

  const awake: Weight[] = [];
  const asleep: SignalTable['asleep'] = [];

  for (const weight of weights) {
    const thinnest = Math.min(...weight.reads.map(covered));
    if (thinnest >= records.length * coverageFloor) awake.push(weight);
    else asleep.push({ weight, covered: thinnest, of: records.length });
  }

  table = { awake, asleep, of: (data) => signalOf(data, awake) };
  return table;
}

/**
 * Which band a score falls in. Tiers rather than places: a register that refuses
 * to rate hosting should not be crowning anything either. Within a tier the
 * order is alphabetical, so nothing on the page is first.
 */
export const tiers = [
  { id: 'high', floor: 20, label: '20 and above' },
  { id: 'middle', floor: 10, label: '10 to 19' },
  { id: 'low', floor: 0, label: '0 to 9' },
  { id: 'negative', floor: -Infinity, label: 'Below zero' },
];

export const tierOf = (total: number) => tiers.find((tier) => total >= tier.floor)!;

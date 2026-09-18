/**
 * What the refresh routine may merge on its own, and what waits for a person.
 * Pure, so `node --test` can hold it to the record format without git.
 *
 * Two rules, and the second contains the first. A **confirmation** changes only
 * `checkedAt` dates — the record's own, or the ones inside `sources`. It says
 * "read again, still true". A **sourced change** also moves field values, and
 * merges on its own as long as every field it touched carries a `sources` entry
 * naming it: a price, a region, a runtime, read off the provider's page and
 * cited there. Reviewing those by hand was a queue nobody had time for, and an
 * unread price is worse than a merged one.
 *
 * `status` is in that too, so a host whose own pages say it has shut down leaves
 * the register without anybody merging it. Nobody here has a routine for reading
 * those, and a pull request sitting open is not review: it is a change that has
 * not shipped while the register goes on saying something the provider itself
 * contradicts.
 *
 * What stays outside is what the routine does not write. Prose, and the record's
 * identity. A changed body, `id` or `name` on this lane means a run went wrong
 * rather than that something was researched, so the Action stops and a person
 * looks. The same function decides both the routine's lane and the Action's
 * guard, so the two cannot disagree.
 */

const date = /checkedAt: \d{4}-\d{2}-\d{2}/g;

/** The record with every `checkedAt` date blanked, and a bare `checkedAt:` line dropped. */
export function withoutDates(record: string): string {
  return record
    .replace(date, 'checkedAt: DATE')
    .split('\n')
    .filter((line) => line !== 'checkedAt: DATE')
    .join('\n');
}

export function isConfirmation(before: string, after: string): boolean {
  return withoutDates(before) === withoutDates(after);
}

/*
 * The fields no citation makes mergeable, because the routine has no business
 * writing them at all. `id` is the address, `name` is what the provider calls
 * itself, and `addedAt` is a fact about the register rather than about the
 * provider. A change to one of these is a bug in the run, not research.
 */
const reviewed = new Set(['id', 'name', 'addedAt']);

/** The frontmatter and the body, or null where the file is not a record. */
function parts(record: string): { frontmatter: string; body: string } | null {
  const match = record.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  return match ? { frontmatter: match[1], body: match[2] } : null;
}

/**
 * Frontmatter as one block of text per top-level key, dates blanked. A key owns
 * the lines indented under it, so `regions:` and its list are one block and a
 * changed region is a change to `regions`.
 */
function blocks(frontmatter: string): Map<string, string> {
  const byKey = new Map<string, string>();
  let key = '';
  for (const line of withoutDates(frontmatter).split('\n')) {
    const start = line.match(/^([A-Za-z]\w*):/);
    if (start) key = start[1];
    byKey.set(key, (byKey.get(key) ?? '') + line + '\n');
  }
  return byKey;
}

/** The top-level keys whose value differs, ignoring `checkedAt` dates. */
export function changedFields(before: string, after: string): string[] {
  const [a, b] = [blocks(before), blocks(after)];
  const keys = new Set([...a.keys(), ...b.keys()]);
  return [...keys].filter((key) => key && a.get(key) !== b.get(key));
}

/** The fields a record's `sources` name, so a changed one can be held to carrying its citation. */
function cited(frontmatter: string): Set<string> {
  const sources = blocks(frontmatter).get('sources') ?? '';
  return new Set([...sources.matchAll(/field:\s*'?([A-Za-z]\w*)'?/g)].map((match) => match[1]));
}

/**
 * May the routine merge this change itself? True for a confirmation, and for a
 * change to field values where every field it touched is cited in the record it
 * wrote and none of them is the record's identity. Prose has to be untouched:
 * the routine does not write prose, so a changed body is something else.
 */
export function isSelfMerging(before: string, after: string): boolean {
  const [a, b] = [parts(before), parts(after)];
  if (!a || !b || a.body !== b.body) return false;

  const citations = cited(b.frontmatter);
  return changedFields(a.frontmatter, b.frontmatter).every(
    (field) => field === 'sources' || field === 'checkedAt' || (!reviewed.has(field) && citations.has(field)),
  );
}

/** The files a self-merging push may touch besides records. */
export const confirmationFiles = new Set(['research/refresh-log.tsv']);

export const isRecord = (path: string) => /^src\/content\/providers\/[^/]+\.md$/.test(path);

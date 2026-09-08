/**
 * Whether a change to a record confirms it rather than changes it. Pure, so
 * `node --test` can hold it to the record format without git.
 *
 * A confirmation is a change whose only difference is `checkedAt` dates: the
 * record's own, or the ones inside `sources`. It says "read again, still
 * true", and the refresh routine merges those on its own. Anything else — a
 * value, a status, a source URL, a line of prose — is a change somebody reads
 * before it ships. The same function decides both the routine's lane and the
 * Action's guard, so the two cannot disagree.
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

/** The files a confirmation-only push may touch besides records. */
export const confirmationFiles = new Set(['research/refresh-log.tsv']);

export const isRecord = (path: string) => /^src\/content\/providers\/[^/]+\.md$/.test(path);

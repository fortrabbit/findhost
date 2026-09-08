/*
 * Is a push confirmation-only, so the refresh Action may merge it on its own?
 *
 *   node scripts/refresh-guard.ts <base> <head>
 *   node scripts/refresh-guard.ts HEAD --staged     # the index against HEAD
 *
 * Exit 0 when every changed file is either a record whose only difference is
 * `checkedAt` dates, or the refresh log. Exit 1 otherwise, naming the file, so
 * a person reads it. The refresh routine runs the same check on its own diff
 * to choose between the `claude/refresh` and `claude/refresh-review` branches,
 * and the Action runs it again before merging: the routine choosing wrongly is
 * caught, and the rule lives in one place, src/lib/confirmation.ts.
 */
import { execFileSync } from 'node:child_process';
import { confirmationFiles, isConfirmation, isRecord } from '../src/lib/confirmation.ts';

const [base, head] = process.argv.slice(2);
if (!base || !head) {
  console.error('usage: node scripts/refresh-guard.ts <base> <head>');
  process.exit(2);
}

const git = (...args: string[]) => execFileSync('git', args, { encoding: 'utf8' });
const at = (ref: string, path: string) => {
  try {
    return git('show', `${ref}:${path}`);
  } catch {
    return '';
  }
};

const staged = head === '--staged';
const changed = (staged ? git('diff', '--cached', '--name-only') : git('diff', '--name-only', `${base}...${head}`))
  .split('\n')
  .filter(Boolean);
const problems: string[] = [];

for (const path of changed) {
  if (confirmationFiles.has(path)) continue;
  if (!isRecord(path)) {
    problems.push(`${path}: not a record`);
    continue;
  }
  const before = at(base, path);
  const after = at(staged ? '' : head, path);
  if (!before || !after) problems.push(`${path}: added or removed`);
  else if (!isConfirmation(before, after)) problems.push(`${path}: changes more than checkedAt dates`);
}

if (problems.length) {
  console.log(`review: ${problems.join('; ')}`);
  process.exit(1);
}
console.log(`confirmation: ${changed.length} file${changed.length === 1 ? '' : 's'}`);

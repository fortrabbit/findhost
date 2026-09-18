/**
 * What changed on the register, for a person to read after it shipped.
 *
 *   node scripts/landed.ts              the last 7 days
 *   node scripts/landed.ts 2026-09-01   since a date
 *   node scripts/landed.ts 14.days      any git --since expression
 *
 * The refresh routine merges what it can cite without anybody reading the pull
 * request first. That trades a review nobody had time for against a review that
 * happens on the published page instead, which only works if the pages are
 * named: this prints them, newest last, with the live address to open and what
 * moved. A status change goes at the end of its line because it is the one
 * change that moves a record between the register, the aside lists and the
 * hidden ones.
 *
 * Reads git, not the built site, so it works before a deploy and says what
 * landed rather than what is currently served.
 */
import { execFileSync } from 'node:child_process';
import { changedFields } from '../src/lib/confirmation.ts';

const since = process.argv[2] ?? '7.days';
const site = process.env.SITE_URL?.trim() || 'https://www.findhost.app';
const dir = 'src/content/providers/';

const git = (...args: string[]) => execFileSync('git', args, { encoding: 'utf8' });
/** A file at a revision, or '' where it did not exist yet — git says so on stderr, which is not news here. */
const at = (ref: string, path: string) => {
  try {
    return execFileSync('git', ['show', `${ref}:${path}`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
  } catch {
    return '';
  }
};
const field = (record: string, key: string) => record.match(new RegExp(`^${key}: (.+)$`, 'm'))?.[1] ?? '';

/* The commits that touched a record, oldest first, so a record edited twice reads as one move. */
const commits = git('log', `--since=${since}`, '--format=%H', '--reverse', '--', dir).split('\n').filter(Boolean);
if (!commits.length) {
  console.log(`Nothing landed on the register since ${since}.`);
  process.exit(0);
}

const first = `${commits[0]}^`;
const last = commits.at(-1) as string;
const touched = git('diff', '--name-only', first, last, '--', dir).split('\n').filter(Boolean);

const lines: string[] = [];
for (const path of touched.sort()) {
  const id = path.slice(dir.length).replace(/\.md$/, '');
  const [before, after] = [at(first, path), at(last, path)];
  if (!after) {
    lines.push(`gone    ${id}`);
    continue;
  }

  const url = `${site}/${field(after, 'status') === 'unlisted' ? 'holdings/' : ''}${id}/`;
  if (!before) {
    lines.push(`new     ${url}  ${field(after, 'name')}`);
    continue;
  }

  const fields = changedFields(before, after).filter((key) => key !== 'sources' && key !== 'checkedAt');
  if (!fields.length) continue;

  const status = fields.includes('status')
    ? `  status ${field(before, 'status') || 'listed'} → ${field(after, 'status')}`
    : '';
  lines.push(`changed ${url}  ${fields.filter((key) => key !== 'status').join(', ') || '—'}${status}`);
}

console.log(lines.length ? lines.join('\n') : `Only dates moved on the register since ${since}.`);

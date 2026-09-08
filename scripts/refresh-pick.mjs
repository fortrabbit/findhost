/*
 * Which records the refresh routine reads next.
 *
 * The /updated/ page read from the bottom: records nobody has checked first,
 * then the oldest `checkedAt`, and within one date the reverse of the page's
 * A-to-Z. So the next pick is always the last row on that page that the log
 * below does not list, and a person can predict it by looking. Records the
 * routine already handled recently are skipped, whatever the outcome: a page
 * that cannot be read leaves no date on the record, and without this the same
 * record would come up every morning.
 *
 *   node scripts/refresh-pick.mjs            # one id
 *   node scripts/refresh-pick.mjs --n 3      # three
 *   node scripts/refresh-pick.mjs --days 30  # retry sooner than the default 60
 *
 * Reads research/refresh-log.tsv, which the routine appends to. See
 * .claude/skills/refresh-record/SKILL.md.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';

const providersDir = 'src/content/providers';
const logFile = 'research/refresh-log.tsv';

const arg = (name, fallback) => {
  const at = process.argv.indexOf(`--${name}`);
  return at > 0 ? Number(process.argv[at + 1]) : fallback;
};
const n = arg('n', 1);
const days = arg('days', 60);

/* The statuses the register shows. Everything else has no pages worth reading. */
const inRegister = new Set(['active', 'acquired', 'renamed', 'winding-down', 'delisted-on-request']);

const since = new Date(Date.now() - days * 86400000).toISOString().slice(0, 10);
const recent = new Set();
if (existsSync(logFile)) {
  for (const line of readFileSync(logFile, 'utf8').split('\n')) {
    const [date, id] = line.split('\t');
    if (date && id && date >= since) recent.add(id);
  }
}

const front = (file) => {
  const text = readFileSync(join(providersDir, file), 'utf8');
  const end = text.indexOf('\n---', 4);
  return parse(text.slice(4, end));
};

const candidates = readdirSync(providersDir)
  .filter((file) => file.endsWith('.md'))
  .map(front)
  .filter((data) => inRegister.has(data.status ?? 'active') && !recent.has(data.id))
  .map((data) => ({
    id: data.id,
    name: String(data.name),
    checkedAt: data.checkedAt ? String(data.checkedAt).slice(0, 10) : '',
  }))
  .sort((a, b) => a.checkedAt.localeCompare(b.checkedAt) || b.name.localeCompare(a.name));

for (const { id } of candidates.slice(0, n)) console.log(id);

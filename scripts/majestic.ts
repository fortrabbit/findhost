/*
 * Reads the Majestic Million into the records.
 *
 * Majestic publishes the top million domains by referring subnets under CC BY
 * 3.0, which is why this list and not one of the others: everything comparable
 * either forbids redistribution or is silent on it, and this dataset is CC BY
 * 4.0. The licence is the reason the number can be published at all.
 *
 *   node scripts/majestic.ts            # downloads the list
 *   node scripts/majestic.ts <path>     # reads a copy already on disk
 *
 * Run by hand. Scheduling it is MR-320.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const LIST = 'https://downloads.majestic.com/majestic_million.csv';
const CREDIT = 'https://majestic.com/reports/majestic-million';
const providersDir = 'src/content/providers';

const today = new Date().toISOString().slice(0, 10);

/** The list is domain-level, so a lookup is the registrable name and nothing else. */
const hostOf = (url: string) =>
  url
    .replace(/^https?:\/\//, '')
    .split('/')[0]
    .toLowerCase()
    .replace(/^www\./, '');

interface Row {
  subnets: number;
  /*
   * Absent where the domain was not in the previous list. Majestic writes -1 for
   * that, on nineteen thousand rows, and a negative count read as a figure is
   * how "up from -1" reaches a record page.
   */
  before?: number;
}

async function load(source: string | undefined): Promise<Map<string, Row>> {
  const text = source
    ? readFileSync(source, 'utf8')
    : await fetch(LIST).then((answer) => {
        if (!answer.ok) throw new Error(`${LIST} answered ${answer.status}`);
        return answer.text();
      });

  const lines = text.split('\n');
  const head = lines[0].split(',');
  const at = (name: string) => {
    const index = head.indexOf(name);
    if (index < 0) throw new Error(`the list has no ${name} column: ${lines[0]}`);
    return index;
  };
  const [domain, subnets, before] = [at('Domain'), at('RefSubNets'), at('PrevRefSubNets')];

  const rows = new Map<string, Row>();
  for (const line of lines.slice(1)) {
    if (!line) continue;
    const cells = line.split(',');
    const previous = Number(cells[before]);
    rows.set(cells[domain].toLowerCase(), {
      subnets: Number(cells[subnets]),
      ...(previous >= 0 ? { before: previous } : {}),
    });
  }
  return rows;
}

/**
 * A `sources:` key with no entries under it parses as an object rather than an
 * array and fails the content schema. It happens whenever the figure we removed
 * was the only source a record had.
 */
function dropEmptySources(front: string): string {
  const lines = front.split('\n');
  const at = lines.findIndex((line) => line === 'sources:');
  if (at < 0) return front;

  const next = lines[at + 1];
  if (next !== undefined && /^\s*-/.test(next)) return front;

  lines.splice(at, 1);
  while (lines.length > 0 && lines[lines.length - 1] === '') lines.pop();
  return lines.join('\n');
}

/**
 * Frontmatter is edited as text rather than parsed and rewritten. A YAML
 * round-trip reformats every record it touches, and this script touches all of
 * them: the diff has to be the values that changed and nothing else.
 */
function write(file: string, held: Row | null) {
  const text = readFileSync(file, 'utf8');
  const close = text.indexOf('\n---', 4);
  if (close < 0) throw new Error(`${file} has no frontmatter`);

  let front = text.slice(0, close);
  const rest = text.slice(close);

  const line = held
    ? `referringSubnets: { now: ${held.subnets}${held.before === undefined ? '' : `, before: ${held.before}`} }`
    : 'referringSubnets: null';

  if (/^referringSubnets:.*$/m.test(front)) {
    front = front.replace(/^referringSubnets:.*$/m, line);
  } else {
    /*
     * Records vary in which keys they carry — 32 of them state no status at all,
     * because active is the default. The first anchor that exists wins, and the
     * end of the frontmatter is the one that always does.
     */
    const anchor = [/^status:/m, /^checkedAt:/m, /^sources:$/m].find((pattern) => pattern.test(front));
    front = anchor ? front.replace(anchor, (match) => `${line}\n${match}`) : `${front}\n${line}`;
  }

  /*
   * Cited only where there is a figure. A null field is dropped from the record
   * page entirely — the question does not apply, the same as a control panel
   * operating no regions — so a source for one would be a numbered footnote in
   * the list with no row anywhere pointing at it.
   */
  const cite = /^ *- \{ field: referringSubnets,.*\n?/m;
  front = front.replace(cite, '');
  if (held) {
    const entry = `  - { field: referringSubnets, url: '${CREDIT}', checkedAt: ${today} }`;
    front = /^sources:$/m.test(front)
      ? front.replace(/^sources:$/m, `sources:\n${entry}`)
      : `${front}\nsources:\n${entry}`;
  }

  writeFileSync(file, dropEmptySources(front) + rest);
}

const rows = await load(process.argv[2]);
const files = (await readdir(providersDir)).filter((name) => name.endsWith('.md'));

interface Record {
  file: string;
  id: string;
  host: string;
  parent?: string;
  /** Out of the register and out of every count, so out of this too. */
  hidden: boolean;
}

const records: Record[] = [];
for (const name of files) {
  const file = join(providersDir, name);
  const front = readFileSync(file, 'utf8').slice(0, undefined);
  const end = front.indexOf('\n---', 4);
  const head = front.slice(0, end);

  const home = /^ *home: *(\S+)/m.exec(head);
  if (!home) continue;

  const parent = /^parent: *(\S+)/m.exec(head);
  const status = /^status: *(\S+)/m.exec(head)?.[1] ?? 'active';
  records.push({
    file,
    id: name.replace(/\.md$/, ''),
    host: hostOf(home[1]),
    parent: parent?.[1],
    hidden: status === 'draft' || status === 'out-of-scope',
  });
}

/*
 * One figure per domain. The list measures a domain, and several records can sit
 * on one — AWS and Lambda, DigitalOcean and its Functions, Forge and Cloud. Every
 * record at that domain carrying the same number drew the same bar twice and
 * credited a product with its platform's links, which is the thing we refused to
 * do for Azure by recording null rather than letting it inherit microsoft.com.
 *
 * The register already says who owns what: a product names its platform as
 * `parent`. So the figure goes to the record another at the same domain points
 * at, and to nothing else. Where no record at a shared domain is named — both
 * Laravel products sit on laravel.com, which is Laravel and is neither of them —
 * the domain belongs to something outside the register and they all take null.
 *
 * Hidden records are left out of the grouping. A draft stub is out of the
 * register and out of every count, and a stub at gitlab.com that named nothing
 * took GitLab's figure away with it.
 */
const sharing = new Map<string, Record[]>();
for (const record of records.filter((entry) => !entry.hidden)) {
  sharing.set(record.host, [...(sharing.get(record.host) ?? []), record]);
}

const measurable = (record: Record) => {
  const group = sharing.get(record.host) ?? [];

  /* A hidden record never owns a domain another record is already on. */
  if (record.hidden) return group.length === 0;
  if (group.length === 1) return true;

  const ids = new Set(group.map((entry) => entry.id));
  const namedByAnother = group.some((entry) => entry.id !== record.id && entry.parent === record.id);
  const namesAnother = record.parent !== undefined && ids.has(record.parent);
  return namedByAnother && !namesAnother;
};

let measured = 0;
let unmeasured = 0;

for (const record of records) {
  const held = measurable(record) ? (rows.get(record.host) ?? null) : null;

  write(record.file, held);
  if (held) measured += 1;
  else unmeasured += 1;
}

console.log(`${measured} measured, ${unmeasured} the list carries no figure for, read ${today}.`);

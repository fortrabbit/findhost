/*
 * Every outbound URL the dataset publishes, checked against the live web.
 *
 * A dataset whose whole claim is "we read this page on this date" cannot afford
 * to link at pages that have since gone. But third-party availability is not
 * something a content pull request should be blocked on, so this reports rather
 * than gates: `gone` is the only category worth acting on, `blocked` is bot
 * protection and says nothing about the link, and `unreachable` is usually the
 * network between here and there.
 *
 *   node scripts/linkcheck.mjs            every URL
 *   node scripts/linkcheck.mjs --sources  including per-claim source URLs
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';

const dir = 'src/content/providers';
const withSources = process.argv.includes('--sources');
const concurrency = 12;
const timeoutMs = 15_000;

/* Providers behind bot protection that answers a fetch with a refusal rather
 * than a page. Known, recorded, and not a broken link — listing them here keeps
 * them out of the noise without hiding that they cannot be checked this way. */
const botProtected = new Set(['arcustech', 'nixihost', 'godaddy', 'upcloud', 'vultr']);

const targets = [];

for (const filename of readdirSync(dir).filter((name) => name.endsWith('.md'))) {
  const raw = readFileSync(join(dir, filename), 'utf8');
  const data = parse(raw.match(/^---\n([\s\S]*?)\n---/)[1]);

  for (const [slot, url] of Object.entries(data.urls ?? {})) {
    targets.push({ id: data.id, where: `urls.${slot}`, url });
  }
  for (const [network, url] of Object.entries(data.social ?? {})) {
    targets.push({ id: data.id, where: `social.${network}`, url });
  }
  if (withSources) {
    for (const source of data.sources ?? []) {
      targets.push({ id: data.id, where: `sources[${source.field}]`, url: source.url });
    }
  }
}

// One URL cited by four fields is one request.
const unique = new Map();
for (const target of targets) {
  if (!unique.has(target.url)) unique.set(target.url, target);
}
const queue = [...unique.values()];

const identify = 'FindHost link checker (+https://github.com/fortrabbit/findhost)';

/* Enough of a browser to get an honest answer. Single-page apps routinely
 * answer HEAD with 404, and several hosts serve a refusal to anything that
 * declares itself a robot — neither says the link is dead. */
const browserish =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36';

async function request(url, { method, agent, signal }) {
  return fetch(url, {
    method,
    redirect: 'follow',
    signal,
    headers: { 'user-agent': agent, ...(method === 'GET' ? { range: 'bytes=0-2048' } : {}) },
  });
}

async function check(target) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    // Cheapest first: HEAD, announcing what we are.
    let response = await request(target.url, { method: 'HEAD', agent: identify, signal: controller.signal });

    /*
     * A bad answer is never believed on the first ask. HEAD is unevenly
     * implemented, and a robot user-agent is refused by hosts whose pages are
     * perfectly alive — so anything that looks like a failure is re-asked as a
     * browser doing a GET before it is reported as one. Five of the first seven
     * links this script called dead were answering 200 to exactly that retry.
     */
    if (!response.ok) {
      response = await request(target.url, { method: 'GET', agent: browserish, signal: controller.signal });
    }

    if (response.status === 404 || response.status === 410) return { ...target, kind: 'gone', status: response.status };
    if (response.status === 403 || response.status === 429)
      return { ...target, kind: 'blocked', status: response.status };
    if (response.status >= 500) return { ...target, kind: 'server-error', status: response.status };
    if (!response.ok) return { ...target, kind: 'other', status: response.status };
    return { ...target, kind: 'ok', status: response.status };
  } catch (error) {
    return { ...target, kind: 'unreachable', status: error.name === 'AbortError' ? 'timeout' : error.message };
  } finally {
    clearTimeout(timer);
  }
}

const results = [];
let next = 0;

await Promise.all(
  Array.from({ length: concurrency }, async () => {
    while (next < queue.length) {
      const target = queue[next++];
      results.push(await check(target));
    }
  }),
);

const by = (kind) => results.filter((result) => result.kind === kind);
const gone = by('gone');
const unexpectedBlocks = by('blocked').filter((result) => !botProtected.has(result.id));

console.log(`${queue.length} unique URLs across ${targets.length} references\n`);
for (const kind of ['ok', 'gone', 'blocked', 'server-error', 'unreachable', 'other']) {
  const found = by(kind);
  if (found.length) console.log(`  ${kind.padEnd(13)} ${found.length}`);
}

if (gone.length) {
  console.log('\nGone — these need fixing:');
  for (const result of gone) console.log(`  ${result.id} ${result.where} ${result.status} ${result.url}`);
}

if (unexpectedBlocks.length) {
  console.log('\nNewly blocking automated requests:');
  for (const result of unexpectedBlocks) console.log(`  ${result.id} ${result.where} ${result.status} ${result.url}`);
}

for (const kind of ['server-error', 'unreachable']) {
  const found = by(kind);
  if (found.length) {
    console.log(`\n${kind}:`);
    for (const result of found) console.log(`  ${result.id} ${result.where} ${result.status} ${result.url}`);
  }
}

// Reports. A third-party outage is not a reason to fail someone else's build.
process.exit(0);

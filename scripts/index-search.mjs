/**
 * Build the search index, and say so when it cannot.
 *
 * Pagefind ships as a platform-specific binary pulled in through optional
 * dependencies — `@pagefind/linux-x64` and friends — so it is the one build step
 * that can be present on a laptop and absent on a build container. Run directly
 * it failed there with nothing in the log at all: the site built, the deploy
 * stopped, and the only evidence was pnpm's exit code.
 *
 * Search is not the site. A register that lists 178 providers and cannot be
 * searched is worse than one that can, and it is still a register — so a missing
 * index degrades search rather than failing the deploy, loudly enough that
 * nobody mistakes it for working.
 */
import { spawnSync } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';

const site = 'dist';

/* Which platform packages actually landed. Empty is the whole answer when it fails. */
const platforms = existsSync('node_modules/@pagefind') ? readdirSync('node_modules/@pagefind') : [];

const run = spawnSync('pagefind', ['--site', site], { stdio: 'inherit', shell: true });

if (run.status === 0) process.exit(0);

console.error('\n=================================================================');
console.error('SEARCH INDEX NOT BUILT — /search/ will return nothing.');
console.error('=================================================================');
console.error(`pagefind --site ${site}`);
console.error(`  exit status   ${run.status}`);
if (run.signal) console.error(`  signal        ${run.signal}`);
if (run.error) console.error(`  spawn error   ${run.error.message}`);
console.error(`  platform      ${process.platform} ${process.arch}`);
console.error(`  binary on PATH ${existsSync('node_modules/.bin/pagefind') ? 'yes' : 'no'} (node_modules/.bin/pagefind)`);
console.error(`  @pagefind/*   ${platforms.length ? platforms.join(', ') : 'none installed'}`);
console.error('');
console.error('If no platform package is installed, the optional dependency for this');
console.error('platform did not resolve — check the install step, not this one.');
console.error('=================================================================\n');

/* The deploy continues. Everything but search is already built and correct. */
process.exit(0);

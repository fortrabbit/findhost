/*
 * One-shot: fold the three flat URL keys into a single `urls` object.
 *
 *   url:        https://scalingo.com          urls:
 *   pricingUrl: https://scalingo.com/pricing    home: https://scalingo.com
 *   statusUrl:  https://scalingostatus.com/     pricing: https://scalingo.com/pricing
 *                                               status: https://scalingostatus.com/
 *
 * Run before any agent opens a record — after, it collides with edits in flight.
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = 'src/content/providers';
const keyToSlot = { url: 'home', pricingUrl: 'pricing', statusUrl: 'status' };

let changed = 0;

for (const filename of readdirSync(dir).filter((name) => name.endsWith('.md'))) {
  const path = join(dir, filename);
  const source = readFileSync(path, 'utf8');
  const match = source.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) {
    console.error(`no frontmatter: ${filename}`);
    continue;
  }

  const lines = match[1].split('\n');
  const found = {};
  const kept = [];

  for (const line of lines) {
    const hit = line.match(/^(url|pricingUrl|statusUrl):\s*(.+)$/);
    if (hit) found[keyToSlot[hit[1]]] = hit[2].trim();
    else kept.push(line);
  }

  if (!found.home) {
    console.error(`no url: ${filename}`);
    continue;
  }

  const block = ['urls:', ...['home', 'pricing', 'status'].filter((slot) => found[slot]).map((slot) => `  ${slot}: ${found[slot]}`)];

  const nameAt = kept.findIndex((line) => line.startsWith('name:'));
  kept.splice(nameAt + 1, 0, ...block);

  writeFileSync(path, source.replace(match[0], `---\n${kept.join('\n')}\n---\n`));
  changed += 1;
}

console.log(`${changed} records migrated.`);

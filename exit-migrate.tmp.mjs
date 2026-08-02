import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { parse } from 'yaml';

const dir = 'src/content/providers';
let done = 0, skipped = [];

for (const file of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
  const path = `${dir}/${file}`;
  const raw = readFileSync(path, 'utf8');
  const fm = raw.match(/^---\n([\s\S]*?)\n---/);
  const data = parse(fm[1]);
  if (data.exitWithin) continue;

  const periods = data.billingPeriods ?? [];
  const min = data.contractMinimum;
  const policy = data.cancellation;
  let value;

  // A resource billed by the hour stops costing when it stops running.
  if ((periods.includes('hourly') || periods.includes('daily')) && min !== 'annual' && min !== 'multi-year') {
    value = 'a-day';
  } else if (min === 'multi-year') {
    value = 'over-a-year';
  } else if (min === 'annual') {
    value = 'a-year';
  } else if (policy === 'notice-period') {
    // Notice runs alongside the rest of the paid period, so both are owed.
    value = 'a-quarter';
  } else if (policy === 'end-of-term') {
    value = periods.includes('monthly') ? 'a-month' : periods.includes('yearly') ? 'a-year' : undefined;
  } else if (policy === 'anytime' || policy === 'end-of-month') {
    value = 'a-month';
  }

  let next = raw;
  if (value) {
    next = /^cancellation: /m.test(raw)
      ? raw.replace(/^cancellation: .*$/m, `exitWithin: ${value}`)
      : raw.replace(/^(billingTiming: .*|billingPeriods:(?:\n  - .*)*)$/m, `$1\nexitWithin: ${value}`);
    if (next === raw) { skipped.push(`${file} (no anchor)`); continue; }
    done += 1;
  } else if (/^cancellation: /m.test(raw)) {
    next = raw.replace(/^cancellation: .*\n/m, '');
    skipped.push(`${file} (${policy} — not derivable)`);
  } else continue;

  // The source moves with the fact it now supports.
  next = next.replace(/field: cancellation/g, 'field: exitWithin');
  writeFileSync(path, next);
}

console.log('exitWithin set on', done, 'records');
if (skipped.length) console.log('not derived:', skipped.join(', '));

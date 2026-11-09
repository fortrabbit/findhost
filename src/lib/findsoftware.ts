/**
 * The FindSoftware record for a software value. `src/data/findsoftware.yml`
 * lists the records a FindSoftware build has, so a value without one gets no
 * link instead of a 404, and a build without FINDSOFTWARE_URL links nowhere.
 */
import { readFileSync } from 'node:fs';
import { parse as parseYaml } from 'yaml';

export const findsoftwareFile = 'src/data/findsoftware.yml';
export const findsoftwarePaths = parseYaml(readFileSync(findsoftwareFile, 'utf8')) as Record<string, string>;

export function findsoftwareUrl(base: string | undefined, value: string): string | undefined {
  if (!base || !Object.hasOwn(findsoftwarePaths, value)) return undefined;
  return `${base.replace(/\/$/, '')}${findsoftwarePaths[value]}`;
}

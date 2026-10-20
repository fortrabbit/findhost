/**
 * Which records have a logo on file, and where it is served from.
 *
 * scripts/logo.ts writes the image and the entry; the build only reads them.
 * The manifest is read off disk rather than imported so validate.ts and the
 * script can use this module under plain Node, the same reason as fields.ts.
 */
import { existsSync, readFileSync } from 'node:fs';
import { parse as parseYaml } from 'yaml';

export interface LogoEntry {
  /** `mark` was chosen on the provider's pages; `favicon` is the largest icon the home page declares. */
  kind: 'mark' | 'favicon';
  /** The image as fetched. */
  image: string;
  /** The provider page it was found on. */
  page: string;
  fetchedAt: string;
  /** The image is opaque to its corners, so it is drawn without the white tile's margin. */
  fills?: boolean;
}

/** Project-relative, as fields.ts explains: the build moves this module. */
export const logoManifest = 'src/data/logos.yml';
export const logoDir = 'public/logos';
/** Twice the largest tile it is drawn in, for high-density screens. */
export const logoSize = 128;
export const logoFile = (id: string) => `${id}.png`;

const entries = (existsSync(logoManifest) ? (parseYaml(readFileSync(logoManifest, 'utf8')) ?? {}) : {}) as Record<
  string,
  LogoEntry
>;

export const logoEntries = () => entries;

/** The address to draw, with the fetch date on it so a re-fetched logo is not served from a stale cache. */
export const logoOf = (id: string) => {
  const entry = entries[id];
  return entry && { src: `/logos/${logoFile(id)}?v=${entry.fetchedAt}`, fills: Boolean(entry.fills) };
};

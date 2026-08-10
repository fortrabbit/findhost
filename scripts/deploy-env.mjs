/**
 * What the build container actually has. Temporary — delete once FR-6304 is
 * answered and the answer is written down.
 *
 * The question it settles: are an environment's ENV vars present during build
 * commands? The docs say ENV vars are available "at runtime" and the build
 * commands page never mentions them, so nobody knows. It matters here because
 * SITE_URL is read at build time and baked into every canonical tag, the sitemap
 * and the JSON-LD — if the build cannot see it, the deploy succeeds and
 * publishes a site that points at localhost.
 *
 * Runs first in `pnpm run build`, so it prints even when the build then fails.
 */

/* Names are safe to print; values are not, and a deploy log is not a vault. */
const secret = /pass|secret|key|token|credential|auth/i;

const show = (value) => (value === '' ? '(empty)' : JSON.stringify(value));

console.log('--- build environment -------------------------------------------');
console.log(`node        ${process.version}`);
console.log(`platform    ${process.platform} ${process.arch}`);
console.log(`cwd         ${process.cwd()}`);

/*
 * The one we came for, printed whatever it holds — a bare domain, a quoted
 * string and an unresolved ${...} all look identical until something says so.
 */
console.log(`SITE_URL    ${show(process.env.SITE_URL)}`);
console.log(`PUBLIC_INDEXABLE ${show(process.env.PUBLIC_INDEXABLE)}`);

const named = Object.keys(process.env).sort();

/* Anything the platform sets about the app itself, which is where a domain would be. */
const platform = named.filter((name) => /^(FORTRABBIT|APP|ENV|REGION|DOMAIN)/i.test(name));
console.log(`\nplatform vars (${platform.length}):`);
for (const name of platform) {
  console.log(`  ${name} = ${secret.test(name) ? '(redacted)' : show(process.env[name])}`);
}

console.log(`\nevery name present (${named.length}):`);
console.log(`  ${named.join(' ')}`);
console.log('-----------------------------------------------------------------\n');

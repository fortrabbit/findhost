import { defineConfig, devices } from '@playwright/test';

/*
 * Runs against the built site rather than the dev server: what ships is static
 * output, and the one thing worth proving is that the JavaScript is optional.
 *
 * The port is overridable because 4321 is also where `astro dev` lives, and
 * `reuseExistingServer` will happily reuse whatever answers there — which is how
 * a suite comes back red against a dev server holding a stale content
 * collection, twice, before anyone suspects the harness.
 *
 *   PREVIEW_PORT=4402 pnpm run test:e2e
 */
const port = Number(process.env.PREVIEW_PORT ?? 4321);
const origin = `http://localhost:${port}`;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: origin,
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    /*
     * The same specs with scripting off. Every assertion outside the find island
     * must hold in both, because a crawler that sees nothing is fatal for a
     * project whose whole distribution thesis is being retrieved and cited.
     */
    { name: 'no-js', use: { ...devices['Desktop Chrome'], javaScriptEnabled: false } },
  ],
  webServer: {
    command: `pnpm run preview --port ${port}`,
    url: origin,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});

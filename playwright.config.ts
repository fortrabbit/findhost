import { defineConfig, devices } from '@playwright/test';

/*
 * Runs against the built site rather than the dev server: what ships is static
 * output, and the one thing worth proving is that the JavaScript is optional.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://localhost:4321',
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
    command: 'pnpm run preview --port 4321',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});

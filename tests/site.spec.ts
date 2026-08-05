import { readdirSync, readFileSync } from 'node:fs';
import { expect, test } from '@playwright/test';

/*
 * These cover the four things that would be worst to break silently: the list
 * everyone lands on, the promises the record page makes about its own data, the
 * governance rules that are otherwise only words on a policy page, and the
 * no-JavaScript fallback the whole distribution thesis rests on.
 */

/*
 * Counted from the records, not written down. The page and this file reach the
 * number by different routes — frontmatter on disk against rendered rows — so
 * a record that quietly falls out of the register still fails, and adding one
 * does not send someone editing assertions until they stop meaning anything.
 */
const records = new URL('../src/content/providers/', import.meta.url);
const hidden = new Set(['draft', 'out-of-scope']);

const listed = readdirSync(records).filter((file) => {
  if (!file.endsWith('.md')) return false;
  const status = readFileSync(new URL(file, records), 'utf8').match(/^status: *(\S+)/m)?.[1];
  return status === undefined || !hidden.has(status);
}).length;

test.describe('the register', () => {
  test('lists every record, grouped and anchored', async ({ page }) => {
    await page.goto('/');

    const rows = page.locator('[data-find-results] .provider-list > li');
    await expect(rows).toHaveCount(listed);

    /*
     * Anchors are linked from prose and from the map, so they have to exist —
     * scoped to the results, because a bare #h also matches whatever a browser
     * extension injects into the page, and did so intermittently.
     */
    const results = page.locator('[data-find-results]');
    await expect(results.locator('#other')).toBeVisible();
    await expect(results.locator('#h')).toBeVisible();

    // The numeric group says what it holds rather than repeating its own anchor.
    await expect(results.locator('#other h2')).toContainText('0–9');
  });

  test('announces its order, because position is not ranking', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('[data-find-summary]')).toContainText('alphabetical');
  });

  /*
   * Astro drops a whitespace-only text node between two expressions, so a count
   * written as `{n} {noun}` in markup renders "150records" as soon as a
   * formatter puts the two on separate lines. It shipped on 158 pages once and
   * came back the next time Prettier reflowed the file, which is why the
   * strings are built in frontmatter and why this asserts the space.
   */
  test('puts a space between a number and the noun it counts', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('[data-find-summary]')).toHaveText(/^\d+ records, sorted alphabetically\.$/);

    await page.goto('/software/');
    await expect(page.locator('.annotation').first()).toHaveText(/^\d+ values in use\./);
  });

  test('every row carries a tile, so a missing figure never looks broken', async ({ page }) => {
    await page.goto('/');
    const rows = page.locator('[data-find-results] .provider-list > li');
    await expect(page.locator('[data-find-results] .provider-tile')).toHaveCount(await rows.count());
  });

  /*
   * Records sit at the root, beside the facet indexes and the written pages.
   * That is one namespace shared by three kinds of thing, which validate guards
   * — this is the other half: that a record actually answers there.
   */
  test('serves a record from the root', async ({ page }) => {
    // Scoped to the article: a bare h1 also matches whatever a browser
    // extension injects, which is why the anchors above are scoped too.
    await page.goto('/hetzner/');
    await expect(page.locator('article h1')).toHaveText('Hetzner');
  });
});

test.describe('a record', () => {
  test('shows only what is held, and names the rest', async ({ page }) => {
    await page.goto('/hetzner/');

    const values = page.locator('.fact-list > dd');
    await expect(values.first()).toBeVisible();
    // The wall of question marks is the thing this replaced.
    await expect(page.locator('.fact-list > dd', { hasText: /^\?$/ })).toHaveCount(0);

    await expect(page.locator('.missing-fields summary')).toContainText('not recorded yet');
  });

  test('marks sourced facts and links them to their source', async ({ page }) => {
    await page.goto('/hetzner/');

    const marker = page.locator('.footnote-ref').first();
    await expect(marker).toBeVisible();

    const target = await marker.getAttribute('href');
    await expect(page.locator(target!)).toBeVisible();
    // The date a source was read, which is the whole claim a citation here makes.
    await expect(page.locator('.sources li').first().locator('.source-date')).toHaveText(/^\d{4}-\d{2}-\d{2}$/);
  });

  test('sends every outbound link with rel=nofollow', async ({ page }) => {
    await page.goto('/hetzner/');
    for (const link of await page.locator('.record-links a[href^="http"]').all()) {
      await expect(link).toHaveAttribute('rel', 'nofollow');
    }
  });
});

test.describe('governance, as behaviour rather than policy text', () => {
  test('fortrabbit sits in alphabetical position and is marked', async ({ page }) => {
    await page.goto('/');

    const names = await page.locator('[data-find-results] .provider-name a').allInnerTexts();
    const ours = names.findIndex((name) => name === 'fortrabbit');
    expect(ours).toBeGreaterThan(0);

    const sorted = [...names].sort((a, b) => a.localeCompare(b, 'en'));
    expect(names).toEqual(sorted);

    // The disclosure rides with the row, where a reader meets the name, and with
    // the machine-readable copy. It is not on the record page: a marker beside
    // the name is seen by everyone scanning the register, which is where the
    // conflict of interest could otherwise pass unnoticed.
    const row = page.locator('.provider-name').filter({ hasText: /^fortrabbit/ });
    await expect(row.locator('.self-marker')).toHaveText('published by us');

    const record = await page.request.get('/fortrabbit.md');
    expect(await record.text()).toContain('Published by us');
  });

  test('carries no affiliate parameters anywhere', async ({ page }) => {
    await page.goto('/');
    const hrefs = await page
      .locator('a[href^="http"]')
      .evaluateAll((links) => links.map((link) => (link as HTMLAnchorElement).href));
    for (const href of hrefs) {
      expect(href).not.toMatch(/[?&](ref|aff|affiliate|partner|utm_[a-z]+|fpr|via)=/i);
    }
  });

  test('stays out of search engines until the flag says otherwise', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);

    // Both layers read PUBLIC_INDEXABLE, so they can only ever disagree by
    // accident — which is exactly the accident that ships unnoticed.
    const robots = await page.request.get('/robots.txt');
    expect(await robots.text()).toContain('Disallow: /');
  });
});

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('the register is still the register', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('[data-find-results] .provider-list > li')).toHaveCount(listed);
  });

  test('every facet value is reachable as a real link', async ({ page }) => {
    await page.goto('/');

    const fallback = page.locator('[data-find-fallback]');
    await expect(fallback).toBeVisible();
    await expect(fallback.locator('a')).not.toHaveCount(0);

    await page.goto('/runtimes/php/');
    await expect(page.locator('.provider-list > li').first()).toBeVisible();
    await expect(page.locator('.annotation').first()).toContainText('provider');
  });
});

test.describe('stubs', () => {
  /*
   * The repo holds more records than the register shows. The hidden ones are
   * reachable, because a decision nobody can see is not a decision — but they
   * are opt-in, unfiltered and never in the count, or the count stops being
   * true the moment someone ticks a box.
   */
  test.skip(({ javaScriptEnabled }) => javaScriptEnabled === false, 'the toggle is part of the filter view');

  test('are off by default, shown on request, and never counted', async ({ page }) => {
    await page.goto('/');

    const rows = page.locator('[data-find-results] .provider-list > li');
    await expect(rows).toHaveCount(listed);

    // Stubs are not a lead filter, so they live under the disclosure — which
    // opens without JavaScript, and has to open before anything can be ticked.
    await page.locator('.find-more-filters > summary').click();

    const toggle = page.locator('.find-drafts input[type="checkbox"]');
    await expect(toggle).not.toBeChecked();

    await toggle.check();
    await expect(rows).not.toHaveCount(listed);
    await expect(page.locator('[data-find-summary]')).toHaveText(
      new RegExp(`^${listed} records, sorted alphabetically\\.$`),
    );
    await expect(page.getByRole('heading', { name: 'Not in the register' })).toBeVisible();
  });
});

test.describe('filtering', () => {
  /*
   * The only surface on the site that needs JavaScript, and the reason the rest
   * is tested twice: losing this leaves a reader with the whole register and every
   * facet as a link, which is the whole point of the fallback.
   */
  test.skip(({ javaScriptEnabled }) => javaScriptEnabled === false, 'filtering is the one JavaScript-only surface');

  test('narrows the list and says how many it dropped', async ({ page }) => {
    await page.goto('/');

    const rows = page.locator('[data-find-results] .provider-list > li');
    await expect(rows).toHaveCount(listed);

    await page.locator('.find-facet input[type=checkbox]').first().check();
    await expect(rows).not.toHaveCount(listed);

    // Unknowns are declared rather than silently dropped: with most fields
    // optional, a filter that hides them would hide most of the market.
    await expect(page.locator('[data-find-summary]')).toContainText(new RegExp(`of ${listed}`));
  });

  /*
   * The letter heading is built twice, here and in ProviderRegister.astro, and
   * they drifted: the server put the letter inside the anchor while the script
   * still wrote "#" plus a bare text node beside it. Same list, two headings,
   * two fonts. The heading holds nothing but its own link, so a stray text node
   * on either side fails.
   */
  test('heads a letter group the same way the server does', async ({ page }) => {
    await page.goto('/');
    await page.locator('.find-facet input[type=checkbox]').first().check();

    const heading = page.locator('[data-find-results] .letter-group > h2').first();
    await expect(heading.locator('.anchor-link')).toHaveCount(1);
    expect((await heading.innerText()).trim()).toBe((await heading.locator('.anchor-link').innerText()).trim());
  });

  test('a filtered row looks exactly like an unfiltered one', async ({ page }) => {
    await page.goto('/');
    await page.locator('.find-facet input[type=checkbox]').first().check();

    const row = page.locator('[data-find-results] .provider-list > li').first();
    await expect(row.locator('.provider-tile')).toBeVisible();
    await expect(row.locator('.provider-name a')).toBeVisible();
  });

  /*
   * Slim is a class on the results, not a second way to build a row, so a row
   * rebuilt by a filter has to come back slim without the script knowing which
   * view is on. That only holds while both renderers emit the same markup —
   * which is what this asserts, from the far side of a filter.
   */
  test('keeps the slim view through a filter', async ({ page }) => {
    await page.goto('/');

    const row = page.locator('[data-find-results] .provider-list > li').first();
    await expect(row.locator('.provider-tile')).toBeVisible();

    await page.locator('[data-list-style] button[value=slim]').click();
    await expect(row.locator('.provider-tile')).toBeHidden();
    await expect(row.locator('.provider-name a')).toBeVisible();

    await page.locator('.find-facet input[type=checkbox]').first().check();
    await expect(row.locator('.provider-tile')).toBeHidden();
    await expect(row.locator('.provider-name a')).toBeVisible();
  });
});

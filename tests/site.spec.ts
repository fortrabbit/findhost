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

/*
 * Two ways to be out of the register: hidden, which keeps no place anywhere, and
 * beside it, which keeps a page and a checkbox. Listed here rather than imported
 * so the number still arrives by a different route from the page's.
 */
const outside = new Set(['draft', 'out-of-scope', 'discontinued', 'unlisted']);

const listed = readdirSync(records).filter((file) => {
  if (!file.endsWith('.md')) return false;
  const status = readFileSync(new URL(file, records), 'utf8').match(/^status: *(\S+)/m)?.[1];
  return status === undefined || !outside.has(status);
}).length;

test.describe('the one editorial mark', () => {
  /*
   * A heart, and nothing else. It replaced a scoring system that computed a
   * number and then let a person move it by hand — after eighteen adjustments
   * the arithmetic was decoration, and a boolean says the same thing without
   * implying a precision nobody had.
   */
  test('marks the ones we like, and marks nothing else', async ({ page }) => {
    await page.goto('/');

    const hearts = page.locator('[data-find-results] .favorite-badge');
    expect(await hearts.count()).toBeGreaterThan(5);

    /* Every heart says what it is to a screen reader, not only to a pointer. */
    await expect(hearts.first()).toContainText(/one we like/i);

    /* And no score anywhere: that is the thing this replaced. */
    await expect(page.locator('.provider-signal')).toHaveCount(0);
    await expect(page.locator('.sort-links')).toHaveCount(0);
  });

  test('the register is alphabetical and offers no other order', async ({ page }) => {
    await page.goto('/');
    const names = await page.locator('[data-find-results] .provider-name a').allInnerTexts();
    const sorted = [...names].sort((a, b) => a.replace(/^the /i, '').localeCompare(b.replace(/^the /i, ''), 'en'));
    expect(names).toEqual(sorted);
  });
});

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

  /*
   * The register itself no longer says it: the letters are the order, and the
   * sentence sat a filter panel away from the list it described. A list that
   * names its own subject still says it, and that is where the claim has to
   * hold, because position is not ranking.
   */
  test('announces its order where it is not obvious', async ({ page }) => {
    await page.goto('/software/wordpress/');
    await expect(page.locator('.annotation').first()).toContainText('alphabetically');
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
    await expect(page.locator('[data-find-count]')).toHaveText(/^\d+ records\.$/);

    /* Same hazard, same line: each group beside the register is a count and a word. */
    for (const link of await page.locator('[data-find-summary] a').all()) {
      await expect(link).toHaveText(/^\d+ [a-z]/);
    }

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
  test('fortrabbit sits in alphabetical position and discloses itself', async ({ page }) => {
    await page.goto('/');

    const names = await page.locator('[data-find-results] .provider-name a').allInnerTexts();
    const ours = names.findIndex((name) => name === 'fortrabbit');
    expect(ours).toBeGreaterThan(0);

    const sorted = [...names].sort((a, b) => a.localeCompare(b, 'en'));
    expect(names).toEqual(sorted);

    /*
     * The disclosure is on our own record and in the machine-readable copy, not
     * as a marker beside the name in every list: a claim about us repeated next
     * to a hundred and seventy-five providers who had made no such claim, while
     * the one page where it matters said it in passing.
     *
     * Written in the record's prose rather than drawn by the template, so this
     * asserts that the page says it — not how it came to. What may not change is
     * that a reader of our own record learns who publishes the register.
     */
    await page.goto('/fortrabbit/');
    await expect(page.locator('article')).toContainText(/we publish/i);

    await page.goto('/');

    /* Same sentence, one source: the export carries the record's prose. */
    const record = await page.request.get('/fortrabbit.md');
    expect(await record.text()).toMatch(/we publish/i);
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
   * true the moment someone ticks a box. Nothing here needs the script: the way
   * in is a link in the sentence that counts the register, which is why this
   * runs with JavaScript off as well.
   */
  test('are not in the register, and have a page of their own', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('[data-find-results] .provider-list > li')).toHaveCount(listed);
    await expect(page.locator('[data-find-count]')).toHaveText(new RegExp(`^${listed} records\\.$`));

    /* The way to them is a link, so it works without scripting and can be crawled. */
    await page.locator('[data-find-summary] a[href="/stubs/"]').first().click();

    /* The heading is the word that was clicked, so arriving needs no second reading. */
    await expect(page.locator('h1')).toHaveText('Stubs');
    await expect(page.locator('.provider-list > li').first()).toBeVisible();
  });

  test('a group beside the register keeps its own list', async ({ page }) => {
    await page.goto('/unlisted/');

    await expect(page.locator('h1')).toHaveText('Unlisted');

    /* Exactly the group, not the group appended to everything else. */
    const rows = page.locator('.provider-list > li');
    await expect(rows).not.toHaveCount(listed);
    expect(await rows.count()).toBeGreaterThan(0);
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

    /*
     * Visible rows, not rows: filtering hides what the server already rendered
     * rather than rebuilding the list, so the ones that do not match are still
     * in the document. That is the point — one row renderer, and a filtered row
     * is the same element as an unfiltered one.
     */
    const shown = page.locator('[data-find-results] .provider-list > li:visible');
    await expect(shown).toHaveCount(listed);

    await page.locator('.find-facet input[type=checkbox]').first().check();
    await expect(shown).not.toHaveCount(listed);

    // Unknowns are declared rather than silently dropped: with most fields
    // optional, a filter that hides them would hide most of the market.
    await expect(page.locator('[data-find-summary]')).toContainText(new RegExp(`of ${listed}`));

    /*
     * The count and the groups beside the register share a paragraph, and only
     * the count is a function of the filters. Rewriting the sentence rather
     * than the number took the links to those groups away with it.
     */
    await expect(page.locator('[data-find-summary] a[href="/stubs/"]')).toBeVisible();
  });

  /*
   * A letter with nothing left under it takes its heading and its rule away.
   * Left behind, the register grows a row of empty letters as a filter narrows
   * it — a heading that names a group with no members.
   */
  test('takes a letter away when nothing under it survives', async ({ page }) => {
    await page.goto('/');

    const headings = page.locator('[data-find-results] .letter-group:visible');
    const before = await headings.count();

    await page.locator('.find-facet input[type=checkbox]').first().check();
    await expect(headings).not.toHaveCount(before);

    /* Every letter still standing has at least one row under it. */
    for (const group of await headings.all()) {
      await expect(group.locator('.provider-list > li:visible').first()).toBeVisible();
    }
  });

  /*
   * The register is server-rendered and filtering hides what does not match, so
   * a filtered row is not a copy that has to be kept looking like the original —
   * it is the original. This asserts that: the same element, still whole, on the
   * far side of a filter and of the slim toggle.
   */
  test('a filtered row is the row the server drew', async ({ page }) => {
    await page.goto('/');

    const row = page.locator('[data-find-results] .provider-list > li').first();
    const id = await row.getAttribute('data-record');
    await expect(row.locator('.provider-tile')).toBeVisible();

    await page.locator('[data-list-style] button[value=slim]').click();
    await expect(row.locator('.provider-tile')).toBeHidden();
    await expect(row.locator('.provider-name a')).toBeVisible();

    await page.locator('.find-facet input[type=checkbox]').first().check();
    expect(await row.getAttribute('data-record')).toBe(id);
    await expect(row.locator('.provider-name a')).toBeVisible();
  });
});

/*
 * The card a link turns into elsewhere, which is the one part of the site nobody
 * on the site ever sees. It is drawn at build time by a WebAssembly renderer, so
 * the failure to guard against is not an ugly card — it is 234 of them silently
 * not being drawn at all while every page goes on promising one.
 */
test.describe('share cards', () => {
  const png = async (page: import('@playwright/test').Page, path: string) => {
    const answer = await page.request.get(path);
    expect(answer.status(), `${path} is served`).toBe(200);
    expect(answer.headers()['content-type']).toContain('image/png');

    const bytes = await answer.body();
    expect(bytes.subarray(1, 4).toString(), `${path} is really a PNG`).toBe('PNG');

    // Width and height live in the IHDR chunk, at a fixed offset in every PNG.
    return { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20), bytes: bytes.length };
  };

  test('a record points at its own card, drawn at the size every network expects', async ({ page }) => {
    await page.goto('/fortrabbit/');

    const declared = await page.locator('meta[property="og:image"]').getAttribute('content');
    expect(declared).toBeTruthy();
    expect(new URL(declared!).pathname).toBe('/og/fortrabbit.png');

    const card = await png(page, '/og/fortrabbit.png');
    expect(card).toMatchObject({ width: 1200, height: 630 });

    /*
     * A card that renders but draws nothing still weighs something. Flat white
     * at this size compresses to a few hundred bytes, so a floor catches the
     * empty card that a status code and a header cannot.
     */
    expect(card.bytes).toBeGreaterThan(10_000);
  });

  test("every page has one, and pages that are not records share the register's", async ({ page }) => {
    await png(page, '/og/default.png');

    for (const path of ['/', '/guide/', '/about/']) {
      await page.goto(path);
      const declared = await page.locator('meta[property="og:image"]').getAttribute('content');
      expect(new URL(declared!).pathname, `${path} falls back to the register's card`).toBe('/og/default.png');
    }
  });

  /*
   * A facet value page is the one somebody sends when they mean "the ones that
   * do X", so it is the likeliest of all of these to be seen as a card. Its own
   * card sits a level down the path, because /og/<name>.png already belongs to
   * the records.
   */
  test('a facet and one of its values each draw their own', async ({ page }) => {
    for (const [path, card] of [
      ['/categories/', '/og/categories/index.png'],
      ['/categories/paas/', '/og/categories/paas.png'],
      ['/regions/', '/og/regions/index.png'],
    ]) {
      await page.goto(path);
      const declared = await page.locator('meta[property="og:image"]').getAttribute('content');
      expect(new URL(declared!).pathname, `${path} draws its own card`).toBe(card);
      expect(await png(page, card)).toMatchObject({ width: 1200, height: 630 });
    }
  });
});

test.describe('search', () => {
  /*
   * The other JavaScript-only surface, and the one that reaches for a module
   * nothing in the bundle can see: Pagefind writes /pagefind/pagefind.js after
   * astro build, so the import is inline and unbundled. Two ways to break it
   * have already happened — an eval a content security policy would refuse, and
   * a preload placeholder the bundler left unresolved — and both failed by
   * showing the "only built for the deployed site" message on a site where it
   * had been built.
   */
  test.skip(({ javaScriptEnabled }) => javaScriptEnabled === false, 'search is the other JavaScript-only surface');

  test('answers a query typed into the form', async ({ page }) => {
    await page.goto('/search/');

    await page.locator('[data-search-input]').fill('hetzner');
    await page.locator('.search-form button[type=submit]').click();

    await expect(page.locator('[data-search-summary]')).toContainText(/pages? match/);
    expect(await page.locator('[data-search-results] > li').count()).toBeGreaterThan(0);
  });

  test('answers a query arriving in the URL, which is what a shared link is', async ({ page }) => {
    await page.goto('/search/?q=hetzner');

    await expect(page.locator('[data-search-summary]')).toContainText(/pages? match/);
    await expect(page.locator('[data-search-results] a').first()).toBeVisible();
  });
});

---
name: fetch-logo
description: Find a provider's square logo mark on its own pages, fetch it into public/logos/ with scripts/logo.ts, and fall back to the largest favicon the home page declares. Use when asked to fetch, add, refresh or fix provider logos or favicons.
---

# Fetch a provider logo

Read the repository `AGENTS.md` first. The logo is fetched once and served from our own origin; a page never links to a provider's image.

## Input

Record ids, or "listed": every record `lib/providers.ts` would put in the register (no `status`). Skip ids already in `src/data/logos.yml` with `kind: mark` unless asked to refresh.

## Per record

1. **Look for a square mark** on the provider's own domain, in this order:
   - a brand, press or media kit page (try `/brand`, `/press`, `/media`, the footer links): an icon or symbol file, not the horizontal wordmark
   - the web manifest's 512px icon or the `apple-touch-icon`, when it shows the brand mark rather than a generic glyph
   - the logo image in the site header, when it is square or nearly so

   Square or near-square only (the script refuses wider than 3:2). PNG, SVG, JPEG or GIF; the renderer cannot read WebP. Never a third-party source (Wikipedia, Clearbit, logo sites): the provider's own pages are the source, as for every field.

2. **Fetch it:**

   ```sh
   node scripts/logo.ts <id> --url <image URL> --page <page it was found on>
   ```

3. **No mark found**, or the script refused it: run the fallback, which reads the home page and keeps the largest declared icon.

   ```sh
   node scripts/logo.ts <id>
   ```

   It refuses anything under 48px. Then the record keeps its emoji tile; that is a fine outcome, not a failure to work around.

4. **Look at the result**: Read `public/logos/<id>.png`. Delete the file and its `src/data/logos.yml` entry when it is blank, a generic CMS or hosting-panel icon, a parked-domain icon, or a different company's mark.

## Rules

- Never edit a record. The logo lives in `public/logos/` and `src/data/logos.yml` only.
- A provider asking for removal gets it: delete both, no discussion.
- A failed fetch changes nothing, so re-running is safe.

## Finish

```sh
pnpm run validate
```

Commit `public/logos/` and `src/data/logos.yml` together, one commit per batch, subject `Fetch logos for <n> records`. Report per record: `mark`, `favicon` or `none`, one line each.

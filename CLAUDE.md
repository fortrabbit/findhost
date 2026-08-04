# CLAUDE.md

## What this is

A ratings-free dataset of hosting providers, with a guide attached. Astro 7, static output, Pagefind for search, no database at build or request time. Deployed to fortrabbit, which runs PHP only — Node exists in the deploy service at build time and nowhere else, so nothing may depend on a server at request time.

Background: `MR-156 FindHost technical implementation plan.md`, `MR-156 FindHost implementation phases.md`, `MR-159 FindHost provider data model.md` and `MR-159 FindHost governance draft.md` in the `fortrabbit/knowledge-base` repo.

## Commands

```sh
pnpm dev                    # localhost:4321
pnpm build                  # astro build && pagefind --site dist
pnpm run check              # astro check
pnpm run test               # unit tests, node --test over src/**/*.test.ts
pnpm run validate           # guards zod cannot express
pnpm run linkcheck:internal # every internal link, and the sitemap, against dist
pnpm run test:e2e           # Playwright, a chromium project and a no-JS one
```

CI runs `format`, `check`, `test`, `build`, `validate`, `linkcheck:internal` and `test:e2e` on every PR, in that order. `pnpm run linkcheck` — outbound URLs against the live web — runs in a job of its own that is allowed to fail: a third party's outage is not a reason to block a content pull request.

TypeScript is pinned to 6.x: `astro check` needs the programmatic compiler API, which TS 7's native compiler does not expose yet.

## Rules that are not style preferences

- **Nothing may rank, score, boost, weight or order by quality.** `scripts/validate.ts` fails the build if such a field appears. The default sort is alphabetical and content-independent, and record completeness never affects order.
- **Absent means unknown.** Four fields are required of a listed record (`id`, `name`, `urls.home`, `category`); everything else optional. Never guess, never infer, never default to a flattering value.
- **`checkedAt` is a claim.** It means the record was read against the provider's own pages on that date — by an agent, not necessarily a person. Absent renders as nothing; never fall back to the git commit date.
- **`status: draft` and `status: out-of-scope` hide a record** from the register, every count, every facet, search and the sitemap, while keeping its page. `src/lib/providers.ts` is the only place that filter lives — load providers through it.
- **`figure` and `caveat` are display-only.** Never filterable, never sortable, never counted, so no "fewest caveats" view can exist.
- **Everything works with JavaScript off.** Facets are real `<a href>` links to static pages. A crawler that sees nothing is fatal for a project whose distribution thesis is being retrieved and cited.
- **Facet values go into the markup** as `data-pagefind-filter` attributes even where the design does not show them. Pagefind indexes rendered HTML; what is not in the markup cannot be searched.
- **No affiliate parameters in any URL.** The schema rejects them.
- **fortrabbit is in the dataset**, in alphabetical position, with the same fields and a permanent "published by us" marker.

## Record prose

Every record carries two optional prose sections under its frontmatter. They are the only free text in the dataset and the easiest place for it to rot or to editorialise.

- **`## About <name>`** — what the provider is and how it works, in two paragraphs at most. Structural facts only: what it sells, who operates the infrastructure, how the plans are shaped.
- **`## Worth knowing`** — constraints a reader would want before choosing, in two short paragraphs at most. Omit the section entirely when there is nothing material; an empty reservation invented to fill a heading is worse than silence.
- **Up to about 350 words of body.** There is no floor: a short record is a fine record, and padding one to look substantial is worse than leaving it short. The ceiling exists to stop a record turning into an essay, not to ration what is worth saying — a provider with a real history, a real incident or a genuinely awkward product shape may use the room.
- **Nothing that rots.** No runtime version numbers, no current prices, no counts that move every quarter (regions, points of presence, plan tiers). Describe the shape, not this quarter's figure — `entryPrice` and the fields carry what is numeric, with a date on them.
- **No PHP lens.** This is not a PHP dataset. Describe what a provider supports on its own terms; PHP earns a mention only where the provider itself specialises in it. A general platform's record must not be framed around what PHP cannot do there.
- **Describe, never judge.** No "best for", no recommendation, no comparison to another provider except a factual relationship (a reseller and its upstream, a rename). The reader draws the conclusion.
- **A claim in prose is cited in prose.** `sources` entries attach to fields, and some claims are not fields — an incident, an acquisition, a public investigation. Link the claim inline to the document that establishes it, and add a `sources` entry naming what it backs (`field: '2021 fire'`) so it is dated and appears in the record's numbered source list. Prefer the provider's own account, then an official investigation, then a court record. The bar rises with how damaging the claim is: this is a dataset published by a competitor, and an unsourced accusation is the one thing it cannot afford.
- **Nothing unsourced.** Every claim traces to the provider's own public pages, and the fields it supports carry a `sources` entry. Do not invent detail to reach a length, and delete legacy prose that has no source behind it — colour nobody can check is the thing this dataset exists to replace.
- **A fact that is already a field goes in About as a plain sentence, or nowhere.** "You manage the OS" is `whoManagesOs`, and every record in the category shares it. Move what helps the reader up into About; delete the judgement wrapped around it.
- **The floor is not a target.** A 90-word record that says only what is known beats a 150-word one padded to reach the range.

The same rules govern two frontmatter fields, because both are prose:

- **`description`** — one sentence naming what the provider is. It is the line every list shows, truncated. No version numbers, no region counts, no plan details, and no defining a provider by what it does not run.
- **`figure.text`** — a short display line, dry or wry about *what the thing is*. Never a verdict on how good it is: "Flashy marketing, sluggish reality" is an unsourced opinion about a named company published under fortrabbit's byline, which is exactly the power this dataset gives up. Never a version number either.

## Conventions

- Do not hardcode the domain. Absolute URLs come from `SITE_URL`; this runs on a vanity URL before it runs on its own.
- `src/content.config.ts` is a governance artifact, not a type definition. Read the comment at the top before changing it.
- `src/data/fields.yml` is the field dictionary, and the only place a field is described. It carries the label, the vocabulary, the record-page group and the facet slug; the zod schema builds its enums from it and the record page builds its rows from it. Another field, another value, another facet: an entry there and no TypeScript. A field with no `group` is validated and never shown; one with no `facet` is shown and never filtered.
- AI involvement is disclosed once, under Credits on `/about/`, for the whole site. A record's `ai` value says who wrote that description; it is data, and no page renders it.
- Comments explain a constraint or an invariant, or they are deleted. Nothing stateful — no "previously did X", no "FR-1234 will replace this".
- `src/lib/price.ts` must never import `src/lib/fields.ts`. price.ts is written to be safe in the client bundle, because `find.ts` draws the price gauge in the DOM whenever a list renders one, and fields.ts reads the dictionary off disk — `node:fs` in the client bundle throws on load and the filter panel never unhides. The price bands are duplicated there on purpose and `validate.ts` asserts the two copies agree.
- Anything Node runs directly — a unit-tested module, a script — imports with the extension: `./fields.ts`. Vite resolves it without; Node does not.

## Changing the data model

Five procedures, because each one has a step that used to be forgotten silently. `pnpm run validate` now catches most of them; the ones it cannot are marked.

**Add a field.** Entry in `src/data/fields.yml`, then the key in `src/content.config.ts` — zod needs it written out, and a field the schema does not name is stripped from every record by the content loader. `validate` fails if you do the first and forget the second. Give it a `group` to have it appear on the record page and in the markdown export; omit `group` to have it validated and never shown.

**Add a value.** One line in the field's `values`. Nothing else — the schema enum, the filter panel, the facet page and the counts all derive from it. Two things `validate` will stop you on: an id that is not a usable URL segment, and a note written for a value no record holds yet. If the value needs a shorter name in the filter column, give it `short:`. If it cannot honestly be held without another value of the same field — WooCommerce is WordPress — give it `implies: [other-id]` and `validate` holds every record to it.

**Add a facet.** `facet:` and a unique `filterOrder:` on the field. `validate` rejects a slug that collides with a real page or that another field already claims. Two things it cannot see: `src/pages/[facet]/[value].astro` has a `subjects` map that phrases each facet's summary sentence in English, and a facet with no entry there falls back to generic prose that is correct but clumsy — add a line. And `regions` is the one facet whose index is `/map/` rather than `/<facet>/`; use `facetIndex()` from `lib/facets.ts` rather than building the path.

**Add a derived facet.** A facet whose values are computed from other fields rather than recorded. Every value carries `from:` (the field it reads) and `when:` (the values of it that count as a yes) — `automation` is the one that exists, asking whether a provider has an API, a CLI or an MCP server at all, while the three fields behind it keep the detail. It is all or nothing: `validate` rejects a field that derives some values and not others, rejects a `when:` naming a value the source field does not have, and rejects the field appearing in `src/content.config.ts`, because no record may carry by hand what the build works out. A derived facet has no unknowns — every record gets an answer, possibly an empty one — so it shows no "unknown" count under its list.

**Rename a facet slug or a value id.** Change it in `fields.yml`, sweep every record that carries the old value, add a redirect in `astro.config.mjs`, and rename any note under `src/content/notes/`. `validate` catches the records and the notes; `linkcheck:internal` catches links in prose and the sitemap. Neither catches an old URL someone else has already linked to, which is what the redirect is for.

**Write a note.** `src/content/notes/<facet>/<value>.md` introduces a value, `src/content/notes/<facet>.md` introduces the whole facet. The path is the facet's *slug*, not the field id — eight of them differ. A note's `title` sets the browser tab; on a value page the heading stays the value's own label, so the page and the filter chip that leads to it say the same word.

# CLAUDE.md

## What this is

A ratings-free dataset of hosting providers, with a guide attached. Astro 7, static output, Pagefind for search, no database at build or request time. Live at www.findhost.app, deployed to fortrabbit, which runs PHP only — Node exists in the deploy service at build time and nowhere else, so nothing may depend on a server at request time.

Background: `MR-156 FindHost technical implementation plan.md`, `MR-156 FindHost implementation phases.md`, `MR-159 FindHost provider data model.md` and `MR-159 FindHost governance draft.md` in the `fortrabbit/knowledge-base` repo.

## Commands

```sh
pnpm dev                    # localhost:4321
pnpm build                  # astro build, then scripts/index-search.mjs
pnpm run check              # astro check
pnpm run test               # unit tests, node --test over src/**/*.test.ts
pnpm run validate           # guards zod cannot express
pnpm run linkcheck:internal # every internal link, and the sitemap, against dist
pnpm run test:e2e           # Playwright, a chromium project and a no-JS one
```

CI runs `format`, `check`, `test`, `build`, `validate`, `linkcheck:internal` and `test:e2e` on every PR, in that order. `pnpm run linkcheck` — outbound URLs against the live web — runs in a job of its own that is allowed to fail: a third party's outage is not a reason to block a content pull request. **A push to `main` on GitHub is a deploy.** fortrabbit builds from the GitHub repository — there is no separate fortrabbit git remote to push to, and a checkout showing only `origin` is not evidence that the site has not been updated. None of the CI is required for that to happen, so CI is what keeps a broken commit off `main` rather than off the server: once it is on `main` it is on www.findhost.app. The deploy strategy is **replace**: the document root is swapped for what the build produced, so a page the build stops producing stops being served rather than lingering at its old address.

The build script does two things beyond `astro build`. `scripts/index-search.mjs` runs Pagefind and, when it cannot, prints why and exits zero — a register that cannot be searched is worse than one that can, and still a register. `scripts/deploy-env.mjs` prints what the build container actually has; it is diagnostic and can go once FR-6304 and FR-6305 are answered.

**Anything the build imports belongs in `dependencies`, not `devDependencies`.** The site is generated on the server, so there is no runtime/build distinction to hang the split on, and an install that drops dev packages takes the build with it.

TypeScript is pinned to 6.x: `astro check` needs the programmatic compiler API, which TS 7's native compiler does not expose yet.

## Rules that are not style preferences

- **Nothing may rank, score, boost, weight or order by quality.** `scripts/validate.ts` fails the build if such a field appears. The default sort is alphabetical and content-independent, and record completeness never affects order.
- **Absent means unknown.** Four fields are required of a listed record (`id`, `name`, `urls.home`, `category`); everything else optional. Never guess, never infer, never default to a flattering value.
- **`checkedAt` is a claim.** It means the record was read against the provider's own pages on that date — by an agent, not necessarily a person. Absent renders as nothing; never fall back to the git commit date.
- **`status` decides where a record appears, and there are three places.** Listed is the default. `discontinued` and `unlisted` put a record *beside* the register: out of it by default, offered back as a group of its own, page still indexed and searchable. `draft` and `out-of-scope` hide one from the register, every count, every facet, search and the sitemap, while keeping its page — an out-of-scope record must name the numbered criterion it failed. A decision nobody can link to is not a decision, and nothing is ever deleted. `src/lib/providers.ts` is the only place those filters live — load providers through it, never `getCollection` directly.
- **`figure` and `caveat` are display-only.** Never filterable, never sortable, never counted, so no "fewest caveats" view can exist.
- **Everything works with JavaScript off.** Facets are real `<a href>` links to static pages. A crawler that sees nothing is fatal for a project whose distribution thesis is being retrieved and cited.
- **Every value in use has a page, and every one of them is indexed.** Nearly half carry under three hundred words and a couple of dozen list a single provider, which is the shape a quality rater is told to flag — and a floor would `noindex` the long tail at exactly the point where a FindHost page is most likely to be the only neutral source about that value. They are real static filter targets with real data and a summary generated from it, and they are how a crawler reaches every value without running JavaScript. The one threshold is the one that already exists: a value nothing holds gets no page at all.
- **Facet values go into the markup** as `data-pagefind-filter` attributes even where the design does not show them. Pagefind indexes rendered HTML; what is not in the markup cannot be searched.
- **No affiliate parameters in any URL.** The schema rejects them.
- **fortrabbit is in the dataset**, in alphabetical position, with the same fields as everything else and no marker of its own. The disclosure is a `## Conflict of interest` section in the record's prose, which is where the e2e test looks for it: what may not change is that a reader of our record learns who publishes the register, not how the page came to say so.

## Record prose

Every record carries two optional prose sections under its frontmatter. They are the only free text in the dataset and the easiest place for it to rot or to editorialise.

- **The opening, unheaded** — what the provider is and how it works, in two paragraphs at most. Structural facts only: what it sells, who operates the infrastructure, how the plans are shaped. No heading over it: the `<h1>` already says the provider's name, and an "About <name>" above the first line repeated it on every record.
- **`## Worth knowing`** — constraints a reader would want before choosing, in two short paragraphs at most. Omit the section entirely when there is nothing material; an empty reservation invented to fill a heading is worse than silence.
- **Up to about 350 words of body.** There is no floor: a short record is a fine record, and padding one to look substantial is worse than leaving it short. The ceiling exists to stop a record turning into an essay, not to ration what is worth saying — a provider with a real history, a real incident or a genuinely awkward product shape may use the room.
- **US English.** Center, not centre. Program, not programme. Analyze, license as both noun and verb. The dataset is read mostly in the US and by machines trained on US text.
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

- Do not hardcode the domain. Absolute URLs come from `SITE_URL`; the same build is served from a fortrabbit hostname as well as from www.findhost.app.
- `src/content.config.ts` is a governance artifact, not a type definition. Read the comment at the top before changing it.
- `src/data/fields.yml` is the field dictionary, and the only place a field is described. It carries the label, the vocabulary, the record-page group and the facet slug; the zod schema builds its enums from it and the record page builds its rows from it. Another field, another value, another facet: an entry there and no TypeScript. A field with no `group` is validated and never shown; one with no `facet` is shown and never filtered.
- AI involvement is disclosed once, under Credits on `/about/`, for the whole site. A record's `ai` value says who wrote that description; it is data, and no page renders it.
- Comments explain a constraint or an invariant, or they are deleted. Nothing stateful — no "previously did X", no "FR-1234 will replace this".
- `src/lib/price.ts` writes the price bands out rather than deriving them from the dictionary, and `validate.ts` asserts the two copies agree. The duplication was there because the price gauge drew bands in the browser and `fields.ts` reads the dictionary with `node:fs`; the gauge is gone and price.ts is now imported only by a test and by `validate.ts`, so the constraint is vestigial. Leave the assertion — it costs nothing and catches a real edit — but nothing forbids collapsing the two into one any more.
- Anything Node runs directly — a unit-tested module, a script — imports with the extension: `./fields.ts`. Vite resolves it without; Node does not. That is the reason `src/lib/rows.ts` exists apart from `facets.ts`: the counting rules are pure functions with no `astro:content` import, so `node --test` can reach them.
- The loaders in `facets.ts` are memoised **in production builds only**. A cache that outlives an edit is worse than no cache in dev, where it reads as a data bug — twice it has. For the same reason `astro.config.mjs` puts a watcher on `src/data/fields.yml`: it is read with `readFileSync`, so Vite has no dependency edge to it and would otherwise serve a renamed value until the server restarted.

## Changing the data model

Five procedures, because each one has a step that used to be forgotten silently. `pnpm run validate` now catches most of them; the ones it cannot are marked.

**Add a field.** Entry in `src/data/fields.yml`, then the key in `src/content.config.ts` — zod needs it written out, and a field the schema does not name is stripped from every record by the content loader. `validate` fails if you do the first and forget the second. Give it a `group` to have it appear on the record page and in the markdown export; omit `group` to have it validated and never shown.

**Add a value.** One line in the field's `values`. Nothing else — the schema enum, the filter panel, the facet page and the counts all derive from it. Two things `validate` will stop you on: a URL segment that is not usable or that another value of the field already addresses, and a note written for a value no record holds yet. If the value needs a shorter name in the filter column, give it `short:`. If it cannot honestly be held without another value of the same field — WooCommerce is WordPress — give it `implies: [other-id]` and `validate` holds every record to it.

**Add a facet.** `facet:` and a unique `filterOrder:` on the field. `validate` rejects a slug that collides with a real page, with a provider id, or with another field's facet — the root is one namespace shared by `/hetzner/`, `/software/` and `/about/`, and it is checked in both directions, so naming a facet after a provider fails the build and so does naming a provider after a facet. One thing it cannot see: the summary sentence on a value page is phrased from `subject:` in the dictionary — on the field, where `{label}` and `{lower}` interpolate the value, or on a single value that needs its own wording. A facet with no `subject:` falls back to prose that is correct and clumsy, so write one. And `regions` is the one facet whose index is written by hand — `src/pages/regions.astro`, so it can carry the map — which is why `[facet]/index.astro` skips it; the address is `/regions/` like every other.

**Add a derived facet.** A facet whose values are computed from other fields rather than recorded. Every value carries `from:` (the field it reads) and `when:` (the values of it that count as a yes); where more than one field can answer, `sources:` takes a list of the same pairs and any of them counts, and `when: ['*']` means "recorded at all, whatever the value". A value marked `noFilter` is shown on a record and never becomes a filter row or a page. `automation` is the pattern to read first — it asks whether a provider has an API, a CLI or an MCP server at all, while the three fields behind it keep the detail — and `features`, `pricing` and `favorites` are built the same way. It is all or nothing: `validate` rejects a field that derives some values and not others, rejects a `when:` naming a value the source field does not have, rejects a source field carrying no `group:` — a reader who filters on it has to be able to find the fact on the record — and rejects the field appearing in `src/content.config.ts`, because no record may carry by hand what the build works out.

**A derived facet decides "asked?" per field, not per value** — `src/lib/rows.ts`. A record answering at least one source field gets an answer for the whole field, and every value it does not hold then reads as a checked no; a record answering none of them stays unknown, and that count is shown under the list like any other. So adding a source to an existing derived facet silently converts records from "nobody checked" into "checked, and no" across every other value of that facet. Count how many before doing it.

**Rename a facet slug or a value id.** Change it in `fields.yml`, sweep every record that carries the old value, rename any note under `src/content/notes/`, and repoint every link that names the old path. `validate` catches the records and the notes; `linkcheck:internal` catches links in prose and the sitemap. **Fix the links; do not add a redirect.** `redirects` in `astro.config.mjs` is empty on purpose: nothing outside the site points at the old paths yet, and a stub forwarding a path no reader has visited only hides a link nobody updated. The site is live and open to every crawler, so this reverses as soon as a rename can strand a citation — and until it does, the replace deploy means an old address 404s rather than standing as a duplicate of the page that replaced it.

**Write a note.** `src/content/notes/<facet>/<value>.md` introduces a value, `src/content/notes/<facet>.md` introduces the whole facet. The path is the facet's *slug*, not the field id — eight of them differ. A note's `title` sets the browser tab; on a value page the heading stays the value's own label, so the page and the filter chip that leads to it say the same word.

**One paragraph, no headings.** A note says what a value means before somebody filters on it, which is one paragraph of work; the median is under seventy words. Anything longer is a page nobody finishes, and a note that has grown an `##` heading has become an article by accident. Keep the links — they are how a reader crosses from one facet to another — and drop the second example, the aside and the provider names the register already lists.

## Share cards

Every record and every facet page builds its own social preview image, as an Astro endpoint under `src/pages/og/`. `src/lib/og.ts` composes the card and rasterises it; the endpoints supply the words.

- **Nothing may run a browser.** Satori lays the card out and resvg turns it into PNG, both JavaScript and WebAssembly. A headless browser, or anything else with a platform-specific binary behind it, is the class of dependency that does not resolve on the deploy container.
- **Cards derive from the same expressions the page uses**, so a card and the page it belongs to cannot describe the same thing differently. Where a note overrides a title or description it overrides both.
- **Paths are fixed by helpers in `og.ts`** — `cardPath`, `facetCardPath`, `valueCardPath` — because the meta tag and the endpoint have to agree. Facet cards sit a level down, since `/og/<name>.png` already belongs to the records and the root is one namespace.
- **The font is a file.** The page sets Charter and falls through whatever serifs a system has; a renderer has no system, so Charis SIL ships as a dependency. Satori reads WOFF and cannot decompress WOFF2, and it picks one file per family — an extended character set has to be a separately named fallback family or its glyphs come out as boxes.
- **`/og-preview/` shows every card at once** and exists in `astro dev` only: its `getStaticPaths` returns nothing under `PROD`, which is how a route says it is not in the build.

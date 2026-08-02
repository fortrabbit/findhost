# CLAUDE.md

## What this is

A ratings-free dataset of hosting providers, with a guide attached. Astro 7, static output, Pagefind for search, no database at build or request time. Deployed to fortrabbit, which runs PHP only — Node exists in the deploy service at build time and nowhere else, so nothing may depend on a server at request time.

Background: `MR-156 FindHost technical implementation plan.md`, `MR-156 FindHost implementation phases.md`, `MR-159 FindHost provider data model.md` and `MR-159 FindHost governance draft.md` in the `fortrabbit/knowledge-base` repo.

## Commands

```sh
pnpm dev            # localhost:4321
pnpm build          # astro build && pagefind --site dist
pnpm run check      # astro check
pnpm run validate   # guards zod cannot express
```

CI runs all three on every PR. TypeScript is pinned to 6.x: `astro check` needs the programmatic compiler API, which TS 7's native compiler does not expose yet.

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
- `src/data/taxonomy.yml` is data: an eleventh facet is an entry there and no TypeScript.
- Every page declares an `ai` value; the footer renders it in the same words fortrabbit.com uses.
- Comments explain a constraint or an invariant, or they are deleted. Nothing stateful — no "previously did X", no "FR-1234 will replace this".

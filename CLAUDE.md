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
- **Absent means unknown.** Four required fields (`id`, `name`, `url`, `category`); everything else optional, rendered `?`. Never guess, never infer, never default to a flattering value.
- **`checkedAt` is a claim.** It means a person read the record against the provider on that date. Absent renders as nothing — never fall back to the git commit date.
- **`figure` and `caveat` are display-only.** Never filterable, never sortable, never counted, so no "fewest caveats" view can exist.
- **Everything works with JavaScript off.** Facets are real `<a href>` links to static pages. A crawler that sees nothing is fatal for a project whose distribution thesis is being retrieved and cited.
- **Facet values go into the markup** as `data-pagefind-filter` attributes even where the design does not show them. Pagefind indexes rendered HTML; what is not in the markup cannot be searched.
- **No affiliate parameters in any URL.** The schema rejects them.
- **fortrabbit is in the dataset**, in alphabetical position, with the same fields and a permanent "published by us" marker.

## Conventions

- Do not hardcode the domain. Absolute URLs come from `SITE_URL`; this runs on a vanity URL before it runs on its own.
- `src/content.config.ts` is a governance artifact, not a type definition. Read the comment at the top before changing it.
- `src/data/taxonomy.yml` is data: an eleventh facet is an entry there and no TypeScript.
- Every page declares an `ai` value; the footer renders it in the same words fortrabbit.com uses.
- Comments explain a constraint or an invariant, or they are deleted. Nothing stateful — no "previously did X", no "FR-1234 will replace this".

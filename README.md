# FindHost

A maintained, openly-licensed, ratings-free dataset of hosting providers, with a guide attached. Every provider that meets the scope test is listed — described by attributes, never scored, never ranked, never affiliate-linked.

Published by fortrabbit, who also appear in the dataset and are marked as such. The bias that creates is bounded in writing: it may act on which records get researched first, and never on inclusion, order or field values.

## Status

Phase 1 — walking skeleton. Three seed records exist to stress the schema, not to inform anyone: one filled-in record, one carrying only its four required fields, one carrying a `caveat`. **None of them has been checked against the provider**, which is why none carries a `checkedAt` date. Real data lands in phase 4.

## Running it

```sh
pnpm install
pnpm dev            # http://localhost:4321
pnpm build          # astro build && pagefind --site dist
pnpm run validate   # the guards zod cannot express
```

Copy `.env.example` to `.env` if you want a Fathom site ID or a non-local canonical origin. Neither is needed to develop.

`SITE_URL` is deliberately not hardcoded — this runs on a vanity URL before it runs on its own domain, and every absolute URL the build emits comes from that one variable.

## How a record works

One markdown file per provider in `src/content/providers/`, frontmatter and prose together, so fixing one provider means editing one file.

**Four fields are required:** `id`, `name`, `url`, `category`. Everything else is optional, and absent means *unknown* — rendered `?`, never guessed, never inferred, never defaulted to a flattering value. A four-field stub is a legitimate record.

`src/content.config.ts` is a governance artifact rather than a type definition. It is where "no scores" stops being a promise and becomes a build failure; `scripts/validate.ts` covers what zod cannot, including an assertion that no rank, boost or weight field has appeared.

`checkedAt` is optional and means *someone read this record against the provider on this date*. When it is absent the page says so rather than falling back to the file's commit date — a date nobody stands behind is worse than no date.

## Licences

Code under [MIT](./LICENSE-CODE). Data under [CC BY 4.0](./LICENSE-DATA). The dataset is the asset here, and it is meant to be forkable: if we stop maintaining it, someone else can carry it.

## AI disclosure

Agents gather the facts; a person reviews and signs off each record; the editorial decisions are human; much of the code is AI-written. Every page carries an `ai` value in its frontmatter and renders it in the footer.

The tier of sites this dataset exists to correct is largely AI-generated too. The difference is not whether a machine was involved — it is whether anyone tells you, and whether a human stands behind the result.

## Typescript

Pinned to 6.x — `astro check` needs the programmatic compiler API that TS 7 does not expose yet.

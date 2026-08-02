# FindHost

A maintained, openly-licensed, ratings-free dataset of hosting providers, with a guide attached. Every provider that meets the scope test is listed — described by attributes, never scored, never ranked, never affiliate-linked.

Published by fortrabbit, who also appear in the dataset and are marked as such. The bias that creates is bounded in writing: it may act on which records get researched first, and never on inclusion, order or field values.

## Status

150 listed records, plus 28 hidden ones kept for reference. Not deployed and not indexed: `noindex` is on until there is something worth launching.

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

**Four fields are required of a listed record:** `id`, `name`, `urls.home`, `category`. Everything else is optional, and absent means *unknown* — never guessed, never inferred, never defaulted to a flattering value. A four-field stub is a legitimate record.

Two `status` values hide a record: `draft`, for one started and not finished, and `out-of-scope`, for one considered and failed against a numbered inclusion criterion, which it must name. A hidden record keeps its page — a decision nobody can link to is not a decision — and is absent from the register, every count, every facet, the search index and the sitemap. It is also the only kind allowed to skip `category`, which is how an unfinished record is admitted without lowering the bar for the ones on show. Nothing is ever deleted.

`src/content.config.ts` is a governance artifact rather than a type definition. It is where "no scores" stops being a promise and becomes a build failure; `scripts/validate.ts` covers what zod cannot, including an assertion that no rank, boost or weight field has appeared.

`checkedAt` is optional and means *this record was read against the provider's own pages on this date* — by an agent, not necessarily by a person. When it is absent the page says so rather than falling back to the file's commit date: a date nobody stands behind is worse than no date.

## Licences

Code under [MIT](./LICENSE-CODE). Data under [CC BY 4.0](./LICENSE-DATA). The dataset is the asset here, and it is meant to be forkable: if we stop maintaining it, someone else can carry it.

## AI disclosure

Agents gather the facts from providers' own public pages, recording a URL and a date for each one; the editorial decisions are human — what the fields mean, who is in scope, what a caveat says and whose name is on it; much of the code is AI-written. The footer says so on every page. Each page also carries an `ai` value in its frontmatter recording how much of *that* page was written by a machine — `none`, `grammar`, `co-authored` or `authored` — which is in the data and in the markdown export rather than on the rendered page.

Two things this does *not* claim. A person has not read every record. And a source records what a provider published, not that it is true.

The tier of sites this dataset exists to correct is largely AI-generated too. The difference is not whether a machine was involved — it is whether anyone tells you, and whether a human stands behind the result.

## Typescript

Pinned to 6.x — `astro check` needs the programmatic compiler API that TS 7 does not expose yet.

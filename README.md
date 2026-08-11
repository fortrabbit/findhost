# FindHost

A maintained, openly-licensed, ratings-free register of hosting providers, with a guide attached. Every provider that meets the scope test is listed — described by attributes, never scored, never ranked, never affiliate-linked.

Published by fortrabbit, who also appear in the register and are marked as such. The bias that creates is bounded in writing: it may act on which records get researched first, and never on inclusion, order or field values.

## Status

Deployed to a vanity URL and not indexed — `robots.txt` disallows everything and every page carries `noindex` until `PUBLIC_INDEXABLE` says otherwise. The register holds a few hundred records, plus a smaller number kept beside it and a smaller number again hidden for reference.

## Running it

```sh
pnpm install
pnpm dev                    # localhost:4321
pnpm build                  # astro build, then the search index
pnpm run check              # astro check
pnpm run test               # unit tests
pnpm run validate           # the guards zod cannot express
pnpm run linkcheck:internal # every internal link and the sitemap, against dist
pnpm run test:e2e           # Playwright, a chromium project and a no-JS one
```

Copy `.env.example` to `.env`. Nothing in it is needed to develop.

`SITE_URL` is deliberately not hardcoded — this runs on a vanity URL before it runs on its own domain, and every absolute URL the build emits comes from that one variable. `astro.config.mjs` rejects a value that is not a full origin, because the two ways to get it wrong both look fine in a dashboard field.

## How the data is shaped

**One markdown file per provider** in `src/content/providers/`, frontmatter and prose together, so fixing one provider means editing one file.

**Four fields are required of a listed record:** `id`, `name`, `urls.home`, `category`. Everything else is optional, and absent means *unknown* — never guessed, never inferred, never defaulted to a flattering value. A four-field stub is a legitimate record.

**`src/data/fields.yml` is the field dictionary**, and the only place a field is described. It carries the label, the vocabulary, the record-page group and the facet slug; the zod schema builds its enums from it, and the record page builds its rows from it. Another field, another value, another facet: an entry there and no TypeScript.

**`src/content/notes/` holds the prose** that introduces a facet or one of its values. One paragraph each — a note exists to say what a value means before somebody filters on it, which is one paragraph of work.

**`status` decides where a record appears.** Most are simply listed. Two values move a record *beside* the register — a provider that stopped trading, and a company that owns hosting brands without selling hosting itself — where it keeps an indexed page and is offered back as a group of its own, because what happened to a host people used is worth finding. Two more hide a record entirely from the register, every count, every facet, search and the sitemap, while still keeping its page: one for a record started and not finished, one for a record considered and failed against a numbered inclusion criterion, which it must name. A decision nobody can link to is not a decision. Nothing is ever deleted.

**`checkedAt` is a claim**, not a timestamp. It means the record was read against the provider's own pages on that date — by an agent, not necessarily by a person. When it is absent the page says so rather than falling back to the file's commit date: a date nobody stands behind is worse than no date.

## Where the rules are enforced

`src/content.config.ts` is a governance artifact rather than a type definition. It is where "no scores" stops being a promise and becomes a build failure. `scripts/validate.ts` covers what zod cannot, including an assertion that no rank, score, boost or weight field has appeared anywhere.

[CONTRIBUTING.md](./CONTRIBUTING.md) is the short version for anyone correcting a record. [CLAUDE.md](./CLAUDE.md) is the long version, and the brief every agent works from.

## Share cards

Every record and every facet page builds its own social preview image, as an Astro endpoint under `src/pages/og/`. Satori lays the card out and resvg rasterises it — both JavaScript and WebAssembly, with no native binary, because the build container is not a laptop. `/og-preview/` shows all of them at once and exists in `astro dev` only.

## Deployment

Static output, deployed to fortrabbit, which runs PHP. Node exists in the deploy service at build time and nowhere else, so nothing may depend on a server at request time — no API route, no SSR, no runtime database. Search is [Pagefind](https://pagefind.app), which indexes the built HTML.

## Continuous integration

`.github/workflows/ci.yml` runs the quality gates on every pull request and every push to `main`: format, types, unit tests, build, `validate`, internal links, then Playwright. A second job checks outbound URLs against the live web and is allowed to fail — a third party's outage is not a reason to block a content pull request.

None of it is required to deploy. fortrabbit builds from its own git remote and runs `pnpm build` there; GitHub Actions never talks to it. CI is the thing that stops a broken commit reaching `main` in the first place.

## Licences

Code under [MIT](./LICENSE-CODE). Data and prose under [CC BY 4.0](./LICENSE-DATA). The register is the asset here, and it is meant to be forkable: if we stop maintaining it, someone else can carry it.

Credit is the one condition and it is deliberately easy to give: **FindHost, findhost.app, CC BY 4.0**. That applies to an answer engine repeating these facts as much as to a page reprinting them — the licence asks for a name, not a fee.

## AI disclosure

Agents gather the facts from providers' own public pages, recording a URL and a date for each one; the editorial decisions are human — what the fields mean, who is in scope, what a caveat says and whose name is on it; much of the code is AI-written. The site says so under Credits on `/about/`. Each record also carries an `ai` value in its frontmatter recording how much of *that* description was written by a machine — `none`, `grammar`, `co-authored` or `authored` — which is in the data and in the markdown export rather than on the rendered page.

Two things this does *not* claim. A person has not read every record. And a source records what a provider published, not that it is true.

The tier of sites this register exists to correct is largely AI-generated too. The difference is not whether a machine was involved — it is whether anyone tells you, and whether a human stands behind the result.

## TypeScript

Pinned to 6.x — `astro check` needs the programmatic compiler API that TS 7 does not expose yet.

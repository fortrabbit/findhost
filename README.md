# FindHost

An openly-licensed register of web hosting providers, described by attributes and never scored, ranked or affiliate-linked. Published by fortrabbit, who are in the register too and marked as such.

Deployed to a vanity URL and not indexed: `robots.txt` disallows everything and every page carries `noindex` until `PUBLIC_INDEXABLE` says otherwise.

## Run it

```sh
pnpm install
pnpm dev                    # localhost:4321
pnpm build                  # astro build, then the search index
pnpm run check              # types
pnpm run test               # unit tests
pnpm run validate           # guards zod cannot express
pnpm run linkcheck:internal # internal links and the sitemap, against dist
pnpm run test:e2e           # Playwright, with and without JavaScript
```

Copy `.env.example` to `.env`. Nothing in it is needed to develop. `SITE_URL` is never hardcoded — every absolute URL the build emits comes from it.

Astro 7, static output, [Pagefind](https://pagefind.app) for search, no database. Deployed to fortrabbit, so Node exists at build time and nowhere else: nothing may depend on a server at request time. TypeScript is pinned to 6.x, because `astro check` needs a compiler API TS 7 does not expose yet.

## Where things are

| | |
| --- | --- |
| `src/content/providers/` | one markdown file per provider |
| `src/data/fields.yml` | the field dictionary — every field, value and facet |
| `src/content/notes/` | one paragraph introducing a facet or one of its values |
| `src/content.config.ts` | the schema, and where "no scores" becomes a build failure |
| `scripts/validate.ts` | the guards zod cannot express |
| `src/pages/og/` | share cards, one per record and per facet |

Four fields are required of a listed record — `id`, `name`, `urls.home`, `category`. Everything else is optional, and absent means unknown.

## Read next

- [CONTRIBUTING.md](./CONTRIBUTING.md) — correcting a record, adding a provider, what will never be merged.
- [CLAUDE.md](./CLAUDE.md) — the full brief: the rules, the prose style, how to change the data model.

CI runs the commands above on every pull request. It is not required to deploy; fortrabbit builds from its own git remote.

## Licences

Code [MIT](./LICENSE-CODE), data and prose [CC BY 4.0](./LICENSE-DATA). Credit: **FindHost, findhost.app, CC BY 4.0**.

## AI disclosure

Agents gather the facts from providers' own public pages, recording a URL and a date for each; much of the code is AI-written; the editorial decisions are human. Each record carries an `ai` value saying how much of its description a machine wrote. Two things this does not claim: that a person has read every record, and that a source is true rather than published.

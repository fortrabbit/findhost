# FindHost

An openly-licensed register of web hosting providers, opinionated, described by attributes. Published by fortrabbit, who are in the register too.

## Run locally

```sh
pnpm install
pnpm dev                    # localhost:4321
pnpm build                  # astro build, then the search index
pnpm run check              # types
pnpm run test               # unit tests
pnpm run validate           # guards zod cannot express
pnpm run linkcheck:internal # internal links and the sitemap
pnpm run test:e2e           # Playwright, with and without JavaScript
```

Copy `.env.example` to `.env`; nothing in it is needed to develop. Astro 7, static output, no database, deployed to fortrabbit.

| | |
| --- | --- |
| `src/content/providers/` | one markdown file per provider |
| `src/data/fields.yml` | the field dictionary — every field, value and facet |
| `src/content/notes/` | one paragraph introducing a facet or one of its values |
| `src/content.config.ts` | the schema, and where "no scores" becomes a build failure |
| `scripts/validate.ts` | the guards zod cannot express |
| `src/pages/og/` | share cards, one per record and per facet |

Four fields are required of a listed record — `id`, `name`, `urls.home`, `category`. Everything else is optional, and absent means unknown.

[CONTRIBUTING.md](./CONTRIBUTING.md) to correct a record or add a provider. [CLAUDE.md](./CLAUDE.md) for the full brief: the rules, the prose style, how to change the data model.

## Licences

Code [MIT](./LICENSE-CODE), data and prose [CC BY 4.0](./LICENSE-DATA). Credit: **FindHost, findhost.app, CC BY 4.0**.

Agents gather the facts and wrote much of the code; the editorial decisions are human. Each record carries an `ai` value saying how much of its description a machine wrote, and `/about/` says the rest.

# Contributing

Changes arrive as pull requests. There is no address to write to and no form to fill in: fork the repo, edit the file, open a PR. Fixing one provider means editing one file, and the build reports what is wrong before a person looks.

## Correct or complete a record

Records live in `src/content/providers/<slug>.md`, frontmatter and prose together.

**Four fields are required** — `id`, `name`, `urls.home`, `category`. The rest are optional, and **absent means unknown**: it renders as `?`, which is a designed state rather than a gap to fill. Never guess a value.

**Cite what changes.** Anything not obvious from the provider's home page needs a `sources` entry with the URL and the date it was read. A provider's own documentation is an acceptable source for facts about its own product.

**`checkedAt` is a claim, not a timestamp.** Set it only after reading the provider's live pages. An absent date renders as "never checked against the provider", which is honest; a borrowed one is not.

## Add a provider

Six inclusion criteria, each a checkable fact rather than a judgement: it runs application code, it is sold to the public without a sales call, it publishes a price without a login, it documents its platform publicly, it has been purchasable for twelve months, and two independent artifacts exist — a framework's deployment guide, a third-party package or CLI, an unaffiliated talk or tutorial, or an issue-tracker thread. Press releases, sponsored posts, affiliate reviews, and the provider's own blog do not count.

A provider meeting all six and missing from the register is a bug: open a pull request with the record. One that fails a criterion still gets a record, with `status: out-of-scope` and the numbered `criterion` it failed, so the decision keeps a page and can be argued with.

`status` decides where a record ends up. `discontinued` and `unlisted` put one beside the register, out of the list but still indexed — what happened to a host people used is worth finding. `out-of-scope` and `draft` hide one from the register, the counts, search, and the sitemap, while keeping its page. Only a listed record needs a `category`, and nothing is ever deleted.

## What will never be merged

Ratings, scores, stars, "best for" badges, or any field implying one — the build rejects a field named rank, score, boost, or weight, so this is enforced rather than promised. Affiliate or tracking parameters in any URL, rejected by the schema. Exact prices: bands only. Any order other than alphabetical.

## Disclose a relationship

Contributors paid by a provider should say so in the pull request; the disclosure is what makes it possible to weigh what was written. Do not edit an employer's own record — propose the change and let someone else merge it.

## Running it

```sh
pnpm install
pnpm dev              # localhost:4321
pnpm run validate     # the guards the schema cannot express
pnpm run check        # types
pnpm run test:e2e     # Playwright, with and without JavaScript
```

CI runs those on every pull request, plus formatting, unit tests, and an internal link check. There are no per-PR previews; `pnpm dev` is it.

## License

Prose and record data go out under [CC BY 4.0](./LICENSE-DATA), code under [MIT](./LICENSE-CODE). Opening a pull request accepts those terms and confirms the right to give it — do not paste text from a provider's site, a competitor's table, or anywhere else.

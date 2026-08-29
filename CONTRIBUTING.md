# Contributing

Changes arrive as pull requests: fork, edit the file, open a PR. Fixing one provider means editing one file, and the build says what is wrong before a person looks. Naming a provider without writing the record is an [issue](https://github.com/fortrabbit/findhost/issues/new?template=add-provider.yml) instead.

## Correct a record

Records live in `src/content/providers/<slug>.md`.

**Four fields are required** — `id`, `name`, `urls.home`, `category`. The rest are optional. **Absent means unknown**, renders as `?`, and is a designed state. Never guess.

**Cite what changes.** Anything not obvious from the provider's home page needs a `sources` entry with the URL and the date it was read. A provider's own documentation is an acceptable source about its own product.

**`checkedAt` is a claim.** Set it only after reading the provider's live pages. Never copy one from another record.

## Add a provider

Six criteria, all checkable:

1. It runs application code.
2. It is sold to the public without a sales call.
3. It publishes a price without a login.
4. It documents its platform publicly.
5. It has been purchasable for twelve months.
6. Two independent artifacts exist — a framework's deployment guide, a third-party package or CLI, an unaffiliated talk or tutorial, an issue-tracker thread. Press releases, sponsored posts, affiliate reviews, and the provider's own blog do not count.

All six and not listed: that is a bug, so open a PR with the record. One fails: the record still goes in, carrying `status: out-of-scope` and the numbered `criterion`, so the decision has a page to be argued with.

`status` decides where a record ends up. `discontinued` and `unlisted` put one beside the register, out of the list and still indexed. `out-of-scope` and `draft` hide one from the register, the counts, search, and the sitemap, keeping its page. Only a listed record needs a `category`. Nothing is ever deleted.

## What will never be merged

Ratings, scores, stars, "best for" badges, or any field implying one — the build rejects a field named rank, score, boost, or weight. Affiliate or tracking parameters in a URL, rejected by the schema. Exact prices; bands only. Any order but alphabetical.

## Disclose a relationship

Contributors paid by a provider say so in the pull request, so reviewers can weigh it. Do not edit an employer's own record — propose the change and let someone else merge it.

## Running it

```sh
pnpm install
pnpm dev              # localhost:4321
pnpm run validate     # the guards the schema cannot express
pnpm run check        # types
pnpm run test:e2e     # Playwright, with and without JavaScript
```

CI runs those on every pull request, plus formatting, unit tests, and an internal link check. There are no previews; `pnpm dev` is it.

## License

Prose and record data go out under [CC BY 4.0](./LICENSE-DATA), code under [MIT](./LICENSE-CODE). Opening a pull request accepts those terms and confirms the right to give it. Do not paste text from a provider's site, a competitor's table, or anywhere else.

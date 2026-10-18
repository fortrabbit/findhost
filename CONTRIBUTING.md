# Contributing

Edit one file and open a pull request. The build reports what is wrong before a person looks. To name a provider without writing the record, open an [issue](https://github.com/fortrabbit/findhost/issues/new?template=add-provider.yml).

## Correct a record

Records live in `src/content/providers/<slug>.md`.

- **Required:** `id`, `name`, `urls.home`, `category`, and `addedAt`, the date the record entered the register.
- **Absent means unknown.** An empty field renders as `?`. Never guess.
- **Cite what changes.** Anything not obvious from the provider's home page needs a `sources` entry with the URL and the date it was read. A provider's own documentation is an acceptable source about its own product.
- **`checkedAt` is a claim.** Set it only after reading the provider's live pages.

## Add a provider

Who gets into the register, the criteria and the review that follows them, is on the website: [Listing criteria](https://www.findhost.app/criteria/). This file covers the mechanics only.

New records start as a stub. A stub has a page, and stays out of the register, the counts, search, and the sitemap.

- `status: stub` is a provider checked and not picked for the full list yet. It will be checked again. A stub that failed one of the criteria names the number in `criterion`.

`discontinued`, `unlisted`, and `anonymous` put a record beside the register, still indexed. `anonymous` is for a host whose own pages sell sign-up without identification; quote that wording in a `status` source. Nothing is ever deleted.

## Never merged

- Ratings, scores, stars, "best for" badges, or a field implying one. The build rejects a field named rank, score, boost, or weight.
- Affiliate or tracking parameters in a URL.
- Any order but alphabetical.

## Disclose a relationship

Contributors paid by a provider say so in the pull request. Do not merge a change to an employer's record: propose it and let someone else merge.

## Run it locally

```sh
pnpm install
pnpm dev              # localhost:4321
pnpm run validate     # the guards the schema cannot express
pnpm run check        # types
pnpm run test:e2e     # Playwright, with and without JavaScript
```

CI runs these on every pull request. There are no preview deploys.

## License

Record data and prose are [CC BY 4.0](./LICENSE-DATA), code is [MIT](./LICENSE-CODE). Opening a pull request accepts those terms. Do not paste text from a provider's site or anyone else's.

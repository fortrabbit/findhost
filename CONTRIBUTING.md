# Contributing

Fixing one provider means editing one file. That is the whole design.

## Correct or complete a record

Records live in `src/content/providers/<slug>.md`, one file each, frontmatter and prose together. Edit the file, open a pull request, and the build tells you if something is wrong before a human looks.

**Four fields are required** — `id`, `name`, `urls.home`, `category`. Everything else is optional, and **absent means unknown**: it renders as `?`, and that is a legitimate, designed state. Never guess a value to fill a gap. A record with four fields and two honest paragraphs is worth more than one with thirty invented ones, because accuracy is the only thing this dataset has.

**Cite what you change.** Anything not obvious from the provider's homepage should carry a `sources` entry with the URL you read and the date you read it. A provider's own documentation is an acceptable source for facts about its own product.

**`checkedAt` is a claim, not a timestamp.** Set it only if you actually read the provider's live pages. An absent date renders as "never checked against the provider", which is honest; a borrowed date is not.

## Add a provider

All six inclusion criteria must be true, and each is a fact you can check rather than a judgement we make: it runs application code, it is sold to the public without a sales call, it publishes a price without a login, it documents its platform publicly, it has been purchasable for twelve months, and two independent artifacts exist — a framework's own deployment guide, a third-party package or CLI, an unaffiliated talk or tutorial, or an issue-tracker thread discussing the platform. Press releases, sponsored posts, affiliate reviews and the provider's own blog do not count.

If a provider meets all six and is not listed, that is a bug. If one fails, the record still goes in `src/content/providers/` with `status: out-of-scope` and the numbered `criterion` it failed, so the decision keeps a page and can be argued with.

`status` decides where a record ends up, and there are three places. Most are listed. `discontinued` and `unlisted` — a provider that stopped trading, and a company that owns hosting brands without selling hosting itself — put a record *beside* the register: out of the list by default, offered back as a group of its own, page still indexed and searchable, because what happened to a host people used is worth finding, and so is why a familiar name is not in the list. `out-of-scope` and `draft` hide one from the register, every count, the search index and the sitemap, while keeping its page. Only a listed record has to carry a `category`; a hidden one is allowed to be a stub. Nothing is ever deleted.

## What will never be merged

Ratings, scores, stars, "best for" badges, or any field that implies one — the build rejects a field named rank, score, boost or weight, so this is enforced rather than promised. Affiliate or tracking parameters in any URL, also rejected by the schema. Exact prices: bands only, because this is not a price tracker. Sorting of any kind other than alphabetical.

## Disclose a relationship

If you work for a provider, or are paid by one, say so in the pull request. You may still contribute; the disclosure is what makes it possible to weigh what you wrote. Do not edit your own employer's record directly — propose the change and let someone else merge it.

## Running it

```sh
pnpm install
pnpm dev              # localhost:4321
pnpm build            # astro build, then the search index
pnpm run check        # types
pnpm run validate     # the guards the schema cannot express
pnpm run test:e2e     # Playwright, with and without JavaScript
```

CI runs all of those on every pull request, plus formatting, unit tests and an internal link check. There are no per-PR previews yet; `pnpm dev` is the preview.

## Licence of what you contribute

Prose and record data go out under [CC BY 4.0](./LICENSE-DATA), code under [MIT](./LICENSE-CODE). Opening a pull request means you are content for your contribution to carry those terms, and that you have the right to give it — do not paste text from a provider's site, a competitor's comparison table, or anywhere else you did not write. Cite those instead.

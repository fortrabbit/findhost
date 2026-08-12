# Research

Working state, not data. Nothing here is read by the build, rendered on the site or covered by the data licence — it is the queue that feeds `src/content/providers/`, and it is in the repo for the same reason everything else is: a correction should be possible against it.

## candidates.csv

Providers considered for the register but not yet written up. A row here asserts only that the name and the domain are real; every field on the eventual record still comes from primary sources, the same as now.

Names and domains were gathered from directories, awesome-lists and regional comparison articles. Directories are a discovery source and never a data source — see MR-252 for why importing anyone else's compilation is both a licensing problem and a quality one.

Every domain in the file was checked to resolve and answer over HTTP at the time it was added. That is the only claim the file makes about a row.

### Columns

- **id** — the slug the record will take, matching the eventual filename in `src/content/providers/`.
- **name** — the provider's own spelling.
- **domain** — bare primary domain, no scheme and no `www`.
- **country** — ISO 3166-1 alpha-2 of the headquarters, best effort.
- **categories** — semicolon-separated, from the `category` vocabulary in `src/data/fields.yml`.
- **prio** — see below.
- **note** — one clause on why the row is here, or what needs checking. Commas are not allowed, since the file is read as plain CSV.

### prio

The queue order, not a judgement about the provider. Nothing in this file ranks anybody, and nothing in it reaches the register without passing the four rules on `/about/`.

- **1** — a gap worth closing first: large, well known, or the only entry a country would have.
- **2** — likely to pass the rules, write it up when the priority ones are done.
- **3** — smaller or more marginal. Check rule 4 in particular, since public technical documentation is what most small hosts turn out not to have.
- **B** — a boundary call that needs a decision before any work goes into it. Usually rule 1: whether building native mobile apps, or hosting an internal-tools builder, is "runs an app, or serves a site" at all.
- **X** — do not write this up. The note says what went wrong: a domain that stopped resolving, a brand that turned out to be an arm of something already listed, a claim that could not be supported.

### Removing rows

A row leaves this file when its record lands in `src/content/providers/`, whatever status that record takes. A provider that fails the rules is worth keeping as a record with `status: out-of-scope` and a written reason, rather than being quietly dropped here — the question "why is this not listed" deserves an answer on the site, not in a research file.

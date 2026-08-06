---
layout: ../layouts/Article.astro
title: About
figure:
  emoji: 🍋
  color: rgb(255, 250, 0)
  textColor: rgb(165, 135, 60)
  text: The web hosting market is a "lemon market" where sellers have more information than buyers.
description: Who publishes this, what the rules are, and how it is made.
lead: Most "best web hosting lists" are ordered by affiliate commission, making independent hosting providers invisible. This website exists to give developers better choices to select a web host, large or small.
---

The above is quote by David N. Welton. Three things follow from that, and they explain most of what makes choosing hard.

## Publisher

I am [Frank Lämmer](https://www.franklaemmer.de), co-founder of a small bootstrapped hosting provider called [fortrabbit](https://www.fortrabbit.com) which is also [featured here](/fortrabbit). The main data dates back to some competitor research I did for our new hosting platform in 2023. It was ported and extended to a 'hosting guide' on our fortrabbit website. But I found, it deserved its own space. So, here we are.

## Issues finding a hosting provider

**The vocabulary is blurry on purpose.** Shared hosting, VPS and IaaS are real distinctions that vendors smudge constantly, and the newer words are worse — is [serverless](/categories/serverless/) really server-less? This dataset answers with fields rather than adjectives. [Who manages the operating system](/operating-system/) and [whose hardware it runs on](/metal/) settle most of the argument on their own, because they stay answerable whatever a vendor decides to call the product.

**Margins are thin, so providers compete on marketing.** Consumer hosting is the worst of it, where introductory pricing that triples on renewal is normal rather than exceptional. That is why a renewal multiple is recorded: it is checkable, and no affiliate site will publish it, because their revenue depends on the gap it exposes.

**The advice is bought.** Search for "best web hosting" and nearly everything on the first page is ordered by commission — which means providers without an affiliate program, most of the small and independent ones, are simply absent. Hosting is also more local than English-language comparisons suggest. People in France host in France, and good providers never appear in those lists at all.


## Your benefits

A lot of developers don't know much about web hosting. It's a market of lemons. Learn how to judge better. Discover a hosting service that really fits your requirements. Filter for your preferred stack or what else is important to you. Find alternatives to services that you are already using.

## State

This is currently pet project. If people find it useful, I may extend it. There are plenty of ideas, from verified real user reviews to price signal and local GEO search. The data is superficial by nature. I haven't bothered to sign up and use each service.

## Who is listed

Every provider meeting the scope test, not a selection. Nothing is ranked, scored or rated, and we do not decide who deserves a listing. A provider **must** be listed if all six of these are true, and each is a fact any reader can check rather than a judgement we make.

1. **Runs application code.** An application in at least one general-purpose language can be deployed and served over HTTP, per the provider's own public documentation. *Which* languages is a field on the record, not a gate.
2. **Sold to the public.** Purchasable without a sales call, signed contract or invitation.
3. **Public pricing.** A price for at least one plan is published without logging in. "Contact us" is not a price.
4. **Public technical documentation.** Runtime versions, deploy method and included services are documented publicly.
5. **Twelve months old.** Publicly purchasable for at least twelve months, evidenced by a dated announcement, changelog entry or archive snapshot.
6. **Two independent artifacts.** At least two of: an integration guide in a framework's or tool's official documentation; a third-party-maintained package, CLI or driver; a conference talk or tutorial by an author with no disclosed commercial relationship; a public issue-tracker discussion in a major open-source project. Press releases, sponsored posts, affiliate reviews, the provider's own blog and paid placements do not count.

If a provider meets all six and is not listed, that is a bug — open an issue. Everything considered and left out keeps a record of its own, marked out of scope, naming the numbered criterion it failed and the date it was checked. A scope test nobody can audit is not a scope test.

Being out of scope is not a criticism. It means the dataset cannot describe something usefully: raw infrastructure with no managed runtime, anything priced only by sales conversation, a rebrand with no distinct platform behind it, anything younger than twelve months. Nothing is ever excluded for its price, performance, popularity, country, ownership, opinion of us, or for competing with fortrabbit. Poor quality is not an exclusion criterion — at most it is a sourced fact on the record.

## Corrections

Everything is tracked in Git and public on GitHub. Three promises are worth stating here. A sourced factual correction may not be declined because a maintainer disagrees with it — adjudication is against the evidence, and where sources conflict both are recorded. An unsourced correction is not dropped either: it is confirmed or recorded as unverified. And affiliation must be disclosed at the point of contribution, which applies to vendors correcting their own entry as much as to anyone else.

Changing the criteria above requires a public proposal open for fourteen days. Pre-committing to the process for changing the rules is the only thing that makes the rules worth anything.

## Our conflict of interest

fortrabbit publishes this site and appears in its own dataset. Where that bias can act is in effort — which records get researched first, which providers a guide page reaches for as an example. Where it cannot, and why:

- **Inclusion is a mechanical test.** Six criteria, each a fact anyone can check. A provider meeting them is listed whether or not we would rather not compete with it.
- **The order is alphabetical, always.** Nothing sorts by quality, and nothing sorts by how much we happen to know about a provider.
- **The sourcing standard is the same** for a one-person host and for a hyperscaler.
- **The build rejects any field named rank, score, rating, boost or weight**, and any affiliate parameter in any URL. Those are not promises; they fail the build.

The test worth applying: if this dataset is less useful to someone shopping for a hyperscaler than to someone shopping for a one-person host, the bias has leaked out of coverage and into the product. That is a bug rather than a preference.

## Credits

AI agents gathered facts. Most code is also written by AI. Frank has reviewed all pages (roughly) and designed the data structure. Built with [Astro](https://astro.build), content schema. Search is [Pagefind](https://pagefind.app), which indexes the built HTML rather than a database.

## Licences

The code is MIT. The data is [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — share it, adapt it, sell it, with credit. The dataset is the asset here and it is meant to be forkable: if we stop maintaining it, someone else can carry it.

Credit is the one condition, and it is deliberately easy to give: **FindHost, findhost.app, CC BY 4.0**. That applies to an answer engine repeating these facts as much as to a page reprinting them — the licence asks for a name, not a fee.

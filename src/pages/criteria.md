---
layout: ../layouts/Article.astro
title: Listing criteria
published: 2026-10-18
updated: 2026-10-18
description: The criteria a hosting provider must meet to be listed on FindHost, the review of its homepage that follows, and what a stub is.
lead: Five criteria anyone can verify, then a review by hand.
---

There are thousands of web hosting providers out there. WHTop claims to have 29k of them on record. FindHost lists a few hundred, each with a reason to be here. Many more wait as stubs. A provider gets in through two steps.

## Criteria

Each one can be verified on the provider's own pages:

1. **Runs an app, serves a site, or sells one of the things a site needs.** Code the customer deploys and can change — a managed instance of one product they cannot alter is software as a service, not hosting. Static hosting counts too. So do the other invoices: a [registrar](/categories/domains-dns/), a mail host, a database service.
2. **Sold to the public.** Purchasable without sales call or invitation.
3. **Public pricing.** A price for at least one plan is published without login.
4. **Public technical documentation.** Documentation a developer could work from, not a billing FAQ.
5. **A named business.** The site names the company behind it with a legal name and an address, in an imprint, the terms or on the contact page. Hosts that sell sign-up without identification have [a list of their own](/anonymous/).

A record that fails a criterion names its number. Most of these reverse once the missing piece turns up.

## The review

Then I look at the homepage myself and decide. Two things count:

- **A running business.** The product is described in plain words, the site is kept up, the company can be identified.
- **Something of its own.** A feature or an angle nobody else here has, the way [exe.dev](/exe/) or [Uberspace](/uberspace/) have one. Or a country with no comparable provider listed yet.

The homepage has to make that case, with its design and its words. When it shows me nothing new, I move on. Nobody needs another thousand VPS resellers. Independent traces help: a framework's deployment guide, a third-party package, an unaffiliated tutorial. They are no longer required, because a small, new provider often has none yet.

The review is my judgment, with no score behind it. It decides who is listed, never the order: that stays alphabetical.

## Stubs

Every provider starts as a stub. A stub has been checked and did not make the full list: it failed a criterion, or the review did not pick it. It keeps its own page on the [stubs list](/stubs/), with what is known about it. I check the stubs again from time to time. New evidence, or something I missed, is welcome in a [GitHub issue](https://github.com/fortrabbit/findhost/issues/new?template=add-provider.yml).

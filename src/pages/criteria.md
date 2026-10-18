---
layout: ../layouts/Article.astro
title: Listing criteria
published: 2026-10-18
updated: 2026-10-18
description: How a hosting provider gets listed on FindHost. An AI research pass checks five criteria against the provider's own pages, then a human review decides whether it adds something the list does not have yet.
lead: A research pass against five criteria, then a human review.
---

FindHost lists a few hundred hosting providers, each with a reason to be here. Getting in takes two passes.

## Research pass

An AI agent reads the provider's own pages, fills in the record and checks five criteria:

1. **Runs an app, serves a site, or sells one of the things a site needs.** Code the customer deploys and can change — a managed instance of one product they cannot alter is software as a service, not hosting. Static hosting counts too, and so do the services a site depends on: a [registrar](/categories/domains-dns/), a mail host, a database service.
2. **Sold to the public.** Purchasable without sales call or invitation.
3. **Public pricing.** A price for at least one plan is published without login.
4. **Public technical documentation.** Documentation a developer could work from, not a billing FAQ.
5. **A named business.** The site names the company behind it with a legal name and an address, in an imprint, the terms or on the contact page. Hosts that sell sign-up without identification have [a list of their own](/anonymous/).

## Human review

Then I look at the homepage and decide whether the provider adds something the list does not have yet: a feature or an angle, the way [exe.dev](/exe/) or [Uberspace](/uberspace/) have one, or a country with no comparable provider. The homepage has to make that case, with its design and its words. Nobody needs another thousand VPS resellers. Independent traces help: a framework's deployment guide, a third-party package, an unaffiliated tutorial.

The review is my judgment and has no score. It decides who is listed, never the order, which stays alphabetical.

## Stubs

A provider that does not pass both is a [stub](/stubs/), and one that failed a criterion names its number. The page stays up, out of the counts, the filters, the site search and search engines. Stubs get checked again from time to time. New evidence is welcome in a [GitHub issue](https://github.com/fortrabbit/findhost/issues/new?template=add-provider.yml).

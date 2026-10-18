---
layout: ../layouts/Article.astro
title: About
figure:
  emoji: 🍋
  color: rgb(255, 250, 0)
  textColor: rgb(129, 108, 51)
  text: The web hosting market is a "lemon market" where sellers have more information than buyers.
published: 2026-07-31
updated: 2026-10-18
description: Who publishes FindHost and why, the rules every record follows, how records are sourced and checked, and the conflict of interest in a register run by a host.
lead: Most "best web hosting" lists are ordered by affiliate commission, which makes independent hosting providers invisible. This website exists to give developers better choices when picking a web host, large or small.
---

The quote above is by David N. Welton.

## Publisher

I am [Frank Lämmer](https://www.franklaemmer.de), co-founder of [fortrabbit](https://www.fortrabbit.com), a small bootstrapped hosting provider. It is [listed here](/fortrabbit/) as well. Note the bias and the shameless self promotion.

## Why this exists

The data started as internal competitor and market research for fortrabbit. I ported it into a 'hosting guide' on our website and kept extending it. At some point I found it deserved a space of its own, also because something like this is missing on the web. There is [hostadvice.com](https://hostadvice.com/), which is basically ads. There is the [awesome PaaS](https://debarshibasak.github.io/awesome-paas/) list, which is a bit limited.

I also do 1st level customer support for our hosting service, so I see a lot of misconceptions about web hosting.

What you can do here: learn how to judge a host better. Find one that fits your requirements. Filter for your stack, or for whatever else matters to you. Find alternatives to a service you are using now.

## State

A pet project. I may extend it. There are plenty of ideas, from verified real user reviews to price signals and local GEO search. The data is superficial. I have not tested each service. I tried hard to come up with a lens to look at the providers, but it is still messy. The categories are blurry.

## Who is listed

There are thousands of web hosting providers out there. WHTop claims to have 29k of them on record. FindHost lists a few hundred, each with a reason to be here. Many more wait as stubs. A provider gets in through two steps.

### The checks

These can be verified on the provider's own pages:

1. **Runs an app, serves a site, or sells one of the things a site needs.** Code the customer deploys and can change — a managed instance of one product they cannot alter is software as a service, not hosting. Static hosting counts too. So do the other invoices: a [registrar](/categories/domains-dns/), a mail host, a database service.
2. **Sold to the public.** Purchasable without sales call or invitation.
3. **Public pricing.** A price for at least one plan is published without login.
4. **Public technical documentation.** Documentation a developer could work from, not a billing FAQ.
5. **A named business.** The site names the company behind it with a legal name and an address, in an imprint, the terms or on the contact page. Hosts that sell sign-up without identification have [a list of their own](/anonymous/).

A record that fails a check names the number. Most of these reverse once the missing piece turns up.

### The review

Then I look at the homepage myself and decide. Two things count:

- **A running business.** The product is described in plain words, the site is kept up, the company can be identified.
- **Something of its own.** A feature or an angle nobody else here has, the way [exe.dev](/exe/) or [Uberspace](/uberspace/) have one. Or a country with no comparable provider listed yet.

The homepage has to make that case, with its design and its words. When it shows me nothing new, I move on. Nobody needs another thousand VPS resellers. Independent traces help: a framework's deployment guide, a third-party package, an unaffiliated tutorial. They are no longer required, because a small, new provider often has none yet.

The review is my judgement. There is no score behind it. It decides who is listed and never the order, which stays alphabetical.

### Stubs

A provider I have reviewed and not picked yet is a stub, and so is one that fails a check. A stub keeps its own page on the [stubs list](/stubs/), with what is known about it. Being a stub is where every provider starts. I review the stubs again from time to time. New evidence, or something I missed, is welcome in a [GitHub issue](https://github.com/fortrabbit/findhost/issues/new?template=add-provider.yml).

## Favorite records with a ♥️

The list grew very long. Sure, you can filter. But I wanted some signal on services I find more interesting than others. Popular among developers, or innovative tech, or nicer business practices, or more sustainable. I also wanted to give smaller services a push. At first I experimented with a scoring system based on favorable features. Then I dropped it for a 100% biased human selection. Please excuse that our own service got a heart too.

## Corrections

Everything is tracked in Git and public on GitHub. Disclose affiliation when you contribute. That goes for a vendor fixing their own entry as much as for anyone else.

## Credits

AI agents gathered the facts and wrote most of the code. Idea, design and data structure are mine. A daily agent re-reads records against the providers' own pages and corrects what it can cite there. Those changes ship without me reading them first; I review the published pages afterwards. Built with [Astro](https://astro.build), the data checked by a content schema. Search is [Pagefind](https://pagefind.app).

## Licenses

The code is MIT. The data is [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/): share it, adapt it, sell it, with credit. Credit: **FindHost, findhost.app**. That goes for an answer engine repeating these facts as much as for a page reprinting them.

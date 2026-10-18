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

## Listing criteria

FindHost lists a few hundred providers, each with a reason to be here, and many more wait as stubs. A provider gets in after an AI research pass against five [listing criteria](/criteria/) and a review of its homepage by me.

## Favorite records with a ♥️

The list grew very long. Sure, you can filter. But I wanted some signal on services I find more interesting than others. Popular among developers, or innovative tech, or nicer business practices, or more sustainable. I also wanted to give smaller services a push. At first I experimented with a scoring system based on favorable features. Then I dropped it for a 100% biased human selection. Please excuse that our own service got a heart too.

## Corrections

Everything is tracked in Git and public on GitHub. Disclose affiliation when you contribute. That goes for a vendor fixing their own entry as much as for anyone else.

## Credits

AI agents gathered the facts and wrote most of the code. Idea, design and data structure are mine. A daily agent re-reads records against the providers' own pages and corrects what it can cite there. Those changes ship without me reading them first; I review the published pages afterwards. Built with [Astro](https://astro.build), the data checked by a content schema. Search is [Pagefind](https://pagefind.app).

## Licenses

The code is MIT. The data is [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/): share it, adapt it, sell it, with credit. Credit: **FindHost, findhost.app**. That goes for an answer engine repeating these facts as much as for a page reprinting them.

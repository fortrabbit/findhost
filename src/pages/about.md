---
layout: ../layouts/Article.astro
title: About
figure:
  emoji: 🫨
  color: rgb(255, 200, 0)
  textColor: rgb(120, 70, 0)
  text: Fast, cheap, good — choose any two.
description: Who publishes this, what the rules are, and how it is made.
lead: Most "best web hosting lists" are ordered by affiliate commission, making independent hosting providers invisible. This website exists to give developers better choices to select a web host, large or small.
---


## Publisher

I am [Frank Lämmer](https://www.franklaemmer.de), co-founder of a small bootstrapped hosting provider called [fortrabbit](https://www.fortrabbit.com) which is also [featured here](/fortrabbit). The main data dates back to so competitor research I did for our new hosting platform in 2023. It was ported and extended to a 'hosting guide' on our fortrabbit website. But I found, it deserved it's own space. So, here we are.

## Your benefits

A lot of developers don't know much about web hosting. It's a market of lemons. Learn how to judge better. Discover a hosting service that really fit's your requirements. Filter for your preferred stack or what else is important to you. Find alternatives to services that you are already using.

## State

This is currently pet project. If people find it useful, I may extend it. There are plenty of ideas, from verified real user reviews to price signal and local GEO search. The data is superficial by nature. I haven't bothered to sign up and use each service.

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

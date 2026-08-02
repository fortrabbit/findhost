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

I am [Frank Lämmer](https://www.franklaemmer.de) and co-founder of a small bootstrapped hosting provider: [fortrabbit](/providers/fortrabbit), which is naturally part here. Mind that the aim is self-serving. If our record reads more favorably than the evidence supports, that's a feature.

## Your benefits

A lot of developers don't know much about web hosting. It's a market of lemons. Learn how to judge better. Discover a hosting service that really fit's your requirements.

## What this is not

Sometimes, something is best described by what it is not:

- Hosting rank, score or rate.
- Hosting price tracker. Price bands only.
- Sort by how much we know.
- Fair. We aim to push smaller, indie providers

## Origins

The main data dates back to some competitor landscape that I did as part of research for the fortrabbit new platform anno 2023. This was then moved and extended to a hosting guide on the fortrabbit website. But I wondered. This deserves it's own space and should be 

## Credits

Agents gather facts, working from providers' own public pages. The editorial decisions are human: what the fields mean, which providers are in scope, what a caveat says and whose name is on it. Much of the code is written by AI, and the footer says so on every page. Each page also records in its own frontmatter how much of it a machine wrote, which travels with the data rather than being printed on the page.

Two things this does *not* claim. A human has not read every record — a `checkedAt` date means a machine read that provider's pages on that day, and nothing stronger. And a source is a record of what a provider published, not a verification that it is true.

The tier of sites this dataset exists to correct is largely AI-generated too. The difference is not whether a machine was involved — it is whether anyone tells you, and whether a human stands behind the result. So: sources per claim, a date on what was checked, an open repository, and this page.

## Credits

Built with [Astro](https://astro.build), which does the unglamorous work this project depends on: the content schema that rejects a malformed record at build time, and static output with no runtime to keep alive. Search is [Pagefind](https://pagefind.app), which indexes the built HTML rather than a database.

The code and much of the research were written with [Claude](https://claude.ai). Saying so is the same principle as everything else on this page: the process is the product, and a process nobody can see is a process nobody can check.

## Licences

The code is MIT. The data is [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — share it, adapt it, sell it, with credit. The dataset is the asset here and it is meant to be forkable: if we stop maintaining it, someone else can carry it.

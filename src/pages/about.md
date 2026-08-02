---
layout: ../layouts/Article.astro
title: About
figure:
  emoji: 🫨
  color: rgb(255, 200, 0)
  textColor: rgb(120, 70, 0)
  text: Fast, cheap, good — choose any two.
description: Who publishes this, what the rules are, and how it is made.
lead: Almost every "best hosting" list is ordered by affiliate commission. Providers that do not run an affiliate program — which is most small and independent ones — are not ranked low on those lists. They are absent from them. Two decades of that has produced a public record in which a handful of conglomerate brands look like the entire market.
---

This exists to make the rest of it visible. Every provider meeting the scope test is listed, whether it is four people in Berlin or a hyperscaler.

## Who publishes it

**fortrabbit is one of those small providers.** That aim is self-serving, and saying so plainly is the only honest option available: we benefit if small hosting is more visible. So the benefit is put out of our own reach. The bias may act on *effort* — which records get researched first, which facets get built — and never on inclusion, order or field values.

fortrabbit appears in the dataset in alphabetical position, with the same fields and a permanent marker. If our record reads more favourably than the evidence supports, that is a bug.

## What this is not

- Rank, score or rate. There is no "best for" badge and no star, and the schema rejects any field that implies one — the rules are written down in [policies](/policies/) and enforced by the build.
- Carry affiliate links. Every provider URL is checked for tracking parameters at build time.
- Track prices. Price bands only — the guide's own argument is that specs and price are the wrong place to start.
- Sort by how much we know. Completeness is a fact about our work, never a property of a provider.

<h2 id="ai">How this site is made</h2>

Agents gather the facts, working from providers' own public pages, and record the URL and the date for each one. The editorial decisions are human: what the fields mean, which providers are in scope, what a caveat says and whose name is on it. Much of the code is written by AI, and the footer says so on every page. Each page also records in its own frontmatter how much of it a machine wrote, which travels with the data rather than being printed on the page.

Two things this does *not* claim. A human has not read every record — a `checkedAt` date means a machine read that provider's pages on that day, and nothing stronger. And a source is a record of what a provider published, not a verification that it is true.

The tier of sites this dataset exists to correct is largely AI-generated too. The difference is not whether a machine was involved — it is whether anyone tells you, and whether a human stands behind the result. So: sources per claim, a date on what was checked, an open repository, and this page.

## Credits

Built with [Astro](https://astro.build), which does the unglamorous work this project depends on: the content schema that rejects a malformed record at build time, and static output with no runtime to keep alive. Search is [Pagefind](https://pagefind.app), which indexes the built HTML rather than a database.

The code and much of the research were written with [Claude](https://claude.ai). Saying so is the same principle as everything else on this page: the process is the product, and a process nobody can see is a process nobody can check.

## Licences

The code is MIT. The data is [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — share it, adapt it, sell it, with credit. The dataset is the asset here and it is meant to be forkable: if we stop maintaining it, someone else can carry it.

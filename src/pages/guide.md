---
layout: ../layouts/Article.astro
title: How to choose a web host
updated: 2026-08-29
description: Why the hosting market is hard to read from outside, what matters when comparing hosts, and which of it this dataset records.
figure:
  emoji: 🫨
  color: rgb(255, 200, 0)
  textColor: rgb(120, 70, 0)
  text: Fast, cheap, good — choose any two.
---

## Match the abstraction level to the team

The right level is the one that matches a team's skills, not the lowest one available. Shipping code instead of configuring servers is worth something at any level of experience, but it costs flexibility. That is mostly what the [category](/categories/) is for.

## Understand the shape of the price

Please do not try to choose on compute per coin. Two providers quoting the same vCPU count can differ by a factor in real throughput, because the hardware behind the figure is never on the marketing page. The rest of the arrangement is [pricing features](/pricing/).

**Upfront or in arrears** matters most. Paid upfront, the bill cannot exceed the price. Paid in arrears the meter runs first, and the ceiling is whatever happened — a loop that ran all weekend, a bot that found an expensive endpoint. A fixed plan wastes money slowly; a metered one can lose it quickly.

**How leaving works** is discovered late. A minimum term, a notice period, and a year paid in advance are one fact: time during which money keeps going out after the decision to stop. Recorded as [getting out](/exit/).

**The renewal multiple** is easy to miss. Common in shared hosting: a cheap first term renewing automatically at two or three times the price. A free tier says nothing about what the paid plan renews at.

## What to compare

- **Pricing** — the [entry band](/entry-price/), the [pricing features](/pricing/), the renewal multiple
- **The stack** — [runtimes](/runtimes/) and the [software](/software/) a provider documents
- **Support** — [channels](/support/), hours, and whether they are behind a paid tier
- **Openness** — [shell access](/shell/), [deployment methods](/deployment/), data export
- **Stability** — founded year, [ownership](/ownership/), parent company
- **Geography** — [regions](/regions/) and headquarters country
- **Privacy and data protection** — a data processing agreement
- **Automation** — an [API, a CLI, an MCP server or infrastructure as code](/automation/)
- **Environment** — an energy claim, and whether the [Green Web Foundation](/features/green/) lists the provider

## Try it

Deploy something. Most providers offer a [free tier or a trial](/pricing/), and an afternoon of shipping tells more than a week of tables.

## Follow the devs

If you are the boss or the client, let the developers pick.

## Prefer a smaller host please

Smaller ones are usually more invested in a particular setup.

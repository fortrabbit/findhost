---
layout: ../layouts/Article.astro
title: How to choose a web host
updated: 2026-08-21
description: Why the hosting market is hard to read from outside, what actually matters when comparing hosts, and which of it this dataset records.
figure:
  emoji: 🫨
  color: rgb(255, 200, 0)
  textColor: rgb(120, 70, 0)
  text: Fast, cheap, good — choose any two.
---

## Match your desired abstraction level

The right level is the one that matches a team's skills, not the lowest one available. Shipping code instead of configuring servers is worth something at any level of experience, and it costs flexibility. That is what the [category](/categories/) is for mostly.

## Understand the shape of the price

Please do not try to choose on compute per coin. Two providers quoting the same vCPU count can differ by a factor in real throughput, because the hardware behind the figure is never on the marketing page. Two hosts can quote the same monthly figure and be different commitments. The rest of the arrangement is [pricing features](/pricing/).

**Upfront or in arrears** matters most. Paid upfront, the bill cannot exceed the price. Paid in arrears the meter runs first, and the ceiling is whatever happened — a loop that ran all weekend, a bot that found an expensive endpoint. A fixed plan wastes money slowly; a metered one can lose it quickly.

**How leaving works** is discovered late. A minimum term, a notice period and a year paid in advance are one fact: time during which money keeps going out after the decision to stop. Recorded as [getting out](/exit/).

**Watch the renewal multiple.** Common in shared hosting: a cheap first term renewing automatically at two or three times the price. A free tier says nothing about either.

## Ask who patches the operating system

Somebody applies the security updates. Either the provider does it, or you do — there is no third answer, and the [operating system](/operating-system/) field is that question and nothing else. A control panel automates the work without moving the responsibility, and an image you rebuild is still yours to rebuild.

The related question is how far in you can reach. [Shell access](/shell/) runs from none, through a jailed shell confined to your own files, to root on the machine. Root is what lets you install anything and what makes the patching yours. Whose hardware it all runs on is [metal](/metal/): owned, resold, or a control plane provisioning into a cloud account you hold and pay for separately.

## Check how support reaches you

Read the [channels](/support/) before you need them. Email, chat, phone and a forum are four different promises, and a provider offering all four at the top tier may offer one at the bottom. Two facts sit beside the list on each record: the hours support is staffed, and whether it is tiered — that is, whether the channel you were shown is the channel your plan actually gets.

Support quality is not something this dataset scores, and no list can. What it records is what is on offer and to whom.

## Nothing here records uptime

Deliberately. Uptime figures are published by the party being measured, and a service level agreement usually pays out in credit against the next invoice rather than in anything resembling the cost of the outage. A number nobody can check does not become checkable by being written into a table.

What you can check yourself: whether a public status page exists, whether it has history in it, and whether incidents there are written up afterwards. A provider that publishes its bad weeks is telling you something an availability percentage cannot.

## Security, and the paperwork behind it

Two fields carry this. Certifications — ISO 27001, SOC 2 and the rest — say an auditor looked, which is not the same as a guarantee and is still more than an assertion. A data processing agreement is what a GDPR-bound customer needs on file before the first byte lands, and whether one is offered without asking is recorded on the record itself.

Where the data physically sits is [regions](/regions/), and who the company answers to is its headquarters country. They are frequently not the same jurisdiction, and for anything covered by a data protection regime, both matter.

## Get your data out while you can

Backups included with the plan, a [staging environment](/features/staging/), and an export you can run yourself are the three things that decide how bad a bad day is. All three are ordinary to ask about before signing and awkward to ask about afterwards.

The same goes for the machine-facing surface. An [API, a CLI or infrastructure as code](/automation/) is how you leave without clicking through a control panel two hundred times, and how you rebuild if you have to.

## What to compare

- **Pricing** — the [entry band](/entry-price/), the [pricing features](/pricing/), the renewal multiple
- **The stack** — [runtimes](/runtimes/) and the [software](/software/) a provider documents
- **Support** — [channels](/support/), hours, and whether they are behind a paid tier
- **Openness** — [shell access](/shell/), [deployment methods](/deployment/), data export
- **Stability** — founded year, [ownership](/ownership/), parent company
- **Geography** — [regions](/regions/) and headquarters country
- **Privacy and data protection** — a data processing agreement, the [region](/regions/) the data sits in, the headquarters country
- **Automation** — an [API, a CLI, infrastructure as code](/automation/), an MCP server
- **Environment** — an energy claim, and whether the [Green Web Foundation](/features/green/) has the provider in its directory

## Try it

Deploy something. Most offer a [free tier or a trial](/pricing/), and an afternoon of shipping tells more than a week of tables.

The two are not the same offer. A free tier is a plan that stays free and is usually shaped to make sure you notice its edges. A trial is the paid product with a clock on it. For finding out whether something is pleasant to work with, the trial is the honest test; for running a side project indefinitely, the tier is the one that matters.

## Follow the devs

If you are the boss, or the client, let the developers pick.

## Prefer a smaller host please

Smaller ones are usually more invested in a particular setup.

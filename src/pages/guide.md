---
layout: ../layouts/Article.astro
title: How to choose a host
description: Why the hosting market is hard to read from outside, what actually matters when comparing hosts, and which of it this dataset records.
lead: What to really look for when choosing a hosting provider.
figure:
  emoji: 🫨
  color: rgb(255, 200, 0)
  textColor: rgb(120, 70, 0)
  text: Fast, cheap, good — choose any two.
---

## Match your desired abstraction level

The right level of abstraction is the one that matches a team's skills, not the lowest one available. Shipping code instead of configuring servers is worth something at any level of experience, and it costs flexibility, usually in deployment options. That is [category](/categories/), [who manages the OS](/operating-system/), [whose hardware it is](/metal/) and [shell access](/shell/).

The common mistake is choosing on compute per coin. Two providers quoting the same vCPU count can differ by a factor in real throughput, because the hardware behind the figure is not on the marketing page — which is also why prices here are [bands](/entry-price/) rather than figures.

## Understand the shape of the price

Two hosts can quote the same monthly figure and be different commitments, because the number is one part of the arrangement. The rest is [pricing features](/pricing/).

**Upfront or in arrears** matters most. Paid upfront, the bill cannot exceed the price. Paid in arrears, the meter runs first and the ceiling is whatever happened — a loop that ran all weekend, a bot that found an expensive endpoint. Nobody pays for idle capacity that way, but the risk is asymmetric: a fixed plan wastes money slowly, a metered one can lose it quickly. **Metered usage** takes that further, with no plan at all, and it is the hardest bill to predict from outside. **Tiered pricing** is the opposite habit, easy to compare and wasteful by design, because a workload never lands exactly on a tier boundary.

**How leaving works** is the part discovered late. A minimum term, a notice period and a year bought in advance are one fact to a customer — time during which money keeps going out after the decision to stop, recorded as [getting out](/exit/).

**A free tier is a marketing instrument.** It says nothing about what the paid plans cost or how the platform behaves under load, and the free tier.

**Is the host using renewable multipliers?** Common with shared hosting. Yearly contracts, that are extended automatically, which cost much more from the second year on.

## "AI hosting" means three different things

The phrase covers three unrelated products, and a vendor's page rarely says which one it is selling. **Hosting an agent can operate** is a platform with an API, a CLI and perhaps an MCP server, so an assistant can create an app and read a log — that is [automation](/automation/). **Hosting an application that calls a model** is an ordinary web application with an unusual request shape: a call that takes seconds, a response streamed to the browser, and the expensive part of the bill belonging to somebody else — that is the [AI apps](/use-cases/ai-app/) use case. **Hosting the model itself** needs rented accelerators or a managed inference endpoint, and it is a different market with different economics.

Read the fields rather than the phrase. A platform advertising "agentic infrastructure" is usually selling the first two, and one advertising GPUs is selling the third.

## How to use this page to find a host

- **Pricing and renewals** — the [entry price band](/entry-price/), the [pricing features](/pricing/) and the renewal multiple
- **The stack** — [runtimes](/runtimes/) and the [software](/software/) a provider documents support for
- **Support** — [channels](/support/), hours, and whether they are gated behind a paid tier
- **Openness** — [shell access](/shell/), [deployment methods](/deployment/), data export
- **Stability** — founded year, [ownership](/ownership/) and parent company
- **Geography** — [regions](/regions/) and headquarters country

Environmental impact, privacy posture and security practice are deliberately not scored: a number would imply a precision nobody has.

## Privacy and data protection

Where the servers sit and who can compel access are separate questions, and collapsing them is the usual mistake. The first is physical. The second follows the company and its parents, because an order is served on a legal entity rather than on a rack — the US CLOUD Act says so plainly, Britain's Investigatory Powers Act reaches similarly beyond its borders, and Article 48 of the GDPR pushes the other way.

So "EU data center" is a statement about an address. Who owns the company, [whose hardware](/metal/) it runs on and who is on the sub-processor list are three further questions, all checkable, and all capable of pointing somewhere else. This register records the inputs — [regions](/regions/), headquarters, [ownership](/ownership/), parent, and whether a DPA is published as standard. It does not assess compliance and will not: whether a particular processing activity is lawful depends on the data, the purpose and the contract, none of which are properties of a host.

## Try it

Deploy something. Many providers offer a [free tier or a trial](/pricing/), and an afternoon of actually shipping to a platform tells more than a week of tables.

## Follow the devs

If you are the boss, or the client, let the developer pick. Whoever lives with the hosting daily should make the call: developer experience is a real cost, paid every week, and it is invisible on a specs table.

## Prefer a smaller host please

Large providers have real economies of scale, and catalogues nobody can navigate with support that is not personal at any price. Smaller ones are usually more invested in understanding a particular setup, with a narrower feature set that may fit it better. Neither is a recommendation — [ownership](/ownership/) and founding year are fields, to be applied as a preference or ignored.

---
title: How to choose hosting
description: What actually matters when comparing hosts, and which of it this dataset records for you.
lead: Learn how to pick a web host that matches your needs. Don't go shopping for the wrong reasons.
figure:
  emoji: 🫨
  color: rgb(255, 200, 0)
  textColor: rgb(120, 70, 0)
  text: Fast, cheap, good — choose any two.
---

## Match the abstraction level to the team

Time is money. The level of abstraction decides how much of the infrastructure underneath has to be thought about at all, and the right level is the one that matches a team's skills and workflow — not the lowest one available. Abstraction is not a beginners' setting: shipping code instead of configuring servers is worth something at any level. It does cost flexibility, usually in deployment options.

Recorded as the primary [category](/category/), [who manages the OS](/os-managed-by/), [whose hardware it is](/hardware/) and [SSH access](/ssh/).

## Don't compare by specs alone

The most common mistake is choosing on compute per coin. Hosting quality is hard to judge from outside, so it collapses into a specs table — but figures on a marketing page mean little without the hardware and the architecture behind them. Two providers quoting the same vCPU count can differ by a factor in real throughput. This is also why the dataset carries [price bands](/entry-price/) rather than exact prices. A band is enough to stop a comparison mixing €4 and €400, and anything more precise belongs on the provider's own page, where it is current.

## Check the hard facts

These are the checkable ones — each is a field, and each links to every provider that records it:

- **Transparent pricing and renewals** — [entry price band](/entry-price/), and the renewal multiple on each record
- **Modern stack** — [runtimes](/runtimes/), the versions actually offered, and the [software](/software/) a provider documents support for
- **Support that answers** — support channels, hours and whether they are gated behind a paid tier
- **Platform openness** — [SSH](/ssh/), deploy methods, data export
- **Company stability** — founded year, [ownership](/ownership/) and parent company
- **No lock-in tricks** — proprietary formats, and how the data gets out again
- **Included backups** — included, paid add-on or nothing
- **Geography** — [regions](/regions/) and legal jurisdiction

## Check the soft facts too

Harder to verify from outside, and deliberately not scored here, because a number would imply a precision nobody has: environmental impact, privacy posture, security practice. What a provider publishes on each is worth reading; whether it convinces is a judgement only the reader can make.

## Cross-check with communities

Hosting rating sites, except the one you are on right now are largely crap with paid placement. Communities like r/webhosting, or the Discord or forum of the framework in use, surface what actually breaks in practice.

## Try before buying

Many providers offer a [free tier or trial](/free-tier/) without a credit card. An afternoon of actually deploying something tells more than a week of comparison tables.

## Think twice about size

Large providers have real economies of scale and a baseline of quality that comes with them. They also tend toward bloated catalogues that are hard to navigate, and support that is not personal at any price. One small site is not a priority to them. Smaller providers are usually more invested in understanding a particular setup, with a narrower feature set that may fit it better. "Smaller" is not a recommendation either — it is [ownership](/ownership/) and founding year, recorded as fields, to be applied as a preference or ignored entirely.

## Let the developers decide

Hosting is usually chosen by the people who will live with it daily. That is the right instinct: developer experience is a real cost, paid every week, and it is invisible on a specs table.

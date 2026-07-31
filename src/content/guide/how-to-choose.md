---
title: How to choose a hosting provider
description: What actually matters when comparing hosts, and which of it this dataset records for you.
order: 20
ai: co-authored
figure:
  emoji: 🫨
  color: rgb(255, 200, 0)
  textColor: rgb(120, 70, 0)
  text: Fast, cheap, good — choose any two.
---

This page is openly editorial. It cannot name a winner and does not try to; what it does is say which questions are worth asking, and point at the field that answers each one.

## Match the abstraction level to your needs

Time is money. The level of abstraction decides how much of the underlying infrastructure you have to think about, and the right level is the one that matches your team's skills and workflow — not the lowest one available. Abstraction is not a beginners' setting: shipping code instead of configuring servers is worth something at any level. It does cost flexibility, usually in deployment options.

Recorded as [who manages the OS](/os-managed-by/), [whose hardware it is](/hardware/) and [SSH access](/ssh/).

## Don't compare by specs alone

The most common mistake is choosing on compute per euro. Hosting quality is hard to judge from outside, so it collapses into a specs table — but you cannot trust figures on a marketing page without knowing the hardware and the architecture behind them. Two providers quoting the same vCPU count can differ by a factor in real throughput.

This is also why the dataset carries [price bands](/entry-price/) rather than exact prices. A band is enough to stop a comparison mixing €4 and €400, and anything more precise belongs on the provider's own page, where it is current.

## Check the hard facts

These are the checkable ones — each is a field, and each links to every provider that records it:

- **Transparent pricing and renewals** — [entry price band](/entry-price/), and the renewal multiple on each record
- **Modern stack** — [runtimes](/runtimes/) and the versions actually offered
- **Human support you can reach** — support channels, hours and whether they are gated behind a paid tier
- **Platform openness** — [SSH](/ssh/), deploy methods, data export
- **Company stability** — founded year, [ownership](/ownership/) and parent company
- **No lock-in tricks** — proprietary lock-in, and how you get your data out
- **Included backups** — included, paid add-on or nothing
- **Geography** — [regions](/regions/) and legal jurisdiction

## Check the soft facts too

Harder to verify from outside, and deliberately not scored here, because a number would imply a precision nobody has: environmental impact, privacy posture, security practice. Read what a provider publishes and judge whether it convinces you.

## Cross-check with communities, not rating sites

Hosting rating sites are largely paid placement. Communities like r/webhosting, or the Discord or forum of the framework you use, surface what actually breaks in practice. Treat them as a sanity check rather than a verdict — including on this site.

## Try before you buy

Many providers offer a [free tier or trial](/free-tier/) without a credit card. An afternoon of actually deploying something tells you more than a week of comparison tables.

## Think twice about size — in both directions

Large providers have real economies of scale and a baseline of quality that comes with them. They also tend toward bloated catalogues that are hard to navigate, and support that is not personal at any price. Your site is not a priority to them.

Smaller providers are usually more invested in understanding what you need, with a narrower feature set that may fit better. "Smaller" is not a recommendation either — it is [ownership](/ownership/) and founding year, recorded as fields, so you can apply your own preference or ignore it entirely.

## Let the developers decide

Hosting is usually chosen by the people who will live with it daily. That is the right instinct: developer experience is a real cost, paid every week, and it is invisible on a specs table.

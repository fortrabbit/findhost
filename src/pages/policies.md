---
layout: ../layouts/Markdown.astro
title: Policies
description: Who gets listed, what happens when a provider dies, how corrections work, and what we have given up.
ai: co-authored
---

These are rules to be argued with, not principles to admire. Every one of them is a promise that can be checked against what the site actually does, and several are enforced by the build rather than by our good intentions.

## Who is listed

This dataset lists **every** provider meeting the scope test — not a selection. We do not rank, score or rate, and we do not decide which providers deserve a listing.

A provider **must** be listed if all six of these are true. Each is a fact any reader can check, not a judgement we make.

1. **Runs application code.** An application in at least one general-purpose language can be deployed and served over HTTP, per the provider's own public documentation. *Which* languages is a field on the record, not a gate.
2. **Sold to the public.** Purchasable without a sales call, signed contract or invitation.
3. **Public pricing.** A price for at least one plan is published without logging in. "Contact us" is not a price.
4. **Public technical documentation.** Runtime versions, deploy method and included services are documented publicly.
5. **Twelve months old.** Publicly purchasable for at least twelve months, evidenced by a dated announcement, changelog entry or archive snapshot.
6. **Two independent artifacts.** At least two of: an integration guide in a framework's or tool's official documentation; a third-party-maintained package, CLI or driver; a conference talk or tutorial by an author with no disclosed commercial relationship; a public issue-tracker discussion of the platform in a major open-source project. Press releases, sponsored posts, affiliate reviews, the provider's own blog and paid placements **do not count**.

If a provider meets all six and is not listed, that is a bug. Open an issue.

Every provider considered and left out keeps a record of its own, marked out of scope and naming the numbered criterion it failed and the date it was checked. Those records are not in the register, not counted and not indexed — but they are not deleted either, and each one is a page you can link to and argue with. A scope test nobody can audit is not a scope test.

The same applies in the other direction: a record we have started and not finished is marked a draft and stays out of the register until it is done. Neither an unfinished record nor a rejected one is allowed to pad a count.

## What is out of scope

Being out of scope is not a criticism. These providers are excluded because the dataset cannot describe them usefully: raw infrastructure with no managed application runtime; anything requiring a sales conversation to see a price; a rebrand of another listed provider's platform with no distinct infrastructure or control plane; anything publicly purchasable for under twelve months; and anything whose basic facts cannot be confirmed from public sources.

**Not disqualifiers.** We will never remove or refuse a provider for its price, performance, popularity, country, ownership, opinion of us, or the fact that it competes with fortrabbit. Poor quality is not an exclusion criterion — at most it is a documented, sourced fact on the entry.

## Status and removal

**Entries are never deleted.** A provider that dies, is acquired or leaves scope keeps its page, with a dated status change. Deletion would let us quietly rewrite history, and for a dataset published by a competitor, removal is precisely the power that has to be given up. Mark, never delete.

A record carries a status: active, acquired, renamed, winding-down, discontinued, unverifiable, or delisted on request. Each one keeps the final known facts and the date they were last true.

**Freshness is displayed, never promised.** A record carries the date it was last read against the provider, and claims carry their own dates in `sources`. Where no date is recorded the site says so rather than inferring one from the file's history — an undated fact is shown undated. Re-verification is best effort: we publish the intended cadence and the dates, so you can see exactly how well we are keeping to it.

**Cooling-off.** No transition to discontinued or unverifiable takes effect for seven days after a public proposal. A temporary outage or a redesigned website must not knock a provider off the list — least of all one of ours.

**Security.** A documented, unremediated security failure gets a dated, sourced note. Not a removal, not a badge. We are not a rating agency.

## Corrections and contributions

Every change — including ours — is a pull request with a public diff and a public discussion. The details are in [CONTRIBUTING.md](https://github.com/fortrabbit/findhost/blob/main/CONTRIBUTING.md); the parts that are policy rather than process:

- **A sourced factual correction may not be declined because a maintainer disagrees with it.** Adjudication is against the evidence. Where sources conflict, both are recorded and the field is marked disputed.
- **An unsourced correction is not dropped.** It is applied if a maintainer can confirm it, or recorded as unverified if not. Silently discarding a correction for want of a link is the failure mode this rule exists to prevent.
- **Affiliation must be disclosed** at the point of contribution. Undisclosed affiliation, once discovered, closes the pull request and is recorded publicly.
- **Vendors may correct their own entry** — disclose, cite, propose. Identity fields (canonical name, official URL, ownership, status) need maintainer verification even from a verified owner, and marketing language is accepted nowhere.
- **Scope decisions need two approvals**, at least one from a maintainer with no fortrabbit affiliation. New providers merge no earlier than seven days after approval, so anyone can object first.
- **Changing these criteria requires a public proposal open for fourteen days**, and the changelog records what changed and why. Pre-committing to the process for changing the rules is the only thing that makes the rules worth anything.

## Our conflict of interest

fortrabbit publishes this site and appears in its own dataset. Wikipedia's answer to a conflict of interest is that someone else edits the article; we may not have a someone else, so the substitute is mechanism and record rather than promise.

Where the bias may act: **effort**. Which records get researched first, which facets get built, which providers a guide page uses to illustrate a category.

Where it may not act, and how that is enforced:

- **Inclusion.** The scope test is mechanical and the list is complete. A conglomerate brand that meets it is a row, with the same fields and the same care.
- **Order.** The default sort is alphabetical and content-independent. Nothing sorts by quality, and nothing sorts by how much we know.
- **Field values.** The same sourcing standard applies to a one-person host and to a hyperscaler.
- **The schema itself.** The build rejects any field named rank, score, rating, boost or weight, and rejects affiliate parameters in any URL. Those are not promises; they fail the build.

The test to keep applying: **if this dataset is less useful to someone shopping for a hyperscaler than to someone shopping for a one-person host, the bias has leaked out of coverage and into the product.** Fix it as a bug, not as a preference.

## If you are a provider and you disagree with us

The process is public and so is the outcome. You do not need to email anyone or know anyone. Open an issue or a pull request against your own record, say who you are, cite what is wrong, and the discussion happens where everyone can read it. A sourced correction to a factual field will be merged whether or not we like what it says.

---
layout: ../layouts/Article.astro
title: How to choose a host
description: Why the hosting market is hard to read from outside, what actually matters when comparing hosts, and which of it this dataset records.
lead: Hosting is hard to compare from the outside, and most of the advice about it is paid for. This is what to look at instead.
figure:
  emoji: 🍋
  color: rgb(255, 250, 0)
  textColor: rgb(165, 135, 60)
  text: A market of lemons.
---

## The market hides more than it shows

> The web hosting market is a "lemon market" where sellers have more information than buyers.
>
> — David N. Welton

Three things follow from that, and they explain most of what makes choosing hard.

**The vocabulary is blurry on purpose.** Shared hosting, VPS and IaaS are real distinctions that vendors smudge constantly, and the newer words are worse — is [serverless](/categories/serverless/) really server-less? This dataset answers with fields rather than adjectives. [Who manages the operating system](/os-managed-by/) and [whose hardware it runs on](/hardware/) settle most of the argument on their own, because they stay answerable whatever a vendor decides to call the product.

**Margins are thin, so providers compete on marketing.** Consumer hosting is the worst of it, where introductory pricing that triples on renewal is normal rather than exceptional. That is why a renewal multiple is recorded: it is checkable, and no affiliate site will publish it, because their revenue depends on the gap it exposes.

**The advice is bought.** Search for "best web hosting" and nearly everything on the first page is ordered by commission — which means providers without an affiliate program, most of the small and independent ones, are simply absent. Hosting is also more local than English-language comparisons suggest. People in France host in France, and good providers never appear in those lists at all.

## Match the abstraction to the team

The level of abstraction decides how much of the infrastructure underneath has to be thought about, and the right level is the one that matches a team's skills — not the lowest one available. Shipping code instead of configuring servers is worth something at any level of experience; it costs flexibility, usually in deployment options. That is recorded as [category](/categories/), [who manages the OS](/os-managed-by/), [whose hardware it is](/hardware/) and [SSH access](/ssh/).

The most common mistake is choosing on compute per coin. Quality is hard to judge from outside, so a comparison collapses into a specs table — but two providers quoting the same vCPU count can differ by a factor in real throughput, because the hardware and the architecture behind the figure are not on the marketing page. This is also why prices here are [bands](/entry-price/) rather than exact figures: a band is enough to stop a comparison mixing $4 and $400, and anything more precise belongs on the provider's own page, where it is current.

## The checkable facts

Each of these is a field, and each links to every provider that records it:

- **Pricing and renewals** — the [entry price band](/entry-price/) and the renewal multiple
- **The stack** — [runtimes](/runtimes/) and the [software](/software/) a provider documents support for
- **Support** — [channels](/support/), hours, and whether they are gated behind a paid tier
- **Openness** — [SSH](/ssh/), [deployment methods](/deployment/), data export
- **Stability** — founded year, [ownership](/ownership/) and parent company
- **Geography** — [regions](/regions/) and headquarters country

Environmental impact, privacy posture and security practice are the soft ones, deliberately not scored, because a number would imply a precision nobody has. What a provider publishes on each is worth reading; whether it convinces is a judgement only the reader can make.

## Data protection is two questions, not one

Where the servers sit and who can compel access are separate, and collapsing them is the usual mistake. The first is physical: which building holds the disk. The second is legal: which authorities can order the company operating it to hand over what is on it. The second follows the company and its parents at least as much as the metal, because an order is served on a legal entity rather than on a rack — the US CLOUD Act is the clearest statement of it, and Britain's Investigatory Powers Act reaches similarly beyond its borders. Article 48 of the GDPR pushes the other way, which makes it a genuine conflict rather than a settled answer.

So "EU data center" is a statement about an address. Who owns the company, whose hardware it runs on and who is on the sub-processor list are three further questions, all checkable, and all capable of pointing somewhere else. Ownership is where residency claims most often lose their meaning: holding companies and private-equity stakes do not change the brand, the support signature or the data-center address, and none of them require an announcement.

This dataset records [hqCountry](/regions/), regions, [ownership](/ownership/), parent and whether a DPA is available as standard — inputs to a decision, not a compliance service. It does not assess compliance and will not: whether a specific processing activity is lawful depends on the data, the purpose and the contract, none of which are properties of a host.

## Then go and try it

Communities are worth more than comparison sites — this one included. The subreddit for web hosting, or the Discord or forum of the framework in use, surfaces what actually breaks in practice.

After that, deploy something. Many providers offer a [free tier or a trial](/free-tier/) without a credit card, and an afternoon of actually shipping to a platform tells more than a week of tables. Whoever will live with the hosting daily should make the call: developer experience is a real cost, paid every week, and it is invisible on a specs table.

One last thing worth resisting. Large providers have real economies of scale and a baseline that comes with them; they also tend toward catalogues nobody can navigate and support that is not personal at any price. Smaller providers are usually more invested in understanding a particular setup, with a narrower feature set that may fit it better. Neither is a recommendation — that is [ownership](/ownership/) and founding year, recorded as fields, to be applied as a preference or ignored entirely.

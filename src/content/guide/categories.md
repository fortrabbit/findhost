---
title: Web hosting categories
description: The categories the market sells under — shared, VPS, server management, vanity hosting, serverless, PaaS, IaaS, low-code — and what each one asks of a team.
order: 30
ai: co-authored
figure:
  emoji: 🗂️
  color: rgb(34, 40, 56)
  textColor: rgb(170, 200, 255)
  text: Every category, sorted.
---

The hosting market has no clean labels. They shift with the technology, and vendors blur them on purpose — [which is most of why choosing is hard](/guide/why-hosting-is-hard/). This page is the map the dataset uses: what each category is, and what it costs in effort rather than in money.

- **[Shared hosting](/category/shared/)** — cheap, oversold, thin walls
- **[VPS](/category/vps/)** — a virtual machine with root, and a sysadmin job attached
- **[Server management](/category/server-management/)** — a panel that provisions and configures a VPS
- **[Vanity hosting](/category/vanity-hosting/)** — hosting built around one software ecosystem
- **[Serverless](/category/serverless/)** — runs on demand, billed per use
- **[PaaS](/category/paas/)** — push code, the platform runs it
- **[IaaS](/category/iaas/)** — cloud parts, wired together by the customer
- **[Low-code and no-code](/category/lcnc/)** — prompt or click a site into existence

Every record carries exactly one of those eight as its primary category, plus a list of what else it offers, because most providers sell across more than one. Managed hosting is the ninth term in common use and the one that fits no category at all; the last section says why.

## Shared hosting

The cheap end. Dozens of sites on one machine, separated at the directory level and oversold on top. Fine for a brochure site nobody leans on, and fragile the moment it has to ship from Git, run a background job, or stay up under load. [SSH access](/ssh/) is the quickest tell — usually limited or missing entirely.

## VPS

A virtual machine with root access. Cheap on paper, and the real price is time: the updates, the security patches and the 3 a.m. page all belong to whoever rents the box. It earns its place with a sysadmin already on the team, or with a stack that genuinely needs kernel-level control. That trade is recorded as [who manages the OS](/os-managed-by/), and for a VPS the answer is the customer.

## Server management

[Laravel Forge](/providers/laravel-forge/), [Ploi](/providers/ploi/), [RunCloud](/providers/runcloud/) and the rest. A dashboard that provisions and configures a VPS, often on a cloud account the customer already owns. It smooths the setup; it does not take the server off anyone's hands, and the OS upgrades still land in the same place. Two fields separate this from PaaS: [who manages the OS](/os-managed-by/) reads panel-assisted rather than provider, and [whose hardware](/hardware/) it runs on is frequently somebody else's.

## Vanity hosting

A polished panel on top of someone else's infrastructure, built around a single piece of software — WordPress, Craft, Laravel — and usually priced at a premium. Caching, image delivery and updates come integrated for that one stack, which is a real advantage for teams that live in it. The term is not an industry one; it was coined for this dataset to name a pattern the market has but does not label.

## Serverless

Functions and scale-to-zero containers that start on demand and bill per use. Nothing to manage, scaling handled by the platform, nothing charged while idle — good for spiky or mostly-idle work, and more to adapt for a steady application that is always warm. The label is stretched further than most, so [runtimes](/runtimes/) is the more honest field: it records what a platform actually executes, rather than what the marketing calls it.

## PaaS

Push code, the platform builds and runs it. There is no root to hand over and no infrastructure to assemble, and the cost is flexibility rather than money — deployment happens the platform's way. In cloud vocabulary it is the layer above IaaS, and under [who manages the OS](/os-managed-by/) it shows up as provider or container.

## IaaS

[AWS](/providers/aws/), Google Cloud, [Azure](/providers/azure/) and the smaller clouds. Raw parts — compute, storage, network — assembled into a running system by the customer. This is not hosting in the everyday sense: the parts, not the product. A large share of everything in the other categories is built on top of it, which is why [whose hardware](/hardware/) a provider runs on is a separate question from what it sells.

## Low-code and no-code

[Wix](/providers/wix/), [Squarespace](/providers/squarespace/), [Webflow](/providers/webflow/), and newer prompt-to-site tools. They generate a frontend and host it as one product, which is fast for a prototype or a small marketing site. It is a poor home for an application meant to last, because the runtime is closed and the output does not travel.

## Managed hosting

The premium, hands-on end. Cloud experts take a set of requirements and design, build and run the infrastructure to match, in a data centre or on public cloud, with training and consulting available alongside it. It is not one of the eight categories here, because the deliverable is negotiated per customer rather than published as a product — [the managed hosting page](/guide/managed-hosting/) covers what it involves and when the price makes sense.

## The label is not the decision

A category narrows the field; it never picks a provider. Two hosts inside the same one can differ on [entry price](/entry-price/), [regions](/regions/), [SSH](/ssh/) and support in ways that matter far more than the shared label, and a [free tier or trial](/free-tier/) settles more ties than any comparison table. [How to choose](/guide/how-to-choose/) covers the fields worth checking once the category is settled.

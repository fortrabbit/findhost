---
id: coolify
name: Coolify
url: https://coolify.io
category: server-management
description: Coolify is an open-source PaaS that runs on servers you rent and maintain yourself.
figure:
  emoji: 🐋
  color: rgb(0, 120, 140)
  textColor: rgb(230, 255, 255)
  text: DIY PaaS, DIY ops.
ai: co-authored
---

## About Coolify

Coolify is an open-source, self-hostable PaaS in the [server management](/category/server-management/) space. It is built by coolLabs around founder Andras Bacsai in Hungary, released under the Apache 2.0 license, and has grown into one of the most-starred hosting projects on GitHub — north of 50,000 stars and a Discord community in the tens of thousands. That reach is deserved: Coolify does a lot, and it does it without a paywall.

The model is bring-your-own-infrastructure. Coolify runs as a control panel on top of VPS instances from providers of your choosing — Hetzner, DigitalOcean, AWS, Vultr, Azure and friends. You provision the instance, Coolify automates container orchestration, deployments, TLS certificates and a catalogue of several hundred one-click services. Deployments are Docker-based via Nixpacks, a Dockerfile or Docker Compose, covering PHP, Node.js, static sites, databases and self-hosted tooling.

There are two flavours. The self-hosted edition is free without feature gates. Coolify Cloud hosts the panel itself for a small monthly fee — from around $5 for two connected servers, plus a few dollars per additional server — while the app servers remain yours in every case. Cloud removes the "who watches the watcher" problem for the panel, not the operations work for the servers.

## What Coolify does well

Credit where it is due. For a certain kind of project, Coolify is the right answer and no managed platform will beat it:

- Full ownership of the box, with Docker-native deployments and no vendor runtime in the way
- Any language, any service — 280+ one-click templates, from databases to self-hosted apps
- No per-app or per-seat licensing on the self-hosted edition
- An active community, fast release cadence and a workspace UI for many projects and environments
- Data and workloads stay on infrastructure chosen and controlled by the operator

:ContentQuote{text="Free software on a server you own is not the same thing as free hosting."}

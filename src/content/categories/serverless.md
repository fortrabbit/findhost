---
id: serverless
title: serverless
description: What serverless hosting means for PHP, when it pays off, and where it hurts. A guide to Lambda-style functions, scale-to-zero containers, and the WASM edge.
figure:
  emoji: ⚡
  color: rgb(28, 34, 52)
  textColor: rgb(150, 200, 255)
  text: Servers invoked on demand.
---

'Serverless' is mostly marketing jargon. Every vendor stretches the label over whatever it happens to sell. The servers are still there, but only spun up and down on demand. The bill follows usage, not reserved capacity: pay for what runs, nothing when it doesn't.

**Functions** (FaaS) are small, stateless handlers the platform spins up for a single request, runs, then throws away. Usually FaaS leans on a **backend service** (BaaS): a managed database, auth, or storage, stateful. When people say serverless PHP, they usually mean the functions part.

## Serverless PHP

Bref is a serverless AWS Lambda layer that packages PHP as a runtime. Lambda has no native PHP runtime, so PHP gets there through Bref. Where a platform lands depends on how close it stays to per-request billing and scale-to-zero.

- [AWS Lambda](/providers/aws-lambda/) is the archetype: per-request billing, scale-to-zero.
- [Google Cloud Run](/providers/google-cloud-run/) sits further out, stopping when idle but running a normal container. "Serverless" databases that never scale to zero sit further out still.
- [Laravel Vapor](/providers/laravel-vapor/) wraps Bref for Laravel.
- [DigitalOcean Functions](/providers/digitalocean-functions/) and [Scaleway Functions](/providers/scaleway-functions/) ship a PHP function runtime of their own.

## What serverless is good at

Some work fits serverless well:

- **Spiky traffic.** Functions scale out per request. A sudden burst does not need a fleet sitting there waiting for it.
- **Idle apps.** Scale-to-zero means near-zero cost at rest. Good for internal tools, seasonal sites, side projects.
- **Event work.** Image resizing, webhooks, cron jobs, queue consumers. They map onto functions without a fight.

## Where serverless hurts

This is where a normal PHP app has to give things up. In short: complexity and likely increased costs.

- **Cold starts.** Waking from idle costs time. Bref adds around 250 ms, a heavy framework boot adds more. Keep an instance warm and the delay goes away, but so does the reason for going serverless in the first place.
- **No local state.** The filesystem is throwaway and the next request may land somewhere else. File sessions, file caches, and local uploads all move to a shared store.
- **No persistent database connections.** Every cold environment opens its own. A burst can drown the database, so a connection proxy or a serverless-friendly store becomes part of the stack.
- **No long-running processes.** Lambda stops after 15 minutes and has no daemons. Workers and cron jobs get rebuilt as event handlers, not `while (true)` loops.
- **Local dev gets harder.** Reproducing the function, its gateway, and its scattered state on a laptop is real work. Debugging turns into tracing across services.
- **Steady traffic costs more.** Per-request billing rewards irregular load. For always-on traffic it usually loses to a flat rate.

## Is WASM serverless?

Not by itself. WebAssembly (WASM) is a compile target, a fast sandbox to run code in. Serverless is a billing and deployment model. They meet because some serverless edge platforms use WASM as their engine and trade container cold starts for near-instant ones. Run PHP as WASM on one of those and yes, it counts. On its own it is a runtime, nothing more.

As a way to host real PHP it is early, and was still early when this was last checked in August 2026. [Wasmer](/providers/wasmer/) runs WordPress, Laravel, and Symfony at the edge, with rough edges around storage. [Cloudflare Workers](/providers/cloudflare-workers/) runs PHP only through the community php-wasm project, not as a first-class runtime. The slickest PHP-in-WASM of the lot, WordPress Playground, runs in a browser as a dev tool, not a host. Worth watching. Not where production PHP lives.

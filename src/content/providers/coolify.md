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

> Free software on a server you own is not the same thing as free hosting.

## Where the responsibility sits

Coolify provisions and deploys, but it does not take the server off your hands. Once the instance is running, kernel and OS updates, security patches, disk pressure, log rotation, off-site backups, uptime monitoring and the 3am incident are all yours. Coolify makes the setup fast; it does not make the aftercare disappear.

The panel is itself a component to look after. It consumes resources on the same machine as the apps, it needs to be kept current, and a failed panel upgrade is an incident like any other. Multi-server setups and Docker Swarm are supported, but there is no managed multi-node orchestration, no automatic failover and no autoscaling — capacity is added by hand.

We abstract the AWS infrastructure underneath and take responsibility for keeping it patched, monitored and running, with one direct contact for both billing and technical questions. See the [legal section](https://www.fortrabbit.com/legal) for what that covers in writing.

## Free is not the same as cheap

The panel costs nothing, but a deployed project rarely stops at the panel. There is the VPS bill, object storage for backups, an external monitoring service once uptime starts to matter, and a second instance the day one box is no longer enough. Coolify Cloud adds a subscription on top of that VPS bill rather than replacing it.

The larger line item is usually time. Upgrades, container debugging, PHP image maintenance and incident response are unbilled but not free, and they arrive at inconvenient moments. Entry [components](https://www.fortrabbit.com/pricing) start at €2.50 per month and fit small sites; scaling stays predictable instead of fanning out across vendors.

## Running PHP on Coolify

Coolify is language-agnostic by design, which is a strength everywhere except in the details of a PHP stack. PHP on Coolify means assembling a container: Nixpacks with a build configuration, or a Dockerfile pinning the PHP version, the extensions, FPM or Nginx Unit, an `opcache.ini`, buffer sizes for the web server, a supervisor config for queue workers and a cron entry for the scheduler.

All of it is documented and all of it works. It is also a stack that has to be maintained — the image drifts, the PHP version needs bumping, and the tuning lives in a repository somebody has to own.

The PHP runtime is pre-tuned and version-pinned, MySQL is a native isolated component rather than a container next to the app, long-running workers and cron jobs are dashboard settings, and TLS is issued automatically. Nothing to assemble, nothing to re-tune after an upgrade.

## When to choose what

Neither option is a strict upgrade on the other. The split is mostly about how much of the stack you want to own:

## Migrating from Coolify

Moving a PHP project off a Coolify-managed server is mostly subtraction — the Docker image, the proxy rules and the certificate handling do not travel:

1. The free trial is enough to validate the move.
2. Point the git remote at the new app and deploy. Composer install runs as part of the deploy, so no image build is involved.
3. Dump the database on the old server and import it through the SSH tunnel — see the :ContentLink{href="/guides/general/mysql-import" text="MySQL import guide" prefix="docs"}.
5. rsync uploads from the VPS into the app's persistent storage.
6. Recreate queue workers and scheduled tasks as processes and cron jobs in the dashboard.
7. Move the domain, watch the certificate issue automatically, then retire the server.

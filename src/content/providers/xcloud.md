---
id: xcloud
name: xCloud
url: https://xcloud.host
category: server-management
pricingUrl: https://xcloud.host/pricing/
description: xCloud is a server-management panel launched in 2023 by WPDeveloper. It manages servers a customer brings, and also sells managed servers of its own.
founded: 2023
parent: WPDeveloper
infraContract:
  - byo-iaas
  - resells-iaas
whoManagesOs: panel-assisted
audience:
  - agency
  - developer
useCases:
  - cms
software:
  - wordpress
  - laravel
runsOn:
  - digitalocean
  - vultr
  - linode
  - hetzner
  - aws
runtimes:
  - php
pricingModel: fixed-tier
entryPriceBand: under-5
status: active
checkedAt: 2026-07-31
sources:
  - { field: entryPriceBand, url: 'https://xcloud.host/pricing/', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://xcloud.host/pricing/', checkedAt: 2026-07-31 }
  - { field: infraContract, url: 'https://xcloud.host/pricing/', checkedAt: 2026-07-31 }
  - { field: runsOn, url: 'https://xcloud.host/pricing/', checkedAt: 2026-07-31 }
figure:
  emoji: ⚡
  color: rgb(0, 100, 255)
  textColor: rgb(255, 255, 255)
  text: Managed servers, but you are the admin.
ai: co-authored
---

## About xCloud

xCloud is a newer entrant in the [server management](/category/server-management/) space, launched in 2023 by WPDeveloper, the Bangladesh-based company behind Essential Addons for Elementor. It targets WordPress, Laravel and general PHP applications. Like other tools in this category, it connects to cloud provider accounts (Vultr, DigitalOcean, Hetzner, Google Cloud and others) to provision and manage servers — and it also sells hosting on its own managed servers, blurring the line between panel and host.

Four price lines are sold at once. Self-managed hosting, where the customer brings the server, is $3 to $5 per server per month. Managed hosting, where xCloud provides and maintains the machine, runs from $5 a month for 1 GB of RAM to $399 for 64 GB across fifteen sizes. A separate agent-hosting line starts at $9.99 for 6 GB, and reseller plans run $25 to $250 a month with white-label options. Named targets for self-managed servers are DigitalOcean, Vultr, Linode, AWS, Hetzner and bare metal.

The panel covers sites, servers and teams, with automated backups, updates and free TLS certificates, and Laravel tooling including queue workers and Horizon.

## Reservations

xCloud sits on both sides of the line this dataset draws between a panel and a host: the same company sells the management software and the servers it manages. That is convenient, and it makes the two bills harder to compare with the alternatives to each.

On the self-managed line the ordinary server-management caveat applies — the operating system, its patches and its incidents stay with the account holder, and the $3 to $5 buys the panel only.

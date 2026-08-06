---
id: runcloud
name: RunCloud
urls:
  home: https://runcloud.io
  pricing: https://runcloud.io/pricing
category:
  - server-management
regions: null
description: RunCloud is a server management control panel for PHP and WordPress stacks, installed as an agent on a VPS the customer brings.
whoManagesOs: self-managed
infraContract:
  - byo-iaas
audience:
  - startup
  - enterprise
runtimes:
  - php
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
exitWithin: a-month
freeTier: trial
runsOn:
  - digitalocean
  - linode
  - vultr
status: active
checkedAt: 2026-08-01
sources:
  - { field: audience, url: 'https://runcloud.io/pricing', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://runcloud.io/', checkedAt: 2026-08-01 }
  - { field: runsOn, url: 'https://runcloud.io/', checkedAt: 2026-08-01 }
  - { field: infraContract, url: 'https://runcloud.io/', checkedAt: 2026-08-01 }
  - { field: billingPeriods, url: 'https://runcloud.io/docs/updating-your-subscription', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://runcloud.io/docs/updating-your-subscription', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://runcloud.io/docs/cancel-runcloud-subscription', checkedAt: 2026-08-02 }
figure:
  emoji: 🔁
  color: rgb(0, 135, 150)
  textColor: rgb(230, 255, 255)
  text: You patch the box, RunCloud runs the panel.
---

RunCloud is [server management software](/categories/server-management/) from Cyberjaya, Malaysia, run as an independent company. An agent is installed on a VPS the customer already rents — the mainstream providers are named as targets — and from there the panel builds and operates a PHP stack on Nginx or OpenLiteSpeed, with WordPress sites a stated focus. Deployments, virtual hosts, certificates, cron jobs, queue workers and database users are all managed through the panel rather than by hand on the box.

The subscription covers that management layer only: the machine stays on the customer's own account with its own bill, and the split is worth stating because the marketing in this category sits close to the marketing of managed hosting. A trial runs before the paid tiers, and the pricing page describes customers ranging from early-stage startups to enterprise hosting companies.

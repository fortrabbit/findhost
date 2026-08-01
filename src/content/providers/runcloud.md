---
id: runcloud
name: RunCloud
urls:
  home: https://runcloud.io
  pricing: https://runcloud.io/pricing
category: server-management
description: RunCloud is a server management control panel for PHP and WordPress stacks, installed as an agent on a VPS the customer brings.
whoManagesOs: panel-assisted
infraContract:
  - byo-iaas
audience:
  - startup
  - enterprise
runtimes:
  - php
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
figure:
  emoji: 🔁
  color: rgb(0, 135, 150)
  textColor: rgb(230, 255, 255)
  text: You patch the box, RunCloud runs the panel.
ai: co-authored
---

## About RunCloud

RunCloud is [server management software](/category/server-management/) from Cyberjaya, Malaysia, run as an independent company. It is a control panel for VPS providers — DigitalOcean, Linode, AWS, Vultr and Azure among them: an agent is installed on the server and configures a PHP stack on Nginx or OpenLiteSpeed, with WordPress sites a stated focus. The server is the customer's, and RunCloud configures and operates the software on top of it. Its pricing page describes a range of customers "from early-stage startups to enterprise hosting companies".

## Reservations

The panel does not change who owns the machine. Operating system patches, backups and incident response stay with the account holder, and the subscription covers the management layer only — a split worth being explicit about, because the marketing of every product in this category sits close to the marketing of managed hosting.

---
id: cpanel
name: cPanel
urls:
  home: https://cpanel.net
  pricing: https://cpanel.net/pricing/
category: server-management
description: The hosting control panel most shared hosting runs on, licensed per server and priced by the number of accounts it manages.
ownership: subsidiary
parent: WebPros International L.L.C.
whoManagesOs: panel-assisted
infraContract:
  - byo-iaas
useCases:
  - cms
  - e-commerce
  - campaign-site
  - portfolio
audience:
  - freelancer
  - agency
  - smb
  - enterprise
software:
  - wordpress
runtimes:
  - php
  - node
  - python
  - ruby
deployMethods:
  - control-panel
  - ssh
  - ftp
  - git-push
sshAccess: full
managedDatabases:
  - mysql
  - postgres
pricingModel: fixed-tier
entryPriceBand: 15-50
entryPrice: { amount: 29.99, currency: USD, period: month }
freeTier: trial
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://cpanel.net/pricing/', checkedAt: 2026-08-01 }
  - { field: entryPriceBand, url: 'https://cpanel.net/pricing/', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://cpanel.net/pricing/', checkedAt: 2026-08-01 }
figure:
  emoji: 🎛️
  color: rgb(50, 30, 15)
  textColor: rgb(250, 210, 165)
  text: The industry standard, and it knows it.
ai: authored
---

## About cPanel

More shared hosting accounts are administered through cPanel than through anything else, which makes it less a product choice than an interface most of the web has agreed on. It is licensed per server: Solo at about thirty dollars a month for one account, Admin for five, Pro for thirty, Premier for a hundred with additional accounts priced individually, and a WordPress-oriented tier.

Every tier includes the WordPress Toolkit, SSL, email, unlimited websites and migration tooling. The software is a registered trademark of WebPros International, which also owns Plesk.

## Reservations

The 2018 move to per-account pricing under private-equity ownership raised bills across the industry and remains the reason many hosts migrated away — the licensing model is a live commercial risk, not settled background. cPanel hosts nothing itself; the licence sits on top of a server bought elsewhere, and the same owner controls the main alternative.

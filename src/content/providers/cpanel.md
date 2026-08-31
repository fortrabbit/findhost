---
id: cpanel
name: cPanel
urls:
  home: https://cpanel.net
  pricing: https://cpanel.net/pricing/
category:
  - server-management
regions: null
description: Hosting control panel installed on a server the operator supplies, licensed per server and priced by the number of accounts it manages.
ownership: subsidiary
parent: webpros
whoManagesOs: self-managed
infraContract:
  - byo-iaas
useCases:
  - cms
  - e-commerce
  - campaign-site
  - portfolio
audience:
  - solo
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
  - file-transfer
  - git
sshAccess: root
managedDatabases:
  - mysql
  - postgres
pricingModel: fixed-tier
priceFrom: md
priceTo: lg
currencies:
  - USD
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
exitWithin: a-month
entryPrice: { amount: 29.99, currency: USD, period: month }
freeTier: trial
apiAvailable: public
hqCountry: US
referringSubnets: { now: 76085, before: 76647 }
checkedAt: 2026-08-09
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-08-31 }
  - { field: hqCountry, url: 'https://cpanel.net', checkedAt: 2026-08-09 }
  - { field: entryPrice, url: 'https://cpanel.net/pricing/', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://cpanel.net/pricing/', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://cpanel.net/pricing/', checkedAt: 2026-08-01 }
  - { field: priceTo, url: 'https://cpanel.net/pricing/', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://cpanel.net/pricing/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://cpanel.net/pricing/', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://cpanel.net/pricing/', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://cpanel.net/pricing/', checkedAt: 2026-08-02 }
  - { field: apiAvailable, url: 'https://cpanel.net/developers/', checkedAt: 2026-08-09 }
figure:
  emoji: 🎛️
  color: rgb(180, 108, 54)
  textColor: rgb(246, 239, 234)
  text: Per-server licence, per-account price.
ai: authored
---

cPanel is the control panel a large share of shared hosting accounts are administered through, which makes it less a product choice than an interface much of the industry has settled on. It hosts nothing itself: the licence installs on a server bought elsewhere and gives end users a web interface for domains, email, databases, files and applications.

Licensing is per server and graded by how many accounts the licence covers, from a single-account tier up to bulk tiers where further accounts are priced individually. Every tier includes the WordPress Toolkit, SSL, email and migration tooling. The move to per-account pricing came in 2018 under new ownership, and the number of accounts on a machine has driven the licence cost directly ever since. The software is a registered trademark of WebPros International, which also owns Plesk, the main alternative.

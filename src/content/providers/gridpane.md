---
id: gridpane
name: GridPane
urls:
  home: https://gridpane.com
  pricing: https://gridpane.com/pricing/
category:
  - server-management
description: GridPane is a WordPress server-management platform for agencies, provisioning and hardening servers on the customer's own cloud account.
whoManagesOs: managed
infraContract:
  - byo-iaas
  - resells-iaas
specialisation:
  - wordpress
useCases:
  - cms
  - e-commerce
  - campaign-site
audience:
  - agency
  - solo
  - smb
software:
  - wordpress
runtimes:
  - php
deployMethods:
  - control-panel
  - git
sshAccess: jailed
managedDatabases:
  - mysql
pricingModel: fixed-tier
priceFrom: md
priceTo: xl
currencies:
  - USD
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
exitWithin: a-month
freeTier: permanent
apiAvailable: public
cliTool: official
status: active
hqCountry: US
ownership: vc-backed
staging: included
checkedAt: 2026-08-12
sources:
  - { field: hqCountry, url: 'https://gridpane.com', checkedAt: 2026-08-09 }
  - { field: priceFrom, url: 'https://gridpane.com/pricing/', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://gridpane.com/pricing/', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://gridpane.com/terms/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://gridpane.com/pricing/', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://gridpane.com/terms/', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://gridpane.com/terms/', checkedAt: 2026-08-02 }
  - { field: freeTier, url: 'https://gridpane.com/pricing/', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://gridpane.com/pricing/', checkedAt: 2026-08-01 }
  - { field: infraContract, url: 'https://gridpane.com/pricing/', checkedAt: 2026-08-01 }
  - { field: apiAvailable, url: 'https://gridpane.com', checkedAt: 2026-08-09 }
  - { field: cliTool, url: 'https://gridpane.com', checkedAt: 2026-08-09 }
  - { field: staging, url: 'https://gridpane.com/pricing/', checkedAt: 2026-08-12 }
  - { field: ownership, url: 'https://gridpane.com/blog/automattic-invests-in-gridpane/', checkedAt: 2026-08-21 }
figure:
  emoji: 🧯
  color: rgb(131, 77, 157)
  textColor: rgb(241, 234, 245)
  text: WordPress servers, on your own cloud account.
ai: authored
---

GridPane provisions and manages WordPress servers on infrastructure the customer owns, built for agencies running many sites at once. It covers page and Redis object caching, PHP version management, staging, cloning, git integration, backups and security hardening through its own Fortress plugin, with multitenancy for running one codebase across many client sites.

Plans are fixed tiers: a permanently free level capped by site count, managed high-frequency servers run in partnership with Vultr, and a bespoke agency arrangement above them.

## Worth knowing

The subscription buys the control plane; every server underneath is rented and paid for separately. Provisioning is shaped around Vultr, so choosing another cloud means working against the grain of the product, and there is little between the free tier and the bespoke one.

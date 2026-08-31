---
id: pressable
name: Pressable
urls:
  home: https://pressable.com
  pricing: https://pressable.com/plans/
category:
  - vanity-hosting
description: Managed WordPress hosting owned by Automattic, sold in fixed tiers metered by number of installs, monthly visits and storage.
ownership: subsidiary
parent: automattic
whoManagesOs: managed
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
  - file-transfer
pricingModel: fixed-tier
priceFrom: md
priceTo: lg
currencies:
  - USD
billingPeriods:
  - monthly
billingTiming: advance
exitWithin: a-month
entryPrice: { amount: 25, currency: USD, period: month }
freeTier: none
regions:
  - US
  - NL
supportHours: 24-7
referringSubnets: { now: 741, before: 740 }
status: active
hqCountry: US
checkedAt: 2026-08-09
apiAvailable: public
cliTool: official
mcpServer: official
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-08-31 }
  - { field: hqCountry, url: 'https://pressable.com', checkedAt: 2026-08-09 }
  - { field: entryPrice, url: 'https://pressable.com/plans/', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://pressable.com/plans/', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://pressable.com/plans/', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://pressable.com/plans/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://pressable.com/legal/terms-of-service/', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://pressable.com/legal/terms-of-service/', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://pressable.com/legal/terms-of-service/', checkedAt: 2026-08-02 }
  - { field: pricingModel, url: 'https://pressable.com/plans/', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://pressable.com/plans/', checkedAt: 2026-08-01 }
  - { field: regions, url: 'https://pressable.com/knowledgebase/where-are-pressable-data-centers-located/', checkedAt: 2026-08-01 }
  - { field: supportHours, url: 'https://pressable.com/knowledgebase/', checkedAt: 2026-08-01 }
  - { field: apiAvailable, url: 'https://pressable.com', checkedAt: 2026-08-09 }
  - { field: cliTool, url: 'https://pressable.com', checkedAt: 2026-08-09 }
  - { field: mcpServer, url: 'https://pressable.com', checkedAt: 2026-08-09 }
figure:
  emoji: 🅰️
  color: rgb(77, 117, 157)
  textColor: rgb(234, 240, 245)
  text: Automattic's other WordPress host.
ai: authored
---

Pressable describes itself as "an Automattic hosting lab", which places it inside the company that also owns WordPress.com, WooCommerce and Jetpack, and makes it one of several WordPress hosts under that roof rather than a competitor to them. The product is managed WordPress only: the provider runs the operating system and the stack, and the customer works through a control panel and SFTP.

Plans are a long ladder of fixed tiers, each defined by how many WordPress installs it covers, how many monthly visits it allows and how much storage it includes, rising to a custom tier for large accounts. Every plan carries a matching allowance of staging and sandbox sites, and support is offered around the clock.

## Worth knowing

Because the meters are installs, visits and storage, one unexpectedly popular site can push an account into a higher tier without any change in how many sites it hosts.

Server regions, SSH availability and stack detail are not on the plans page, and the practical differences between Automattic's several hosting products are not laid out anywhere a buyer comparing them would find them.

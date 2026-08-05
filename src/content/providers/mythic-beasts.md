---
id: mythic-beasts
name: Mythic Beasts
urls:
  home: https://www.mythic-beasts.com
  pricing: https://www.mythic-beasts.com/order/hosting
  status: https://status.mythic-beasts.com
  terms: https://www.mythic-beasts.com/terms/overview
  docs: https://www.mythic-beasts.com/support
category:
  - shared-hosting
description: British host selling web and email hosting in a long ladder of graded sizes, with a choice of PHP release per site and MySQL as standard.
hqCountry: GB
ownership: independent
whoManagesOs: provider
useCases:
  - cms
  - portfolio
  - campaign-site
  - side-project
  - static-site
audience:
  - solo
  - smb
  - education
  - non-profit
software:
  - wordpress
  - drupal
runtimes:
  - php
  - static
deployMethods:
  - sftp
  - ssh
  - ftp
sshAccess: shell
managedDatabases:
  - mysql
  - postgres
backupsIncluded: included
pricingModel: fixed-tier
entryPrice: { amount: 1, currency: GBP, period: month }
priceFrom: xs
priceTo: lg
currencies:
  - GBP
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
freeTier: none
contractMinimum: monthly
regions:
  - GB
supportChannels:
  - email
status: active
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://www.mythic-beasts.com/order/hosting', checkedAt: 2026-08-01 }
  - { field: entryPrice, url: 'https://www.mythic-beasts.com/order/hosting', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://www.mythic-beasts.com/order/hosting', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://www.mythic-beasts.com/order/hosting', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://www.mythic-beasts.com/order/hosting', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://www.mythic-beasts.com/order/hosting', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://www.mythic-beasts.com/order/hosting', checkedAt: 2026-08-02 }
  - { field: contractMinimum, url: 'https://www.mythic-beasts.com/order/hosting', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://www.mythic-beasts.com/order/hosting', checkedAt: 2026-08-01 }
  - { field: ownership, url: 'https://www.mythic-beasts.com/support', checkedAt: 2026-08-01 }
  - { field: supportChannels, url: 'https://www.mythic-beasts.com/support', checkedAt: 2026-08-01 }
figure:
  emoji: 🐉
  color: rgb(35, 25, 55)
  textColor: rgb(210, 190, 250)
  text: Graded sizes, shell sold separately.
ai: authored
---

Mythic Beasts is a Cambridge company best known outside hosting for running the Raspberry Pi Foundation's infrastructure and for renting out actual Raspberry Pis in a data centre.

The web hosting line is sold as a long ladder of graded sizes rather than three tiers, from a redirection-only account up to accounts holding hundreds of gigabytes, so a plan can be matched to a site rather than the other way round. Every account gets unlimited domains and mailboxes, free Let's Encrypt certificates, and a choice of PHP release per site. MySQL is standard and PostgreSQL is available on request. Servers are in UK data centres, connected by the company's own fibre ring between London, Amsterdam and Cambridge.

## Worth knowing

Shell access is not included in the hosting price. SSH is a separate paid add-on, so the advertised entry figure is not the figure for a shell-capable account.

The backup guarantee is modest and stated plainly: restoration to a point no more than 36 hours before a failure, with the company recommending that customers keep their own offsite copies as well.

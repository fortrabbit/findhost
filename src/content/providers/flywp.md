---
id: flywp
name: FlyWP
urls:
  home: https://flywp.com
  pricing: https://flywp.com/pricing/
  terms: https://flywp.com/terms-of-service/
  docs: https://flywp.com/docs/
category:
  - server-management
description: FlyWP is a server-management panel from weDevs that runs WordPress sites in Docker containers on cloud servers a customer brings or provisions through it.
founded: 2023
hqCountry: US
ownership: subsidiary
parent: wedevs
whoManagesOs: self-managed
infraContract:
  - byo-iaas
  - resells-iaas
audience:
  - agency
useCases:
  - cms
software:
  - wordpress
specialisation:
  - wordpress
runsOn:
  - digitalocean
  - aws
  - gcp
  - vultr
  - linode
  - hetzner
runtimes:
  - php
managedDatabases:
  - mariadb
  - redis
deployMethods:
  - git
  - control-panel
  - file-transfer
sshAccess: root
backupsIncluded: included
staging: included
pricingModel: per-server-licence
priceFrom: xs
entryPrice: { amount: 5, currency: USD, period: month }
currencies:
  - USD
billingPeriods:
  - monthly
billingTiming: advance
exitWithin: a-month
moneyBack: a-month
freeTier: permanent
supportChannels:
  - chat
  - email
supportTiering: paid-upgrade
collaboration: team
apiAvailable: public
cliTool: official
referringSubnets: { now: 249, before: 250 }
status: active
checkedAt: 2026-09-07
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-09-07 }
  - { field: founded, url: 'https://flywp.com/blog/11359/flywp-year-in-review-2024/', checkedAt: 2026-09-07 }
  - { field: hqCountry, url: 'https://flywp.com/terms-of-service/', checkedAt: 2026-09-07 }
  - { field: ownership, url: 'https://wedevs.com/about/', checkedAt: 2026-09-07 }
  - { field: infraContract, url: 'https://flywp.com/features/provision-servers/', checkedAt: 2026-09-07 }
  - { field: runsOn, url: 'https://flywp.com/features/provision-servers/', checkedAt: 2026-09-07 }
  - { field: runsOn, url: 'https://flywp.com/docs/account/server-providers/', checkedAt: 2026-09-07 }
  - { field: audience, url: 'https://flywp.com/pricing/', checkedAt: 2026-09-07 }
  - { field: specialisation, url: 'https://flywp.com', checkedAt: 2026-09-07 }
  - { field: managedDatabases, url: 'https://flywp.com/docs/server/server-and-site-management-page/', checkedAt: 2026-09-07 }
  - { field: deployMethods, url: 'https://flywp.com/docs/site/', checkedAt: 2026-09-07 }
  - { field: sshAccess, url: 'https://flywp.com/docs/server/ssh-keys/', checkedAt: 2026-09-07 }
  - { field: backupsIncluded, url: 'https://flywp.com/pricing/', checkedAt: 2026-09-07 }
  - { field: staging, url: 'https://flywp.com/docs/site/site-migration/how-to-clone-or-transfer-wordpress-sites-on-flywp/', checkedAt: 2026-09-07 }
  - { field: pricingModel, url: 'https://flywp.com/pricing/', checkedAt: 2026-09-07 }
  - { field: priceFrom, url: 'https://flywp.com/pricing/', checkedAt: 2026-09-07 }
  - { field: entryPrice, url: 'https://flywp.com/pricing/', checkedAt: 2026-09-07 }
  - { field: currencies, url: 'https://flywp.com/terms-of-service/', checkedAt: 2026-09-07 }
  - { field: billingPeriods, url: 'https://flywp.com/pricing/', checkedAt: 2026-09-07 }
  - { field: billingTiming, url: 'https://flywp.com/terms-of-service/', checkedAt: 2026-09-07 }
  - { field: exitWithin, url: 'https://flywp.com/terms-of-service/', checkedAt: 2026-09-07 }
  - { field: moneyBack, url: 'https://flywp.com/pricing/', checkedAt: 2026-09-07 }
  - { field: freeTier, url: 'https://flywp.com/pricing/', checkedAt: 2026-09-07 }
  - { field: supportChannels, url: 'https://flywp.com/pricing/', checkedAt: 2026-09-07 }
  - { field: supportTiering, url: 'https://flywp.com/pricing/', checkedAt: 2026-09-07 }
  - { field: collaboration, url: 'https://flywp.com/docs/account/', checkedAt: 2026-09-07 }
  - { field: apiAvailable, url: 'https://api-doc.flywp.com/', checkedAt: 2026-09-07 }
  - { field: cliTool, url: 'https://flywp.com/docs/server/flywp-server-cli/', checkedAt: 2026-09-07 }
figure:
  emoji: 🪰
  color: rgb(24, 96, 168)
  textColor: rgb(230, 238, 248)
  text: One WordPress site per container, one panel per fleet.
ai: authored
---

FlyWP is a [server management](/categories/server-management/) panel launched in 2023 by weDevs, the Dhaka company behind the Dokan and WP User Frontend plugins; the panel itself is sold by a Delaware entity. It connects to a customer's own account at the mainstream cloud providers, or to any server reachable over SSH, and builds a WordPress stack on it in which every site runs in its own Docker container with a choice of Nginx or OpenLiteSpeed in front of PHP, MariaDB and Redis. Servers can also be provisioned through the panel on DigitalOcean, with the machine billed through FlyWP at DigitalOcean's own prices.

The panel covers provisioning, PHP versions, certificates, scheduled backups to a bucket the customer supplies, git deployment, site cloning, SSH keys, per-site SFTP and team roles. A public REST API and a server-side command-line tool sit beside the web interface. The subscription is priced per server, with a permanent free tier that manages a single server and site, and the operating system underneath stays the account holder's to patch.

## Worth knowing

FlyWP is WordPress only: the stack it builds is a WordPress stack, and there is no path for a Laravel or plain PHP application that some panels in this category offer. Backups go to object storage the customer arranges and pays for separately, so the panel's backup line is a scheduler rather than a place the copies live.

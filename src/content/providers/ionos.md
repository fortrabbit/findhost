---
id: ionos
name: IONOS
urls:
  home: https://www.ionos.de
  pricing: https://www.ionos.de/hosting/webhosting
  status: https://www.ionos-status.de/
  terms: https://www.ionos.de/terms-gtc/terms
  docs: https://www.ionos.de/hilfe/
category:
  - shared-hosting
description: Large European hosting group selling shared webhosting, VPS, dedicated and bare-metal servers and an IaaS cloud, listed on the Frankfurt exchange.
founded: 1988
hqCountry: DE
ownership: public
parent: united-internet
useCases:
  - cms
  - e-commerce
  - campaign-site
  - portfolio
  - api
  - web-app
audience:
  - solo
  - smb
  - agency
  - startup
  - enterprise
software:
  - wordpress
  - joomla
  - drupal
runtimes:
  - php
  - python
  - static
deployMethods:
  - file-transfer
  - git
  - control-panel
sshAccess: jailed
pricingModel: fixed-tier
priceFrom: sm
priceTo: md
currencies:
  - EUR
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
exitWithin: a-year
renewalMultiple: 2
contractMinimum: annual
freeTier: none
regions:
  - DE
  - US
supportChannels:
  - phone
  - email
  - chat
supportHours: 24-7
apiAvailable: public
sla: true
referringSubnets: { now: 21499, before: 21583 }
status: active
checkedAt: 2026-08-01
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-08-31 }
  - { field: supportHours, url: 'https://www.ionos.de/hosting/webhosting', checkedAt: 2026-08-01 }
  - { field: supportChannels, url: 'https://www.ionos.de/hosting/webhosting', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://www.ionos.de/hosting/webhosting', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://www.ionos.de/hosting/webhosting', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://www.ionos.de/hosting/webhosting', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://www.ionos.de/terms-gtc/terms', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://www.ionos.de/terms-gtc/terms', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://www.ionos.de/terms-gtc/terms', checkedAt: 2026-08-02 }
  - { field: renewalMultiple, url: 'https://www.ionos.de/hosting/webhosting', checkedAt: 2026-07-31 }
  - { field: contractMinimum, url: 'https://www.ionos.de/hosting/webhosting', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://www.ionos.de/hosting/webhosting', checkedAt: 2026-07-31 }
  - { field: sla, url: 'https://cloud.ionos.com/terms-gtc/terms-enterprise-cloud/enterprise-agreement/', checkedAt: 2026-08-30 }
figure:
  emoji: 🏢
  color: rgb(45, 117, 190)
  textColor: rgb(234, 240, 246)
  text: Mass market, developer tolerant.
ai: authored
gpuCapacity:
  - instances
---

IONOS trades from Montabaur and Karlsruhe, descends from 1&1, went public on the Frankfurt exchange in 2023 and remains part of United Internet AG. It is one of the largest hosting groups in Europe, running its own geo-redundant data centres in Germany, elsewhere in Europe and the United States. STRATO, listed separately here, belongs to the same group.

For a mass-market host the shared line is unusually tolerant of developers: SSH, Git version management, WP-CLI and cron are on every tariff, with a choice of PHP release and MariaDB databases. Beyond shared hosting the portfolio runs to VPS, dedicated and bare-metal machines, GPU servers and a separate IaaS cloud with its own documented API and price calculator, so the shared category describes the entry product rather than the company.

## Worth knowing

Advertised pricing is promotional, and IONOS prints both the introductory and the standing rate, which makes the size of the step visible. The multiple recorded here is the entry plan's; the middle tiers step up more steeply than that, and every plan carries a one-off setup fee on top.

The uptime figure varies by product rather than describing the company. The [cloud agreement](https://cloud.ionos.com/terms-gtc/terms-enterprise-cloud/enterprise-agreement/) sets a monthly availability target per service, from 99.5% for object storage through 99.95% for compute to 99.995% for DNS.

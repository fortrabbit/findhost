---
id: codered
name: CodeRed Cloud
urls:
  home: https://www.codered.cloud
  pricing: https://www.codered.cloud/plans/
  docs: https://www.codered.cloud/docs/
category:
  - paas
description: CodeRed Cloud is a managed hosting platform for Django and Wagtail sites, run on Microsoft Azure by a Cleveland web development firm.
founded: 2013
hqCountry: US
whoManagesOs: managed
runsOn:
  - azure
specialisation:
  - django
useCases:
  - cms
  - web-app
  - static-site
audience:
  - agency
  - smb
software:
  - django
  - wagtail
  - wordpress
runtimes:
  - python
  - node
  - php
deployMethods:
  - git
managedDatabases:
  - mysql
  - postgres
sshAccess: jailed
pricingModel: fixed-tier
priceFrom: md
priceTo: xl
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
moneyBack: a-week
entryPrice: { amount: 25, currency: USD, period: month }
freeTier: permanent
testDomain: included
staging: included
supportChannels:
  - email
  - phone
supportTiering: paid-upgrade
cliTool: official
status: active
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - { field: founded, url: 'https://www.coderedcorp.com/', checkedAt: 2026-10-18 }
  - { field: hqCountry, url: 'https://www.coderedcorp.com/', checkedAt: 2026-10-18 }
  - { field: runsOn, url: 'https://www.codered.cloud/', checkedAt: 2026-10-18 }
  - { field: software, url: 'https://www.codered.cloud/docs/', checkedAt: 2026-10-18 }
  - { field: runtimes, url: 'https://www.codered.cloud/docs/', checkedAt: 2026-10-18 }
  - { field: deployMethods, url: 'https://www.codered.cloud/cli/', checkedAt: 2026-10-18 }
  - { field: cliTool, url: 'https://www.codered.cloud/cli/', checkedAt: 2026-10-18 }
  - { field: managedDatabases, url: 'https://www.codered.cloud/plans/', checkedAt: 2026-10-18 }
  - { field: sshAccess, url: 'https://www.codered.cloud/plans/', checkedAt: 2026-10-18 }
  - { field: pricingModel, url: 'https://www.codered.cloud/plans/', checkedAt: 2026-10-18 }
  - { field: entryPrice, url: 'https://www.codered.cloud/plans/', checkedAt: 2026-10-18 }
  - { field: priceFrom, url: 'https://www.codered.cloud/plans/', checkedAt: 2026-10-18 }
  - { field: priceTo, url: 'https://www.codered.cloud/plans/', checkedAt: 2026-10-18 }
  - { field: billingPeriods, url: 'https://www.codered.cloud/plans/', checkedAt: 2026-10-18 }
  - { field: billingTiming, url: 'https://www.codered.cloud/plans/', checkedAt: 2026-10-18 }
  - { field: freeTier, url: 'https://www.codered.cloud/plans/', checkedAt: 2026-10-18 }
  - { field: testDomain, url: 'https://www.codered.cloud/plans/', checkedAt: 2026-10-18 }
  - { field: staging, url: 'https://www.codered.cloud/plans/', checkedAt: 2026-10-18 }
  - { field: supportChannels, url: 'https://www.codered.cloud/plans/', checkedAt: 2026-10-18 }
  - { field: supportTiering, url: 'https://www.codered.cloud/plans/', checkedAt: 2026-10-18 }
  - { field: moneyBack, url: 'https://www.codered.cloud/legal/terms/', checkedAt: 2026-10-18 }
figure:
  emoji: 🐦
  color: rgb(178, 34, 34)
  textColor: rgb(255, 255, 255)
  text: Wagtail hosting, from a Wagtail shop.
ai: authored
---

CodeRed Cloud is the hosting arm of CodeRed LLC, a web development firm in Cleveland, Ohio, that describes itself on its [company site](https://www.coderedcorp.com/) as specializing in Python, Django and Wagtail and publishes the Wagtail CRX starter kit. The platform runs Django and Wagtail sites, with WordPress, Node.js and static HTML documented alongside, on Microsoft Azure infrastructure the company manages.

Plans are priced per website and scale by workers, storage and backup retention, each with one MySQL or PostgreSQL database. A permanent free plan serves a site on a codered.cloud subdomain; paid plans add a custom domain and SSH, and the Professional tiers add a staging site and uptime monitoring. Deploys run through the company's own CLI, from a terminal or from a CI job on git push.

## Worth knowing

The [plans page](https://www.codered.cloud/plans/) names no data center region, only Azure. The [terms of service](https://www.codered.cloud/legal/terms/) set a thirty-day contract minimum, allow a refund for any reason within seven days of signup, and make unused service non-refundable after that.

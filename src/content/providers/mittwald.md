---
id: mittwald
name: Mittwald
urls:
  home: https://www.mittwald.de
  pricing: https://www.mittwald.de/webhosting
  status: https://www.mittwald-status.de/
  terms: https://www.mittwald.de/agb
  docs: https://developer.mittwald.de
category:
  - paas
description: German managed hosting platform with per-project containers, a control plane called mStudio, an official CLI and a public REST API.
founded: 2003
hqCountry: DE
ownership: independent
whoManagesOs: managed
useCases:
  - cms
  - e-commerce
  - api
  - campaign-site
audience:
  - solo
  - agency
  - smb
software:
  - wordpress
  - typo3
  - joomla
  - shopware
  - magento
runtimes:
  - php
  - node
  - docker
  - static
deployMethods:
  - file-transfer
  - git
  - control-panel
sshAccess: jailed
pricingModel: fixed-tier
entryPrice: { amount: 13, currency: EUR, period: month }
priceFrom: sm
priceTo: md
currencies:
  - EUR
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
exitWithin: a-quarter
freeTier: trial
contractMinimum: monthly
regions:
  - DE
energyClaim: annual-matched
certifications:
  - iso-27001
supportChannels:
  - phone
  - email
supportHours: 24-7
apiAvailable: public
cliTool: official
status: active
checkedAt: 2026-08-01
sources:
  - { field: priceFrom, url: 'https://www.mittwald.de/webhosting', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://www.mittwald.de/webhosting', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://www.mittwald.de/webhosting', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://www.mittwald.de/agb', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://www.mittwald.de/agb', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://www.mittwald.de/agb', checkedAt: 2026-08-02 }
  - { field: freeTier, url: 'https://www.mittwald.de/hosting', checkedAt: 2026-07-31 }
  - { field: regions, url: 'https://www.mittwald.de/webhosting', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://www.mittwald.de/hosting', checkedAt: 2026-07-31 }
  - { field: entryPrice, url: 'https://www.mittwald.de/webhosting', checkedAt: 2026-08-01 }
  - { field: contractMinimum, url: 'https://www.mittwald.de/webhosting', checkedAt: 2026-08-01 }
  - { field: supportHours, url: 'https://www.mittwald.de/webhosting', checkedAt: 2026-08-01 }
  - { field: supportChannels, url: 'https://www.mittwald.de/webhosting', checkedAt: 2026-08-01 }
  - { field: energyClaim, url: 'https://www.mittwald.de/webhosting', checkedAt: 2026-08-01 }
  - { field: certifications, url: 'https://www.mittwald.de/webhosting', checkedAt: 2026-08-01 }
social:
  github: https://github.com/mittwald
  facebook: https://www.facebook.com/mittwald
  linkedin: https://de.linkedin.com/company/mittwald
figure:
  emoji: 🏗️
  color: rgb(45, 86, 190)
  textColor: rgb(234, 237, 246)
  text: Agency plumbing, documented.
ai: authored
---

Mittwald is a family-owned hosting company in Espelkamp, North Rhine-Westphalia, trading since 2003 and running its own data centre at its headquarters. Everything is hosted in Germany; there is no region to choose.

The product sits closer to a platform than to commodity shared hosting. Projects run in containers and are administered through mStudio, a control plane with a documented REST API, API tokens meant for CI, published client libraries and an official `mw` command-line tool. SSH is available, and the classic tariffs sit alongside container hosting for Node and Docker workloads. Current PHP releases are documented; older ones are reachable only through a paid extended-support add-on.

The audience it addresses is agencies and freelancers handling client sites — TYPO3, WordPress, Shopware and Magento are named explicitly, and TYPO3's own installation documentation lists Mittwald as a technology partner with preinstalled packages.

## Worth knowing

Prices are quoted net of VAT throughout, so the figure on the tariff page is not the figure a private customer pays.

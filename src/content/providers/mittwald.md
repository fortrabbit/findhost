---
id: mittwald
name: Mittwald
urls:
  home: https://www.mittwald.de
  pricing: https://www.mittwald.de/webhosting
  status: https://www.mittwald-status.de/
  terms: https://www.mittwald.de/agb
  docs: https://developer.mittwald.de
category: paas
description: German managed hosting platform with per-project containers, a control plane called mStudio, an official CLI and a public REST API.
founded: 2003
hqCountry: DE
ownership: independent
whoManagesOs: provider
useCases:
  - cms
  - e-commerce
  - api
  - campaign-site
audience:
  - freelancer
  - agency
  - smb
software:
  - wordpress
  - typo3
  - joomla
  - shopware
  - magento
  - woocommerce
runtimes:
  - php
  - node
  - docker
  - static
deployMethods:
  - ssh
  - sftp
  - git-push
  - cli
  - api
  - control-panel
sshAccess: full
pricingModel: fixed-tier
entryPrice: { amount: 13, currency: EUR, period: month }
entryPriceBand: 5-15
freeTier: trial
contractMinimum: monthly
regions:
  - DE
energyClaim: annual-matched
certifications:
  - ISO 27001
supportChannels:
  - phone
  - email
supportHours: 24-7
apiAvailable: public
cliTool: official
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPriceBand, url: 'https://www.mittwald.de/hosting', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://www.mittwald.de/hosting', checkedAt: 2026-07-31 }
  - { field: regions, url: 'https://www.mittwald.de/webhosting', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://www.mittwald.de/hosting', checkedAt: 2026-07-31 }
  - { field: entryPrice, url: 'https://www.mittwald.de/webhosting', checkedAt: 2026-08-01 }
  - { field: contractMinimum, url: 'https://www.mittwald.de/webhosting', checkedAt: 2026-08-01 }
  - { field: supportHours, url: 'https://www.mittwald.de/webhosting', checkedAt: 2026-08-01 }
  - { field: supportChannels, url: 'https://www.mittwald.de/webhosting', checkedAt: 2026-08-01 }
  - { field: energyClaim, url: 'https://www.mittwald.de/webhosting', checkedAt: 2026-08-01 }
  - { field: certifications, url: 'https://www.mittwald.de/webhosting', checkedAt: 2026-08-01 }
  - { field: social, url: 'https://www.mittwald.de/agb', checkedAt: 2026-08-01 }
social:
  github: https://github.com/mittwald
  facebook: https://www.facebook.com/mittwald
  linkedin: https://de.linkedin.com/company/mittwald
figure:
  emoji: 🏗️
  color: rgb(20, 40, 90)
  textColor: rgb(180, 205, 255)
  text: Agency plumbing, documented.
ai: authored
---

## About Mittwald

Mittwald is a family-owned hosting company in Espelkamp, North Rhine-Westphalia, trading since 2003 and running its own data centre at its headquarters. Everything is hosted in Germany; there is no region to choose.

The product sits closer to a platform than to commodity shared hosting. Projects run in containers and are administered through mStudio, a control plane with a documented v2 REST API, API tokens meant for CI, published client libraries and an official `mw` command-line tool. SSH is available, and the classic tariffs sit alongside container hosting for Node and Docker workloads. PHP 8.2, 8.3 and 8.4 are the documented versions, with older releases available only through a paid extended-support add-on.

The audience it addresses is agencies and freelancers handling client sites — TYPO3, WordPress, Shopware and Magento are named explicitly, and TYPO3's own installation documentation lists Mittwald as a technology partner with preinstalled packages.

## Reservations

Prices are quoted excluding VAT, which makes them read lower than German competitors that quote gross: webhosting from €13 a month, a vServer from €21, a dedicated server from €169, all net. Entry tariffs start at a level well above commodity hosting, and the single-country footprint means anyone who needs capacity outside Germany needs a second supplier.

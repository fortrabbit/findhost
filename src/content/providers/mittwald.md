---
id: mittwald
name: mittwald
urls:
  home: https://www.mittwald.de
  pricing: https://www.mittwald.de/webhosting
  status: https://www.mittwald-status.de/
  terms: https://www.mittwald.de/agb
  docs: https://developer.mittwald.de
category:
  - paas
  - caas
  - domains-dns
  - mail
description: German managed hosting platform with per-project containers, a control plane called mStudio, an official CLI and a public REST API.
founded: 2003
hqCountry: DE
ownership: independent
whoManagesOs: managed
useCases:
  - cms
  - headless-cms
  - e-commerce
  - api
  - campaign-site
  - ai-app
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
  - drupal
  - n8n
  - nextcloud
  - express
  - nextjs
runtimes:
  - php
  - node
  - docker
  - static
deployMethods:
  - file-transfer
  - git
  - control-panel
  - docker-image
sshAccess: jailed
pricingModel: fixed-tier
entryPrice: { amount: 13, currency: EUR, period: month }
priceFrom: sm
priceTo: 2xl
currencies:
  - EUR
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
exitWithin: a-month
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
mcpServer: official
referringSubnets: { now: 1302, before: 1294 }
status: active
staging: included
collaboration: clients
addedAt: 2026-07-31
checkedAt: 2026-08-12
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-09-07 }
  - { field: greenWebId, url: 'https://app.greenweb.org/directory/#1383', checkedAt: 2026-08-10 }
  - { field: software, url: 'https://www.mittwald.de/webhosting', checkedAt: 2026-08-09 }
  - { field: priceFrom, url: 'https://www.mittwald.de/webhosting', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://www.mittwald.de/dedicated-server', checkedAt: 2026-10-06 }
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
  - { field: staging, url: 'https://www.mittwald.de/webhosting', checkedAt: 2026-08-12 }
  - { field: collaboration, url: 'https://www.mittwald.de/webhosting', checkedAt: 2026-08-12 }
  - { field: iacSupport, url: 'https://developer.mittwald.de/docs/v2/guides/deployment/terraform/', checkedAt: 2026-10-06 }
  - { field: mcpServer, url: 'https://developer.mittwald.de/mcp/', checkedAt: 2026-10-06 }
  - { field: domainRegistration, url: 'https://www.mittwald.de/produkte/domains', checkedAt: 2026-10-06 }
  - { field: backupsIncluded, url: 'https://www.mittwald.de/webhosting', checkedAt: 2026-10-06 }
  - { field: gpuCapacity, url: 'https://www.mittwald.de/mstudio/ai-hosting', checkedAt: 2026-10-06 }
  - { field: deployMethods, url: 'https://developer.mittwald.de/docs/v2/guides/deployment/', checkedAt: 2026-10-06 }
  - { field: infraContract, url: 'https://www.mittwald.de/darum-mittwald/technologie', checkedAt: 2026-10-06 }
social:
  github: https://github.com/mittwald
  facebook: https://www.facebook.com/mittwald
  linkedin: https://de.linkedin.com/company/mittwald
figure:
  emoji: 🏗️
  color: rgb(45, 86, 190)
  textColor: rgb(234, 237, 246)
  text: Agency plumbing, documented.
ai: co-authored
greenWebId: 1383
iacSupport:
  - terraform
testDomain: included
domainRegistration: paid-addon
dnsHosting: included
emailHosting: included
backupsIncluded: included
gpuCapacity:
  - model-api
managedDatabases:
  - mysql
  - redis
infraContract:
  - owns-metal
---

mittwald is a family-owned hosting company in Espelkamp, North Rhine-Westphalia, trading since 2003 and running its own data center at its headquarters. Everything is hosted in Germany; there is no region to choose.

The product sits closer to a platform than to commodity shared hosting. Projects run in containers and are administered through mStudio, a control plane with a documented REST API, API tokens meant for CI, published client libraries and an official `mw` command-line tool. SSH is available, and the classic tariffs sit alongside container hosting for Node and Docker workloads. Current PHP releases are documented; older ones are reachable only through a paid extended-support add-on.

The audience it addresses is agencies and freelancers handling client sites — TYPO3, WordPress, Shopware and Magento are named explicitly, and TYPO3's own installation documentation lists mittwald as a technology partner with preinstalled packages.

## Worth knowing

Prices are quoted net of VAT throughout, so the figure on the tariff page is not the figure a private customer pays.

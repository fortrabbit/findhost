---
id: craft-cloud
name: Craft Cloud
urls:
  home: https://craftcms.com/cloud
  pricing: https://craftcms.com/cloud
  docs: https://craftcms.com/docs/cloud/
category: vanity-hosting
description: Craft Cloud is the serverless hosting platform built by Pixel & Tonic, the makers of Craft CMS, priced per project from $120 a month.
whoManagesOs: provider
useCases:
  - cms
specialisation:
  - craft-cms
software:
  - craft-cms
runtimes:
  - php
deployMethods:
  - git-integration
pricingModel: fixed-tier
entryPriceBand: 50-150
entryPrice: { amount: 120, currency: USD, period: month }
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://craftcms.com/cloud', checkedAt: 2026-08-01 }
  - { field: entryPriceBand, url: 'https://craftcms.com/cloud', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://craftcms.com/cloud', checkedAt: 2026-07-31 }
  - { field: deployMethods, url: 'https://craftcms.com/cloud', checkedAt: 2026-07-31 }
  - { field: specialisation, url: 'https://craftcms.com/docs/cloud/', checkedAt: 2026-07-31 }
figure:
  emoji: ⛅
  color: rgb(120, 120, 220)
  textColor: rgb(70, 70, 130)
  text: Cloudy with a chance of Craft.
ai: co-authored
---

## About Craft Cloud

Craft Cloud is made by Pixel & Tonic, the company behind Craft CMS, and described in its own documentation as "our very own serverless hosting platform… designed from the ground-up to be the best way to launch and scale your Craft project". It launched in 2024.

Deployment is push-to-deploy from GitHub, Bitbucket or GitLab, with a build pipeline that runs Composer and npm tasks, and a global CDN in front. Three plans are listed: Team at $120 a month per project and Pro at $240 a month per project, both quoted at the annual rate, with Enterprise by request.

## Reservations

The price is per project, and it starts high relative to the segment — a single Craft site on Craft Cloud costs more than several sites on a general-purpose platform. That buys first-party integration with the CMS, which is the whole proposition, but it makes the platform a poor fit for a portfolio of small sites.

Being the vendor's own platform is also a concentration of dependency: the CMS, the licence and the hosting arrive from one company on one invoice. Neither the marketing page nor the documentation index states which infrastructure it runs on or which regions are available.

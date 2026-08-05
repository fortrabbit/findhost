---
id: craft-cloud
name: Craft Cloud
urls:
  home: https://craftcms.com/cloud
  pricing: https://craftcms.com/cloud
  docs: https://craftcms.com/docs/cloud/
category: vanity-hosting
description: Serverless hosting for Craft CMS built by Pixel & Tonic, the company that makes the CMS, and sold per project rather than per account.
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
priceFrom: lg
priceTo: xl
currencies:
  - USD
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
exitWithin: a-month
entryPrice: { amount: 120, currency: USD, period: month }
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://craftcms.com/cloud', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://craftcms.com/cloud', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://craftcms.com/cloud', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://craftcms.com/cloud', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://craftcms.com/docs/cloud/billing', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://craftcms.com/docs/cloud/billing', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://craftcms.com/docs/cloud/billing', checkedAt: 2026-08-02 }
  - { field: pricingModel, url: 'https://craftcms.com/cloud', checkedAt: 2026-07-31 }
  - { field: deployMethods, url: 'https://craftcms.com/cloud', checkedAt: 2026-07-31 }
  - { field: specialisation, url: 'https://craftcms.com/docs/cloud/', checkedAt: 2026-07-31 }
figure:
  emoji: ⛅
  color: rgb(120, 120, 220)
  textColor: rgb(70, 70, 130)
  text: Cloudy with a chance of Craft.
---

Craft Cloud is made by Pixel & Tonic, the company behind Craft CMS, and is described in its own documentation as a serverless hosting platform built specifically for Craft projects. It launched in 2024, so the CMS, the licence and the hosting can all be bought from one company.

Deployment is push-to-deploy from GitHub, Bitbucket or GitLab, with a build pipeline that runs Composer and npm tasks and a CDN in front of the site. Pricing is per project rather than per account, across a small number of tiers with an enterprise arrangement above them. Neither the marketing page nor the documentation index states which infrastructure the platform runs on.

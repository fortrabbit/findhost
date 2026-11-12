---
id: out-plane
name: Out Plane
urls:
  home: https://outplane.com
  pricing: https://outplane.com/pricing
  terms: https://outplane.com/terms
  docs: https://docs.outplane.com
  linkedin: https://www.linkedin.com/company/outplane
category:
  - paas
  - dbaas
description: A platform for apps deployed from git or a container image, with managed PostgreSQL and cloud machines for AI coding agents.
hqCountry: US
ownership: vc-backed
whoManagesOs: managed
useCases:
  - web-app
  - api
  - ai-app
audience:
  - solo
  - startup
  - smb
  - enterprise
runtimes:
  - node
  - python
  - go
  - rust
  - java
  - ruby
  - php
  - dotnet
  - docker
deployMethods:
  - git
  - docker-image
pricingModel: plan-plus-overage
priceFrom: sm
priceTo: xl
currencies:
  - USD
billingPeriods:
  - monthly
exitWithin: a-month
entryPrice: { amount: 9, currency: USD, period: month }
freeTier: trial
regions:
  - DE
testDomain: included
collaboration: team
apiAvailable: public
addedAt: 2026-11-12
checkedAt: 2026-11-12
sources:
  - { field: hqCountry, url: 'https://outplane.com/terms', checkedAt: 2026-11-12 }
  - { field: urls, url: 'https://outplane.com/terms', checkedAt: 2026-11-12 }
  - { field: ownership, url: 'https://outplane.com/blog/out-plane-raises-from-maza-vc', checkedAt: 2026-11-12 }
  - { field: category, url: 'https://outplane.com/pricing', checkedAt: 2026-11-12 }
  - { field: runtimes, url: 'https://outplane.com/llms.txt', checkedAt: 2026-11-12 }
  - { field: deployMethods, url: 'https://outplane.com/llms.txt', checkedAt: 2026-11-12 }
  - { field: regions, url: 'https://outplane.com/llms.txt', checkedAt: 2026-11-12 }
  - { field: pricingModel, url: 'https://outplane.com/pricing', checkedAt: 2026-11-12 }
  - { field: priceFrom, url: 'https://outplane.com/pricing', checkedAt: 2026-11-12 }
  - { field: priceTo, url: 'https://outplane.com/pricing', checkedAt: 2026-11-12 }
  - { field: currencies, url: 'https://outplane.com/pricing', checkedAt: 2026-11-12 }
  - { field: billingPeriods, url: 'https://outplane.com/pricing', checkedAt: 2026-11-12 }
  - { field: entryPrice, url: 'https://outplane.com/pricing', checkedAt: 2026-11-12 }
  - { field: freeTier, url: 'https://outplane.com/pricing', checkedAt: 2026-11-12 }
  - { field: exitWithin, url: 'https://outplane.com/pricing', checkedAt: 2026-11-12 }
  - { field: collaboration, url: 'https://outplane.com/pricing', checkedAt: 2026-11-12 }
  - { field: testDomain, url: 'https://docs.outplane.com/docs/console/domains', checkedAt: 2026-11-12 }
  - { field: Istanbul, url: 'https://www.linkedin.com/company/outplane', checkedAt: 2026-11-12 }
  - { field: apiAvailable, url: 'https://docs.outplane.com/docs/api', checkedAt: 2026-11-12 }
figure:
  emoji: 🛩️
  color: rgb(28, 32, 64)
  textColor: rgb(236, 238, 248)
  text: A cloud for coding agents and what they ship.
ai: authored
---

Out Plane runs applications deployed from a git push or a container image, with managed PostgreSQL, S3 compatible buckets and persistent volumes beside them. Each plan has a monthly base price that includes an amount of usage. Compute is metered by the minute, usage above the included amount is added to the same invoice, and bandwidth is free.

Hangars are free cloud machines next to the apps, where a team's AI coding agents work and share a terminal and files. A CLI with an agent skill, an API and an agent inside the console deploy and operate the apps. The company is Out Plane LLC in Delaware, run from Istanbul according to its [LinkedIn page](https://www.linkedin.com/company/outplane). The [funding announcement](https://outplane.com/blog/out-plane-raises-from-maza-vc) names Maza Ventures as its backer.

## Worth knowing

Applications run in one region in Germany, with no multi-region deployment. Instances stay running and do not scale to zero, and the instance count is set by hand up to the plan's limit. PostgreSQL is the only managed database; Redis, MySQL and the rest run as ordinary container apps the customer operates.

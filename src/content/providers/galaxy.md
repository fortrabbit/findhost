---
id: galaxy
name: Galaxy
urls:
  home: https://www.meteor.com/cloud
  pricing: https://galaxycloud.app/meteorjs/pricing
  docs: https://docs.galaxycloud.app/
  terms: https://galaxycloud.app/legal/terms-of-service/
  status: https://status.galaxycloud.app/
category:
  - paas
description: Container hosting for Meteor.js, Node.js, Python and AdonisJS apps, billed by the container-hour, from Meteor Software.
whoManagesOs: managed
useCases:
  - web-app
runtimes:
  - node
  - python
deployMethods:
  - git
  - control-panel
pricingModel: hourly
priceFrom: sm
priceTo: xl
entryPrice: { amount: 6, currency: USD, period: month }
currencies:
  - USD
billingPeriods:
  - monthly
  - yearly
freeTier: permanent
paymentMethods:
  - card
  - paypal
apiAvailable: public
cliTool: official
dnsHosting: none
testDomain: included
collaboration: team
status: active
addedAt: 2026-09-18
checkedAt: 2026-09-18
sources:
  - { field: category, url: 'https://docs.galaxycloud.app/', checkedAt: 2026-09-18 }
  - { field: whoManagesOs, url: 'https://docs.galaxycloud.app/', checkedAt: 2026-09-18 }
  - { field: useCases, url: 'https://galaxycloud.app/webapps/pricing/', checkedAt: 2026-09-18 }
  - { field: runtimes, url: 'https://docs.galaxycloud.app/', checkedAt: 2026-09-18 }
  - { field: deployMethods, url: 'https://docs.galaxycloud.app/docs/getting-started/quickstart', checkedAt: 2026-09-18 }
  - { field: pricingModel, url: 'https://galaxycloud.app/meteorjs/pricing', checkedAt: 2026-09-18 }
  - { field: priceFrom, url: 'https://galaxycloud.app/webapps/pricing/', checkedAt: 2026-09-18 }
  - { field: priceTo, url: 'https://galaxycloud.app/webapps/pricing/', checkedAt: 2026-09-18 }
  - { field: entryPrice, url: 'https://galaxycloud.app/webapps/pricing/', checkedAt: 2026-09-18 }
  - { field: currencies, url: 'https://galaxycloud.app/webapps/pricing/', checkedAt: 2026-09-18 }
  - { field: billingPeriods, url: 'https://galaxycloud.app/webapps/pricing/', checkedAt: 2026-09-18 }
  - { field: freeTier, url: 'https://galaxycloud.app/webapps/pricing/', checkedAt: 2026-09-18 }
  - { field: paymentMethods, url: 'https://galaxycloud.app/webapps/pricing/', checkedAt: 2026-09-18 }
  - { field: apiAvailable, url: 'https://help.galaxycloud.app/en/article/api-for-meteor-apps-qswvrn/', checkedAt: 2026-09-18 }
  - { field: cliTool, url: 'https://docs.galaxycloud.app/docs/getting-started/quickstart', checkedAt: 2026-09-18 }
  - { field: dnsHosting, url: 'https://docs.galaxycloud.app/docs/apps/custom-domains', checkedAt: 2026-09-18 }
  - { field: testDomain, url: 'https://docs.galaxycloud.app/docs/apps/custom-domains', checkedAt: 2026-09-18 }
  - { field: collaboration, url: 'https://docs.galaxycloud.app/', checkedAt: 2026-09-18 }
  - { field: urls, url: 'https://galaxycloud.app/legal/terms-of-service/', checkedAt: 2026-09-18 }
figure:
  emoji: 🌌
  color: rgb(24, 18, 54)
  textColor: rgb(226, 220, 245)
  text: Container hosting for Meteor.js and friends, billed by the hour.
ai: authored
---

Galaxy is Meteor Software's hosting platform, reached from meteor.com under the Meteor Cloud name and run from its own galaxycloud.app domain. It began as hosting for Meteor.js applications and now also runs Node.js, Python and AdonisJS apps, deploying from a connected git repository or a CLI, with the platform handling the build and the container that runs it. MongoDB, PostgreSQL and Redis are offered as managed databases alongside the app containers.

Containers are billed by the hour for the memory size chosen, with no separate charge for seats, deploys or data transfer. A free tier runs a single small container on a Galaxy subdomain; custom domains, autoscaling and API access arrive on the paid tiers above it, each with a free SSL certificate provisioned automatically.

## Worth knowing

Meteor.js remains the platform's origin and its most developed integration — deployment guides, database migration tooling and monitoring through Monti APM all describe the Meteor path in the most detail, with the newer runtimes documented in parallel but with less material behind them.

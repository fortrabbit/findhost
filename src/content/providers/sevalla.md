---
id: sevalla
name: Sevalla
urls:
  home: https://sevalla.com
  pricing: https://sevalla.com/pricing/
  docs: https://docs.sevalla.com/
category:
  - paas
description: Sevalla is a polyglot cloud hosting platform covering application hosting, database hosting, static sites, and object storage.
ownership: subsidiary
parent: kinsta
whoManagesOs: self-managed
useCases:
  - static-site
  - api
runtimes:
  - docker
deployMethods:
  - git
  - docker-image
pricingModel: usage-based
priceFrom: sm
priceTo: lg
currencies:
  - USD
billingPeriods:
  - monthly
billingTiming: arrears
exitWithin: a-month
entryPrice: { amount: 5, currency: USD, period: month }
freeTier: permanent
regions:
  - US
  - CA
  - BR
  - CL
  - GB
  - BE
  - NL
  - DE
  - CH
  - FI
  - IN
  - SG
  - HK
  - TW
  - JP
  - KR
  - AU
referringSubnets: { now: 424, before: 417 }
status: active
hqCountry: US
testDomain: included
staging: included
apiAvailable: public
mcpServer: official
checkedAt: 2026-08-12
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-08-31 }
  - { field: testDomain, url: 'https://docs.sevalla.com/applications/domains/', checkedAt: 2026-08-12 }
  - { field: staging, url: 'https://sevalla.com/pricing/', checkedAt: 2026-08-12 }
  - { field: hqCountry, url: 'https://sevalla.com', checkedAt: 2026-08-09 }
  - { field: priceFrom, url: 'https://sevalla.com/pricing/', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://docs.sevalla.com/billing/', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://sevalla.com/pricing/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://docs.sevalla.com/billing/', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://docs.sevalla.com/billing/', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://docs.sevalla.com/billing/', checkedAt: 2026-08-02 }
  - { field: pricingModel, url: 'https://sevalla.com/pricing/', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://sevalla.com/pricing/', checkedAt: 2026-07-31 }
  - { field: entryPrice, url: 'https://sevalla.com/pricing/', checkedAt: 2026-08-01 }
  - { field: regions, url: 'https://docs.sevalla.com/service-information/data-center-locations', checkedAt: 2026-08-01 }
  - { field: parent, url: 'https://sevalla.com/pricing/', checkedAt: 2026-08-01 }
  - { field: apiAvailable, url: 'https://sevalla.com', checkedAt: 2026-08-09 }
  - { field: mcpServer, url: 'https://sevalla.com', checkedAt: 2026-08-09 }
figure:
  emoji: ⛈️
  color: rgb(45, 118, 190)
  textColor: rgb(234, 240, 246)
  text: General-purpose PaaS.
---

Sevalla is a polyglot cloud hosting platform covering application hosting, database hosting, static sites and object storage. It is the platform side of [Kinsta](/kinsta/), the managed WordPress company, whose application, database and static-site products run under the Sevalla brand. Deployments connect to GitHub, GitLab or Bitbucket and build from a Dockerfile or from buildpacks, with the provider running everything below the container.

Billing is described as "pay for what you run", with no per-seat charge and compute, databases, storage and bandwidth metered separately. Object storage sits on Cloudflare R2, static site hosting is permanently free within stated limits, and the application and database products come with a trial. Locations span the Americas, Europe and Asia-Pacific.

## Worth knowing

Usage-based billing makes the advertised entry figure a floor rather than a price: what an application costs depends on what it consumes, across meters that are quoted per component.

The pricing page counts data centres without naming the countries they are in; that list lives in the documentation, away from where a plan is chosen.

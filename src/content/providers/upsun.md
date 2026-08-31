---
id: upsun
name: Upsun
urls:
  home: https://upsun.com
  pricing: https://upsun.com/pricing/
  status: https://status.upsun.com/
  docs: https://developer.upsun.com/
category:
  - paas
description: Upsun is the PaaS formerly known as Platform.sh. Projects are described in YAML and billed per resource, on top of a per-project and per-user fee.
ownership: vc-backed
whoManagesOs: managed
useCases:
  - cms
  - e-commerce
audience:
  - enterprise
  - education
software:
  - laravel
  - symfony
  - drupal
  - wordpress
  - magento
  - shopware
  - django
  - express
  - nextjs
  - strapi
runtimes:
  - php
  - node
  - python
pricingModel: per-resource
priceFrom: md
priceTo: xl
currencies:
  - EUR
  - USD
  - GBP
  - CAD
  - AUD
billingPeriods:
  - hourly
  - monthly
billingTiming: arrears
freeTier: trial
regions:
  - IE
  - GB
  - FR
  - DE
  - SE
  - CH
  - CA
  - US
  - AU
social:
  github: https://github.com/upsun
  x: https://x.com/upsundotcom
  bluesky: https://bsky.app/profile/upsun.com
  linkedin: https://www.linkedin.com/company/upsundotcom
  youtube: https://www.youtube.com/@upsundotcom
referringSubnets: { now: 1109, before: 1142 }
status: active
staging: included
collaboration: team
apiAvailable: public
cliTool: official
checkedAt: 2026-08-12
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-08-31 }
  - { field: staging, url: 'https://upsun.com/pricing/', checkedAt: 2026-08-12 }
  - { field: collaboration, url: 'https://upsun.com/pricing/', checkedAt: 2026-08-12 }
  - { field: regions, url: 'https://developer.upsun.com/docs/development/regions', checkedAt: 2026-08-01 }
  - { field: urls, url: 'https://status.upsun.com/', checkedAt: 2026-08-01 }
  - { field: runtimes, url: 'https://developer.upsun.com/docs/get-started/stacks', checkedAt: 2026-07-31 }
  - { field: software, url: 'https://developer.upsun.com/docs/get-started/stacks', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://upsun.com/pricing/', checkedAt: 2026-07-31 }
  - { field: priceFrom, url: 'https://upsun.com/pricing/', checkedAt: 2026-07-31 }
  - { field: priceTo, url: 'https://upsun.com/pricing/', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://upsun.com/pricing/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://upsun.com/pricing/', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://upsun.com/pricing/', checkedAt: 2026-08-02 }
  - { field: freeTier, url: 'https://upsun.com/pricing/', checkedAt: 2026-07-31 }
  - { field: audience, url: 'https://upsun.com/pricing/', checkedAt: 2026-07-31 }
  - { field: apiAvailable, url: 'https://upsun.com', checkedAt: 2026-08-09 }
  - { field: cliTool, url: 'https://upsun.com', checkedAt: 2026-08-09 }
  - { field: ownership, url: 'https://upsun.com/blog/securing-series-d-financing/', checkedAt: 2026-08-21 }
figure:
  emoji: ☀️
  color: rgb(45, 120, 190)
  textColor: rgb(234, 240, 246)
  text: YAML in, environments out.
---

Upsun is the platform-as-a-service formerly known as Platform.sh, renamed in 2025. It is language-agnostic — PHP, JavaScript and Python are documented, with framework guides for Laravel, Symfony, Django, Express and Next.js, and tutorials for WordPress, Drupal, Magento and Shopware. A project is described in YAML files covering routes, services and application containers, and a branch can be built into a full environment from that description.

There are no named plans. Resources are provisioned per project and billed by the hour, metered per second, on top of a flat per-project fee and a per-user licence. A trial runs without a credit card. Upsun describes its customers as teams running regulated and production workloads in finance, SaaS and higher education.

## Worth knowing

The entry cost is not a single figure. The floor is the project fee plus at least one user licence before any resources are provisioned, and the bill on top depends on how the YAML is written.

The configuration model is a commitment. Routes, services and containers are described in Upsun-specific YAML, so moving an application on or off the platform means rewriting that layer rather than porting it.

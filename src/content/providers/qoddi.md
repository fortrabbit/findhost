---
id: qoddi
name: Qoddi
urls:
  home: https://qoddi.com
  pricing: https://qoddi.com/pricing/
category:
  - paas
description: Managed application platform deploying Node, Java, Go, Ruby, PHP, Python and Docker workloads with per-second billing and managed databases alongside.
whoManagesOs: self-managed
useCases:
  - web-app
  - api
  - cms
  - static-site
  - side-project
  - ai-app
audience:
  - solo
  - startup
  - smb
software:
  - django
  - laravel
runtimes:
  - node
  - java
  - go
  - ruby
  - php
  - python
  - docker
  - static
deployMethods:
  - git-integration
  - docker-image
managedDatabases:
  - postgres
  - mysql
  - mongodb
  - redis
pricingModel: per-resource
priceFrom: sm
priceTo: lg
currencies:
  - USD
billingPeriods:
  - hourly
  - monthly
billingTiming: arrears
entryPrice: { amount: 6, currency: USD, period: month }
freeTier: permanent
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://qoddi.com/pricing/', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://qoddi.com/pricing/', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://qoddi.com/pricing/', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://qoddi.com/pricing/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://qoddi.com/pricing/', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://qoddi.com/pricing/', checkedAt: 2026-08-02 }
  - { field: pricingModel, url: 'https://qoddi.com/pricing/', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://qoddi.com/pricing/', checkedAt: 2026-08-01 }
figure:
  emoji: 🧮
  color: rgb(77, 141, 157)
  textColor: rgb(234, 243, 245)
  text: Many runtimes, billed by the second.
ai: authored
gpuCapacity:
  - instances
---

Qoddi is a managed application platform that builds from a git repository or a container image and runs the result in containers it operates itself. The runtime list is broad for a platform this size — Node, Java, Go, Ruby, PHP and Python, with Django and Laravel called out by name, Docker for anything the buildpacks do not cover, and managed PostgreSQL, MySQL, MongoDB and Redis available beside the application.

Billing is per resource and metered by the second, from small application instances up to GPU tiers for machine-learning work. Bandwidth is not metered and team members are not charged for separately, which removes two of the meters that usually make a small platform's bill hard to predict, and a permanent free tier covers static sites.

## Worth knowing

Regions are not stated anywhere on the pricing page, so where an application would run is unknown before signing up, and no data-centre operator is named — "Tier 1 network" describes connectivity rather than who owns the hardware.

The company publishes no founding date, location or ownership, and a payment card is required to verify an account even on the free tier, with prepaid cards refused.

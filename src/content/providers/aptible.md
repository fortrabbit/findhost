---
id: aptible
name: Aptible
urls:
  home: https://www.aptible.com
  pricing: https://www.aptible.com/pricing
  docs: https://www.aptible.com/docs
  terms: https://www.aptible.com/legal/terms-of-service
  status: https://status.aptible.com/
category:
  - paas
  - dbaas
description: A platform for deploying apps and managed databases on AWS infrastructure with HIPAA and SOC 2 controls enforced by default.
founded: 2013
hqCountry: US
whoManagesOs: managed
useCases:
  - web-app
  - api
  - ai-app
audience:
  - startup
  - enterprise
runtimes:
  - ruby
  - node
  - python
  - php
deployMethods:
  - git
  - docker-image
sshAccess: jailed
managedDatabases:
  - mysql
  - postgres
  - redis
  - elasticsearch
  - influxdb
persistentStorage: true
pricingModel: plan-plus-overage
priceFrom: xl
entryPrice: { amount: 499, currency: USD, period: month }
currencies:
  - USD
billingPeriods:
  - monthly
freeTier: permanent
regions:
  - US
  - DE
  - IE
  - GB
  - FR
  - CA
  - IN
  - SG
  - AU
  - JP
  - BR
certifications:
  - soc-2
  - pci-dss
status: active
addedAt: 2026-09-18
checkedAt: 2026-09-18
figure:
  emoji: 🩺
  color: rgb(20, 60, 55)
  textColor: rgb(225, 245, 240)
  text: Compliance controls, applied before you ask.
ai: authored
sources:
  - { field: founded, url: 'https://www.aptible.com/about', checkedAt: 2026-09-18 }
  - { field: hqCountry, url: 'https://www.aptible.com/about', checkedAt: 2026-09-18 }
  - { field: whoManagesOs, url: 'https://www.aptible.com/docs/core-concepts/apps/connecting-to-apps/ssh-sessions', checkedAt: 2026-09-18 }
  - { field: useCases, url: 'https://www.aptible.com', checkedAt: 2026-09-18 }
  - { field: audience, url: 'https://www.aptible.com', checkedAt: 2026-09-18 }
  - { field: runtimes, url: 'https://www.aptible.com/docs', checkedAt: 2026-09-18 }
  - { field: deployMethods, url: 'https://www.aptible.com/docs/core-concepts/apps/deploying-apps', checkedAt: 2026-09-18 }
  - { field: sshAccess, url: 'https://www.aptible.com/docs/core-concepts/apps/connecting-to-apps/ssh-sessions', checkedAt: 2026-09-18 }
  - { field: managedDatabases, url: 'https://www.aptible.com/docs/core-concepts/managed-databases/overview', checkedAt: 2026-09-18 }
  - { field: persistentStorage, url: 'https://www.aptible.com/docs/core-concepts/apps/persistent-disks', checkedAt: 2026-09-18 }
  - { field: pricingModel, url: 'https://www.aptible.com/pricing', checkedAt: 2026-09-18 }
  - { field: priceFrom, url: 'https://www.aptible.com/pricing', checkedAt: 2026-09-18 }
  - { field: entryPrice, url: 'https://www.aptible.com/pricing', checkedAt: 2026-09-18 }
  - { field: currencies, url: 'https://www.aptible.com/pricing', checkedAt: 2026-09-18 }
  - { field: billingPeriods, url: 'https://www.aptible.com/pricing', checkedAt: 2026-09-18 }
  - { field: freeTier, url: 'https://www.aptible.com/pricing', checkedAt: 2026-09-18 }
  - { field: regions, url: 'https://www.aptible.com/docs/core-concepts/architecture/stacks', checkedAt: 2026-09-18 }
  - { field: certifications, url: 'https://www.aptible.com/pricing', checkedAt: 2026-09-18 }
---

Aptible runs applications and managed databases on AWS, sold as isolated, audit-ready environments for teams in regulated industries. Code is deployed by `git push`, which Aptible builds into a Docker image, or by pushing a Docker image directly; either way the platform provisions the containers and the surrounding network. Eight managed database engines are available as a separate resource type alongside the app containers, including PostgreSQL, MySQL, Redis, Elasticsearch and InfluxDB, each run by Aptible's own operations team. A newer LLM Gateway product routes calls to third-party model providers through the same account, with spend limits and logging.

Aptible's [documentation](https://www.aptible.com/docs) describes SSH access as an ephemeral, separately provisioned container rather than a shell into a running app container, and access to the underlying operating system is not offered — the platform manages it. A Persistent Disk can be attached to an app container to keep files across deploys and restarts, though Aptible does not snapshot them itself.

## Worth knowing

The [pricing page](https://www.aptible.com/pricing) separates a development plan, with no base fee, from a production plan with a monthly base fee that adds a dedicated stack, horizontal autoscaling and the compliance controls — HIPAA, SOC 2 and, on the enterprise plan, HITRUST and PCI. Both plans meter containers, databases, endpoints and storage on top of the base fee, so the standing cost of an app depends on how it's sized rather than the plan price alone.

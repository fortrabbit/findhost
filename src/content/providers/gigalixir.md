---
id: gigalixir
name: Gigalixir
urls:
  home: https://www.gigalixir.com
  pricing: https://www.gigalixir.com/pricing/
category:
  - paas
description: Gigalixir is a platform-as-a-service built around Elixir and Phoenix, keeping hot upgrades, remote observer and distributed clustering intact.
whoManagesOs: self-managed
specialisation:
  - elixir
useCases:
  - web-app
  - api
  - background-jobs
  - side-project
audience:
  - solo
  - startup
  - smb
runtimes:
  - elixir
  - ruby
  - python
  - node
  - go
  - java
  - rust
  - php
deployMethods:
  - git
sshAccess: root
managedDatabases:
  - postgres
pricingModel: per-resource
priceFrom: sm
priceTo: lg
currencies:
  - USD
billingPeriods:
  - monthly
freeTier: permanent
regions:
  - US
cliTool: official
referringSubnets: null
status: active
hqCountry: US
ownership: independent
checkedAt: 2026-08-12
sources:
  - { field: testDomain, url: 'https://docs.gigalixir.com/app', checkedAt: 2026-08-12 }
  - { field: collaboration, url: 'https://docs.gigalixir.com/teams', checkedAt: 2026-08-12 }
  - { field: hqCountry, url: 'https://www.gigalixir.com/contact', checkedAt: 2026-08-09 }
  - { field: priceFrom, url: 'https://www.gigalixir.com/pricing/', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://www.gigalixir.com/pricing/', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://www.gigalixir.com/pricing/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://www.gigalixir.com/pricing/', checkedAt: 2026-08-02 }
  - { field: freeTier, url: 'https://www.gigalixir.com/pricing/', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://www.gigalixir.com/pricing/', checkedAt: 2026-08-01 }
  - { field: regions, url: 'https://www.gigalixir.com/pricing/', checkedAt: 2026-08-01 }
  - { field: cliTool, url: 'https://docs.gigalixir.com/', checkedAt: 2026-08-09 }
  - { field: ownership, url: 'https://www.gigalixir.com/blog/new-owners-gigalixir/', checkedAt: 2026-08-21 }
figure:
  emoji: 💧
  color: rgb(124, 69, 166)
  textColor: rgb(241, 234, 246)
  text: The one that lets the BEAM be the BEAM.
testDomain: included
collaboration: team
ai: authored
---

Gigalixir is a platform-as-a-service built around the BEAM. Hot upgrades, remote observer, distributed clustering and remote consoles all work here, which the usual container model tends to preclude. Other runtimes deploy as well — Ruby, Python, Node, Go, Java, Rust, PHP and Clojure among them — but the product is shaped around Elixir and Phoenix.

The free tier is permanent rather than a trial: a single small replica with a PostgreSQL database capped by row count rather than by size, custom domains and SSL, and applications that sleep only after a long idle period. Paid usage scales memory and replicas independently, prorated to the second, with SSH and a remote console included. Capacity sits on AWS and Google Cloud rather than on hardware the company owns.

## Worth knowing

High availability doubles the database cost, and a dedicated ingress — the route to a static IP address — is a large step up from the standard rate. Isolated clusters and priority support are enterprise arrangements, quoted rather than published.

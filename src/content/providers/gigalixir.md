---
id: gigalixir
name: Gigalixir
urls:
  home: https://www.gigalixir.com
  pricing: https://www.gigalixir.com/pricing/
category:
  - paas
description: Gigalixir is a platform-as-a-service built around Elixir and Phoenix, keeping hot upgrades, remote observer and distributed clustering intact.
whoManagesOs: you
specialisation:
  - elixir
useCases:
  - saas
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
  - git-push
  - cli
  - git-integration
sshAccess: full
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
status: active
checkedAt: 2026-08-01
sources:
  - { field: priceFrom, url: 'https://www.gigalixir.com/pricing/', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://www.gigalixir.com/pricing/', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://www.gigalixir.com/pricing/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://www.gigalixir.com/pricing/', checkedAt: 2026-08-02 }
  - { field: freeTier, url: 'https://www.gigalixir.com/pricing/', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://www.gigalixir.com/pricing/', checkedAt: 2026-08-01 }
  - { field: regions, url: 'https://www.gigalixir.com/pricing/', checkedAt: 2026-08-01 }
figure:
  emoji: 💧
  color: rgb(45, 25, 60)
  textColor: rgb(225, 190, 250)
  text: The one that lets the BEAM be the BEAM.
ai: authored
---

Gigalixir is a platform-as-a-service built around the BEAM. Hot upgrades, remote observer, distributed clustering and remote consoles all work here, which the usual container model tends to preclude. Other runtimes deploy as well — Ruby, Python, Node, Go, Java, Rust, PHP and Clojure among them — but the product is shaped around Elixir and Phoenix.

The free tier is permanent rather than a trial: a single small replica with a PostgreSQL database capped by row count rather than by size, custom domains and SSL, and applications that sleep only after a long idle period. Paid usage scales memory and replicas independently, prorated to the second, with SSH and a remote console included. Capacity sits on AWS and Google Cloud rather than on hardware the company owns.

## Worth knowing

High availability doubles the database cost, and a dedicated ingress — the route to a static IP address — is a large step up from the standard rate. Isolated clusters and priority support are enterprise arrangements, quoted rather than published.

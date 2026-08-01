---
id: zerops
name: Zerops
urls:
  home: https://zerops.io
  pricing: https://zerops.io/pricing
  status: https://status.zerops.io
  terms: https://zerops.io/terms
  docs: https://docs.zerops.io/
category: paas
description: Czech developer platform with thirteen native runtimes, billed only for CPU, memory and disk consumed, with no subscription tiers and no per-seat charge.
founded: 2018
hqCountry: CZ
ownership: vc-backed
whoManagesOs: container
useCases:
  - saas
  - api
  - background-jobs
  - data-pipeline
  - side-project
  - ai-app
audience:
  - indie-hacker
  - freelancer
  - startup
  - smb
software:
  - laravel
  - django
  - nextjs
  - express
runtimes:
  - node
  - php
  - python
  - go
  - dotnet
  - rust
  - java
  - elixir
  - ruby
  - static
  - docker
deployMethods:
  - git-integration
  - cli
  - docker-image
  - api
sshAccess: full
managedDatabases:
  - postgres
  - mariadb
  - valkey
  - elasticsearch
  - clickhouse
  - kafka
pricingModel: per-resource
freeTier: trial
regions:
  - CZ
infraContract:
  - resells-iaas
apiAvailable: public
cliTool: official
social:
  github: https://github.com/zeropsio
  x: https://x.com/zeropsio
  linkedin: https://www.linkedin.com/company/zerops/
  discord: https://discord.gg/zeropsio
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://docs.zerops.io/company/about', checkedAt: 2026-08-01 }
  - { field: founded, url: 'https://docs.zerops.io/company/about', checkedAt: 2026-08-01 }
  - { field: hqCountry, url: 'https://docs.zerops.io/company/about', checkedAt: 2026-08-01 }
  - { field: ownership, url: 'https://docs.zerops.io/company/about', checkedAt: 2026-08-01 }
  - { field: infraContract, url: 'https://docs.zerops.io/company/about', checkedAt: 2026-08-01 }
  - { field: social, url: 'https://zerops.io', checkedAt: 2026-08-01 }
  - { field: urls, url: 'https://zerops.io/terms', checkedAt: 2026-08-01 }
figure:
  emoji: 🧊
  color: rgb(20, 35, 50)
  textColor: rgb(175, 215, 240)
  text: Thirteen runtimes, no seat fee.
ai: authored
---

## About Zerops

Zerops is operated by Zerops s.r.o. and is unusual on two counts. The first is the breadth of native runtimes for a platform this size — thirteen of them, including Deno, Bun, Elixir and Gleam alongside the expected Node, PHP, Python, Go, .NET, Rust, Java and Ruby, plus Nginx for static sites and Docker for anything else.

The second is the pricing structure, or the absence of one. There are no subscription tiers, no feature gates and no per-seat charge; the bill is the CPU, memory and disk actually consumed, which the company claims runs three to five times below comparable platforms. Managed services are equally broad: PostgreSQL, MariaDB, Valkey, KeyDB, Elasticsearch, Typesense, Meilisearch, Qdrant, NATS, Kafka and ClickHouse, with S3-compatible object storage, shared persistent disks, L7 load balancers, firewalls, autoscaling, high-availability configurations and VPN and SSH access.

New accounts are given credit to start with rather than a permanently free tier.

## Reservations

Neither the documentation nor the pricing page names a region or a data-centre country, which is a real gap for a European platform whose jurisdiction would otherwise be part of the appeal. Consumption-only billing removes the tier ladder but makes the monthly cost something to model rather than read, and no founding date or ownership is published.

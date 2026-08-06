---
id: clever-cloud
name: Clever Cloud
urls:
  home: https://clever.cloud
  pricing: https://clever.cloud/pricing/
  status: https://clevercloudstatus.com/
category:
  - paas
description: French platform-as-a-service that detects, builds and runs an application from a git push, with managed databases and storage sold as add-ons.
hqCountry: FR
whoManagesOs: self-managed
infraContract:
  - owns-metal
  - resells-iaas
useCases:
  - cms
  - api
  - web-app
  - dashboard
  - static-site
  - background-jobs
  - ai-app
audience:
  - solo
  - agency
  - startup
  - smb
  - enterprise
  - government
runtimes:
  - php
  - node
  - python
  - ruby
  - go
  - java
  - dotnet
  - elixir
  - rust
  - static
  - docker
deployMethods:
  - git-push
  - docker-image
  - control-panel
sshAccess: root
managedDatabases:
  - postgres
  - mysql
  - mongodb
  - redis
pricingModel: per-resource
priceFrom: sm
priceTo: xl
currencies:
  - EUR
billingPeriods:
  - monthly
billingTiming: arrears
freeTier: trial
regions:
  - FR
  - GB
  - PL
  - SG
  - AU
  - CA
  - AE
apiAvailable: public
cliTool: official
iacSupport:
  - terraform
social:
  github: https://github.com/CleverCloud
sources:
  - { field: priceFrom, url: 'https://clever.cloud/pricing/', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://clever.cloud/pricing/', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://clever.cloud/pricing/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://www.clever.cloud/developers/doc/billing/payments-invoicing/', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://www.clever.cloud/developers/doc/billing/payments-invoicing/', checkedAt: 2026-08-02 }
figure:
  emoji: 🐇
  color: rgb(190, 53, 45)
  textColor: rgb(246, 234, 234)
  text: One git push, many runtimes.
ai: authored
---

Clever Cloud is a platform-as-a-service run from Nantes. An application is deployed by pushing to a git remote; the platform detects the stack, builds it and runs it. Runtimes cover Node, Python, Java, PHP, Ruby, Go, Rust, Scala, Elixir, Haskell and .NET, with Docker for anything outside that set, alongside managed PostgreSQL, MySQL, MongoDB, Redis and object storage sold separately as add-ons.

The Paris zone runs on the company's own infrastructure; the other zones run on capacity rented from other European providers, which the platform's public zones endpoint discloses rather than obscures. It holds ISO/IEC 27001 and the French HDS health-data certification, and offers a SecNumCloud route through a partner.

## Worth knowing

The pricing page is a JavaScript estimator rather than a rate card. Per-hour rates are readable from the public billing API but not from the page a prospective customer is sent to, so plans cannot be compared there directly.

Billing runs per second against prepaid credit rather than as a monthly subscription, which means a recurring cost has to be modelled rather than read off a tier.

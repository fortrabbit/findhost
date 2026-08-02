---
id: clever-cloud
name: Clever Cloud
urls:
  home: https://clever.cloud
  pricing: https://clever.cloud/pricing/
  status: https://clevercloudstatus.com/
category: paas
description: French platform-as-a-service that detects, builds and runs an application from a git push, with managed databases and storage sold as add-ons.
hqCountry: FR
whoManagesOs: container
infraContract:
  - owns-metal
  - resells-iaas
useCases:
  - cms
  - api
  - saas
  - dashboard
  - static-site
  - background-jobs
  - ai-app
audience:
  - freelancer
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
  - cli
  - api
  - control-panel
sshAccess: limited
managedDatabases:
  - postgres
  - mysql
  - mongodb
  - redis
pricingModel: per-resource
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
figure:
  emoji: 🐇
  color: rgb(230, 60, 50)
  textColor: rgb(255, 235, 230)
  text: One git push, many runtimes.
ai: authored
---

## About Clever Cloud

Clever Cloud is a platform-as-a-service run from Nantes. An application is deployed by pushing to a git remote; the platform detects the stack, builds it and runs it. Runtimes cover Node, Python, Java, PHP, Ruby, Go, Rust, Scala, Elixir, Haskell and .NET, with Docker for anything outside that set, alongside managed PostgreSQL, MySQL, MongoDB, Redis and object storage sold separately as add-ons.

The Paris zone runs on the company's own infrastructure; the other zones run on capacity rented from other European providers, which the platform's public zones endpoint discloses rather than obscures. It holds ISO/IEC 27001 and the French HDS health-data certification, and offers a SecNumCloud route through a partner.

## Worth knowing

The pricing page is a JavaScript estimator rather than a rate card. Per-hour rates are readable from the public billing API but not from the page a prospective customer is sent to, so plans cannot be compared there directly.

Billing runs per second against prepaid credit rather than as a monthly subscription, which means a recurring cost has to be modelled rather than read off a tier.

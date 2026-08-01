---
id: clever-cloud
name: Clever Cloud
urls:
  home: https://clever.cloud
  pricing: https://clever.cloud/pricing/
  status: https://clevercloudstatus.com/
category: paas
description: French platform-as-a-service that builds and runs applications from a git push across a dozen runtimes, with managed databases sold as add-ons.
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
  text: Twelve runtimes, one git push.
ai: authored
---

## About Clever Cloud

Clever Cloud is a platform-as-a-service run from Nantes. An application is deployed by pushing to a git remote; the platform detects the stack, builds it and runs it. Runtimes cover Node, Python, Java, PHP, Ruby, Go, Rust, Scala, Elixir, Haskell and .NET, with Docker for anything outside that set, alongside managed PostgreSQL, MySQL, MongoDB, Redis and object storage sold separately as add-ons.

The Paris zone runs on the company's own infrastructure; the other zones — the United Kingdom, Poland, Singapore, Sydney, Montreal and the United Arab Emirates — run on capacity rented from other European providers, which the platform's public zones endpoint discloses. It holds ISO/IEC 27001:2022 and the French HDS health-data certification, and offers a SecNumCloud route through a partner.

It is one of the very few European platforms carrying a deployment guide inside both the Astro and the Nuxt official documentation, and there is a GitHub Action for it maintained outside the company.

## Reservations

The pricing page publishes no numbers. It is a JavaScript estimator, and the per-hour rates are only readable from the public billing API — so the page a buyer is sent to cannot be used to compare prices. Billing is per second against prepaid credit rather than a monthly plan, which means the recurring cost has to be modelled rather than read.

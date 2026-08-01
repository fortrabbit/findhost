---
id: back4app
name: Back4App
urls:
  home: https://www.back4app.com
  pricing: https://www.back4app.com/pricing/backend-as-a-service
category: serverless
description: Managed Parse Server backend with an auto-generated REST and GraphQL API, plus a container platform that builds and runs Docker images from GitHub.
whoManagesOs: container
infraContract:
  - resells-iaas
useCases:
  - api
  - saas
  - ai-app
  - side-project
  - learning
audience:
  - indie-hacker
  - startup
  - education
runtimes:
  - node
  - docker
deployMethods:
  - git-integration
  - docker-image
  - cli
  - api
pricingModel: fixed-tier
entryPriceBand: free-tier
freeTier: permanent
apiAvailable: public
cliTool: official
social:
  github: https://github.com/back4app
figure:
  emoji: 🅿️
  color: rgb(30, 40, 60)
  textColor: rgb(180, 205, 245)
  text: Parse, kept alive commercially.
ai: authored
---

## About Back4App

Back4App runs two distinct products under one account. The first is a managed Parse Server: database, authentication, push notifications, Cloud Code and an automatically generated REST and GraphQL API over whatever schema you define. The second, Back4App Containers, connects to a GitHub repository, builds a Dockerfile and runs the resulting image with automatic scaling.

Its significance is largely custodial. Parse was open-sourced when Facebook shut the hosted service down, and Back4App is the commercial platform that kept the ecosystem purchasable. Independent parties — including security vendors publishing end-to-end-encryption samples and Flutter developers publishing BLoC chat applications — build integrations against it.

The company states it runs on AWS, GCP, Azure and Alicloud rather than owning infrastructure, and publishes no list of data-centre countries.

## Reservations

Pricing is per application rather than per account, so a portfolio of small apps multiplies rather than shares a plan. The permanent free tier is genuinely usable at 25,000 requests a month and 250 MB of database, but the first paid step is a per-app charge and the top self-serve tier is several hundred dollars a month. There is no provider-wide status page — the "App Status" feature is a per-app dashboard inside the product, not an incident history.

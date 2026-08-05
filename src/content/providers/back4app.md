---
id: back4app
name: Back4App
urls:
  home: https://www.back4app.com
  pricing: https://www.back4app.com/pricing/backend-as-a-service
category:
  - serverless
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
priceFrom: md
priceTo: xl
currencies:
  - USD
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
exitWithin: a-month
freeTier: permanent
apiAvailable: public
cliTool: official
sources:
  - { field: priceFrom, url: 'https://www.back4app.com/pricing/backend-as-a-service', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://www.back4app.com/pricing/backend-as-a-service', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://www.back4app.com/pricing/backend-as-a-service', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://www.back4app.com/pricing/backend-as-a-service', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://www.back4app.com/pricing/backend-as-a-service', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://www.back4app.com/pricing/backend-as-a-service', checkedAt: 2026-08-02 }
social:
  github: https://github.com/back4app
figure:
  emoji: 🅿️
  color: rgb(30, 40, 60)
  textColor: rgb(180, 205, 245)
  text: Parse, kept alive commercially.
ai: authored
---

Back4App runs two distinct products under one account. The first is a managed Parse Server: database, authentication, push notifications, Cloud Code and an automatically generated REST and GraphQL API over whatever schema you define. The second, Back4App Containers, connects to a GitHub repository, builds a Dockerfile and runs the resulting image with automatic scaling.

Its position is largely custodial. Parse was open-sourced when Facebook shut the hosted service down, and Back4App is the commercial platform that kept the ecosystem purchasable, maintaining the server and the client SDKs around it.

The company states that it runs on AWS, Google Cloud, Azure and Alicloud rather than owning infrastructure, and publishes no list of data-centre countries.

## Worth knowing

Pricing is per application rather than per account, so a portfolio of small apps multiplies the bill rather than sharing one plan. A permanent free tier sits below the paid steps, which are also charged per app.

There is no provider-wide status page. The App Status feature is a per-application dashboard inside the product, not an incident history for the platform.

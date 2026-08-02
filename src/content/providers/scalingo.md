---
id: scalingo
name: Scalingo
urls:
  home: https://scalingo.com
  pricing: https://scalingo.com/pricing
  status: https://scalingostatus.com/
category: paas
description: French platform-as-a-service with git-push deploys, buildpacks, managed databases and review apps, running only in French regions.
hqCountry: FR
whoManagesOs: container
infraContract:
  - resells-iaas
useCases:
  - saas
  - api
  - cms
  - dashboard
  - background-jobs
  - e-commerce
audience:
  - startup
  - smb
  - agency
  - enterprise
  - government
  - education
software:
  - rails
  - django
  - laravel
  - symfony
  - express
  - nextjs
  - wordpress
runtimes:
  - php
  - node
  - python
  - ruby
  - go
  - java
  - docker
deployMethods:
  - git-push
  - git-integration
  - cli
  - api
  - docker-image
sshAccess: limited
managedDatabases:
  - postgres
  - mysql
  - mongodb
  - redis
  - elasticsearch
pricingModel: per-resource
priceFrom: sm
freeTier: trial
regions:
  - FR
apiAvailable: public
cliTool: official
iacSupport:
  - terraform
social:
  github: https://github.com/Scalingo
status: active
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://doc.scalingo.com/platform/internals/regions', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://scalingo.com/pricing', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://scalingo.com/pricing', checkedAt: 2026-08-01 }
  - { field: infraContract, url: 'https://doc.scalingo.com/platform/internals/regions', checkedAt: 2026-08-01 }
figure:
  emoji: 🥖
  color: rgb(40, 60, 130)
  textColor: rgb(200, 220, 255)
  text: Git push, and it stays in France.
ai: authored
---

## About Scalingo

Scalingo is a platform-as-a-service from Strasbourg built around buildpacks: push to git, the platform detects the stack, and the result runs in containers sized per application. A wide span of languages and frameworks is documented and tracked against current releases, with review apps for branches, managed PostgreSQL, MySQL, MongoDB, Redis and Elasticsearch beside them, and a CLI, public API and Terraform provider for driving the account.

Its distinguishing claim is jurisdiction. Capacity is rented from a French infrastructure operator rather than a hyperscaler, and one of the regions is SecNumCloud-qualified and enabled on request. The company is ISO 27001 certified and sells database plans for regulated health data. French public bodies publish their own tooling for the platform, including a buildpack maintained by a government ministry.

## Worth knowing

Everything runs in one country, which is the selling point and also the constraint: there is no second jurisdiction to move to and no non-French region to place a latency-sensitive workload in.

Prices are quoted excluding VAT and estimated on a thirty-day basis rather than billed as a flat month, the qualified region costs more per line than the standard one, and database plans divide into single-node and clustered variants with different availability targets — a distinction easy to miss when reading the entry price.

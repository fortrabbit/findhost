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
entryPriceBand: 5-15
freeTier: trial
regions:
  - FR
apiAvailable: public
cliTool: official
iacSupport:
  - terraform
social:
  github: https://github.com/Scalingo
figure:
  emoji: 🥖
  color: rgb(40, 60, 130)
  textColor: rgb(200, 220, 255)
  text: Heroku, and it stays in France.
ai: authored
---

## About Scalingo

Scalingo is a Strasbourg platform-as-a-service built on the Heroku model: push to git, a buildpack detects the stack, and the result runs in containers sized by the plan. More than forty runtimes and frameworks are documented, with review apps, managed PostgreSQL, MySQL, MongoDB, Redis and Elasticsearch, and a runtime changelog that tracks current releases closely.

Its distinguishing claim is jurisdiction. Everything runs in two Paris regions on 3DS Outscale rather than on a hyperscaler, and the second region, `osc-secnum-fr1`, is SecNumCloud-qualified and enabled on request through support. The company is ISO 27001 certified and sells HDS database plans for health data. French public bodies have published their own tooling for the platform — the ministry of ecological transition maintains a Keycloak buildpack for it, and there is a community Steampipe plugin.

## Reservations

There is one country and no way out of it, which is the point and also the constraint. Prices are quoted excluding VAT and estimated on a thirty-day basis rather than billed as a fixed month, and the SecNumCloud region carries a premium of roughly a fifth on every line. Database plans split into single-node Starter with a 98% availability target and clustered Business at 99.96% — a distinction easy to miss when reading the entry price.

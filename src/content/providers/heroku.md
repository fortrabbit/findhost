---
id: heroku
name: Heroku
urls:
  home: https://www.heroku.com
  pricing: https://www.heroku.com/pricing
  status: https://status.heroku.com
category:
  - paas
description: Heroku is a polyglot PaaS — the original "git push to deploy" platform, now a business unit of Salesforce.
founded: 2007
hqCountry: US
ownership: subsidiary
parent: salesforce
whoManagesOs: managed
useCases:
  - ai-app
  - e-commerce
  - side-project
audience:
  - startup
  - smb
  - enterprise
  - agency
social:
  x: https://x.com/heroku
  bluesky: https://bsky.app/profile/heroku.com
  linkedin: https://www.linkedin.com/company/heroku
  github: https://github.com/heroku
runtimes:
  - node
  - ruby
  - python
  - java
  - php
  - go
  - scala
  - clojure
  - dotnet
deployMethods:
  - git
managedDatabases:
  - postgres
  - redis
  - kafka
pricingModel: fixed-tier
priceFrom: sm
priceTo: xl
currencies:
  - USD
billingPeriods:
  - monthly
billingTiming: arrears
exitWithin: a-month
entryPrice: { amount: 5, currency: USD, period: month }
freeTier: none
regions:
  - US
  - IE
  - DE
  - GB
  - CA
  - IN
  - SG
  - AU
  - JP
cliTool: official
status: active
staging: included
testDomain: included
collaboration: team
checkedAt: 2026-08-12
sources:
  - { field: entryPrice, url: 'https://www.heroku.com/pricing', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://www.heroku.com/pricing', checkedAt: 2026-08-01 }
  - { field: founded, url: 'https://www.heroku.com/about/', checkedAt: 2026-07-31 }
  - { field: ownership, url: 'https://www.heroku.com/about/', checkedAt: 2026-07-31 }
  - { field: parent, url: 'https://www.heroku.com/about/', checkedAt: 2026-07-31 }
  - { field: hqCountry, url: 'https://www.heroku.com/about/', checkedAt: 2026-07-31 }
  - { field: runtimes, url: 'https://devcenter.heroku.com/categories/language-support', checkedAt: 2026-07-31 }
  - { field: priceFrom, url: 'https://www.heroku.com/pricing', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://www.heroku.com/pricing', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://devcenter.heroku.com/articles/usage-and-billing', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://devcenter.heroku.com/articles/usage-and-billing', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://devcenter.heroku.com/articles/usage-and-billing', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://devcenter.heroku.com/articles/usage-and-billing', checkedAt: 2026-08-02 }
  - { field: pricingModel, url: 'https://devcenter.heroku.com/articles/dyno-types', checkedAt: 2026-07-31 }
  - { field: regions, url: 'https://devcenter.heroku.com/articles/regions', checkedAt: 2026-07-31 }
  - { field: deployMethods, url: 'https://devcenter.heroku.com/articles/getting-started-with-php', checkedAt: 2026-07-31 }
  - { field: cliTool, url: 'https://devcenter.heroku.com/articles/getting-started-with-php', checkedAt: 2026-07-31 }
  - { field: managedDatabases, url: 'https://elements.heroku.com/addons/heroku-postgresql', checkedAt: 2026-07-31 }
  - { field: useCases, url: 'https://www.heroku.com/', checkedAt: 2026-07-31 }
  - { field: audience, url: 'https://www.heroku.com/', checkedAt: 2026-07-31 }
  - { field: staging, url: 'https://devcenter.heroku.com/articles/pipelines', checkedAt: 2026-08-12 }
  - { field: testDomain, url: 'https://devcenter.heroku.com/articles/pipelines', checkedAt: 2026-08-12 }
  - { field: collaboration, url: 'https://heroku.com/teams', checkedAt: 2026-08-12 }
figure:
  emoji: 🎸
  color: rgb(117, 45, 190)
  textColor: rgb(240, 234, 246)
  text: The original git push to deploy.
---

Heroku was founded by James Lindenbaum, Adam Wiggins and Orion Henry and built for hosting Ruby on Rails applications. It popularised `git push` as a deployment interface, and one of its co-founders wrote the twelve-factor app methodology. Salesforce acquired the company in 2010, and Heroku describes itself on its own site as a business unit of Salesforce.

Officially supported languages are Node.js, Ruby, Python, Java, PHP, Go, Scala, Clojure and .NET. Applications deploy over a git remote or the Heroku CLI, and first-party data services cover Postgres, a Redis-compatible key-value store and Apache Kafka. The shared Common Runtime offers a US and an EU region; Private Spaces add named regions across North America, Europe, Asia and Australia on isolated infrastructure.

## Worth knowing

There is no free tier. The cheapest plan is a flat monthly subscription covering a pool of dyno hours shared across the account, on which a web dyno sleeps after a spell without traffic and takes a moment to wake, and it is restricted to personal applications — anything inside a Heroku Team starts a step higher. The ladder climbs steeply from there, and Private Spaces are priced per dyno on top of the space itself.

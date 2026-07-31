---
id: heroku
name: Heroku
url: https://www.heroku.com
category: paas
pricingUrl: https://www.heroku.com/pricing
statusUrl: https://status.heroku.com
description: Heroku is a polyglot PaaS — the original "git push to deploy" platform, now a business unit of Salesforce.
founded: 2007
hqCountry: US
ownership: subsidiary
parent: Salesforce
whoManagesOs: provider
useCases:
  - ai-app
  - e-commerce
  - side-project
audience:
  - developer
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
  - git-push
  - cli
managedDatabases:
  - postgres
  - redis
  - kafka
pricingModel: fixed-tier
entryPriceBand: 5-15
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
checkedAt: 2026-07-31
sources:
  - { field: founded, url: 'https://www.heroku.com/about/', checkedAt: 2026-07-31 }
  - { field: ownership, url: 'https://www.heroku.com/about/', checkedAt: 2026-07-31 }
  - { field: parent, url: 'https://www.heroku.com/about/', checkedAt: 2026-07-31 }
  - { field: hqCountry, url: 'https://www.heroku.com/about/', checkedAt: 2026-07-31 }
  - { field: runtimes, url: 'https://devcenter.heroku.com/categories/language-support', checkedAt: 2026-07-31 }
  - { field: entryPriceBand, url: 'https://devcenter.heroku.com/articles/dyno-types', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://devcenter.heroku.com/articles/dyno-types', checkedAt: 2026-07-31 }
  - { field: regions, url: 'https://devcenter.heroku.com/articles/regions', checkedAt: 2026-07-31 }
  - { field: deployMethods, url: 'https://devcenter.heroku.com/articles/getting-started-with-php', checkedAt: 2026-07-31 }
  - { field: cliTool, url: 'https://devcenter.heroku.com/articles/getting-started-with-php', checkedAt: 2026-07-31 }
  - { field: managedDatabases, url: 'https://elements.heroku.com/addons/heroku-postgresql', checkedAt: 2026-07-31 }
  - { field: useCases, url: 'https://www.heroku.com/', checkedAt: 2026-07-31 }
  - { field: audience, url: 'https://www.heroku.com/', checkedAt: 2026-07-31 }
  - { field: social, url: 'https://www.heroku.com/', checkedAt: 2026-07-31 }
figure:
  emoji: 🎸
  color: rgb(121, 40, 202)
  textColor: rgb(180, 120, 255)
  text: Old rock stars.
ai: co-authored
---

## About Heroku

Heroku was founded in July 2007 by James Lindenbaum, Adam Wiggins and Orion Henry, and built for hosting Ruby on Rails applications. It popularised `git push` as a deployment interface, and one of its co-founders wrote the twelve-factor app methodology. Salesforce acquired the company in December 2010; Heroku is now described on its own site as a business unit of Salesforce.

Officially supported languages are Node.js, Ruby, Python, Java, PHP, Go, Scala, Clojure and .NET. Applications deploy over a git remote or the Heroku CLI, and first-party data services cover Postgres, a Redis-compatible key-value store and Apache Kafka. The Common Runtime offers two regions, `us` and `eu`; Private Spaces add named regions in Dublin, Frankfurt, London, Montreal, Mumbai, Oregon, Singapore, Sydney, Tokyo and Virginia. A newer runtime generation named Fir is available inside Private Spaces, while the standard platform runs on Cedar.

## Reservations

The free tier is gone. The cheapest entry is the Eco plan, a $5 flat monthly subscription covering a pool of 1,000 dyno hours shared across an account; an Eco web dyno sleeps after thirty minutes without traffic and takes a delay to wake. Eco is also restricted to personal apps — anything inside a Heroku Team or Enterprise Team starts at the $7 Basic dyno. Prices climb steeply from there: Standard dynos are $25 and $50, Performance dynos $250 and up, and Private Spaces start at $125 per dyno before the space itself.

Other platforms now occupy the ground Heroku defined — [Render](/provider/render/), [Fly.io](/provider/fly/) and [Railway](/provider/railway/) all describe themselves in relation to it.

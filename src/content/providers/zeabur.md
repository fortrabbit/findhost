---
id: zeabur
name: Zeabur
urls:
  home: https://zeabur.com
  pricing: https://zeabur.com/pricing
  terms: https://zeabur.com/docs/legal/terms
  docs: https://zeabur.com/docs
category:
  - paas
  - caas
  - static
description: Container platform that reads a git repository, works out what kind of project it is and deploys it without a configuration file.
whoManagesOs: self-managed
useCases:
  - web-app
  - api
  - static-site
  - side-project
  - ai-app
audience:
  - solo
  - startup
  - smb
software:
  - astro
  - express
  - nextjs
  - nuxt
  - remix
  - sveltekit
  - django
  - laravel
  - symfony
  - hugo
runtimes:
  - node
  - python
  - php
  - go
  - rust
  - java
  - dotnet
  - static
  - docker
deployMethods:
  - git
  - docker-image
pricingModel: fixed-tier
priceFrom: sm
priceTo: lg
currencies:
  - USD
billingPeriods:
  - monthly
exitWithin: a-month
freeTier: permanent
apiAvailable: public
cliTool: official
hqCountry: US
ownership: vc-backed
social:
  github: https://github.com/zeabur
  x: https://x.com/zeaburapp
testDomain: included
collaboration: team
referringSubnets: { now: 671, before: 660 }
checkedAt: 2026-08-12
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-08-31 }
  - { field: testDomain, url: 'https://zeabur.com/docs/deploy/networking/public-networking', checkedAt: 2026-08-12 }
  - { field: collaboration, url: 'https://zeabur.com/docs/operations/team/invite-member', checkedAt: 2026-08-12 }
  - { field: hqCountry, url: 'https://zeabur.com/about', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://zeabur.com/pricing', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://zeabur.com/pricing', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://zeabur.com/docs/legal/terms', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://zeabur.com/pricing', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://zeabur.com/docs/legal/terms', checkedAt: 2026-08-02 }
  - { field: urls, url: 'https://zeabur.com/docs/legal/terms', checkedAt: 2026-08-01 }
  - { field: ownership, url: 'https://zeabur.com/blogs/our-2m-seed-round', checkedAt: 2026-08-21 }
figure:
  emoji: 🧩
  color: rgb(73, 88, 161)
  textColor: rgb(234, 236, 245)
  text: Point it at a repo, it guesses the rest.
ai: authored
---

Zeabur takes a git repository, works out what kind of project it is and deploys it without a configuration file. Detection covers the mainstream JavaScript, Python, PHP, Go, Rust, Java and .NET frameworks along with the static site generators, and anything the detector does not recognise can ship as a Dockerfile or a prebuilt container image instead.

Applications run as managed containers: the provider owns the operating system and the image, the account holder owns the code and its dependencies. Work goes through the git integration, an official CLI or the web console, with editor and browser extensions alongside them, and templates deploy prebuilt services into the same project. Plans are fixed tiers above a permanent free level, graded by capacity rather than by capability.

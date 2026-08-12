---
id: diploi
name: Diploi
urls:
  home: https://diploi.com
  pricing: https://diploi.com/pricing
category:
  - paas
description: Finnish platform that puts a cloud development environment and the hosting for the same application in one place, billed by the hour it runs.
hqCountry: FI
whoManagesOs: managed
runtimes:
  - node
  - python
  - php
  - dotnet
  - deno
software:
  - nextjs
  - astro
  - sveltekit
  - django
  - laravel
  - flask
  - fastapi
deployMethods:
  - git
sshAccess: jailed
managedDatabases:
  - postgres
  - mongodb
  - redis
  - mariadb
entryPrice: { amount: 2.9, currency: EUR, period: month }
priceFrom: xs
currencies:
  - EUR
pricingModel: hourly
freeTier: trial
apiAvailable: none
cliTool: official
status: active
checkedAt: 2026-08-09
sources:
  - { field: category, url: 'https://diploi.com/', checkedAt: 2026-08-09 }
  - { field: hqCountry, url: 'https://diploi.com/', checkedAt: 2026-08-09 }
  - { field: runtimes, url: 'https://diploi.com/', checkedAt: 2026-08-09 }
  - { field: software, url: 'https://diploi.com/', checkedAt: 2026-08-09 }
  - { field: managedDatabases, url: 'https://diploi.com/', checkedAt: 2026-08-09 }
  - { field: sshAccess, url: 'https://diploi.com/', checkedAt: 2026-08-09 }
  - { field: cliTool, url: 'https://diploi.com/', checkedAt: 2026-08-09 }
  - { field: entryPrice, url: 'https://diploi.com/pricing', checkedAt: 2026-08-09 }
  - { field: pricingModel, url: 'https://diploi.com/pricing', checkedAt: 2026-08-09 }
  - { field: freeTier, url: 'https://diploi.com/pricing', checkedAt: 2026-08-09 }
figure:
  emoji: 💻
  color: rgb(59, 130, 246)
  textColor: rgb(240, 248, 255)
  text: Development environment and hosting, hourly billing.
ai: authored
---

Diploi is a Helsinki platform that sells the development environment and the production hosting for an application as one thing. A stack is scaffolded from a builder, edited in a browser IDE or over SSH into the pod running it, and pushed to deploy through GitHub with CI/CD and certificates handled. Node, Python, PHP, .NET and Deno are supported, with PostgreSQL, MongoDB, Redis, MariaDB and MinIO alongside.

The billing is the unusual part and worth reading before signing up: clusters are charged by the hour they run, from €0.006 for the smallest to €0.182 for the largest, plus €0.00025 per gigabyte per hour of storage. The published examples come to €2.90 a month for a development cluster running seven hours a workday and €4.99 for a small production one running continuously. That makes a development environment genuinely cheap to leave switched off, which is the point of charging for uptime rather than for a plan.

Kubernetes underneath, though the region a customer's application runs in is not published.

---
id: sitehost
name: SiteHost
urls:
  home: https://sitehost.nz
  pricing: https://sitehost.nz/hosting/cloud-containers
  terms: https://sitehost.nz/about/terms
category: paas
description: New Zealand host running its own Auckland data centre, whose Cloud Containers product deploys prebuilt or custom Docker images for PHP, Node, Ruby and .NET apps.
founded: 2004
hqCountry: NZ
ownership: independent
whoManagesOs: container
infraContract:
  - owns-metal
useCases:
  - cms
  - e-commerce
  - saas
  - api
  - headless-cms
  - background-jobs
audience:
  - agency
  - smb
  - government
  - enterprise
software:
  - wordpress
runtimes:
  - php
  - node
  - ruby
  - dotnet
  - docker
deployMethods:
  - git-push
  - ssh
  - sftp
  - docker-image
  - api
sshAccess: full
managedDatabases:
  - mysql
  - postgres
  - mongodb
  - redis
pricingModel: fixed-tier
entryPriceBand: 15-50
entryPrice: { amount: 35, currency: NZD, period: month }
freeTier: none
regions:
  - NZ
  - AU
  - SG
  - GB
  - US
  - DE
supportChannels:
  - phone
  - email
supportHours: 24-7
apiAvailable: public
iacSupport:
  - terraform
social:
  github: https://github.com/sitehostnz
  linkedin: https://www.linkedin.com/company/sitehost/
  facebook: https://www.facebook.com/SiteHost/
  x: https://twitter.com/sitehostnz
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://sitehost.nz/hosting/cloud-containers', checkedAt: 2026-08-01 }
  - { field: regions, url: 'https://sitehost.nz/about', checkedAt: 2026-08-01 }
  - { field: founded, url: 'https://sitehost.nz/about', checkedAt: 2026-08-01 }
  - { field: hqCountry, url: 'https://sitehost.nz/about', checkedAt: 2026-08-01 }
  - { field: ownership, url: 'https://sitehost.nz/about', checkedAt: 2026-08-01 }
  - { field: supportHours, url: 'https://sitehost.nz/about', checkedAt: 2026-08-01 }
  - { field: entryPrice, url: 'https://sitehost.nz/hosting/cloud-containers', checkedAt: 2026-08-01 }
  - { field: entryPriceBand, url: 'https://sitehost.nz/hosting/cloud-containers', checkedAt: 2026-08-01 }
  - { field: social, url: 'https://sitehost.nz', checkedAt: 2026-08-01 }
  - { field: urls, url: 'https://sitehost.nz/about/terms', checkedAt: 2026-08-01 }
figure:
  emoji: 🥝
  color: rgb(20, 55, 35)
  textColor: rgb(185, 235, 195)
  text: Containers, from an Auckland basement.
ai: authored
---

## About SiteHost

SiteHost was founded in 2004 by the brothers Nathan and Quintin Russ and is still founder-owned, with around fifty staff. It owns and operates its Auckland data centre rather than renting rack space — AKL01 opened in 2018 and was expanded in 2025 — with Sydney added in 2015 and northern-hemisphere hardware from 2024.

Cloud Containers is the part that makes it a platform rather than a host. Prebuilt stack images cover Nginx and Apache with thirteen PHP versions each, four Node.js versions, Ruby with Puma and .NET Core, plus WordPress and Silverstripe images and a set of database and search containers. Each container gets its own SSH and SFTP user, cron and environment variables; custom Docker images can be pushed through the company's own registry and build pipeline. There is a public API, a Terraform provider, and independent API clients written by New Zealand agencies and individuals.

## Reservations

The gap between unmanaged and managed pricing on the same one-core container is very large — roughly sevenfold — and every figure on the pricing page excludes GST. The published data-centre list is also inconsistent between pages: the containers page names Sydney, Singapore, London, California and Auckland, while the company history describes Frankfurt and California as the 2024 additions.

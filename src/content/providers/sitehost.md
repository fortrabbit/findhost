---
id: sitehost
name: SiteHost
urls:
  home: https://sitehost.nz
  pricing: https://sitehost.nz/hosting/cloud-containers
  terms: https://sitehost.nz/about/terms
category: paas
description: New Zealand host that owns its Auckland data centre and sells Cloud Containers, a product that runs prebuilt or custom Docker images.
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
priceFrom: md
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
  - { field: priceFrom, url: 'https://sitehost.nz/hosting/cloud-containers', checkedAt: 2026-08-01 }
  - { field: social, url: 'https://sitehost.nz', checkedAt: 2026-08-01 }
  - { field: urls, url: 'https://sitehost.nz/about/terms', checkedAt: 2026-08-01 }
figure:
  emoji: 🥝
  color: rgb(20, 55, 35)
  textColor: rgb(185, 235, 195)
  text: Containers, out of an Auckland data centre.
ai: authored
---

## About SiteHost

SiteHost was founded in 2004, is still independently owned, and owns and operates its Auckland data centre rather than renting rack space. It has since added hardware in Australia, Asia and the northern hemisphere.

Cloud Containers is the part that makes it a platform rather than a host. Prebuilt stack images cover Nginx and Apache with a choice of PHP, Node.js, Ruby and .NET runtimes, plus WordPress and Silverstripe images and a set of database and search containers. Each container gets its own SSH and SFTP user, cron and environment variables; custom Docker images can be pushed through the company's own registry and build pipeline. Containers are sold in unmanaged and managed variants. There is a public API, a Terraform provider, and independent API clients written by New Zealand agencies and individuals.

## Worth knowing

Prices on the site are quoted excluding GST, so the figure a New Zealand customer pays is higher than the one shown.

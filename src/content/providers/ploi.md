---
id: ploi
name: Ploi
url: https://ploi.io
category: server-management
pricingUrl: https://ploi.io/pricing
description: Ploi is a server management control panel for PHP servers. The subscription covers the panel only — the server is rented separately from a VPS provider.
whoManagesOs: panel-assisted
infraContract: byo-iaas
audience:
  - developer
runsOn:
  - digitalocean
  - hetzner
  - linode
  - vultr
  - upcloud
  - scaleway
  - aws
runtimes:
  - php
software:
  - laravel
  - wordpress
  - statamic
  - craft-cms
pricingModel: fixed-tier
entryPriceBand: free-tier
freeTier: permanent
social:
  x: https://x.com/ploi_deploy
  bluesky: https://bsky.app/profile/ploi.io
  mastodon: https://phpc.social/@ploi
  github: https://github.com/ploi
  facebook: https://www.facebook.com/ploideploy
status: active
checkedAt: 2026-07-31
sources:
  - { field: entryPriceBand, url: 'https://ploi.io/pricing', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://ploi.io/pricing', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://ploi.io/pricing', checkedAt: 2026-07-31 }
  - { field: infraContract, url: 'https://ploi.io/pricing', checkedAt: 2026-07-31 }
  - { field: runsOn, url: 'https://ploi.io/', checkedAt: 2026-07-31 }
  - { field: software, url: 'https://ploi.io/', checkedAt: 2026-07-31 }
  - { field: social, url: 'https://ploi.io/', checkedAt: 2026-07-31 }
figure:
  emoji: 🪄
  color: rgb(90, 55, 160)
  textColor: rgb(205, 200, 235)
  text: Slick automation, but ops still yours.
ai: co-authored
---

## About Ploi

Ploi is [server management software](/category/server-management/) from the Netherlands, with Laravel-optimised support and one-click installs for WordPress, Statamic, Craft CMS, Nextcloud and phpMyAdmin. The customer brings the server: UpCloud, DigitalOcean, Linode, Hetzner, Vultr, AWS EC2, Scaleway and a custom-VPS option are the named targets. The company also runs [Ploi Cloud](/provider/ploi-cloud/), a separate managed product.

Four plans are listed: Free at €0, Basic at €8, Pro at €13 and Unlimited at €30 a month, with a five-day Pro trial that takes no credit card. The pricing page is explicit that "our pricing does not include server fees".

## Reservations

Ploi provisions the box and hands over the keys. What happens to it afterwards — kernel and operating system updates, security patches, backups, monitoring, log rotation, failed disks and out-of-hours incidents — belongs to the account holder, not to Ploi.

There is also more than one bill. The panel subscription and the VPS are separate contracts with separate support and separate invoices, and a growing project usually adds a third for off-site backups, object storage or a managed database.

---
id: cloud-in-a-bottle
name: Cloud in a Bottle
urls:
  home: https://cloudinabottle.org
  pricing: https://cloudinabottle.imbue.com/
  docs: https://cloudinabottle.org/docs/
category:
  - server-management
regions: null
description: Open-source personal-cloud platform that installs on an Ubuntu machine the owner supplies and runs containerized apps from a catalog, with a managed server sold by its maker Imbue.
founded: 2026
headcount: '11-50'
hqCountry: US
whoManagesOs: self-managed
infraContract:
  - byo-iaas
useCases:
  - side-project
  - web-app
  - ai-app
  - game-server
audience:
  - solo
software:
  - nextcloud
  - vaultwarden
runtimes:
  - docker
  - any
deployMethods:
  - git
  - control-panel
sshAccess: root
backupsIncluded: included
priceFrom: sm
priceTo: md
currencies:
  - USD
billingPeriods:
  - monthly
freeTier: trial
cliTool: official
apiAvailable: public
status: out-of-scope
criterion: 5
addedAt: 2026-09-08
checkedAt: 2026-09-08
sources:
  - { field: status, url: 'https://cloudinabottle.org/blog/launch-post', checkedAt: 2026-09-08 }
  - { field: status, url: 'https://github.com/cloud-in-a-bottle/cloud-in-a-bottle/releases', checkedAt: 2026-09-08 }
  - { field: founded, url: 'https://cloudinabottle.org/blog/launch-post', checkedAt: 2026-09-08 }
  - { field: headcount, url: 'https://imbue.com/about', checkedAt: 2026-09-08 }
  - { field: hqCountry, url: 'https://imbue.com/about', checkedAt: 2026-09-08 }
  - { field: category, url: 'https://cloudinabottle.org/', checkedAt: 2026-09-08 }
  - { field: whoManagesOs, url: 'https://cloudinabottle.org/docs/setup/cloud_instance.html', checkedAt: 2026-09-08 }
  - { field: infraContract, url: 'https://cloudinabottle.org/', checkedAt: 2026-09-08 }
  - { field: useCases, url: 'https://cloudinabottle.org/', checkedAt: 2026-09-08 }
  - { field: audience, url: 'https://cloudinabottle.org/', checkedAt: 2026-09-08 }
  - { field: software, url: 'https://cloudinabottle.org/apps', checkedAt: 2026-09-08 }
  - { field: runtimes, url: 'https://cloudinabottle.org/', checkedAt: 2026-09-08 }
  - { field: deployMethods, url: 'https://cloudinabottle.org/docs/operation/overview.html', checkedAt: 2026-09-08 }
  - { field: sshAccess, url: 'https://cloudinabottle.org/docs/setup/cloud_instance.html', checkedAt: 2026-09-08 }
  - { field: backupsIncluded, url: 'https://cloudinabottle.org/docs/operation/backups.html', checkedAt: 2026-09-08 }
  - { field: priceFrom, url: 'https://cloudinabottle.imbue.com/', checkedAt: 2026-09-08 }
  - { field: priceTo, url: 'https://cloudinabottle.imbue.com/', checkedAt: 2026-09-08 }
  - { field: currencies, url: 'https://cloudinabottle.imbue.com/', checkedAt: 2026-09-08 }
  - { field: billingPeriods, url: 'https://cloudinabottle.imbue.com/', checkedAt: 2026-09-08 }
  - { field: freeTier, url: 'https://cloudinabottle.imbue.com/', checkedAt: 2026-09-08 }
  - { field: cliTool, url: 'https://cloudinabottle.org/docs/operation/cli.html', checkedAt: 2026-09-08 }
  - { field: apiAvailable, url: 'https://cloudinabottle.org/docs/how_it_works/overview.html', checkedAt: 2026-09-08 }
  - { field: 'built by Imbue', url: 'https://cloudinabottle.org/blog/launch-post', checkedAt: 2026-09-08 }
figure:
  emoji: 🫧
  color: rgb(72, 128, 176)
  textColor: rgb(234, 241, 247)
  text: A personal cloud on one Ubuntu box.
ai: authored
---

Cloud in a Bottle is an open-source personal-cloud platform, published under AGPL-3.0 and [built by Imbue](https://cloudinabottle.org/blog/launch-post), an AI company in San Francisco. It installs on a freshly set up Ubuntu machine the owner supplies, whether a spare laptop, a home server or a rented VPS, and turns it into a dashboard that routes HTTPS requests to apps running as rootless Podman containers, each seeing only the data directories it asked for. Apps come from a curated catalog installed in one click, or from any git repository carrying a manifest file and a Dockerfile. Every route of every app sits behind the owner's login unless the app declares a path public. A bundled backup app uses restic to send encrypted snapshots to storage the owner chooses, and a command-line tool with API tokens does what the dashboard does, including handing an instance to a coding agent.

Imbue also sells [managed spaces](https://cloudinabottle.imbue.com/): a dedicated server it provisions and keeps running, in three sizes priced by the month and billed only while the space is running, with a starting credit. The space is tied to the owner's SSH key and can be moved to other hardware.

**Criterion 5 — purchasable for twelve months — fails.** The [launch post](https://cloudinabottle.org/blog/launch-post) is dated September 5, 2026, and the [first tagged release](https://github.com/cloud-in-a-bottle/cloud-in-a-bottle/releases) is from July 2026.

**This reverses when the managed service has been on sale for twelve months and two independent artifacts about it exist, which is criterion 6 and has not been checked.**

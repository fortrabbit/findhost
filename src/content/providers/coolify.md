---
id: coolify
name: Coolify
urls:
  home: https://coolify.io
category: server-management
regions: null
description: Open-source self-hostable PaaS installed as a control panel on servers the operator rents, with a paid cloud-hosted panel as the alternative.
whoManagesOs: panel-assisted
infraContract:
  - byo-iaas
runsOn:
  - hetzner
  - digitalocean
  - linode
  - aws
runtimes:
  - any
  - docker
deployMethods:
  - git-integration
  - docker-image
priceFrom: sm
priceTo: md
currencies:
  - USD
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
freeTier: permanent
apiAvailable: public
social:
  github: https://github.com/coollabsio/coolify
  discord: https://coollabs.io/discord
status: active
checkedAt: 2026-07-31
sources:
  - { field: infraContract, url: 'https://coolify.io/', checkedAt: 2026-07-31 }
  - { field: runsOn, url: 'https://coolify.io/', checkedAt: 2026-07-31 }
  - { field: runtimes, url: 'https://coolify.io/', checkedAt: 2026-07-31 }
  - { field: deployMethods, url: 'https://coolify.io/', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://coolify.io/', checkedAt: 2026-07-31 }
  - { field: priceFrom, url: 'https://coolify.io/pricing', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://coolify.io/pricing', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://coolify.io/pricing', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://coolify.io/pricing', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://coolify.io/pricing', checkedAt: 2026-08-02 }
  - { field: apiAvailable, url: 'https://coolify.io/', checkedAt: 2026-07-31 }
figure:
  emoji: 🐋
  color: rgb(0, 120, 140)
  textColor: rgb(230, 255, 255)
  text: DIY PaaS, DIY ops.
---

Coolify is an open-source, self-hostable platform-as-a-service built by coolLabs around founder Andras Bacsai in Hungary, with the source on GitHub.

The model is bring-your-own-infrastructure. Coolify installs as a control panel on a server the operator provisions — EC2, DigitalOcean, Linode, Hetzner and Raspberry Pi are the named targets — and then handles container orchestration, deployments, Let's Encrypt certificates, S3-compatible database backups, pull-request deployments, a real-time terminal, server monitoring and notifications through Discord, Telegram or email. Deployment comes from a connected GitHub, GitLab, Bitbucket or Gitea repository, or from any Docker-compatible source, and the project states support for any language and framework. There is a public API.

Two editions exist. The self-hosted panel is free with no feature gates; Coolify Cloud hosts the panel itself for a subscription. In both cases the application servers belong to the customer.

## Worth knowing

The panel is itself a component to look after. It consumes resources on the machine it runs on, it has to be kept current, and a failed panel upgrade is an incident like any other.

Multi-server setups and Docker Swarm are supported, but there is no managed multi-node orchestration, no automatic failover and no autoscaling. Capacity is added by hand.

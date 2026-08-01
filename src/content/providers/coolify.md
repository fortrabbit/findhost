---
id: coolify
name: Coolify
urls:
  home: https://coolify.io
category: server-management
regions: null
description: Coolify is an open-source, self-hostable PaaS. It runs as a control panel on servers the operator rents and maintains, with a paid cloud-hosted panel as an alternative.
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
entryPriceBand: free-tier
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
  - { field: entryPriceBand, url: 'https://coolify.io/', checkedAt: 2026-07-31 }
  - { field: apiAvailable, url: 'https://coolify.io/', checkedAt: 2026-07-31 }
  - { field: social, url: 'https://coolify.io/', checkedAt: 2026-07-31 }
figure:
  emoji: 🐋
  color: rgb(0, 120, 140)
  textColor: rgb(230, 255, 255)
  text: DIY PaaS, DIY ops.
ai: co-authored
---

## About Coolify

Coolify describes itself as "an open-source & self-hostable alternative to Vercel, Heroku, Netlify and Railway". It is built by coolLabs around founder Andras Bacsai in Hungary, and the source is on GitHub.

The model is bring-your-own-infrastructure. Coolify installs as a control panel on a server the operator provisions — EC2, DigitalOcean, Linode, Hetzner and Raspberry Pi are the named targets — and then handles container orchestration, deployments, Let's Encrypt certificates, S3-compatible database backups, pull-request deployments, a real-time terminal, server monitoring and notifications through Discord, Telegram or email. Deployment comes from a connected GitHub, GitLab, Bitbucket or Gitea repository, or from any Docker-compatible service, and the project states support for any language and framework. There is an API.

Two editions exist. The self-hosted panel is free with no feature gates. Coolify Cloud hosts the panel itself for a subscription; its price is not published on the homepage. In both cases the application servers belong to the customer.

## Reservations

Coolify provisions and deploys; it does not take the server off anyone's hands. Once the instance is running, kernel and operating system updates, security patches, disk pressure, log rotation, off-site backups, uptime monitoring and out-of-hours incidents remain the operator's work. Free software on a rented server is not the same as free hosting.

The panel is itself a component to look after. It consumes resources on the machine it runs on, it has to be kept current, and a failed panel upgrade is an incident like any other. Multi-server setups and Docker Swarm are supported, but there is no managed multi-node orchestration, no automatic failover and no autoscaling — capacity is added by hand.

Running PHP on Coolify means owning a container image: a build configuration or a Dockerfile pinning the PHP version and extensions, an FPM or web server configuration, opcache settings, a supervisor configuration for queue workers and a cron entry for the scheduler. All of it is documented and all of it works; all of it also has to be maintained by whoever owns the repository.

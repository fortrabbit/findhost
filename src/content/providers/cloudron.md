---
id: cloudron
name: Cloudron
urls:
  home: https://www.cloudron.io
  pricing: https://www.cloudron.io/pricing.html
category: server-management
description: Self-hosting platform that installs and keeps open-source applications updated on the customer's own server, with per-app backups and single sign-on.
infraContract:
  - byo-iaas
whoManagesOs: panel-assisted
useCases:
  - internal-tool
  - cms
  - side-project
  - api
audience:
  - indie-hacker
  - freelancer
  - smb
  - non-profit
software:
  - wordpress
  - ghost
  - n8n
  - directus
runtimes:
  - docker
  - any
deployMethods:
  - control-panel
  - cli
  - docker-image
sshAccess: full
pricingModel: fixed-tier
entryPriceBand: free-tier
freeTier: permanent
figure:
  emoji: 🏡
  color: rgb(30, 45, 40)
  textColor: rgb(185, 230, 210)
  text: Self-hosting for people with other jobs.
ai: authored
---

## About Cloudron

Cloudron is the answer to the practical objection to self-hosting: not installing the applications, but keeping them patched afterwards. It runs on a server the customer owns, installs applications from its own catalogue, and then handles updates, per-application backups, a firewall, mail and single sign-on across all of them.

Plans are free for two applications, €15 a month for unlimited, and €25 for a tier adding user groups, a directory server and multiple backup destinations, with yearly billing at a lower effective rate. The company is explicit that it does not resell the applications — the charge is for the management platform — and equally explicit that it has no access to the customer's server. Development has run continuously since 2014.

## Reservations

Nothing here is hosting. The server is bought elsewhere and its cost, availability and jurisdiction are the customer's problem, so the Cloudron figure is the smaller half of the bill. The free tier's two-application limit is reached quickly. The company behind the product is not named on the pricing page beyond a founder's Mastodon handle, which is thin for something entrusted with backups and single sign-on.

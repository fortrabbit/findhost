---
id: binary-lane
name: Binary Lane
urls:
  home: https://www.binarylane.com.au
  pricing: https://www.binarylane.com.au
category: vps
description: Australian VPS provider selling hourly-billed NVMe cloud servers with independently adjustable memory, storage and transfer, and a public API.
founded: 2009
hqCountry: AU
ownership: subsidiary
parent: Mammoth Media Pty Ltd
whoManagesOs: you
useCases:
  - saas
  - api
  - background-jobs
  - game-server
  - side-project
  - internal-tool
audience:
  - indie-hacker
  - freelancer
  - smb
  - agency
runtimes:
  - any
deployMethods:
  - ssh
  - control-panel
  - api
sshAccess: full
pricingModel: hourly
entryPriceBand: under-5
entryPrice: { amount: 4.90, currency: AUD, period: month }
regions:
  - AU
  - SG
supportChannels:
  - email
apiAvailable: public
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://www.binarylane.com.au', checkedAt: 2026-08-01 }
  - { field: entryPriceBand, url: 'https://www.binarylane.com.au', checkedAt: 2026-08-01 }
figure:
  emoji: 🦘
  color: rgb(25, 45, 70)
  textColor: rgb(170, 215, 250)
  text: Pick your own resource shape.
ai: authored
---

## About Binary Lane

Binary Lane has sold Australian cloud servers since 2009 and operates under Mammoth Media Pty Ltd. Its distinguishing feature is resource granularity: instead of fixed plan shapes, memory, storage and monthly data transfer are chosen and adjusted independently through the panel or the API, billed by the hour with no contract.

Servers sit in NEXTDC facilities in Sydney, Melbourne, Brisbane and Perth, with an Equinix site in Singapore for Asia-Pacific latency; public looking-glass endpoints exist for Sydney and Singapore. Live migration is used to move guests during host maintenance, and automated backups, an external firewall and load balancing are available as extras. A documented REST API sits behind a third-party Terraform provider maintained outside the company.

## Reservations

This is unmanaged infrastructure. There is no control panel of the cPanel sort, no managed runtime and no application-level support, so everything above the OS image belongs to the customer. Support is a ticketed help desk rather than phone or chat, and no public status page was found.

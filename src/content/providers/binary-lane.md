---
id: binary-lane
name: Binary Lane
urls:
  home: https://www.binarylane.com.au
  pricing: https://www.binarylane.com.au
category:
  - vps
description: Australian VPS provider selling hourly-billed NVMe cloud servers with independently adjustable memory, storage and transfer, and a public API.
founded: 2009
hqCountry: AU
ownership: subsidiary
parent: mammoth
whoManagesOs: self-managed
useCases:
  - web-app
  - api
  - background-jobs
  - game-server
  - side-project
  - internal-tool
audience:
  - solo
  - smb
  - agency
runtimes:
  - any
deployMethods:
  - control-panel
sshAccess: root
pricingModel: hourly
priceFrom: xs
priceTo: lg
currencies:
  - AUD
billingPeriods:
  - hourly
  - monthly
billingTiming: arrears
exitWithin: a-day
entryPrice: { amount: 4.90, currency: AUD, period: month }
regions:
  - AU
  - SG
supportChannels:
  - email
apiAvailable: public
referringSubnets: { now: 309, before: 296 }
checkedAt: 2026-08-01
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-08-31 }
  - { field: entryPrice, url: 'https://www.binarylane.com.au', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://www.binarylane.com.au/vps-hosting/linux-vps', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://www.binarylane.com.au/vps-hosting/linux-vps', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://www.binarylane.com.au/vps-hosting/linux-vps', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://www.binarylane.com.au/terms-of-service', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://www.binarylane.com.au/terms-of-service', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://www.binarylane.com.au/terms-of-service', checkedAt: 2026-08-02 }
figure:
  emoji: 🦘
  color: rgb(62, 111, 173)
  textColor: rgb(234, 239, 246)
  text: Pick your own resource shape.
ai: authored
---

Binary Lane has sold Australian cloud servers since 2009 and operates under Mammoth Media Pty Ltd. Its distinguishing feature is resource granularity: instead of fixed plan shapes, memory, storage and monthly data transfer are chosen and adjusted independently through the panel or the API, billed by the hour with no contract.

Servers sit in NEXTDC facilities across the Australian mainland capitals, with an Equinix site in Singapore for Asia-Pacific latency. Live migration is used to move guests during host maintenance, and automated backups, an external firewall and load balancing are sold as extras. A documented REST API covers the same operations as the panel.

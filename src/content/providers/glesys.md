---
id: glesys
name: GleSYS
urls:
  home: https://glesys.com
  pricing: https://glesys.com/pricing/
  status: https://www.glesys-status.com/
category:
  - vps
description: GleSYS is a Swedish infrastructure provider selling KVM and VMware servers, bare metal, managed databases, object storage and colocation from Nordic data centres.
founded: 1999
hqCountry: SE
ownership: pe-owned
parent: cube-infrastructure
whoManagesOs: self-managed
infraContract:
  - owns-metal
useCases:
  - web-app
  - api
  - data-pipeline
  - background-jobs
  - internal-tool
  - game-server
audience:
  - startup
  - smb
  - enterprise
  - agency
runtimes:
  - any
  - docker
deployMethods:
  - control-panel
sshAccess: root
pricingModel: per-resource
priceFrom: sm
priceTo: xl
currencies:
  - EUR
  - SEK
billingPeriods:
  - hourly
  - monthly
billingTiming: advance
exitWithin: a-day
entryPrice: { amount: 12.73, currency: EUR, period: month }
freeTier: none
regions:
  - SE
  - FI
  - NL
  - DE
  - GB
  - NO
apiAvailable: public
status: active
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://glesys.com/pricing/', checkedAt: 2026-08-01 }
  - { field: entryPrice, url: 'https://glesys.com/pricing/', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://glesys.com/pricing/', checkedAt: 2026-08-01 }
  - { field: priceTo, url: 'https://glesys.com/pricing/', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://glesys.com/pricing/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://glesys.com/pricing/', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://glesys.com/legal/general-terms-and-conditions/', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://glesys.com/legal/general-terms-and-conditions/', checkedAt: 2026-08-02 }
  - { field: pricingModel, url: 'https://glesys.com/pricing/', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://glesys.com/pricing/', checkedAt: 2026-08-01 }
figure:
  emoji: 🧊
  color: rgb(53, 123, 182)
  textColor: rgb(234, 240, 246)
  text: Compute, storage, nothing else.
ai: authored
gpuCapacity:
  - instances
---

GleSYS was formed in Falkenberg and sells infrastructure rather than packaged hosting: compute, storage, managed databases, connectivity and colocation, each priced per resource with hourly and monthly rates published in full. GPU and ARM machines are quoted rather than listed.

It owns data centres in Sweden and Finland and uses partner facilities in the Netherlands, Germany, the United Kingdom and Norway, all running on renewable energy. The automation surface is documented: a public API, a community-maintained Terraform provider, a lego DNS module and a status page with per-site maintenance notices. Ownership has passed through private equity twice — VIA Equity invested in 2018, and Cube Infrastructure Managers acquired the company in 2023 with the founder reinvesting for a minority stake.

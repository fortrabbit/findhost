---
id: glesys
name: GleSYS
urls:
  home: https://glesys.com
  pricing: https://glesys.com/pricing/
  status: https://www.glesys-status.com/
category: iaas
description: Swedish infrastructure provider offering KVM and VMware servers, bare metal, managed databases, object storage and colocation from Nordic data centres.
founded: 1999
hqCountry: SE
ownership: pe-owned
parent: Cube Infrastructure Managers
whoManagesOs: you
infraContract:
  - owns-metal
useCases:
  - saas
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
  - api
  - control-panel
  - ssh
sshAccess: full
pricingModel: per-resource
entryPriceBand: 5-15
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
  - { field: entryPriceBand, url: 'https://glesys.com/pricing/', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://glesys.com/pricing/', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://glesys.com/pricing/', checkedAt: 2026-08-01 }
figure:
  emoji: 🧊
  color: rgb(18, 42, 62)
  textColor: rgb(165, 220, 245)
  text: Compute, storage, nothing else.
ai: authored
---

## About GleSYS

GleSYS was formed in Falkenberg in 1999 and is the most infrastructure-shaped provider of the Swedish group: no shared hosting, no CMS bundles, just compute, storage, managed databases, connectivity and colocation, each priced per resource with hourly and monthly rates published in full.

It owns data centres in Falkenberg, Stockholm, Oulu, Pori and Tampere and uses partner facilities in Amsterdam, Frankfurt, London and Oslo, all on renewable energy. Automation is a real strength — a documented API, a Terraform provider on the registry maintained in the community, a lego DNS module and a status page with per-site maintenance notices.

Ownership has passed through private equity twice. VIA Equity invested in 2018 and Cube Infrastructure Managers acquired the company in March 2023, with the founder reinvesting for a minority stake.

## Reservations

There is no free tier and no platform-style deploy path — the customer brings their own runtime and their own operations. GPU and ARM machines are quote-only, and the entry virtual server is expensive next to commodity cloud at the same specification.

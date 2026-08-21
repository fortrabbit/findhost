---
id: veloxmedia
name: VeloxMedia
urls:
  home: https://veloxmedia.co.uk
  pricing: https://veloxmedia.co.uk/vps/
  terms: https://veloxmedia.co.uk/legal/
  docs: https://portal.veloxmedia.co.uk/portal/veloxmedia/kb
category:
  - vps
description: Cloud VPS provider selling NVMe KVM servers with root access in London, Amsterdam, Ohio and California, billed in dollars by a US company.
hqCountry: US
whoManagesOs: self-managed
infraContract:
  - owns-metal
useCases:
  - web-app
  - api
  - e-commerce
  - game-server
  - internal-tool
  - side-project
audience:
  - solo
  - agency
  - smb
runtimes:
  - any
deployMethods:
  - control-panel
sshAccess: root
pricingModel: fixed-tier
priceFrom: sm
priceTo: md
entryPrice: { amount: 5, currency: USD, period: month }
currencies:
  - USD
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
exitWithin: a-month
contractMinimum: none
freeTier: none
regions:
  - GB
  - NL
  - US
gdprDpa: standard
backupsIncluded: included
persistentStorage: true
supportChannels:
  - email
supportHours: 24-7
supportTiering: all-plans
apiAvailable: public
status: active
checkedAt: 2026-08-21
sources:
  - { field: category, url: 'https://veloxmedia.co.uk/vps/', checkedAt: 2026-08-21 }
  - { field: entryPrice, url: 'https://veloxmedia.co.uk/vps/', checkedAt: 2026-08-21 }
  - { field: priceFrom, url: 'https://veloxmedia.co.uk/vps/', checkedAt: 2026-08-21 }
  - { field: priceTo, url: 'https://veloxmedia.co.uk/vps/', checkedAt: 2026-08-21 }
  - { field: currencies, url: 'https://veloxmedia.co.uk/vps/', checkedAt: 2026-08-21 }
  - { field: billingPeriods, url: 'https://veloxmedia.co.uk/vps/', checkedAt: 2026-08-21 }
  - { field: regions, url: 'https://veloxmedia.co.uk/locations/', checkedAt: 2026-08-21 }
  - { field: sshAccess, url: 'https://veloxmedia.co.uk/solutions/', checkedAt: 2026-08-21 }
  - { field: whoManagesOs, url: 'https://veloxmedia.co.uk/os/', checkedAt: 2026-08-21 }
  - { field: backupsIncluded, url: 'https://veloxmedia.co.uk/', checkedAt: 2026-08-21 }
  - { field: supportHours, url: 'https://veloxmedia.co.uk/', checkedAt: 2026-08-21 }
  - { field: hqCountry, url: 'https://veloxmedia.co.uk/legal/', checkedAt: 2026-08-21 }
  - { field: gdprDpa, url: 'https://veloxmedia.co.uk/legal/', checkedAt: 2026-08-21 }
  - { field: infraContract, url: 'https://veloxmedia.co.uk/legal/', checkedAt: 2026-08-21 }
  - { field: apiAvailable, url: 'https://veloxmedia.co.uk/legal/', checkedAt: 2026-08-21 }
  - { field: billingTiming, url: 'https://veloxmedia.co.uk/legal/', checkedAt: 2026-08-21 }
  - { field: exitWithin, url: 'https://veloxmedia.co.uk/legal/', checkedAt: 2026-08-21 }
  - { field: money-back guarantee, url: 'https://veloxmedia.co.uk/legal/', checkedAt: 2026-08-21 }
  - { field: service credits, url: 'https://veloxmedia.co.uk/legal/', checkedAt: 2026-08-21 }
  - {
      field: the earlier site,
      url: 'https://web.archive.org/web/20250909200259/https://veloxmedia.co.uk/',
      checkedAt: 2026-08-21,
    }
figure:
  emoji: ⚡
  color: rgb(43, 89, 150)
  textColor: rgb(234, 240, 247)
  text: British domain, American paperwork.
ai: authored
---

VeloxMedia sells one product: a KVM virtual server on NVMe storage, ordered from its own portal in a ladder of fixed sizes that carries the same dollar price in every region. Each plan comes with root or administrator access, unmetered transfer and a dedicated IPv4 address, and the portal does the rest — snapshots and scheduled off-host backups, a browser console over VNC with SSH and RDP beside it, firewall rules and reverse DNS, CVE scanning, rescue mode and one-click reinstall. Operating systems arrive as one-click images, Windows Server among them, and there is no control panel licence to buy because nothing above the hypervisor is managed: the stack is yours to install. The platform is described as clustered, with NVMe replicated across nodes, automatic restart on healthy hardware after a host failure, and live migration during maintenance.

The brand and the domain are British; the contract is not. Orders are placed with Velox Media Inc., a corporation registered in Pittsburgh, Pennsylvania, under the law of Ohio, and priced in dollars. The [sub-processor list](https://veloxmedia.co.uk/legal/) says the company runs its own hardware under colocation contracts in the United States, the United Kingdom, the Netherlands, Poland and Canada, and names Cloudflare, Stripe, PayPal and Postmark. The [same site](https://web.archive.org/web/20250909200259/https://veloxmedia.co.uk/) sold pound-priced shared and reseller hosting, dedicated servers and web design before this; the account area that went with it is linked from the header as the legacy portal.

## Worth knowing

The money-back guarantee runs seven days and only on a first monthly VPS order. Dedicated servers, custom configurations, add-ons, anything paid for more than a week earlier and any account that has been suspended are excluded by the terms.

Downtime is answered in service credits against the monthly fee, on a scale that starts below a 99.9% monthly availability target, and the agreement makes those credits the sole remedy.

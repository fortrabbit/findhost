---
id: kamatera
name: Kamatera
urls:
  home: https://www.kamatera.com
  pricing: https://www.kamatera.com/pricing/
category:
  - vps
description: Kamatera is a cloud infrastructure company selling hourly-billed cloud servers, block storage, load balancers and firewalls from data centres worldwide.
ownership: subsidiary
whoManagesOs: self-managed
runtimes:
  - any
sshAccess: root
persistentStorage: true
pricingModel: hourly
priceFrom: xs
currencies:
  - USD
billingPeriods:
  - hourly
  - monthly
entryPrice: { amount: 4, currency: USD, period: month }
regions:
  - US
  - CA
  - GB
  - DE
  - NL
  - ES
  - IT
  - SE
  - RO
  - IL
  - SG
  - HK
  - JP
  - AU
iacSupport:
  - terraform
apiAvailable: public
referringSubnets: { now: 794, before: 798 }
wikidata: Q133252444
status: active
addedAt: 2026-08-04
checkedAt: 2026-08-09
sources:
  - { field: wikidata, url: 'https://www.wikidata.org/wiki/Q133252444', checkedAt: 2026-09-09 }
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-09-07 }
  - { field: entryPrice, url: 'https://www.kamatera.com/pricing/', checkedAt: 2026-08-04 }
  - { field: priceFrom, url: 'https://www.kamatera.com/pricing/', checkedAt: 2026-08-04 }
  - { field: currencies, url: 'https://www.kamatera.com/pricing/', checkedAt: 2026-08-04 }
  - { field: pricingModel, url: 'https://www.kamatera.com/pricing/', checkedAt: 2026-08-04 }
  - { field: regions, url: 'https://www.kamatera.com/pricing/', checkedAt: 2026-08-04 }
  - { field: whoManagesOs, url: 'https://www.kamatera.com/pricing/', checkedAt: 2026-08-04 }
  - { field: iacSupport, url: 'https://github.com/Kamatera/terraform-provider-kamatera', checkedAt: 2026-08-04 }
  - { field: apiAvailable, url: 'https://www.kamatera.com', checkedAt: 2026-08-09 }
  - { field: ownership, url: 'https://www.kamatera.com/about-us/', checkedAt: 2026-08-21 }
figure:
  emoji: ☁️
  color: rgb(67, 101, 168)
  textColor: rgb(234, 238, 246)
  text: Cloud servers billed by the hour, across eighteen data centres.
ai: authored
---

Kamatera sells cloud servers, virtual private cloud networking, block storage, load balancers and cloud firewalls, billed hourly against a monthly cap. A server arrives as a base OS image, Ubuntu by default with other Linux and Windows images offered, with full root access and nothing configured above the operating system. The published price list starts at a single-core, 1GB preset and scales through a configurator up to 104 vCPUs, with extra traffic and storage metered separately.

Data centres are spread across North America, Europe, the Middle East and Asia-Pacific, including locations few independent clouds in this dataset reach — Tel Aviv, Bucharest and Hong Kong among them. Kamatera publishes its own Terraform provider and CLI toolbox, and independent developers have separately built a Kubernetes autoscaler and cluster tooling against the same API.

## Worth knowing

The pricing page checked does not state a registered headquarters; the site lists both a US sales line and an Israeli support line without naming which is the legal seat.

---
id: vultr
name: Vultr
urls:
  home: https://www.vultr.com
  pricing: https://www.vultr.com/pricing/
  docs: https://docs.vultr.com/
category:
  - vps
  - bare-metal
description: Cloud infrastructure provider selling virtual private servers, bare metal, GPU instances, object storage and managed Kubernetes, billed by the hour.
ownership: vc-backed
whoManagesOs: self-managed
runtimes:
  - any
sshAccess: root
pricingModel: hourly
priceFrom: xs
priceTo: xl
billingPeriods:
  - hourly
  - monthly
entryPrice: { amount: 2.5, currency: USD, period: month }
regions:
  - US
  - CA
  - MX
  - BR
  - CL
  - GB
  - FR
  - ES
  - IT
  - NL
  - DE
  - SE
  - PL
  - IL
  - ZA
  - IN
  - SG
  - JP
  - KR
  - AU
apiAvailable: public
paymentMethods:
  - card
  - paypal
  - crypto
  - bank-transfer
referringSubnets: { now: 5071, before: 5040 }
status: active
checkedAt: 2026-08-01
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-08-31 }
  - { field: entryPrice, url: 'https://api.vultr.com/v2/plans', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://api.vultr.com/v2/plans', checkedAt: 2026-08-01 }
  - { field: urls, url: 'https://docs.vultr.com/', checkedAt: 2026-08-01 }
  - { field: regions, url: 'https://api.vultr.com/v2/regions', checkedAt: 2026-07-31 }
  - { field: priceFrom, url: 'https://api.vultr.com/v2/plans', checkedAt: 2026-07-31 }
  - { field: priceTo, url: 'https://api.vultr.com/v2/plans', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://api.vultr.com/v2/plans', checkedAt: 2026-08-02 }
  - { field: apiAvailable, url: 'https://api.vultr.com/v2/regions', checkedAt: 2026-07-31 }
  - { field: ownership, url: 'https://blogs.vultr.com/financing2024', checkedAt: 2026-08-21 }
  - { field: paymentMethods, url: 'https://docs.vultr.com/support/platform/billing/what-payment-methods-do-you-accept', checkedAt: 2026-08-29 }
  - { field: paymentMethods, url: 'https://docs.vultr.com/platform/billing/make-account-payments', checkedAt: 2026-08-30 }
figure:
  emoji: 🦅
  color: rgb(45, 132, 190)
  textColor: rgb(234, 241, 246)
  text: No cage required.
gpuCapacity:
  - instances
---

Vultr is a cloud infrastructure provider selling virtual private servers, bare metal, cloud compute instances, managed Kubernetes, object storage and GPU instances. Compute is billed by the hour against a monthly cap, and the whole catalogue — plans, regions, instances — is driven by a public API as well as by the web console.

Locations span the Americas, Europe, Africa, the Middle East and Asia-Pacific, but not every product is sold in every one; high-performance block storage and the newer instance families are offered in a subset. Vultr supplies the machine and root access and stops there: installing a web server, issuing certificates, patching and monitoring stay with the account holder for as long as the server exists.

## Worth knowing

The advertised entry price belongs to a narrow product — an instance with no IPv4 address, offered in only a couple of locations. The comparable plan with an IPv4 address costs more.

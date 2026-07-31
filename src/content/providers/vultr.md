---
id: vultr
name: Vultr
url: https://www.vultr.com
category: vps
pricingUrl: https://www.vultr.com/pricing/
description: Vultr is a cloud infrastructure provider offering VPS, bare metal, GPU instances and managed Kubernetes across 33 locations in 20 countries.
whoManagesOs: you
runtimes:
  - any
sshAccess: full
entryPriceBand: under-5
regions:
  - US
  - CA
  - BR
  - GB
  - NL
  - DE
  - IN
  - SG
  - JP
  - AU
apiAvailable: public
status: active
checkedAt: 2026-07-31
sources:
  - { field: regions, url: 'https://api.vultr.com/v2/regions', checkedAt: 2026-07-31 }
  - { field: entryPriceBand, url: 'https://api.vultr.com/v2/plans', checkedAt: 2026-07-31 }
  - { field: apiAvailable, url: 'https://api.vultr.com/v2/regions', checkedAt: 2026-07-31 }
figure:
  emoji: 🦅
  color: rgb(0, 120, 200)
  textColor: rgb(220, 220, 255)
  text: No cage required.
ai: co-authored
---

## About Vultr

Vultr is a cloud infrastructure provider selling virtual private servers, bare metal, cloud compute instances, managed Kubernetes, object storage and GPU instances. Its public API lists 33 locations across 20 countries, with the largest concentrations in North America, Europe and Asia; high-performance block storage is limited to a subset of those, including London, Frankfurt, Tokyo and Singapore.

The same API lists the plan catalogue. The cheapest shared-CPU instance is $2.50 a month for one vCPU and 512 MB, available in Newark and Atlanta and IPv6-only; the equivalent plan with IPv4 is $3.50, and 1 GB of memory is $5. A $0 plan also appears, restricted to Seattle, Frankfurt and Miami.

## Reservations

Vultr supplies a Linux server and root access, and the managed part ends there. Installing a web server, configuring PHP, issuing certificates, hardening the box, applying operating system patches and monitoring uptime are all the account holder's work, and it recurs for as long as the server exists. The common failure is not a bad first setup but an unattended one — a machine that quietly falls behind on patches while attention goes elsewhere.

The advertised entry price is also a narrow product: the $2.50 plan has no IPv4 address and is offered in two locations only.

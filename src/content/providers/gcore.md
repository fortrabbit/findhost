---
id: gcore
name: Gcore
urls:
  home: https://gcore.com
  pricing: https://gcore.com/pricing
  status: https://status.gcore.com/
category:
  - vps
  - bare-metal
  - serverless
description: Gcore is an edge and cloud provider selling CDN, streaming, DDoS protection, virtual machines, bare metal, Kubernetes and serverless functions.
whoManagesOs: self-managed
useCases:
  - ai-app
  - api
  - web-app
  - static-site
  - data-pipeline
  - game-server
audience:
  - startup
  - smb
  - enterprise
  - agency
runtimes:
  - docker
  - any
deployMethods:
  - control-panel
  - docker-image
sshAccess: root
pricingModel: usage-based
currencies:
  - EUR
billingPeriods:
  - monthly
billingTiming: arrears
apiAvailable: public
iacSupport:
  - terraform
referringSubnets: { now: 1372, before: 1384 }
status: active
hqCountry: LU
ownership: vc-backed
checkedAt: 2026-08-09
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-08-31 }
  - { field: hqCountry, url: 'https://gcore.com/about', checkedAt: 2026-08-09 }
  - { field: pricingModel, url: 'https://gcore.com/pricing', checkedAt: 2026-08-01 }
  - { field: currencies, url: 'https://gcore.com/pricing', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://gcore.com/pricing', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://gcore.com/pricing', checkedAt: 2026-08-02 }
  - { field: category, url: 'https://gcore.com/cloud', checkedAt: 2026-08-01 }
  - { field: ownership, url: 'https://gcore.com/press-releases/gcore-raises-60-million-in-series-a-funding-to-drive-ai-innovation-and-global-expansion', checkedAt: 2026-08-21 }
figure:
  emoji: 🌐
  color: rgb(73, 103, 161)
  textColor: rgb(234, 238, 245)
  text: Edge network first, cloud second.
ai: authored
gpuCapacity:
  - instances
  - inference
---

Gcore sells the edge and the cloud together: a content delivery network with its own peering and scrubbing centres, video streaming, DNS, DDoS protection and a web application firewall, alongside virtual machines, bare metal, managed Kubernetes, GPU capacity and serverless inference. Functions and container deployment are what place it in this dataset rather than among network vendors, since customers run their own code on the platform.

Pricing is published in euros and metered per product — the web application firewall by request volume, DDoS protection by the amount of clean traffic delivered — rather than assembled into plans. A public looking glass allows the network to be checked from outside.

## Worth knowing

The company's headquarters is not stated on the site. A Luxembourg telephone number is the only locating detail, and ownership is not published either.

Where the compute runs is not answerable from the site. The cloud page counts regions without naming one, and the network page lists points of presence by city without separating the CDN edge from the places a virtual machine can actually be started, so no regions are recorded here.

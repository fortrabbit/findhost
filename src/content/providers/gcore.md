---
id: gcore
name: Gcore
urls:
  home: https://gcore.com
  pricing: https://gcore.com/pricing
  status: https://status.gcore.com/
category: iaas
description: Luxembourg-registered edge provider selling CDN, streaming, DDoS protection, virtual machines, bare metal, Kubernetes and serverless functions.
whoManagesOs: you
useCases:
  - ai-app
  - api
  - saas
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
  - api
  - control-panel
  - docker-image
  - cli
sshAccess: full
pricingModel: usage-based
apiAvailable: public
iacSupport:
  - terraform
status: active
checkedAt: 2026-08-01
sources:
  - { field: pricingModel, url: 'https://gcore.com/pricing', checkedAt: 2026-08-01 }
  - { field: category, url: 'https://gcore.com/cloud', checkedAt: 2026-08-01 }
figure:
  emoji: 🌐
  color: rgb(25, 35, 55)
  textColor: rgb(180, 205, 245)
  text: Edge network first, cloud second.
ai: authored
---

## About Gcore

Gcore sells the edge and the cloud together: a content delivery network with its own peering and scrubbing centres, video streaming, DNS, DDoS protection and a web application firewall, alongside virtual machines, bare metal, managed Kubernetes, GPU capacity and serverless inference. Function-as-a-Service and container deployment are what put it in this dataset rather than in a list of network vendors — customers' own code runs on the platform.

Pricing is published in euros and metered by product: the web application firewall by the million requests, DDoS protection by the megabit per second of clean traffic. A public looking glass is available for checking the network from outside.

## Reservations

The pricing page is a set of per-product meters with no assembled plan, and the enterprise DDoS tier starts in the thousands per month, so the published figures describe two very different classes of customer. The company's headquarters is not stated — a Luxembourg telephone number is the only locating detail — and its ownership is not published either, which matters more than usual for a provider whose product is network infrastructure.

Where the compute actually runs is not answerable from the site. The cloud page claims "50+ Cloud regions" without naming one, and the network page lists 210-plus points of presence by city without separating the CDN edge from the places a virtual machine can be started. No regions are recorded here as a result.

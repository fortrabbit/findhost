---
id: tensordock
name: TensorDock
urls:
  home: https://www.tensordock.com
  pricing: https://www.tensordock.com/cloud-gpus.html
  docs: https://docs.tensordock.com/
  terms: https://docs.tensordock.com/legal-information/terms-of-service-tos
category:
  - iaas
  - gpu
description: US marketplace selling GPU virtual machines on servers supplied by independent hosts, now owned by Voltage Park.
hqCountry: US
ownership: subsidiary
whoManagesOs: self-managed
useCases:
  - ai-app
runtimes:
  - any
deployMethods:
  - control-panel
sshAccess: root
gpuCapacity:
  - instances
pricingModel: credit
priceFrom: lg
priceTo: 3xl
entryPrice: { amount: 0.12, currency: USD, period: hour }
currencies:
  - USD
billingPeriods:
  - hourly
billingTiming: advance
apiAvailable: public
status: acquired
addedAt: 2026-09-24
sources:
  - { field: category, url: 'https://docs.tensordock.com/virtual-machines/introduction-to-core-compute-vms', checkedAt: 2026-09-24 }
  - { field: description, url: 'https://docs.tensordock.com/who-we-are/readme', checkedAt: 2026-09-24 }
  - { field: hqCountry, url: 'https://docs.tensordock.com/legal-information/legal-information', checkedAt: 2026-09-24 }
  - { field: ownership, url: 'https://voltagepark.com/blog/voltage-park-acquires-tensordock-expanding-gpu-cloud-services-for-ai-and-machine-learning', checkedAt: 2026-09-24 }
  - { field: status, url: 'https://voltagepark.com/blog/voltage-park-acquires-tensordock-expanding-gpu-cloud-services-for-ai-and-machine-learning', checkedAt: 2026-09-24 }
  - { field: whoManagesOs, url: 'https://www.tensordock.com/', checkedAt: 2026-09-24 }
  - { field: sshAccess, url: 'https://www.tensordock.com/', checkedAt: 2026-09-24 }
  - { field: useCases, url: 'https://www.tensordock.com/cloud-gpus.html', checkedAt: 2026-09-24 }
  - { field: runtimes, url: 'https://www.tensordock.com/', checkedAt: 2026-09-24 }
  - { field: deployMethods, url: 'https://docs.tensordock.com/virtual-machines/introduction-to-core-compute-vms', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://www.tensordock.com/cloud-gpus.html', checkedAt: 2026-09-24 }
  - { field: pricingModel, url: 'https://www.tensordock.com/', checkedAt: 2026-09-24 }
  - { field: billingTiming, url: 'https://www.tensordock.com/', checkedAt: 2026-09-24 }
  - { field: billingPeriods, url: 'https://www.tensordock.com/cloud-gpus.html', checkedAt: 2026-09-24 }
  - { field: entryPrice, url: 'https://www.tensordock.com/', checkedAt: 2026-09-24 }
  - { field: priceFrom, url: 'https://www.tensordock.com/', checkedAt: 2026-09-24 }
  - { field: priceTo, url: 'https://www.tensordock.com/cloud-gpus.html', checkedAt: 2026-09-24 }
  - { field: currencies, url: 'https://www.tensordock.com/cloud-gpus.html', checkedAt: 2026-09-24 }
  - { field: apiAvailable, url: 'https://dashboard.tensordock.com/api/docs', checkedAt: 2026-09-24 }
  - { field: 'acquisition by Voltage Park', url: 'https://voltagepark.com/blog/voltage-park-acquires-tensordock-expanding-gpu-cloud-services-for-ai-and-machine-learning', checkedAt: 2026-09-24 }
figure:
  emoji: 🧩
  color: rgb(236, 244, 236)
  textColor: rgb(30, 80, 40)
  text: Somebody else's server, as a VM with a GPU.
ai: authored
---

TensorDock is a GPU marketplace: independent hosts supply the servers, and TensorDock runs the platform, the hypervisor and the storefront on top of them. Customers deploy KVM virtual machines with dedicated GPUs, root access and a Linux or Windows image, sized by vCPU, RAM and storage, at prices that vary by host. Core Compute locations, drawn from hosts with a consistent uptime record, add network storage and a static IP per VM, as the [Core Compute docs](https://docs.tensordock.com/virtual-machines/introduction-to-core-compute-vms) describe.

Voltage Park, a GPU cloud provider, acquired TensorDock in March 2025, and its [announcement](https://voltagepark.com/blog/voltage-park-acquires-tensordock-expanding-gpu-cloud-services-for-ai-and-machine-learning) says the marketplace continues to operate.

## Worth knowing

Billing draws on a deposited balance, and the FAQ on the [homepage](https://www.tensordock.com/) says servers are deleted automatically when it reaches zero. The price table on the [GPU cloud page](https://www.tensordock.com/cloud-gpus.html) carries its own last-updated date and points to the dashboard for live prices.

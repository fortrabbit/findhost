---
id: hivenet
name: Hivenet
urls:
  home: https://www.hivenet.com/compute
  pricing: https://www.hivenet.com/subscribe
  terms: https://www.hivenet.com/terms-of-service
  docs: https://docs.hivenet.com/
category:
  - iaas
  - gpu
description: Swiss-registered GPU cloud renting consumer-class GPU and CPU containers and virtual machines from a prepaid balance, billed by the second.
hqCountry: CH
whoManagesOs: self-managed
useCases:
  - ai-app
runtimes:
  - any
  - docker
deployMethods:
  - control-panel
  - docker-image
sshAccess: root
gpuCapacity:
  - instances
pricingModel: hourly
priceFrom: md
priceTo: 3xl
entryPrice: { amount: 0.06, currency: EUR, period: hour }
currencies:
  - EUR
billingPeriods:
  - hourly
billingTiming: advance
regions:
  - FR
  - AE
  - US
apiAvailable: public
status: out-of-scope
criterion: 5
addedAt: 2026-09-24
sources:
  - { field: criterion, url: 'https://www.hivenet.com/compute', checkedAt: 2026-09-24 }
  - { field: category, url: 'https://docs.hivenet.com/about-hivenet', checkedAt: 2026-09-24 }
  - { field: hqCountry, url: 'https://www.hivenet.com/terms-of-service', checkedAt: 2026-09-24 }
  - { field: whoManagesOs, url: 'https://docs.hivenet.com/documentation/essentials/choosing-between-a-virtual-machine-and-a-container', checkedAt: 2026-09-24 }
  - { field: sshAccess, url: 'https://docs.hivenet.com/documentation/essentials/choosing-between-a-virtual-machine-and-a-container', checkedAt: 2026-09-24 }
  - { field: useCases, url: 'https://www.hivenet.com/compute', checkedAt: 2026-09-24 }
  - { field: runtimes, url: 'https://docs.hivenet.com/documentation/essentials/custom-templates', checkedAt: 2026-09-24 }
  - { field: deployMethods, url: 'https://docs.hivenet.com/documentation/essentials/custom-templates', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://docs.hivenet.com/documentation/reference/gpu-types', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://docs.hivenet.com/documentation/inference-api/overview', checkedAt: 2026-09-24 }
  - { field: pricingModel, url: 'https://www.hivenet.com/subscribe', checkedAt: 2026-09-24 }
  - { field: priceFrom, url: 'https://docs.hivenet.com/documentation/reference/cpu-types', checkedAt: 2026-09-24 }
  - { field: priceTo, url: 'https://www.hivenet.com/subscribe', checkedAt: 2026-09-24 }
  - { field: priceTo, url: 'https://docs.hivenet.com/documentation/reference/gpu-types', checkedAt: 2026-09-24 }
  - { field: entryPrice, url: 'https://docs.hivenet.com/documentation/reference/cpu-types', checkedAt: 2026-09-24 }
  - { field: currencies, url: 'https://docs.hivenet.com/documentation/account-billing/billing-info', checkedAt: 2026-09-24 }
  - { field: billingPeriods, url: 'https://docs.hivenet.com/documentation/account-billing/billing-info', checkedAt: 2026-09-24 }
  - { field: billingTiming, url: 'https://docs.hivenet.com/documentation/account-billing/billing-info', checkedAt: 2026-09-24 }
  - { field: regions, url: 'https://www.hivenet.com/compute', checkedAt: 2026-09-24 }
  - { field: apiAvailable, url: 'https://docs.hivenet.com/public-api/get-started-with-the-compute-api', checkedAt: 2026-09-24 }
  - { field: 'certified providers', url: 'https://docs.hivenet.com/documentation/reference/faq', checkedAt: 2026-09-24 }
figure:
  emoji: 🐝
  color: rgb(74, 58, 12)
  textColor: rgb(250, 243, 222)
  text: GPU time, drawn from a hive of hosts.
ai: authored
---

Hivenet sells Compute, a GPU and CPU rental service, beside a consumer file-storage product. A customer launches a container from a template or its own image, or a virtual machine with full OS access, on NVIDIA GPUs or CPU-only hosts, and reaches it over SSH, HTTPS, TCP or UDP. An Inference API runs open-weight models from a catalog as dedicated OpenAI-compatible endpoints with a fixed number of replicas. Usage is billed by the second from a prepaid organization balance held in euros, and the [Compute page](https://www.hivenet.com/compute) names France, the UAE and the US as locations. The contracting entity in the terms is Hive Computing Services SA, in Geneva.

**Criterion 5 — two independent artifacts — is not satisfied.** Beyond Hivenet's own site, docs, blog and benchmarks, what turned up was review-site listings and one research repository that points at a Compute host in its configuration. No third-party tool integrates the Compute API, and no unaffiliated tutorial or issue thread was found. Criteria 1 to 4 hold: signup is self-serve, prices are on the [pricing page](https://www.hivenet.com/subscribe), and the [docs](https://docs.hivenet.com/) cover instances, billing and a public API.

## Worth knowing

The Compute page says the infrastructure is operated by Hivenet end to end. The [FAQ](https://docs.hivenet.com/documentation/reference/faq) describes the hardware as a distributed cloud of real devices and Hive-Certified providers, audited hosts that run dedicated machines under Hivenet's security and uptime terms.

---
id: sesterce
name: Sesterce
urls:
  home: https://www.sesterce.com
  pricing: https://cloud.sesterce.com/compute
  terms: https://www.sesterce.com/terms-of-use
  docs: https://docs.sesterce.com/
category:
  - iaas
  - bare-metal
  - gpu
description: French GPU cloud renting GPU virtual machines, bare-metal servers and inference endpoints by the hour from a prepaid balance.
hqCountry: FR
whoManagesOs: self-managed
useCases:
  - ai-app
runtimes:
  - any
  - docker
deployMethods:
  - control-panel
  - docker-image
gpuCapacity:
  - instances
  - inference
pricingModel: hourly
priceFrom: lg
priceTo: 3xl
entryPrice: { amount: 0.13, currency: USD, period: hour }
currencies:
  - USD
billingPeriods:
  - hourly
billingTiming: advance
paymentMethods:
  - card
  - bank-transfer
regions:
  - US
  - CA
  - FR
  - PL
  - FI
apiAvailable: public
cliTool: official
status: active
addedAt: 2026-09-24
sources:
  - { field: category, url: 'https://cloud.sesterce.com/compute', checkedAt: 2026-09-24 }
  - { field: hqCountry, url: 'https://www.sesterce.com/terms-of-use', checkedAt: 2026-09-24 }
  - { field: whoManagesOs, url: 'https://docs.sesterce.com/compute-instances/configure-your-compute-instance', checkedAt: 2026-09-24 }
  - { field: useCases, url: 'https://docs.sesterce.com/ai-inference-instances', checkedAt: 2026-09-24 }
  - { field: runtimes, url: 'https://docs.sesterce.com/ai-inference-instances/inference-instance-configuration', checkedAt: 2026-09-24 }
  - { field: deployMethods, url: 'https://docs.sesterce.com/ai-inference-instances/inference-instance-configuration', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://cloud.sesterce.com/compute', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://docs.sesterce.com/ai-inference-instances', checkedAt: 2026-09-24 }
  - { field: pricingModel, url: 'https://cloud.sesterce.com/compute', checkedAt: 2026-09-24 }
  - { field: priceFrom, url: 'https://cloud.sesterce.com/compute', checkedAt: 2026-09-24 }
  - { field: priceTo, url: 'https://cloud.sesterce.com/compute', checkedAt: 2026-09-24 }
  - { field: entryPrice, url: 'https://cloud.sesterce.com/compute', checkedAt: 2026-09-24 }
  - { field: currencies, url: 'https://cloud.sesterce.com/compute', checkedAt: 2026-09-24 }
  - { field: billingPeriods, url: 'https://docs.sesterce.com/welcome-on-sesterce-cloud/payment-and-billing', checkedAt: 2026-09-24 }
  - { field: billingTiming, url: 'https://docs.sesterce.com/welcome-on-sesterce-cloud/payment-and-billing', checkedAt: 2026-09-24 }
  - { field: paymentMethods, url: 'https://docs.sesterce.com/welcome-on-sesterce-cloud/payment-and-billing', checkedAt: 2026-09-24 }
  - { field: regions, url: 'https://cloud.sesterce.com/compute', checkedAt: 2026-09-24 }
  - { field: apiAvailable, url: 'https://docs.sesterce.com/api-reference', checkedAt: 2026-09-24 }
  - { field: cliTool, url: 'https://www.npmjs.com/package/sesterce-cli', checkedAt: 2026-09-24 }
figure:
  emoji: 🏛️
  color: rgb(34, 48, 92)
  textColor: rgb(236, 239, 247)
  text: GPUs by the hour, paid for in credits.
ai: authored
---

Sesterce is a French company that rents GPU compute through Sesterce Cloud: on-demand virtual machines and bare-metal servers with one to eight GPUs, CPU-only machines, persistent volumes, and inference endpoints. An endpoint runs a model from Sesterce's catalog or the customer's own Docker image, public or from a private registry, and scales between limits the customer sets, as the [inference docs](https://docs.sesterce.com/ai-inference-instances) describe. Instances are reached over SSH, and the [compute page](https://cloud.sesterce.com/compute) lists offers across regions in the US, Canada, France, Poland and Finland.

Prices are per hour in US dollars and drawn from a prepaid credit balance, which the [billing docs](https://docs.sesterce.com/welcome-on-sesterce-cloud/payment-and-billing) say is debited every minute. The company also builds data centers in France, which its [homepage](https://www.sesterce.com) offers as reserved capacity through sales.

## Worth knowing

An instance's own disk is not persistent: the [compute docs](https://docs.sesterce.com/compute-instances) say data is deleted with the instance unless a volume is attached, and a volume has to be created with the instance, in the same cloud and region. If the credit balance reaches zero, the billing docs say running instances are stopped and storage volumes deleted.

---
id: cloudscale
name: cloudscale.ch
urls:
  home: https://www.cloudscale.ch
  pricing: https://www.cloudscale.ch/en/pricing
  docs: https://www.cloudscale.ch/en/api
  terms: https://www.cloudscale.ch/en/tos.pdf
  status: https://www.cloudscale-status.net
category:
  - iaas
description: Swiss infrastructure-as-a-service provider selling virtual servers, object storage and load balancers on server hardware it owns in Swiss data centers.
founded: 2014
hqCountry: CH
whoManagesOs: self-managed
infraContract:
  - owns-metal
runtimes:
  - any
sshAccess: root
persistentStorage: true
backupsIncluded: paid-addon
pricingModel: per-resource
priceFrom: md
currencies:
  - CHF
billingPeriods:
  - daily
billingTiming: advance
contractMinimum: none
exitWithin: a-day
paymentMethods:
  - card
  - paypal
regions:
  - CH
gdprDpa: on-request
certifications:
  - iso-27001
sla: true
collaboration: clients
apiAvailable: public
cliTool: official
iacSupport:
  - terraform
  - ansible
gpuCapacity:
  - instances
status: active
addedAt: 2026-09-18
checkedAt: 2026-09-18
sources:
  - { field: founded, url: 'https://www.cloudscale.ch/en/news/2024/09/30/10-years-of-cloudscale', checkedAt: 2026-09-18 }
  - { field: hqCountry, url: 'https://www.cloudscale.ch/en/about', checkedAt: 2026-09-18 }
  - { field: infraContract, url: 'https://www.cloudscale.ch/en/knowledge-base/location-switzerland', checkedAt: 2026-09-18 }
  - { field: sshAccess, url: 'https://www.cloudscale.ch/en/pricing', checkedAt: 2026-09-18 }
  - { field: whoManagesOs, url: 'https://www.cloudscale.ch/en/pricing', checkedAt: 2026-09-18 }
  - { field: runtimes, url: 'https://www.cloudscale.ch/en/pricing', checkedAt: 2026-09-18 }
  - { field: persistentStorage, url: 'https://www.cloudscale.ch/en/pricing', checkedAt: 2026-09-18 }
  - { field: backupsIncluded, url: 'https://www.cloudscale.ch/en/pricing', checkedAt: 2026-09-18 }
  - { field: pricingModel, url: 'https://www.cloudscale.ch/en/pricing', checkedAt: 2026-09-18 }
  - { field: priceFrom, url: 'https://www.cloudscale.ch/en/pricing', checkedAt: 2026-09-18 }
  - { field: currencies, url: 'https://www.cloudscale.ch/en/pricing', checkedAt: 2026-09-18 }
  - { field: billingPeriods, url: 'https://www.cloudscale.ch/en/pricing', checkedAt: 2026-09-18 }
  - { field: billingTiming, url: 'https://www.cloudscale.ch/en/pricing', checkedAt: 2026-09-18 }
  - { field: contractMinimum, url: 'https://www.cloudscale.ch/en/news/2024/04/25/detailed-breakdown-of-past-costs', checkedAt: 2026-09-18 }
  - { field: exitWithin, url: 'https://www.cloudscale.ch/en/news/2024/04/25/detailed-breakdown-of-past-costs', checkedAt: 2026-09-18 }
  - { field: paymentMethods, url: 'https://www.cloudscale.ch/en/pricing', checkedAt: 2026-09-18 }
  - { field: regions, url: 'https://www.cloudscale.ch/en/knowledge-base/location-switzerland', checkedAt: 2026-09-18 }
  - { field: gdprDpa, url: 'https://www.cloudscale.ch/en/knowledge-base/data-processing-agreement-dpa', checkedAt: 2026-09-18 }
  - { field: certifications, url: 'https://www.cloudscale.ch/en/news/2024/09/30/10-years-of-cloudscale', checkedAt: 2026-09-18 }
  - { field: sla, url: 'https://www.cloudscale.ch/en/pricing', checkedAt: 2026-09-18 }
  - { field: collaboration, url: 'https://www.cloudscale.ch/en/knowledge-base/collaboration-in-organizations', checkedAt: 2026-09-18 }
  - { field: apiAvailable, url: 'https://www.cloudscale.ch/en/api', checkedAt: 2026-09-18 }
  - { field: cliTool, url: 'https://www.cloudscale.ch/en/api', checkedAt: 2026-09-18 }
  - { field: iacSupport, url: 'https://www.cloudscale.ch/en/api', checkedAt: 2026-09-18 }
  - { field: gpuCapacity, url: 'https://www.cloudscale.ch/en/gpu', checkedAt: 2026-09-18 }
figure:
  emoji: 🇨🇭
  color: rgb(30, 60, 96)
  textColor: rgb(228, 236, 246)
  text: Swiss VMs and object storage, on hardware it owns.
ai: authored
---

cloudscale.ch is a Zurich-based infrastructure provider selling virtual servers, GPU-equipped compute instances, block and object storage, and load balancers from two Swiss locations. A customer picks an OS image and gets root access to the machine from there. The [knowledge base entry on its Swiss location](https://www.cloudscale.ch/en/knowledge-base/location-switzerland) states that the server hardware is owned by cloudscale.ch and managed by its own engineers, standing in colocation halls run by other operators rather than on capacity rented from another cloud.

Compute, storage and network resources are priced and billed separately, metered to the second, with a customer charged for whatever is provisioned regardless of whether it is currently running. A public REST API backs an official command-line tool and SDKs, an official Terraform provider and Ansible collection, and Kubernetes clusters can provision the platform's block storage and load balancers directly through official plugins.

## Worth knowing

Usage is drawn from a prepaid account balance rather than invoiced afterward; purchased credit is not refundable, so the balance has to be topped up ahead of use and kept there. The published rate card quotes each compute flavor per 24 hours rather than the per-hour or per-month figure most other clouds lead with, which makes a quick side-by-side comparison need an extra conversion step.

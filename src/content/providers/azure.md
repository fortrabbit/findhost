---
id: azure
name: Azure
urls:
  home: https://azure.microsoft.com
  pricing: https://azure.microsoft.com/en-us/pricing/details/app-service/linux/
category:
  - iaas
description: Microsoft's hyperscale cloud — hundreds of separately metered infrastructure services, with App Service as the managed application layer above them.
ownership: subsidiary
hqCountry: US
infraContract:
  - owns-metal
whoManagesOs: self-managed
audience:
  - enterprise
runtimes:
  - any
sshAccess: root
pricingModel: usage-based
priceFrom: sm
priceTo: xl
billingPeriods:
  - hourly
  - monthly
billingTiming: arrears
exitWithin: a-day
freeTier: permanent
apiAvailable: public
cliTool: official
iacSupport:
  - terraform
regions:
  - AE
  - AT
  - AU
  - BE
  - BR
  - CA
  - CH
  - CL
  - DE
  - DK
  - ES
  - FR
  - GB
  - HK
  - ID
  - IE
  - IL
  - IN
  - IT
  - JP
  - KR
  - MX
  - MY
  - NL
  - NO
  - NZ
  - PL
  - QA
  - SE
  - SG
  - US
  - ZA
status: active
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://learn.microsoft.com/en-us/azure/reliability/regions-list', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://azure.microsoft.com/en-us/pricing/details/app-service/linux/', checkedAt: 2026-07-31 }
  - { field: priceFrom, url: 'https://azure.microsoft.com/en-us/pricing/details/app-service/linux/', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://azure.microsoft.com/en-us/pricing/details/app-service/linux/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://azure.microsoft.com/en-us/pricing/purchase-options/pay-as-you-go/', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://azure.microsoft.com/en-us/pricing/purchase-options/pay-as-you-go/', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://azure.microsoft.com/en-us/pricing/purchase-options/pay-as-you-go/', checkedAt: 2026-08-02 }
figure:
  emoji: ☁️
  color: rgb(45, 95, 190)
  textColor: rgb(234, 238, 246)
  text: Windows in the sky?
---

Azure is Microsoft's cloud platform, spanning virtual machines, storage, networking, databases and AI services, and integrating with the rest of the Microsoft estate — Entra ID, Microsoft 365, Visual Studio, .NET. That integration is why it is the default cloud in many corporate IT environments.

App Service is the platform layer above the raw infrastructure: it builds and runs web applications on managed instances, so nobody administers the virtual machine underneath. Databases are separate services with their own configuration and their own line on the bill, which is the pattern across the catalogue — what a site costs follows from how it is assembled rather than from a plan. A standing free App Service plan exists on shared compute.

## Worth knowing

Microsoft states that the free plan is intended for trials, experimentation and learning the service, and it carries no service-level agreement. The cheapest tier that can carry a production site is a paid one, and its rate is not rendered on the pricing page until a region and currency are selected.

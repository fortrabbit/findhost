---
id: azure
name: Azure
urls:
  home: https://azure.microsoft.com
  pricing: https://azure.microsoft.com/en-us/pricing/details/app-service/linux/
category: iaas
description: Microsoft's hyperscale cloud — hundreds of separately metered infrastructure services, with App Service as the managed application layer above them.
parent: Microsoft
ownership: subsidiary
hqCountry: US
infraContract:
  - owns-metal
whoManagesOs: you
audience:
  - enterprise
runtimes:
  - any
sshAccess: full
pricingModel: usage-based
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
figure:
  emoji: ☁️
  color: rgb(29, 108, 255)
  textColor: rgb(130, 200, 255)
  text: Windows in the sky?
---

## About Azure

Azure is Microsoft's cloud platform, spanning virtual machines, storage, networking, databases and AI services, and integrating with the rest of the Microsoft estate — Entra ID, Microsoft 365, Visual Studio, .NET. That integration is why it is the default cloud in many corporate IT environments.

App Service is the platform layer above the raw infrastructure: it builds and runs web applications on managed instances, so nobody administers the virtual machine underneath. Databases are separate services with their own configuration and their own line on the bill, which is the pattern across the catalogue — what a site costs follows from how it is assembled rather than from a plan. A standing free App Service plan exists on shared compute.

## Worth knowing

Microsoft states that the free plan is intended for trials, experimentation and learning the service, and it carries no service-level agreement. The cheapest tier that can carry a production site is a paid one, and its rate is not rendered on the pricing page until a region and currency are selected.

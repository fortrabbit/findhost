---
id: azure
name: Azure
url: https://azure.microsoft.com
category: iaas
pricingUrl: https://azure.microsoft.com/en-us/pricing/details/app-service/linux/
description: Microsoft Azure is the second-largest cloud infrastructure provider, with PHP reaching it through App Service on Linux.
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
status: active
checkedAt: 2026-07-31
sources:
  - { field: freeTier, url: 'https://azure.microsoft.com/en-us/pricing/details/app-service/linux/', checkedAt: 2026-07-31 }
figure:
  emoji: ☁️
  color: rgb(29, 108, 255)
  textColor: rgb(130, 200, 255)
  text: Windows in the sky?
ai: co-authored
---

## About Azure

Microsoft Azure is the second-largest cloud infrastructure provider, behind AWS. It spans hundreds of services — virtual machines, storage, networking, databases, AI — and integrates deeply with the rest of the Microsoft ecosystem: Entra ID, Microsoft 365, Visual Studio, .NET. That integration makes it the default cloud in many corporate IT environments.

PHP on Azure usually means App Service, the platform layer on top of the raw infrastructure. App Service runs PHP on Linux only — official PHP support on Windows instances ended with PHP 7.4 — and MySQL is a separate service, Azure Database for MySQL, with its own setup and its own bill.

App Service has a standing Free plan, F1, with shared compute capped at 60 CPU minutes a day, 1 GB of memory and 1 GB of storage.

## Reservations

The free plan is not a production option, and Microsoft says so: it "is intended for trials, experimentation, and learning the service" and carries no SLA. That is why this record has a free tier but no entry price band — the cheapest tier that could carry a small production site is the paid Basic plan, and its price is not rendered on the pricing page without selecting a region and currency first.

The wider hyperscaler caveat applies too: usage-based billing across many separately metered services, so what a site costs follows from how it is assembled.

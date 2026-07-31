---
id: porter
name: Porter
url: https://www.porter.run
category: server-management
pricingUrl: https://www.porter.run/pricing
description: Management layer that deploys applications from GitHub into the customer's own AWS, Azure or GCP account, priced per gigabyte of memory and per vCPU.
ownership: vc-backed
whoManagesOs: container
infraContract:
  - byo-iaas
useCases:
  - saas
  - api
  - background-jobs
  - internal-tool
audience:
  - startup
  - smb
  - enterprise
  - non-profit
deployMethods:
  - git-integration
  - docker-image
pricingModel: per-resource
entryPriceBand: 5-15
freeTier: none
figure:
  emoji: 🧳
  color: rgb(25, 35, 50)
  textColor: rgb(180, 205, 240)
  text: Heroku's manners, your AWS bill.
ai: authored
---

## About Porter

Porter gives a team the deployment experience of a platform while the workloads run in their own AWS, Azure or GCP account: deploys from GitHub, unlimited applications, preview environments, autoscaling, monitoring and logging, without anyone needing to operate Kubernetes directly.

Pricing is per resource on top of the cloud bill — six dollars a month per gigabyte of memory and thirteen per vCPU, quoted hourly as well — with volume discounts at enterprise scale, half-price for non-profits, and accelerator deals. Enterprise adds role-based access control, SAML single sign-on and an on-premises installation option.

The most useful property is what happens when the relationship ends: because the infrastructure belongs to the customer, stopping payment removes the management layer and leaves the servers running. That is a materially different exit from a platform that holds the machines.

## Reservations

Porter is not a host and owns no infrastructure, so its price is additional to a cloud bill rather than a substitute for one, and availability and jurisdiction are inherited from whichever cloud account is used. There is no free tier. Supported runtimes are not stated on the pricing page.

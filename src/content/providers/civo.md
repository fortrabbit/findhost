---
id: civo
name: Civo
url: https://www.civo.com
category: iaas
pricingUrl: https://www.civo.com/pricing
statusUrl: https://status.civo.com/
description: Kubernetes-first cloud billing only for worker nodes, with free control planes, no egress charges and GPU instances up to Blackwell.
hqCountry: GB
whoManagesOs: you
useCases:
  - saas
  - api
  - ai-app
  - data-pipeline
  - background-jobs
audience:
  - startup
  - smb
  - enterprise
  - education
runtimes:
  - docker
  - any
deployMethods:
  - api
  - cli
  - control-panel
  - docker-image
sshAccess: full
managedDatabases:
  - postgres
pricingModel: hourly
freeTier: trial
apiAvailable: public
cliTool: official
iacSupport:
  - terraform
certifications:
  - ISO 27001
  - SOC 2
figure:
  emoji: ☸️
  color: rgb(20, 40, 55)
  textColor: rgb(175, 220, 245)
  text: The control plane is free. Really.
ai: authored
---

## About Civo

Civo is a British cloud built around Kubernetes rather than one that added it later. Control-plane components are not charged for, the bill covers worker nodes and add-ons only, and data transfer in and out is free and unlimited — three decisions that between them remove most of what makes a managed-Kubernetes invoice hard to predict.

Beyond clusters it sells compute instances, S3-compatible object storage, persistent volumes, load balancers, managed PostgreSQL and GPU capacity from L40S through H100 and H200 to Blackwell. Sovereign private-cloud arrangements are offered for the United Kingdom and India. It holds SOC 2, ISO 27001 and Cyber Essentials Plus, and names Red Hat, Mercedes-Benz and Docker among its customers. New accounts get $250 of credit for the first month.

## Reservations

No regions are named on the pricing page, which is a conspicuous gap for a provider whose enterprise pitch includes sovereignty. The introductory credit is a trial rather than a free tier — there is nothing that stays free. As infrastructure, everything above the node is the customer's to run, and the Kubernetes focus means a team not already using it is buying a lot of machinery they will have to learn.

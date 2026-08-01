---
id: aws
name: Amazon Web Services
urls:
  home: https://aws.amazon.com
category: iaas
description: Amazon Web Services is the largest cloud infrastructure provider, spanning 123 Availability Zones in 39 geographic Regions.
parent: Amazon
ownership: subsidiary
hqCountry: US
infraContract:
  - owns-metal
whoManagesOs: you
audience:
  - startup
  - enterprise
runtimes:
  - any
sshAccess: full
pricingModel: usage-based
apiAvailable: public
cliTool: official
iacSupport:
  - terraform
  - cloudformation
  - ansible
regions:
  - AE
  - AU
  - BH
  - BR
  - CA
  - CH
  - DE
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
  - NZ
  - SE
  - SG
  - TH
  - TW
  - US
  - ZA
status: active
checkedAt: 2026-08-01
sources:
  - { field: infraContract, url: 'https://aws.amazon.com/about-aws/global-infrastructure/regions_az/', checkedAt: 2026-07-31 }
  - { field: regions, url: 'https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html', checkedAt: 2026-08-01 }
figure:
  emoji: 📦
  color: "#FF9900"
  textColor: rgb(155, 64, 8)
  text: Everything from A to Z.
ai: co-authored
---

## About AWS

Amazon Web Services is the largest of the hyperscalers and the infrastructure a good deal of the rest of this dataset is built on. It states that "the AWS Cloud spans 123 Availability Zones within 39 Geographic Regions", with two more Regions announced for Saudi Arabia and Chile.

PHP has no single front door here. EC2 gives a plain virtual machine, Elastic Beanstalk wraps one in a deployment workflow, [Lambda](/providers/aws-lambda/) runs functions, and the database, object storage, CDN, certificates and queueing are each a separate service with its own console and its own line on the invoice.

## Reservations

The catalogue is the problem and the point. AWS publishes well over a hundred services, each with its own options, quotas and pricing dimensions, and assembling a working web stack means choosing and wiring perhaps eight of them. That is real power for a team with the expertise, and a large amount of undifferentiated work for one without.

Cost is genuinely hard to predict. Usage-based billing across many separate services means the monthly figure emerges from the architecture rather than being quoted up front, and no entry price band is recorded here because there is no meaningful entry price to record.

Responsibility follows the same pattern. Some layers are managed, but keeping instances patched, secured and monitored remains the customer's job under the shared responsibility model.

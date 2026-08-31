---
id: aws
name: Amazon Web Services
urls:
  home: https://aws.amazon.com
category:
  - iaas
description: Amazon Web Services is the largest cloud infrastructure provider, spanning 123 Availability Zones in 39 geographic Regions.
ownership: subsidiary
hqCountry: US
infraContract:
  - owns-metal
whoManagesOs: self-managed
audience:
  - startup
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
sla: true
referringSubnets: { now: 46453, before: 46794 }
status: active
checkedAt: 2026-08-01
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-08-31 }
  - { field: infraContract, url: 'https://aws.amazon.com/about-aws/global-infrastructure/regions_az/', checkedAt: 2026-07-31 }
  - { field: regions, url: 'https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://aws.amazon.com/ec2/pricing/on-demand/', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://aws.amazon.com/ec2/pricing/on-demand/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://aws.amazon.com/agreement/', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://aws.amazon.com/agreement/', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://aws.amazon.com/agreement/', checkedAt: 2026-08-02 }
  - { field: sla, url: 'https://aws.amazon.com/compute/sla/', checkedAt: 2026-08-30 }
figure:
  emoji: 📦
  color: "#FF9900"
  textColor: rgb(155, 64, 8)
  text: Everything from A to Z.
---

Amazon Web Services is Amazon's cloud infrastructure division, and the infrastructure a good deal of the rest of this dataset is built on: managed platforms and smaller hosts frequently rent AWS capacity rather than owning hardware. Its regions span most major markets, each divided into isolated availability zones.

There is no single front door for a web application here. EC2 provides a plain virtual machine, Elastic Beanstalk wraps one in a deployment workflow, [Lambda](/aws-lambda/) runs functions, and databases, object storage, CDN, certificates and queueing are each a separate service with its own console, its own quotas and its own line on the invoice. Instances remain the customer's to operate: patching, hardening and monitoring sit on their side of the shared responsibility model.

## Worth knowing

The size of the catalogue is both the capability and the cost of it. Assembling a working web stack means selecting and wiring together a handful of independent services, each with its own options and pricing dimensions.

Billing is usage-based and metered per service, so the monthly figure emerges from the architecture rather than being quoted up front. No entry price band is recorded here because there is no meaningful entry price to record.

The [compute SLA](https://aws.amazon.com/compute/sla/) is written the same way round: 99.99% monthly uptime for instances spread across availability zones, and 99.5% for a single instance considered on its own.

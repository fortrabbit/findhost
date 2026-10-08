---
id: tencent-cloud
name: Tencent Cloud
urls:
  home: https://tencentcloud.com
  docs: https://www.tencentcloud.com/document/product
category:
  - iaas
  - vps
  - serverless
  - gpu
description: Tencent's cloud platform, selling virtual machines, VPS bundles, GPU instances and serverless functions.
hqCountry: CN
ownership: subsidiary
whoManagesOs: self-managed
runtimes:
  - any
  - python
  - node
  - go
  - php
  - java
deployMethods:
  - control-panel
  - docker-image
sshAccess: root
gpuCapacity:
  - instances
pricingModel: hourly
priceFrom: xs
entryPrice: { amount: 4.2, currency: USD, period: month }
currencies:
  - USD
billingPeriods:
  - hourly
  - monthly
  - yearly
freeTier: trial
regions:
  - CN
  - HK
  - SG
  - MY
  - ID
  - TH
  - KR
  - JP
  - SA
  - DE
  - US
  - MX
  - BR
  - CA
  - IN
supportChannels:
  - email
  - phone
  - chat
supportHours: 24-7
supportTiering: paid-upgrade
apiAvailable: public
cliTool: official
referringSubnets: { now: 1433, before: 1428 }
wikidata: Q17500218
status: active
addedAt: 2026-08-12
checkedAt: 2026-10-08
figure:
  emoji: 🐧
  color: rgb(20, 80, 130)
  textColor: rgb(232, 238, 242)
  text: Infrastructure and platform from China.
ai: authored
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-09-07 }
  - { field: wikidata, url: 'https://www.wikidata.org/wiki/Q17500218', checkedAt: 2026-10-08 }
  - { field: hqCountry, url: 'https://www.wikidata.org/wiki/Q17500218', checkedAt: 2026-10-08 }
  - { field: ownership, url: 'https://www.wikidata.org/wiki/Q17500218', checkedAt: 2026-10-08 }
  - { field: ownership, url: 'https://www.tencentcloud.com/document/product/301/9248', checkedAt: 2026-10-08 }
  - { field: category, url: 'https://www.tencentcloud.com/products/cvm', checkedAt: 2026-10-08 }
  - { field: category, url: 'https://www.tencentcloud.com/products/lighthouse', checkedAt: 2026-10-08 }
  - { field: category, url: 'https://www.tencentcloud.com/document/product/583/9210', checkedAt: 2026-10-08 }
  - { field: category, url: 'https://www.tencentcloud.com/products/gpu', checkedAt: 2026-10-08 }
  - { field: whoManagesOs, url: 'https://www.tencentcloud.com/products/cvm', checkedAt: 2026-10-08 }
  - { field: sshAccess, url: 'https://www.tencentcloud.com/document/product/1103/41525', checkedAt: 2026-10-08 }
  - { field: runtimes, url: 'https://www.tencentcloud.com/products/lighthouse', checkedAt: 2026-10-08 }
  - { field: runtimes, url: 'https://www.tencentcloud.com/document/product/583/9210', checkedAt: 2026-10-08 }
  - { field: deployMethods, url: 'https://www.tencentcloud.com/products/cvm', checkedAt: 2026-10-08 }
  - { field: deployMethods, url: 'https://www.tencentcloud.com/document/product/583/9210', checkedAt: 2026-10-08 }
  - { field: gpuCapacity, url: 'https://www.tencentcloud.com/products/gpu', checkedAt: 2026-10-08 }
  - { field: pricingModel, url: 'https://www.tencentcloud.com/document/product/213/2180', checkedAt: 2026-10-08 }
  - { field: billingPeriods, url: 'https://www.tencentcloud.com/document/product/213/2180', checkedAt: 2026-10-08 }
  - { field: currencies, url: 'https://www.tencentcloud.com/document/product/213/2180', checkedAt: 2026-10-08 }
  - { field: priceFrom, url: 'https://www.tencentcloud.com/products/lighthouse', checkedAt: 2026-10-08 }
  - { field: entryPrice, url: 'https://www.tencentcloud.com/products/lighthouse', checkedAt: 2026-10-08 }
  - { field: freeTier, url: 'https://www.tencentcloud.com/act/pro/FreeTier', checkedAt: 2026-10-08 }
  - { field: regions, url: 'https://www.tencentcloud.com/document/product/213/6091', checkedAt: 2026-10-08 }
  - { field: regions, url: 'https://www.tencentcloud.com/products/lighthouse', checkedAt: 2026-10-08 }
  - { field: supportChannels, url: 'https://www.tencentcloud.com/support', checkedAt: 2026-10-08 }
  - { field: supportHours, url: 'https://www.tencentcloud.com/support', checkedAt: 2026-10-08 }
  - { field: supportTiering, url: 'https://www.tencentcloud.com/support', checkedAt: 2026-10-08 }
  - { field: apiAvailable, url: 'https://www.tencentcloud.com/document/api', checkedAt: 2026-10-08 }
  - { field: cliTool, url: 'https://www.tencentcloud.com/products/cli', checkedAt: 2026-10-08 }
  - { field: mainland China accounts, url: 'https://www.tencentcloud.com/document/product/378/3629', checkedAt: 2026-10-08 }
  - { field: ICP filing, url: 'https://www.tencentcloud.com/solutions/icp-registration-support', checkedAt: 2026-10-08 }
---

Tencent Cloud is the cloud computing business of Tencent. Its international site sells virtual machines (CVM), a bundled VPS product called Lighthouse, GPU instances and serverless functions, priced in US dollars. Contracts outside China are signed with regional Tencent companies in Singapore, the Netherlands, the United States and South Korea, as listed in the [terms of service](https://www.tencentcloud.com/document/product/301/9248).

A CVM instance is paid either by monthly or yearly subscription in advance, or pay-as-you-go, metered by the second and settled every hour, as the [billing documentation](https://www.tencentcloud.com/document/product/213/2180) describes. Lighthouse bundles compute, disk and transfer into one monthly price. Linux instances log in as root over SSH, and everything is driven through a public API and the TCCLI command-line tool.

## Worth knowing

Tencent Cloud International serves customers outside the Chinese mainland and sends mainland users to Tencent Cloud China, per the [identity verification guide](https://www.tencentcloud.com/document/product/378/3629). An account has to complete identity verification before it can buy anything in a mainland region, and a website served from a mainland server needs an ICP filing, submitted through the Chinese site, or its traffic is blocked, as the [ICP registration page](https://www.tencentcloud.com/solutions/icp-registration-support) explains.

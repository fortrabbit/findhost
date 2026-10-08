---
id: huawei-cloud
name: Huawei Cloud
urls:
  home: https://www.huaweicloud.com/intl/en-us/
  docs: https://support.huaweicloud.com/intl/en-us/index.html
category:
  - iaas
  - paas
  - caas
  - serverless
  - gpu
description: Huawei's public cloud, selling virtual servers, managed Kubernetes, serverless functions and GPU instances.
hqCountry: CN
infraContract:
  - owns-metal
runtimes:
  - node
  - python
  - java
  - go
  - dotnet
  - php
  - docker
  - any
deployMethods:
  - control-panel
  - git
  - docker-image
sshAccess: root
gpuCapacity:
  - instances
pricingModel: usage-based
priceFrom: sm
entryPrice: { amount: 9, currency: USD, period: month }
currencies:
  - USD
billingPeriods:
  - hourly
  - monthly
  - yearly
regions:
  - CN
  - HK
  - TH
  - SG
  - ID
  - PH
  - CL
  - PE
  - MX
  - BR
  - AR
  - ZA
  - EG
  - IE
  - TR
  - SA
apiAvailable: public
cliTool: official
referringSubnets: { now: 6607, before: 6665 }
wikidata: Q58762734
status: active
addedAt: 2026-08-12
checkedAt: 2026-10-08
figure:
  emoji: 🏗️
  color: rgb(130, 20, 30)
  textColor: rgb(242, 232, 232)
  text: Chinese infrastructure and platform services.
ai: authored
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-09-07 }
  - { field: wikidata, url: 'https://www.wikidata.org/wiki/Q58762734', checkedAt: 2026-10-08 }
  - { field: category, url: 'https://www.huaweicloud.com/intl/en-us/', checkedAt: 2026-10-08 }
  - { field: category, url: 'https://www.huaweicloud.com/intl/en-us/product/cce.html', checkedAt: 2026-10-08 }
  - { field: category, url: 'https://www.huaweicloud.com/intl/en-us/product/servicestage.html', checkedAt: 2026-10-08 }
  - { field: hqCountry, url: 'https://www.huaweicloud.com/intl/en-us/declaration-sg/dpa_ie.html', checkedAt: 2026-10-08 }
  - { field: infraContract, url: 'https://www.huaweicloud.com/intl/en-us/declaration-sg/dpa_ie.html', checkedAt: 2026-10-08 }
  - { field: runtimes, url: 'https://support.huaweicloud.com/intl/en-us/productdesc-functiongraph/functiongraph_01_0200.html', checkedAt: 2026-10-08 }
  - { field: deployMethods, url: 'https://www.huaweicloud.com/intl/en-us/product/servicestage.html', checkedAt: 2026-10-08 }
  - { field: deployMethods, url: 'https://support.huaweicloud.com/intl/en-us/productdesc-functiongraph/functiongraph_01_0200.html', checkedAt: 2026-10-08 }
  - { field: sshAccess, url: 'https://support.huaweicloud.com/intl/en-us/bestpractice-ecs/ecs_bp_0716.html', checkedAt: 2026-10-08 }
  - { field: gpuCapacity, url: 'https://www.huaweicloud.com/intl/en-us/product/ecs.html', checkedAt: 2026-10-08 }
  - { field: pricingModel, url: 'https://support.huaweicloud.com/intl/en-us/drawer-ecs/ecs_parameter_0101.html', checkedAt: 2026-10-08 }
  - { field: billingPeriods, url: 'https://support.huaweicloud.com/intl/en-us/drawer-ecs/ecs_parameter_0101.html', checkedAt: 2026-10-08 }
  - { field: billingPeriods, url: 'https://www.huaweicloud.com/intl/en-us/product/flexus-x.html', checkedAt: 2026-10-08 }
  - { field: priceFrom, url: 'https://www.huaweicloud.com/intl/en-us/product/flexus-l.html', checkedAt: 2026-10-08 }
  - { field: entryPrice, url: 'https://www.huaweicloud.com/intl/en-us/product/flexus-l.html', checkedAt: 2026-10-08 }
  - { field: currencies, url: 'https://www.huaweicloud.com/intl/en-us/product/flexus-l.html', checkedAt: 2026-10-08 }
  - { field: regions, url: 'https://www.huaweicloud.com/intl/en-us/', checkedAt: 2026-10-08 }
  - { field: apiAvailable, url: 'https://support.huaweicloud.com/intl/en-us/productdesc-hcli/hcli_01.html', checkedAt: 2026-10-08 }
  - { field: cliTool, url: 'https://support.huaweicloud.com/intl/en-us/productdesc-hcli/hcli_01.html', checkedAt: 2026-10-08 }
  - { field: 'support plans', url: 'https://www.huaweicloud.com/intl/en-us/service/supportplans.html', checkedAt: 2026-10-08 }
  - { field: 'MaaS account requirement', url: 'https://www.huaweicloud.com/intl/en-us/product/maas.html', checkedAt: 2026-10-08 }
---

Huawei Cloud is the public cloud published under Huawei Cloud Computing Technologies and its affiliates. The [infrastructure entities list](https://www.huaweicloud.com/intl/en-us/declaration-sg/dpa_ie.html) in its data processing terms names the companies that run the underlying infrastructure: the Chinese entity and local Huawei or Sparkoo subsidiaries in Asia, Africa, Latin America and the Middle East.

The catalog runs from Elastic Cloud Servers and the simpler Flexus instances, where a Linux server is logged into as root, through managed Kubernetes (CCE), to FunctionGraph, a functions service that takes its built-in runtimes, a custom runtime or a container image, and ServiceStage, which deploys from source, packages, images or a Git repository. Servers are billed either pay-per-use, metered by the second and charged hourly, or on a prepaid monthly or yearly term, as the [ECS billing documentation](https://support.huaweicloud.com/intl/en-us/drawer-ecs/ecs_parameter_0101.html) sets out; spot instances follow a market price. Resources are managed through public APIs and KooCLI, the command-line tool published in the help center.

## Worth knowing

Technical support beyond self-service comes with a paid plan. Per the [support plans page](https://www.huaweicloud.com/intl/en-us/service/supportplans.html), the lowest tier answers technical tickets during business hours only, and round-the-clock technical support starts one tier up. The model API service, MaaS, is open to enterprise accounts only on the international site, as its [product page](https://www.huaweicloud.com/intl/en-us/product/maas.html) states.

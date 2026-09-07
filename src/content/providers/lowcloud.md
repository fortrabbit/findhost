---
id: lowcloud
name: lowcloud
urls:
  home: https://lowcloud.io/en
  pricing: https://lowcloud.io/en/pricing
  docs: https://lowcloud.io/en/docs
category:
  - paas
description: A Bielefeld startup that runs an application as a managed container in Germany, or operates Kubernetes inside the customer's own cloud account.
hqCountry: DE
regions:
  - DE
whoManagesOs: managed
infraContract:
  - byo-iaas
useCases:
  - web-app
  - api
  - ai-app
  - side-project
audience:
  - solo
  - agency
  - startup
  - smb
  - enterprise
runtimes:
  - docker
deployMethods:
  - git
  - docker-image
managedDatabases:
  - postgres
  - mariadb
backupsIncluded: included
pricingModel: hourly
priceFrom: sm
priceTo: xl
entryPrice: { amount: 5, currency: EUR, period: month }
currencies:
  - EUR
billingPeriods:
  - hourly
  - monthly
  - yearly
billingTiming: arrears
exitWithin: a-day
freeTier: trial
contractMinimum: none
paymentMethods:
  - card
testDomain: included
staging: included
social:
  x: https://x.com/lowcloud_de
  linkedin: https://www.linkedin.com/company/98501599
status: active
checkedAt: 2026-09-07
sources:
  - { field: category, url: 'https://lowcloud.io/en/product/container-hosting', checkedAt: 2026-09-07 }
  - { field: hqCountry, url: 'https://lowcloud.io/en/imprint', checkedAt: 2026-09-07 }
  - { field: regions, url: 'https://lowcloud.io/en/pricing', checkedAt: 2026-09-07 }
  - { field: whoManagesOs, url: 'https://lowcloud.io/en/product/container-hosting', checkedAt: 2026-09-07 }
  - { field: infraContract, url: 'https://lowcloud.io/en/docs/getting-started/get-started', checkedAt: 2026-09-07 }
  - { field: useCases, url: 'https://lowcloud.io/en', checkedAt: 2026-09-07 }
  - { field: audience, url: 'https://lowcloud.io/en/hosting-for-agencies', checkedAt: 2026-09-07 }
  - { field: runtimes, url: 'https://lowcloud.io/en/docs/app-services/build-settings', checkedAt: 2026-09-07 }
  - { field: deployMethods, url: 'https://lowcloud.io/en/product/deploy', checkedAt: 2026-09-07 }
  - { field: managedDatabases, url: 'https://lowcloud.io/en/product/container-hosting', checkedAt: 2026-09-07 }
  - { field: backupsIncluded, url: 'https://lowcloud.io/en/product/container-hosting', checkedAt: 2026-09-07 }
  - { field: pricingModel, url: 'https://lowcloud.io/en/pricing', checkedAt: 2026-09-07 }
  - { field: priceFrom, url: 'https://lowcloud.io/en/pricing', checkedAt: 2026-09-07 }
  - { field: priceTo, url: 'https://lowcloud.io/en/pricing', checkedAt: 2026-09-07 }
  - { field: entryPrice, url: 'https://lowcloud.io/en/pricing', checkedAt: 2026-09-07 }
  - { field: currencies, url: 'https://lowcloud.io/en/pricing', checkedAt: 2026-09-07 }
  - { field: billingPeriods, url: 'https://lowcloud.io/en/pricing', checkedAt: 2026-09-07 }
  - { field: billingTiming, url: 'https://lowcloud.io/en/pricing', checkedAt: 2026-09-07 }
  - { field: exitWithin, url: 'https://lowcloud.io/en/pricing', checkedAt: 2026-09-07 }
  - { field: freeTier, url: 'https://lowcloud.io/en/pricing', checkedAt: 2026-09-07 }
  - { field: contractMinimum, url: 'https://lowcloud.io/en/pricing', checkedAt: 2026-09-07 }
  - { field: paymentMethods, url: 'https://lowcloud.io/en/pricing', checkedAt: 2026-09-07 }
  - { field: testDomain, url: 'https://lowcloud.io/en/docs/app-services/custom-domains', checkedAt: 2026-09-07 }
  - { field: staging, url: 'https://lowcloud.io/en/product/deploy', checkedAt: 2026-09-07 }
  - { field: 'EXIST grant', url: 'https://lowcloud.io/en/about', checkedAt: 2026-09-07 }
  - { field: 'product history', url: 'https://web.archive.org/web/20250929191251/https://lowcloud.io/', checkedAt: 2026-09-07 }
  - { field: 'product history', url: 'https://web.archive.org/web/20260118101625/https://lowcloud.io/en/pricing', checkedAt: 2026-09-07 }
figure:
  emoji: 🧭
  color: rgb(22, 42, 88)
  textColor: rgb(214, 226, 250)
  text: For people who would rather not know what hosting is.
ai: authored
---

lowcloud is a container platform from a Bielefeld startup, lowcloud UG (haftungsbeschränkt), sold in two shapes. The managed one runs an application as a container on infrastructure the company places in Germany, sized in six steps from a quarter of a CPU core upward and metered by the second. The input is a repository on GitHub, GitLab or Bitbucket, or a prebuilt Docker image; the platform detects the framework, builds it, issues certificates and gives every pull request an environment of its own. PostgreSQL and MariaDB are managed beside the containers, with daily backups included. The audience it names is people who built something with an AI coding tool and do not want to learn deployment: a chat in the dashboard explains each step.

The second shape is bring-your-own-cloud. lowcloud provisions and operates Kubernetes clusters inside the customer's own account at Hetzner, a hyperscaler or on premises, and sells operation, onboarding and service levels as fixed packages. The documentation mostly describes this version. The same company sells AI agents under lowcloud.de, and it is supported by the EXIST founders' grant from the German federal economics ministry.

## Worth knowing

The product has changed shape more than once within a year. In [autumn 2025](https://web.archive.org/web/20250929191251/https://lowcloud.io/) the site sold one-click deployment of a git repository to AWS, Google Cloud or Azure; in [January 2026](https://web.archive.org/web/20260118101625/https://lowcloud.io/en/pricing) it listed Pro and Enterprise plans; by mid-2026 it had become per-container pricing on German infrastructure. A record read today describes the third version.

Who operates the hardware behind the managed containers is not stated. The footer carries Hetzner's logo among partner logos and the guides set up clusters on Hetzner Cloud, but no page says the managed tier runs there.

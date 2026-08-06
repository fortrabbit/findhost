---
id: koyeb
name: Koyeb
urls:
  home: https://www.koyeb.com
  pricing: https://www.koyeb.com/pricing
  status: https://status.koyeb.com/
  docs: https://www.koyeb.com/docs
category:
  - paas
description: French platform that deploys containers and repositories across global regions with scale-to-zero, per-second billing, GPU instances and serverless Postgres.
hqCountry: FR
ownership: vc-backed
whoManagesOs: you
useCases:
  - api
  - web-app
  - ai-app
  - background-jobs
  - data-pipeline
audience:
  - solo
  - startup
  - smb
  - enterprise
runtimes:
  - docker
  - node
  - python
  - go
  - ruby
  - php
  - any
deployMethods:
  - git-integration
  - docker-image
pricingModel: usage-based
priceFrom: md
priceTo: xl
currencies:
  - USD
billingPeriods:
  - monthly
billingTiming: arrears
freeTier: none
entryPrice: { amount: 29, currency: USD, period: month }
regions:
  - US
  - DE
  - FR
  - SG
  - JP
apiAvailable: public
cliTool: official
status: active
checkedAt: 2026-08-01
sources:
  - { field: priceFrom, url: 'https://www.koyeb.com/pricing', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://www.koyeb.com/pricing', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://www.koyeb.com/pricing', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://www.koyeb.com/pricing', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://www.koyeb.com/pricing', checkedAt: 2026-08-02 }
  - { field: pricingModel, url: 'https://www.koyeb.com/pricing', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://www.koyeb.com/pricing', checkedAt: 2026-07-31 }
  - { field: entryPrice, url: 'https://www.koyeb.com/pricing', checkedAt: 2026-08-01 }
  - { field: regions, url: 'https://www.koyeb.com/docs/reference/regions', checkedAt: 2026-08-01 }
figure:
  emoji: 🛫
  color: rgb(30, 35, 80)
  textColor: rgb(185, 195, 255)
  text: Scale to zero, pay by the second.
ai: authored
---

Koyeb is a Paris-founded platform that takes a Git repository or a container image and runs it across regions in the Americas, Europe and Asia, with automatic HTTPS, scale-to-zero and per-second billing. Alongside ordinary CPU workloads it rents GPU instances by the hour and offers a serverless Postgres, which puts it in front of the machine-learning inference market as much as the web one.

Plans are a monthly subscription with a usage credit attached, stepping from a single-developer tier through a team tier to a quoted enterprise tier that adds dedicated infrastructure and access to AWS regions. Consumption is billed by the second on top of the subscription.

## Worth knowing

The plan fee is separate from consumption, so the entry price is a subscription with a small credit attached rather than the cost of running anything, and the bill moves with traffic. There is no permanently free plan, and the published uptime commitment applies only from the middle tier upwards.

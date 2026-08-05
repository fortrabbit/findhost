---
id: hostim
name: Hostim
urls:
  home: https://hostim.dev
  pricing: https://hostim.dev/pricing/
  terms: https://hostim.dev/docs/legal/terms/
  docs: https://hostim.dev/docs/
  status: https://status.hostim.dev
category: paas
description: Hostim is a Docker-first platform-as-a-service from Germany, deploying container images, Git repositories and Compose files onto bare metal in the EU.
founded: 2025
hqCountry: DE
regions:
  - DE
entryPrice: { amount: 2.5, currency: EUR, period: month }
priceFrom: xs
priceTo: md
currencies:
  - EUR
billingPeriods:
  - hourly
  - monthly
exitWithin: a-day
billingTiming: arrears
pricingModel: fixed-tier
freeTier: trial
social:
  github: https://github.com/hostimdev
status: active
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://hostim.dev', checkedAt: 2026-08-01 }
  - { field: hqCountry, url: 'https://hostim.dev', checkedAt: 2026-08-01 }
  - { field: founded, url: 'https://hostim.dev', checkedAt: 2026-08-01 }
  - { field: entryPrice, url: 'https://hostim.dev/pricing/', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://hostim.dev/pricing/', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://hostim.dev/pricing/', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://hostim.dev/pricing/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://hostim.dev/pricing/', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://hostim.dev/pricing/', checkedAt: 2026-08-02 }
  - { field: pricingModel, url: 'https://hostim.dev/pricing/', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://hostim.dev/pricing/', checkedAt: 2026-08-01 }
figure:
  emoji: 🐳
  color: rgb(24, 38, 60)
  textColor: rgb(150, 200, 255)
  text: Docker apps, no YAML.
editorialNote: Hostim is run by a former fortrabbit employee. Disclosed because fortrabbit publishes this site; it changes nothing about how the record is written.
---

Hostim is a Docker-first hosting platform out of Germany. Deploy a Docker image, a Git repository or a Docker Compose file and it runs on bare metal in the EU — no Kubernetes, no YAML to hand-write. Managed MySQL, PostgreSQL and Redis and persistent volumes are built in, HTTPS and monitoring come as standard, and scaling is a slider in the interface.

Pricing is flat and per-project rather than metered by consumption, which keeps a client handover to a predictable line item. The platform is polyglot by design, built around containers rather than around one language: the framework examples lean towards Node, Python, Java and Ruby, and anything that ships in a container runs the same way.

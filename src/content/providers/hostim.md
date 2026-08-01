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
description: Hostim is a Docker-first PaaS from Germany, in the Railway mold.
founded: 2025
hqCountry: DE
regions:
  - DE
entryPrice: { amount: 2.5, currency: EUR, period: month }
entryPriceBand: under-5
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
  - { field: social, url: 'https://hostim.dev', checkedAt: 2026-08-01 }
  - { field: entryPrice, url: 'https://hostim.dev/pricing/', checkedAt: 2026-08-01 }
  - { field: entryPriceBand, url: 'https://hostim.dev/pricing/', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://hostim.dev/pricing/', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://hostim.dev/pricing/', checkedAt: 2026-08-01 }
figure:
  emoji: 🐳
  color: rgb(24, 38, 60)
  textColor: rgb(150, 200, 255)
  text: Docker apps, no YAML.
editorialNote: Hostim is run by a former fortrabbit employee. Disclosed because fortrabbit publishes this site; it changes nothing about how the record is written.
ai: co-authored
---

## About Hostim

Hostim is a Docker-first hosting platform out of Germany, in the same mold as Railway. Deploy a Docker image, a Git repo, or a Docker Compose file, and it runs on bare metal in the EU. No Kubernetes, no YAML to hand-write. Managed MySQL, PostgreSQL, Redis, and persistent volumes are built in, HTTPS and monitoring come automatic, and scaling is a slider in the UI. Pricing is flat and per-project, apps from €2.50/mo, which keeps client handovers clean.

It is polyglot by design, built around containers rather than one language. The framework list leans Node, Python, Java, and Ruby. PHP is not called out, but anything that ships in a container runs, so a PHP app works with a Dockerfile, the same as on any container host.

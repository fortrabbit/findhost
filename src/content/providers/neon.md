---
id: neon
name: Neon
urls:
  home: https://neon.com
  pricing: https://neon.com/pricing
  docs: https://neon.com/docs
category:
  - dbaas
description: Managed Postgres billed by compute hour, with branching, read replicas and an HTTP data API.
runtimes: null
deployMethods: null
sshAccess: null
managedDatabases:
  - postgres
ownership: subsidiary
pricingModel: usage-based
freeTier: permanent
currencies:
  - USD
referringSubnets: { now: 1910, before: 1925 }
status: active
checkedAt: 2026-08-12
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-08-31 }
  - { field: category, url: 'https://neon.com/pricing', checkedAt: 2026-08-12 }
  - { field: managedDatabases, url: 'https://neon.com/pricing', checkedAt: 2026-08-12 }
  - { field: pricingModel, url: 'https://neon.com/pricing', checkedAt: 2026-08-12 }
  - { field: freeTier, url: 'https://neon.com/pricing', checkedAt: 2026-08-12 }
  - { field: ownership, url: 'https://neon.com', checkedAt: 2026-08-12 }
figure:
  emoji: 🟩
  color: rgb(30, 90, 60)
  textColor: rgb(234, 248, 240)
  text: Postgres you can branch like a repo.
ai: authored
---

Neon sells managed Postgres, metered by compute hour rather than by plan, with storage billed separately. Its distinguishing feature is branching: a copy of a database made the way a branch of a repository is made, which is what puts a database into a per-pull-request environment without a restore. Authentication is sold alongside it, and the company states it has been part of Databricks since 2025.

## Worth knowing

Nothing of a customer's application runs here — no runtime, no deploy, no shell — so those rows read as not applicable rather than unknown. This is one half of a setup and the application belongs on a [host](/categories/paas/).

Compute-hour billing suits work that idles: a database nobody queries costs close to nothing, and one under constant load costs whatever the load costs, with no plan ceiling to stop it.

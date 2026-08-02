---
id: supabase
name: Supabase
urls:
  home: https://supabase.com
  pricing: https://supabase.com/pricing
  status: https://status.supabase.com/
  terms: https://supabase.com/terms
  docs: https://supabase.com/docs
category: serverless
description: Open-source backend built on PostgreSQL, with authentication, storage, realtime and Edge Functions that run the customer's own TypeScript on Deno.
hqCountry: US
ownership: vc-backed
whoManagesOs: provider
useCases:
  - api
  - saas
  - ai-app
  - side-project
  - internal-tool
audience:
  - indie-hacker
  - startup
  - smb
  - enterprise
runtimes:
  - node
deployMethods:
  - cli
  - git-integration
  - api
managedDatabases:
  - postgres
pricingModel: fixed-tier
priceFrom: md
priceTo: 2xl
currencies:
  - USD
billingPeriods:
  - monthly
  - yearly
exitWithin: a-quarter
freeTier: permanent
regions:
  - US
  - CA
  - BR
  - IE
  - GB
  - FR
  - DE
  - CH
  - SE
  - IN
  - SG
  - JP
  - KR
  - AU
apiAvailable: public
cliTool: official
social:
  github: https://github.com/supabase
  x: https://twitter.com/supabase
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://supabase.com/docs/guides/platform/regions', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://supabase.com/pricing', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://supabase.com/pricing', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://supabase.com/pricing', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://supabase.com/terms', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://supabase.com/terms', checkedAt: 2026-08-02 }
  - { field: ownership, url: 'https://supabase.com/company', checkedAt: 2026-08-01 }
  - { field: social, url: 'https://supabase.com', checkedAt: 2026-08-01 }
  - { field: urls, url: 'https://supabase.com/docs/company/sla', checkedAt: 2026-08-01 }
figure:
  emoji: ⚡
  color: rgb(20, 50, 35)
  textColor: rgb(160, 240, 195)
  text: Postgres, with the rest bolted on.
ai: authored
---

## About Supabase

Supabase is a managed PostgreSQL database with the things applications usually need built around it — authentication, row-level security, file storage, realtime subscriptions and vector search — plus Edge Functions, which run the customer's own TypeScript on Deno. It is the functions that make it a place where application code runs rather than only a database service.

Plans are fixed tiers with published quotas for database size, egress, file storage, monthly active users and function invocations, and metered overage above them. The platform is open source and can be self-hosted, which limits lock-in: the same stack runs on a customer's own machines if the commercial relationship ends.

## Worth knowing

Projects on the free tier pause after a period of inactivity, which makes that tier suited to work in progress rather than to something quietly serving traffic. Edge Functions are a Deno runtime, not a general-purpose application server.

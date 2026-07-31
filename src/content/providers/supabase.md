---
id: supabase
name: Supabase
url: https://supabase.com
category: serverless
pricingUrl: https://supabase.com/pricing
statusUrl: https://status.supabase.com/
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
entryPriceBand: free-tier
freeTier: permanent
apiAvailable: public
cliTool: official
figure:
  emoji: ⚡
  color: rgb(20, 50, 35)
  textColor: rgb(160, 240, 195)
  text: Postgres, with the rest bolted on.
ai: authored
---

## About Supabase

Supabase is a managed PostgreSQL database with the things applications usually need built around it — authentication, row-level security, file storage, realtime subscriptions and vector search — plus Edge Functions, which run the customer's own TypeScript on Deno. It is the functions that make it a place where application code runs rather than only a database service.

Plans are Free, Pro at twenty-five dollars a month, Team at five hundred and ninety-nine, and a custom enterprise tier. The free tier allows two active projects with 500 MB of database, 5 GB of egress, a gigabyte of file storage, 50,000 monthly active users and 500,000 function invocations. Pro raises those substantially and prices overage openly at two dollars per million further invocations.

The platform is open source and can be self-hosted, which is a real constraint on lock-in — the same stack runs on a customer's own machines if the commercial relationship ends.

## Reservations

Free projects pause after a week of inactivity, so the tier suits work in progress rather than something quietly serving traffic. Regions are not stated on the pricing page. The step from Pro to Team is a very large one for a small team that needs a single Team-tier feature, and Edge Functions are a Deno runtime rather than a general application server — there is no PHP, Python or Ruby here.

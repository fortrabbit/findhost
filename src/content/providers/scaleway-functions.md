---
id: scaleway-functions
name: Scaleway Functions
url: https://www.scaleway.com/en/serverless-functions/
category: serverless
pricingUrl: https://www.scaleway.com/en/serverless-functions/
description: Scaleway Functions is a European function-as-a-service with a native PHP runtime, billed by request and by memory consumed.
whoManagesOs: provider
useCases:
  - api
  - background-jobs
runtimes:
  - php
  - node
  - python
  - go
  - rust
runtimeVersions:
  php:
    - '8.5'
  node:
    - '24'
    - '26'
  python:
    - '3.14'
  go:
    - '1.25'
    - '1.26'
  rust:
    - '1.96'
persistentStorage: false
pricingModel: usage-based
regions:
  - FR
  - NL
  - PL
status: active
checkedAt: 2026-07-31
sources:
  - { field: runtimes, url: 'https://www.scaleway.com/en/serverless-functions/', checkedAt: 2026-07-31 }
  - { field: runtimeVersions, url: 'https://www.scaleway.com/en/serverless-functions/', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://www.scaleway.com/en/serverless-functions/', checkedAt: 2026-07-31 }
  - { field: regions, url: 'https://www.scaleway.com/en/serverless-functions/', checkedAt: 2026-07-31 }
figure:
  emoji: 🧵
  color: rgb(50, 30, 70)
  textColor: rgb(200, 170, 255)
  text: EU functions, native PHP.
ai: co-authored
---

## About Scaleway Functions

Scaleway Functions is the French cloud provider's function-as-a-service. The documented runtimes are Node.js, Go, Python, PHP and Rust — as of July 2026, PHP 8.5, Node 24 and 26, Python 3.14, Go 1.25 and 1.26, and Rust 1.96. PHP is a first-class runtime here rather than a custom layer, which is unusual in this segment.

Billing is usage-based: by request and by memory consumed, charged by the millisecond of execution, with a monthly free tier the marketing page describes but does not quantify. Three regions are offered — Paris, Amsterdam and Warsaw.

Like any FaaS, it scales to zero and bills per invocation, and the usual strings attach. Stateless handlers. A throwaway filesystem. External stores for anything that has to persist. It is built for event-driven work, not a full request-response app.

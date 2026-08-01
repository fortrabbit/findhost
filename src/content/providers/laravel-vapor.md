---
id: laravel-vapor
name: Laravel Vapor
urls:
  home: https://vapor.laravel.com
  pricing: https://vapor.laravel.com
category: serverless
description: Laravel Vapor is a serverless deployment platform for Laravel, powered by AWS. The subscription is flat; the AWS bill is the customer's own.
infraContract:
  - byo-iaas
whoManagesOs: provider
useCases:
  - saas
  - api
specialisation:
  - laravel
software:
  - laravel
runtimes:
  - php
runsOn:
  - aws
pricingModel: fixed-tier
entryPriceBand: free-tier
freeTier: permanent
persistentStorage: false
status: active
checkedAt: 2026-07-31
sources:
  - { field: runsOn, url: 'https://vapor.laravel.com', checkedAt: 2026-07-31 }
  - { field: infraContract, url: 'https://vapor.laravel.com', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://vapor.laravel.com', checkedAt: 2026-07-31 }
  - { field: entryPriceBand, url: 'https://vapor.laravel.com', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://vapor.laravel.com', checkedAt: 2026-07-31 }
figure:
  emoji: 🌫️
  color: rgb(40, 44, 60)
  textColor: rgb(255, 170, 160)
  text: Laravel, evaporated to Lambda.
ai: co-authored
---

## About Laravel Vapor

Vapor is Laravel's own serverless platform, built on Bref and AWS Lambda. It wires up the AWS pieces a serverless Laravel app needs (Lambda, API Gateway, S3, SQS, RDS, CloudFront, certificates) and handles the Laravel conventions raw Bref leaves to you: asset compilation, queues, migrations.

Three tiers are sold: a free Sandbox limited to a single project and ten deployments, Unlimited Monthly at $39 a month, and Unlimited Annual at $399 a year. All three state that the price "does not include your AWS cloud costs" — the customer links their own AWS account and Amazon bills them directly, with Vapor stating it never marks AWS prices up.

## Reservations

The subscription is not the cost of running the application. Lambda, API Gateway, S3, SQS, RDS and CloudFront are all billed by Amazon against the customer's own account, so the total is two invoices and the larger one is not the one on this page.

It suits spiky, unpredictable traffic. For the steady default, Laravel now steers people to the non-serverless [Laravel Cloud](/providers/laravel-cloud/) instead.

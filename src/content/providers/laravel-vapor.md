---
id: laravel-vapor
name: Laravel Vapor
urls:
  home: https://vapor.laravel.com
  pricing: https://vapor.laravel.com
  docs: https://docs.vapor.build
category:
  - serverless
description: Laravel Vapor is a serverless deployment platform for Laravel applications on AWS Lambda, sold as a flat subscription on top of the customer's own AWS bill.
infraContract:
  - byo-iaas
whoManagesOs: managed
useCases:
  - web-app
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
priceFrom: md
priceTo: md
currencies:
  - USD
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
freeTier: permanent
persistentStorage: false
status: active
checkedAt: 2026-07-31
sources:
  - { field: runsOn, url: 'https://vapor.laravel.com', checkedAt: 2026-07-31 }
  - { field: infraContract, url: 'https://vapor.laravel.com', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://vapor.laravel.com', checkedAt: 2026-07-31 }
  - { field: priceFrom, url: 'https://vapor.laravel.com', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://vapor.laravel.com', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://vapor.laravel.com', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://vapor.laravel.com', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://vapor.laravel.com', checkedAt: 2026-08-02 }
  - { field: freeTier, url: 'https://vapor.laravel.com', checkedAt: 2026-07-31 }
figure:
  emoji: 🌫️
  color: rgb(40, 44, 60)
  textColor: rgb(255, 170, 160)
  text: Laravel, evaporated to Lambda.
---

Vapor is Laravel's own serverless platform, built on Bref and AWS Lambda. It wires up the AWS pieces a serverless Laravel application needs — Lambda, API Gateway, S3, SQS, RDS, CloudFront, certificates — and handles the Laravel conventions that raw Bref leaves to the developer: asset compilation, queues, migrations.

It is sold as a flat subscription, with a limited free sandbox below it. Every tier states that the price does not include AWS costs: the customer links their own AWS account, Amazon bills that account directly, and Vapor states it never marks AWS prices up.

## Worth knowing

The subscription is not the cost of running the application. Lambda, API Gateway, S3, SQS, RDS and CloudFront are billed by Amazon against the customer's own account, so there are two invoices and the larger one is not the one Vapor prices.

Laravel has since launched [Laravel Cloud](/laravel-cloud/), a non-serverless platform from the same company.

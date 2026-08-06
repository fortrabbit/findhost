---
id: aws-lambda
name: AWS Lambda
urls:
  home: https://aws.amazon.com/lambda/
  pricing: https://aws.amazon.com/lambda/pricing/
category:
  - serverless
description: Amazon's function-as-a-service primitive, running a handler on demand in a short-lived isolated environment and billing per invocation.
parent: Amazon
whoManagesOs: managed
useCases:
  - api
  - background-jobs
  - data-pipeline
runtimes:
  - node
  - python
  - java
  - dotnet
  - ruby
  - docker
persistentStorage: false
pricingModel: usage-based
priceFrom: xs
priceTo: lg
billingPeriods:
  - monthly
billingTiming: arrears
exitWithin: a-month
freeTier: permanent
apiAvailable: public
cliTool: official
iacSupport:
  - terraform
  - cloudformation
regions:
  - AE
  - AU
  - BH
  - BR
  - CA
  - CH
  - DE
  - ES
  - FR
  - GB
  - HK
  - ID
  - IE
  - IL
  - IN
  - IT
  - JP
  - KR
  - MX
  - MY
  - NZ
  - SE
  - SG
  - TH
  - TW
  - US
  - ZA
status: active
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://docs.aws.amazon.com/general/latest/gr/lambda-service.html', checkedAt: 2026-08-01 }
  - { field: runtimes, url: 'https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://aws.amazon.com/lambda/pricing/', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://aws.amazon.com/lambda/pricing/', checkedAt: 2026-07-31 }
  - { field: priceFrom, url: 'https://aws.amazon.com/lambda/pricing/', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://aws.amazon.com/lambda/pricing/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://aws.amazon.com/lambda/pricing/', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://aws.amazon.com/agreement/', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://aws.amazon.com/agreement/', checkedAt: 2026-08-02 }
figure:
  emoji: ⚙️
  color: rgb(77, 103, 157)
  textColor: rgb(234, 238, 245)
  text: The raw serverless primitive.
---

Lambda runs a handler on demand in an isolated, short-lived environment and bills per request and per gigabyte-second of execution. It is a building block rather than a platform: the database, object storage, HTTP gateway and session handling are separate AWS services assembled around it. The execution model carries hard edges — a bounded run time per invocation, a limit on deployment package size, a small ephemeral filesystem and no state carried from one invocation to the next.

The managed runtimes AWS lists are Node.js, Python, Java, .NET and Ruby, alongside an OS-only runtime for everything else and the option of supplying a container image. Any language outside the managed set arrives through a custom runtime: a `bootstrap` executable implementing the Lambda runtime loop, in practice supplied by a community layer rather than written by hand.

A monthly allowance of requests and compute time is included and recurs each month rather than expiring, with usage above it metered.

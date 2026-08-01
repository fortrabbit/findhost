---
id: aws-lambda
name: AWS Lambda
urls:
  home: https://aws.amazon.com/lambda/
  pricing: https://aws.amazon.com/lambda/pricing/
category: serverless
description: AWS Lambda is the function-as-a-service primitive most serverless PHP runs on. PHP is not a managed runtime; it arrives through a custom one.
parent: Amazon
whoManagesOs: provider
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
entryPriceBand: free-tier
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
  - { field: entryPriceBand, url: 'https://aws.amazon.com/lambda/pricing/', checkedAt: 2026-07-31 }
figure:
  emoji: ⚙️
  color: rgb(35, 43, 60)
  textColor: rgb(255, 178, 102)
  text: The raw serverless primitive.
ai: co-authored
---

## About AWS Lambda

Lambda is the primitive most serverless PHP ends up running on. It runs a handler on demand in an isolated, short-lived environment and bills per invocation. The hard edges come with it. A 15-minute limit. A 250 MB unzipped package. 512 MB of ephemeral `/tmp` by default. No state between invocations. Lambda is a building block, nothing more. The database, storage, gateway, and session handling are separate services you bolt on.

The managed runtimes AWS lists are Node.js, Python, Java, .NET and Ruby, plus an OS-only runtime for everything else and the option of a container image. PHP is not among them: it runs through a custom runtime, a `bootstrap` executable implementing the Lambda runtime loop. Almost nobody writes that by hand.

Billing is per request and per GB-second: $0.20 per million requests and $0.0000166667 per GB-second on x86 beyond a monthly free allowance of one million requests and 400,000 GB-seconds. That allowance recurs every month rather than expiring.

## Running PHP on Lambda: Bref

Bref is how it actually gets done. It is open-source software, not a host of its own: the runtimes and layers that turn Lambda into a PHP platform, across PHP 8.2 to 8.5. Three shapes. An FPM runtime for a normal web app behind PHP-FPM. A function runtime for event-driven handlers without FPM. A console runtime for Artisan and Symfony commands.

Deployment runs through the Serverless Framework, on a free v3 fork Bref keeps alive after the upstream tool went paid. The docs are good and the project is widely used. But it is still a layer on AWS, so the app has to adapt to Lambda: sessions moved out, storage treated as throwaway, no persistent database connections.

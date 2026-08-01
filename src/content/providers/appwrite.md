---
id: appwrite
name: Appwrite
urls:
  home: https://appwrite.io
  pricing: https://appwrite.io/pricing
  status: https://status.appwrite.online/
category: serverless
description: Open-source backend platform sold as a hosted service, running user functions alongside managed databases, authentication, storage and messaging.
whoManagesOs: container
useCases:
  - api
  - saas
  - side-project
  - ai-app
  - internal-tool
audience:
  - indie-hacker
  - startup
  - smb
  - enterprise
runtimes:
  - node
  - php
  - python
  - ruby
  - dotnet
  - java
  - go
deployMethods:
  - cli
  - git-integration
  - api
pricingModel: fixed-tier
entryPriceBand: free-tier
freeTier: permanent
regions:
  - DE
  - US
  - AU
  - SG
  - CA
apiAvailable: public
cliTool: official
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://appwrite.io/docs/products/network/regions', checkedAt: 2026-08-01 }
  - { field: entryPriceBand, url: 'https://appwrite.io/pricing', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://appwrite.io/pricing', checkedAt: 2026-08-01 }
figure:
  emoji: 🧰
  color: rgb(60, 20, 45)
  textColor: rgb(255, 190, 225)
  text: The backend, minus the backend.
ai: authored
---

## About Appwrite

Appwrite is an open-source backend platform — databases, authentication, file storage, messaging and functions — sold as a hosted service by the company that maintains it. The functions are what put it in this dataset rather than in a list of managed databases: user code in Node, PHP, Python, Ruby, .NET, Java, Go and several other runtimes executes on the platform and is reachable over HTTP.

The free plan is generous and permanent: five gigabytes of bandwidth, two of storage, 750,000 executions and 75,000 monthly active users. Pro starts at twenty-five dollars a month with unlimited databases, buckets and functions, daily backups with a week of retention, and openly published overage rates — fifteen dollars per hundred extra gigabytes of bandwidth, two per million extra executions. Budget caps and alerts are available so the overages cannot run away unnoticed.

Because the software is open source, the same stack can be self-hosted, which bounds the lock-in in a way most backend platforms cannot match.

## Reservations

Free projects are paused after a week of inactivity and limited to two per account, which makes the tier better suited to something in active development than to something left running. Payment is by card only. Regions are not stated on the pricing page. Enterprise terms, SLAs and compliance packages are quoted rather than published.

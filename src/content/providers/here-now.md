---
id: here-now
name: here.now
urls:
  home: https://here.now
  pricing: https://here.now/pricing.md
  docs: https://here.now/docs
  terms: https://here.now/terms
category:
  - static
description: Static hosting that turns an agent's files into a live URL, with no account needed for a temporary one.
hqCountry: US
whoManagesOs: managed
useCases:
  - static-site
  - dashboard
  - web-app
runtimes:
  - static
sshAccess: none
pricingModel: fixed-tier
priceFrom: xs
priceTo: md
entryPrice: { amount: 4, currency: USD, period: month }
currencies:
  - USD
billingPeriods:
  - monthly
paymentMethods:
  - card
freeTier: permanent
domainRegistration: paid-addon
dnsHosting: included
emailHosting: none
testDomain: included
collaboration: team
apiAvailable: public
cliTool: official
supportChannels:
  - email
status: active
addedAt: 2026-09-18
checkedAt: 2026-09-18
figure:
  emoji: 📍
  color: rgb(30, 41, 59)
  textColor: rgb(240, 244, 248)
  text: Files go up, a URL comes back.
ai: authored
sources:
  - { field: hqCountry, url: 'https://here.now/terms', checkedAt: 2026-09-18 }
  - { field: category, url: 'https://here.now/docs', checkedAt: 2026-09-18 }
  - { field: runtimes, url: 'https://here.now/docs', checkedAt: 2026-09-18 }
  - { field: sshAccess, url: 'https://here.now/docs', checkedAt: 2026-09-18 }
  - { field: useCases, url: 'https://here.now/llms-full.txt', checkedAt: 2026-09-18 }
  - { field: pricingModel, url: 'https://here.now/pricing.md', checkedAt: 2026-09-18 }
  - { field: priceFrom, url: 'https://here.now/pricing.md', checkedAt: 2026-09-18 }
  - { field: priceTo, url: 'https://here.now/pricing.md', checkedAt: 2026-09-18 }
  - { field: entryPrice, url: 'https://here.now/pricing.md', checkedAt: 2026-09-18 }
  - { field: currencies, url: 'https://here.now/pricing.md', checkedAt: 2026-09-18 }
  - { field: billingPeriods, url: 'https://here.now/pricing.md', checkedAt: 2026-09-18 }
  - { field: paymentMethods, url: 'https://here.now/pricing.md', checkedAt: 2026-09-18 }
  - { field: freeTier, url: 'https://here.now/pricing.md', checkedAt: 2026-09-18 }
  - { field: domainRegistration, url: 'https://here.now/pricing.md', checkedAt: 2026-09-18 }
  - { field: dnsHosting, url: 'https://here.now/pricing.md', checkedAt: 2026-09-18 }
  - { field: testDomain, url: 'https://here.now/docs', checkedAt: 2026-09-18 }
  - { field: collaboration, url: 'https://here.now/pricing.md', checkedAt: 2026-09-18 }
  - { field: apiAvailable, url: 'https://here.now/openapi.json', checkedAt: 2026-09-18 }
  - { field: cliTool, url: 'https://here.now/install.sh', checkedAt: 2026-09-18 }
  - { field: supportChannels, url: 'https://here.now/docs', checkedAt: 2026-09-18 }
  - { field: 'object storage', url: 'https://here.now/llms-full.txt', checkedAt: 2026-09-18 }
  - { field: 'editor credits', url: 'https://here.now/pricing.md', checkedAt: 2026-09-18 }
  - { field: 'registrant of record', url: 'https://here.now/pricing.md', checkedAt: 2026-09-18 }
---

here.now publishes static files to a live URL over an HTTP API, and is written for an AI agent to call rather than for a person to click through. The agent uploads the files and gets back an address on a subdomain of here.now; publishing works without an account at all, and a site published that way is removed after a day unless somebody claims it. Paid plans raise storage, the number of custom domains and the publishing rate limit. The company behind it is Beanstalk AI, a Delaware corporation in San Francisco.

What it serves is static — pages, assets, documents, media — with no runtime behind them. Two manifests published alongside the files stretch that: one declares record collections the page's own JavaScript may read and write, the other declares proxy routes so a page can call an upstream API with the key held server side. Every publish is kept as a version that can be previewed and restored, and a site can be left open, put behind a password, or restricted to named email addresses and domains. Workspaces own sites on behalf of a team, and Drives hold private files one agent can hand to another.

## Worth knowing

There is no server-side compute, no general-purpose database and no long-running process, which the [documentation](https://here.now/docs) states as a limit rather than a roadmap item. Uploaded files land in Cloudflare's object storage, named in the [agent context file](https://here.now/llms-full.txt) where it explains which hosts an egress allowlist has to permit.

The in-dashboard editor is not a plan feature. It draws on a prepaid credit balance charged at what the model provider costs plus a quarter, and the paid plans only include a monthly amount of it. Domains bought inside the product are registered through name.com with here.now as registrant of record on the customer's behalf, and the [pricing page](https://here.now/pricing.md) says those purchases and their renewals are final.

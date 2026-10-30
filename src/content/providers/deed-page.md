---
id: deed-page
name: deed.page
urls:
  home: https://deed.page
  pricing: https://deed.page/pricing
  docs: https://deed.page/docs
  terms: https://deed.page/terms
category:
  - static
description: Static hosting published to over an HTTP API, built to be called by AI agents and scripts.
runtimes:
  - static
apiAvailable: public
mcpServer: official
testDomain: included
pricingModel: fixed-tier
priceFrom: xs
entryPrice: { amount: 3, currency: USD, period: month }
currencies:
  - USD
billingPeriods:
  - monthly
freeTier: permanent
moneyBack: none
status: stub
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - { field: category, url: 'https://deed.page/terms', checkedAt: 2026-10-30 }
  - { field: runtimes, url: 'https://deed.page/terms', checkedAt: 2026-10-30 }
  - { field: apiAvailable, url: 'https://deed.page/docs', checkedAt: 2026-10-30 }
  - { field: mcpServer, url: 'https://deed.page/', checkedAt: 2026-10-30 }
  - { field: testDomain, url: 'https://deed.page/', checkedAt: 2026-10-30 }
  - { field: pricingModel, url: 'https://deed.page/pricing', checkedAt: 2026-10-30 }
  - { field: priceFrom, url: 'https://deed.page/pricing', checkedAt: 2026-10-30 }
  - { field: entryPrice, url: 'https://deed.page/pricing', checkedAt: 2026-10-30 }
  - { field: currencies, url: 'https://deed.page/pricing', checkedAt: 2026-10-30 }
  - { field: billingPeriods, url: 'https://deed.page/terms', checkedAt: 2026-10-30 }
  - { field: freeTier, url: 'https://deed.page/pricing', checkedAt: 2026-10-30 }
  - { field: moneyBack, url: 'https://deed.page/terms', checkedAt: 2026-10-30 }
figure:
  emoji: 📜
  color: rgb(242, 234, 214)
  textColor: rgb(60, 44, 20)
  text: Whoever holds the token owns the site.
ai: authored
---

deed.page hosts static files sent to it in a single HTTP request, with no account and no sign-up. The caller picks the subdomain, and the first response returns a token that is the only proof of ownership: whoever holds it can update or delete the site. The [API reference](https://deed.page/docs) covers uploads as raw HTML, a tarball, multipart or a JSON file map, and an MCP server offers the same operations to agents. The service is operated by Avatar 8 LLC, as its [terms](https://deed.page/terms) state.

## Worth knowing

The free plan has no expiry and adds a small "Published with deed.page" link to every page; the paid plans remove it and add password-protected sites. Paid plans are monthly subscriptions bought through a Stripe checkout link the API returns, and the terms make fees non-refundable except where the law requires otherwise. They also state there is no uptime guarantee and advise keeping a copy of anything important.

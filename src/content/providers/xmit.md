---
id: xmit
name: xmit
urls:
  home: https://xmit.co
  docs: https://github.com/xmit-co/xmit
category:
  - static
description: A static-site host operated through a small command-line client.
runtimes:
  - static
deployMethods:
  - file-transfer
cliTool: official
testDomain: included
freeTier: permanent
status: draft
addedAt: 2026-09-18
checkedAt: 2026-09-18
sources:
  - { field: category, url: 'https://xmit.co', checkedAt: 2026-09-18 }
  - { field: deployMethods, url: 'https://github.com/xmit-co/xmit', checkedAt: 2026-09-18 }
  - { field: cliTool, url: 'https://github.com/xmit-co/xmit', checkedAt: 2026-09-18 }
  - { field: testDomain, url: 'https://xmit.co', checkedAt: 2026-09-18 }
  - { field: freeTier, url: 'https://xmit.co', checkedAt: 2026-09-18 }
figure:
  emoji: 🛰
  color: rgb(20, 20, 20)
  textColor: rgb(235, 235, 235)
  text: Static files, sent by a small CLI.
ai: authored
---

xmit hosts static websites uploaded with its own command-line client, `xmit`, an open-source tool published at [github.com/xmit-co/xmit](https://github.com/xmit-co/xmit) under a 0BSD license. A site is a directory of built files; the CLI authenticates with a key and re-sends only what changed. A new site gets a free subdomain under `xmit.dev` or `madethis.site`, and a custom domain the customer already owns can point at it instead.

**Listed as a stub because the marketing pages carry no pricing.** xmit.co is a single-page application whose only text before signing in is "xmit.co hosts your static websites. Launch fast," and the CLI's own README says nothing about cost. Whether any plan is sold, and to whom, is unconfirmed — the visible surface describes only the free subdomain and the deploy mechanism, not a purchase.

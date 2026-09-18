---
id: walrus
name: Walrus
urls:
  home: https://www.walrus.xyz
  pricing: https://costcalculator.wal.app
  docs: https://docs.wal.app/
  terms: https://docs.wal.app/docs/legal/walrus_general_tos
category:
  - iaas
  - static
description: Decentralized storage protocol from Mysten Labs and part of the Sui stack, with a site-hosting layer served through public portals such as wal.app.
persistentStorage: true
useCases:
  - static-site
pricingModel: usage-based
apiAvailable: public
cliTool: official
status: active
addedAt: 2026-09-18
checkedAt: 2026-09-18
sources:
  - { field: category, url: 'https://docs.wal.app/docs/sites', checkedAt: 2026-09-18 }
  - { field: persistentStorage, url: 'https://www.walrus.xyz', checkedAt: 2026-09-18 }
  - { field: useCases, url: 'https://docs.wal.app/docs/sites', checkedAt: 2026-09-18 }
  - { field: pricingModel, url: 'https://www.walrus.xyz', checkedAt: 2026-09-18 }
  - { field: apiAvailable, url: 'https://docs.wal.app/docs/getting-started', checkedAt: 2026-09-18 }
  - { field: cliTool, url: 'https://docs.wal.app/docs/getting-started', checkedAt: 2026-09-18 }
figure:
  emoji: 🦭
  color: rgb(18, 54, 74)
  textColor: rgb(214, 236, 244)
  text: Decentralized storage, with sites served through public portals.
ai: authored
---

Walrus is a decentralized storage protocol created by Mysten Labs, the company behind the Sui blockchain, and now maintained under the Walrus Foundation. Data is split into slivers and spread across a permissionless network of storage nodes rather than kept with a single operator, and it can be read or written through a CLI, an HTTP API, or a TypeScript SDK. Storing and retrieving is paid for in WAL, the network's own token, which is also staked to secure it.

Walrus Sites is a layer built on top of the storage protocol: a site's files are stored on Walrus while a Sui smart contract records ownership and maps paths to content, and the result is reached through a "portal" — a gateway that fetches the stored files and serves them over ordinary HTTP. wal.app is the portal the Walrus Foundation runs itself; anyone can run another.

## Worth knowing

Because storage and retrieval are priced in WAL rather than in a currency, what a given amount of storage costs in practice moves with the token's price alongside the network's own published rate.

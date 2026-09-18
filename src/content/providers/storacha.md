---
id: storacha
name: Storacha
urls:
  home: https://storacha.network
category:
  - iaas
description: Decentralized hot storage on Filecoin and IPFS, positioned as the successor to web3.storage; its own domains no longer serve it and no announcement explains why.
status: unverifiable
addedAt: 2026-09-18
checkedAt: 2026-09-18
sources:
  - { field: status, url: 'https://storacha.network', checkedAt: 2026-09-18 }
  - { field: description, url: 'https://web3.storage', checkedAt: 2026-09-18 }
  - { field: 'uploads stopped', url: 'https://github.com/NiKrause/orbitdb-storage-bridge/pull/81', checkedAt: 2026-09-18 }
figure:
  emoji: 🗄️
  color: rgb(45, 50, 58)
  textColor: rgb(224, 228, 232)
  text: Decentralized storage on Filecoin and IPFS; the domains now point elsewhere.
ai: authored
---

Storacha sold decentralized hot storage on Filecoin and IPFS, positioned as the successor to web3.storage — whose own domain now redirects to storacha.network, confirming the lineage the provider claimed. w3up, its upload protocol, is still visible as open-source work under the `storacha` GitHub organization.

**Recorded as unverifiable because nothing the provider published can be read any more.** No shutdown announcement exists to cite, so this record says what can be observed and no more: storacha.network, docs.storacha.network, storacha.link and web3.storage all redirect to fil.one, an unrelated Filecoin-ecosystem site that does not mention Storacha's storage service beyond a founder's past-tense bio line, and the console and API subdomains (`console.storacha.network`, `up.storacha.network`) no longer resolve at all. A changelog entry in an unrelated open-source project, tracked in a [GitHub pull request](https://github.com/NiKrause/orbitdb-storage-bridge/pull/81), dates the point where Storacha stopped taking uploads to May 2026.

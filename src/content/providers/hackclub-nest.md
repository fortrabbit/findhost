---
id: hackclub-nest
name: Hack Club Nest
urls:
  home: https://hackclub.app
  docs: https://guides.hackclub.app
  terms: https://guides.hackclub.app/index.php/Acceptable_Use_Policy
  status: https://status.hackclub.app
category:
  - free-hosting
description: Free Linux shared hosting on containers run by Hack Club, a non-profit, open only to teenagers whose applications are approved.
runtimes:
  - any
whoManagesOs: self-managed
persistentStorage: true
freeTier: permanent
regions:
  - FI
supportChannels:
  - chat
status: out-of-scope
criterion: 2
addedAt: 2026-09-18
checkedAt: 2026-09-18
sources:
  - { field: category, url: 'https://hackclub.app', checkedAt: 2026-09-18 }
  - { field: runtimes, url: 'https://guides.hackclub.app/index.php/Main_Page', checkedAt: 2026-09-18 }
  - { field: whoManagesOs, url: 'https://guides.hackclub.app/index.php/Quickstart', checkedAt: 2026-09-18 }
  - { field: persistentStorage, url: 'https://hackclub.app', checkedAt: 2026-09-18 }
  - { field: freeTier, url: 'https://hackclub.app', checkedAt: 2026-09-18 }
  - { field: regions, url: 'https://hackclub.app', checkedAt: 2026-09-18 }
  - { field: supportChannels, url: 'https://guides.hackclub.app/index.php/Quickstart', checkedAt: 2026-09-18 }
  - { field: status, url: 'https://guides.hackclub.app/index.php/Quickstart', checkedAt: 2026-09-18 }
figure:
  emoji: 🐣
  color: rgb(20, 40, 30)
  textColor: rgb(222, 240, 226)
  text: Free Linux shell, open only to teens who apply.
ai: authored
---

Nest is a free Linux container on shared hardware, run by [Hack Club](https://hackclub.com), a non-profit that supports teenage makers. The [Nest homepage](https://hackclub.app) describes it as running on two dedicated servers in Helsinki, Finland, each holding an LXC container per user; the [quickstart guide](https://guides.hackclub.app/index.php/Quickstart) covers SSH-key setup, and the wiki carries tool guides for Forgejo, PM2, systemd and Docker rather than a billing FAQ.

**Criterion 2 — sold to the public, purchasable without a sales call or invitation — fails.** Access is not self-serve: the [quickstart guide](https://guides.hackclub.app/index.php/Quickstart) has an applicant apply at dashboard.hackclub.app, verify their age through Hack Club Auth, and wait for an admin to approve or reject the application. Eligibility is restricted to teenagers. Free is not the reason — this register lists free hosts whose sign-up is open to anyone.

Recorded rather than left out because the underlying service — SSH into a Linux container, root-equivalent tooling, a real wiki — is otherwise the shape of a hosting product, and the age restriction is a fact about who Hack Club serves, not a judgment on the project.

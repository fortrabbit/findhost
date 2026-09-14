---
id: cursor-origin
name: Cursor Origin
urls:
  home: https://cursor.com/origin
  pricing: https://cursor.com/pricing
  docs: https://cursor.com/docs/origin
category:
  - git-hosting
description: The git forge inside Cursor's editor subscription, hosting repositories and pull requests for paying accounts.
runtimes: null
deployMethods: null
sshAccess: null
regions: null
apiAvailable: public
cliTool: official
status: out-of-scope
criterion: 5
addedAt: 2026-09-14
checkedAt: 2026-09-14
sources:
  - { field: status, url: 'https://cursor.com/changelog/origin-code-hosting', checkedAt: 2026-09-14 }
  - { field: category, url: 'https://cursor.com/docs/origin', checkedAt: 2026-09-14 }
  - { field: apiAvailable, url: 'https://cursor.com/docs/origin', checkedAt: 2026-09-14 }
  - { field: cliTool, url: 'https://cursor.com/docs/origin/cli', checkedAt: 2026-09-14 }
ai: authored
---

Origin is the git forge of Cursor, the code editor, for hosting repositories, syncing projects from GitHub and browsing a team's repositories in the browser, as the [Origin documentation](https://cursor.com/docs/origin) describes. A repository can live on Origin, which then receives the pushes, or be mirrored from GitHub, which stays the source of truth. Every repository has pull requests, and access is granted by a team's admins. There is a public API and a command-line tool.

Origin has no price of its own. Per the documentation, it is included in the paid Cursor plans and not in the free one, so buying it means buying the editor subscription.

**Criterion 5 — purchasable for twelve months — fails.** The [changelog entry](https://cursor.com/changelog/origin-code-hosting) starts the early beta rollout on August 17, 2026.

**This reverses when Origin has been on sale for twelve months and two independent artifacts about it exist, which is criterion 6 and has not been checked.**

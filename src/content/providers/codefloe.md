---
id: codefloe
name: CodeFloe
urls:
  home: https://codefloe.com
  pricing: https://codefloe.com/pricing
  docs: https://docs.codefloe.com
category:
  - git-hosting
description: A public Forgejo forge run from Switzerland on servers in Germany, free within resource quotas and funded by donations.
founded: 2025
hqCountry: CH
runtimes: null
deployMethods: null
sshAccess: null
regions: null
apiAvailable: public
status: active
addedAt: 2026-09-14
checkedAt: 2026-09-14
sources:
  - { field: category, url: 'https://codefloe.com/features', checkedAt: 2026-09-14 }
  - { field: founded, url: 'https://codefloe.com/faq', checkedAt: 2026-09-14 }
  - { field: hqCountry, url: 'https://codefloe.com/codefloe/legal/src/branch/main/Imprint.md', checkedAt: 2026-09-14 }
  - { field: apiAvailable, url: 'https://codefloe.com/features', checkedAt: 2026-09-14 }
figure:
  emoji: 🧊
  color: rgb(22, 58, 84)
  textColor: rgb(226, 240, 250)
  text: Forgejo with the quotas written down.
ai: authored
---

CodeFloe is a public git forge running Forgejo, operated by devXY GmbH in Zug together with independent contributors, per its [imprint](https://codefloe.com/codefloe/legal/src/branch/main/Imprint.md), and hosted on Hetzner in Germany, as the [FAQ](https://codefloe.com/faq) states. Private repositories, package registries, preview environments and the API are open to every account. CI runs either on Forgejo Actions or on Crow CI, a fork of Woodpecker CI that the CodeFloe team maintains, as the [CI documentation](https://docs.codefloe.com/cicd/crow-ci/) describes.

## Worth knowing

The [pricing page](https://codefloe.com/pricing) sells nothing: every feature is free, storage and CI are capped per account, and donations pay for the servers. It states that resource-based paid tiers are planned and will price storage and compute rather than access to a feature. Until one exists the pricing rows stay empty rather than reading zero.

Nothing of a customer's site runs here, so runtimes, deploy methods and shell access are not applicable, and no region is offered as a choice.

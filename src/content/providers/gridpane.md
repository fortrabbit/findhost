---
id: gridpane
name: GridPane
urls:
  home: https://gridpane.com
  pricing: https://gridpane.com/pricing/
category: server-management
description: WordPress server-management platform for agencies, provisioning and hardening servers on the customer's cloud account, with a free tier up to 25 sites.
whoManagesOs: provider
infraContract:
  - byo-iaas
  - resells-iaas
specialisation:
  - wordpress
useCases:
  - cms
  - e-commerce
  - campaign-site
audience:
  - agency
  - freelancer
  - smb
software:
  - wordpress
  - woocommerce
runtimes:
  - php
deployMethods:
  - control-panel
  - git-integration
  - ssh
sshAccess: full
managedDatabases:
  - mysql
pricingModel: fixed-tier
entryPriceBand: free-tier
freeTier: permanent
figure:
  emoji: 🧯
  color: rgb(45, 25, 40)
  textColor: rgb(245, 195, 230)
  text: For agencies who got tired of managed WordPress.
ai: authored
---

## About GridPane

GridPane provisions and manages WordPress servers on infrastructure the customer owns, aimed squarely at agencies that have outgrown managed WordPress hosting and want the margin back. It handles page and Redis object caching, PHP version management, staging, cloning, git integration, backups and security hardening through its own Fortress plugin, with multitenancy for agencies turning a website service into a software one.

The commercial shape is unusual: the Core plan is free forever for up to twenty-five sites, PeakFreq starts at nineteen dollars a month for managed high-frequency servers run in partnership with Vultr, and a bespoke tier starts at two thousand a year.

## Reservations

Cloud provisioning is effectively Vultr-shaped; a customer wanting a different provider is working against the product's grain. The free tier covers the panel only — every server underneath is paid for separately — and the jump from free to the bespoke tier is very wide with little in between. This runs WordPress and nothing else.

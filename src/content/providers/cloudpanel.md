---
id: cloudpanel
name: CloudPanel
urls:
  home: https://cloudpanel.io
  docs: https://cloudpanel.io/docs
category:
  - server-management
description: Free, open source server control panel for PHP, Node.js and Python applications.
whoManagesOs: self-managed
infraContract:
  - byo-iaas
runtimes:
  - php
  - node
  - python
software:
  - wordpress
deployMethods:
  - control-panel
  - file-transfer
sshAccess: root
audience:
  - solo
  - startup
  - smb
useCases:
  - cms
  - web-app
  - static-site
pricingModel: fixed-tier
freeTier: permanent
supportChannels:
  - forum
referringSubnets: { now: 624, before: 625 }
status: active
checkedAt: 2026-08-12
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-08-31 }
  - { field: runtimes, url: 'https://github.com/cloudpanel-io/cloudpanel-ce', checkedAt: 2026-08-12 }
  - { field: freeTier, url: 'https://cloudpanel.io', checkedAt: 2026-08-12 }
  - { field: software, url: 'https://cloudpanel.io', checkedAt: 2026-08-12 }
  - { field: supportChannels, url: 'https://cloudpanel.io', checkedAt: 2026-08-12 }
figure:
  emoji: ⚡
  color: rgb(41, 128, 185)
  textColor: rgb(236, 245, 252)
  text: Multi-runtime, open source, free.
ai: authored
---

CloudPanel is a free, open source control panel designed with a focus on simplicity for configuring and managing servers. It installs on Linux servers you supply—on major cloud providers like AWS, DigitalOcean, Hetzner, Azure or others—and provides a web interface for deploying and managing PHP, Node.js, Python and static websites. It includes SSL certificate automation, firewall configuration, database management and backups across cloud providers.

The Community Edition is free forever with no login required. Optional paid support tiers are coming soon for development and enterprise use. The project welcomes community contributions and engages through Discord. It supports Ubuntu and Debian Linux distributions on both x86 and ARM architectures.

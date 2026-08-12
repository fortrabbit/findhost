---
id: hestiacp
name: Hestia Control Panel
urls:
  home: https://hestiacp.com
  docs: https://hestiacp.com/docs/
category:
  - server-management
description: Open source control panel for managing web servers, email, DNS and databases.
whoManagesOs: self-managed
infraContract:
  - byo-iaas
runtimes:
  - php
managedDatabases:
  - mariadb
  - mysql
  - postgres
deployMethods:
  - control-panel
  - file-transfer
sshAccess: root
pricingModel: fixed-tier
freeTier: permanent
supportChannels:
  - forum
status: active
checkedAt: 2026-08-12
sources:
  - { field: runtimes, url: 'https://hestiacp.com/docs/', checkedAt: 2026-08-12 }
  - { field: managedDatabases, url: 'https://hestiacp.com/docs/', checkedAt: 2026-08-12 }
  - { field: freeTier, url: 'https://hestiacp.com', checkedAt: 2026-08-12 }
  - { field: supportChannels, url: 'https://hestiacp.com', checkedAt: 2026-08-12 }
figure:
  emoji: 📊
  color: rgb(52, 73, 94)
  textColor: rgb(236, 240, 241)
  text: Lightweight, GPLv3 licensed, community supported.
ai: authored
---

Hestia is a lightweight, open source control panel released under the GPLv3 licence for managing web servers, domains, email accounts, DNS zones and databases. It installs on a Linux server you supply and provides a web interface for administration. The software supports Apache and Nginx web servers with multiple PHP versions, MariaDB, MySQL and PostgreSQL databases, and email services via Exim and Dovecot.

Development is community-driven and welcoming to contributions. The project does not charge for the software itself and relies on voluntary donations to sustain operations. Support is provided through a public forum where users and developers engage with questions and issues.

---
id: vitodeploy
name: VitoDeploy
urls:
  home: https://vitodeploy.com
  docs: https://vitodeploy.com/docs
category:
  - server-management
regions: null
description: Free, open-source server management tool installed on a server of its own, which provisions servers at a cloud provider or over SSH and deploys PHP, Node.js and Bun applications onto them.
whoManagesOs: self-managed
infraContract:
  - byo-iaas
runsOn:
  - aws
  - linode
  - digitalocean
  - vultr
  - hetzner
runtimes:
  - php
  - node
  - bun
software:
  - laravel
  - wordpress
deployMethods:
  - git
sshAccess: root
managedDatabases:
  - mysql
  - mariadb
  - postgres
  - redis
pricingModel: fixed-tier
freeTier: permanent
supportHours: community-only
apiAvailable: public
collaboration: team
social:
  github: https://github.com/vitodeploy/vito
  discord: https://discord.gg/uZeeHZZnm5
  x: https://x.com/vitodeploy
ownership: independent
status: active
checkedAt: 2026-09-04
sources:
  - { field: description, url: 'https://vitodeploy.com/docs/getting-started/introduction', checkedAt: 2026-09-04 }
  - { field: infraContract, url: 'https://vitodeploy.com/docs/settings/server-providers', checkedAt: 2026-09-04 }
  - { field: runsOn, url: 'https://vitodeploy.com/docs/settings/server-providers', checkedAt: 2026-09-04 }
  - { field: whoManagesOs, url: 'https://vitodeploy.com/docs/servers/create', checkedAt: 2026-09-04 }
  - { field: sshAccess, url: 'https://vitodeploy.com/docs/settings/server-providers', checkedAt: 2026-09-04 }
  - { field: runtimes, url: 'https://vitodeploy.com/docs/sites/site-types', checkedAt: 2026-09-04 }
  - { field: software, url: 'https://vitodeploy.com/docs/sites/site-types', checkedAt: 2026-09-04 }
  - { field: deployMethods, url: 'https://vitodeploy.com/docs/settings/source-controls', checkedAt: 2026-09-04 }
  - { field: managedDatabases, url: 'https://vitodeploy.com/docs/servers/database', checkedAt: 2026-09-04 }
  - { field: pricingModel, url: 'https://vitodeploy.com', checkedAt: 2026-09-04 }
  - { field: freeTier, url: 'https://vitodeploy.com', checkedAt: 2026-09-04 }
  - { field: supportHours, url: 'https://vitodeploy.com/docs/servers/create', checkedAt: 2026-09-04 }
  - { field: apiAvailable, url: 'https://vitodeploy.com/docs/settings/api-keys', checkedAt: 2026-09-04 }
  - { field: collaboration, url: 'https://vitodeploy.com/docs/settings/projects', checkedAt: 2026-09-04 }
  - { field: ownership, url: 'https://github.com/vitodeploy/vito', checkedAt: 2026-09-04 }
  - { field: license, url: 'https://github.com/vitodeploy/vito/blob/main/LICENSE', checkedAt: 2026-09-04 }
figure:
  emoji: 🧰
  color: rgb(79, 70, 229)
  textColor: rgb(238, 237, 250)
  text: A panel you host, for servers you rent.
ai: authored
---

VitoDeploy is a free, open-source [server management](/categories/server-management/) tool published on GitHub under the [AGPL-3.0 license](https://github.com/vitodeploy/vito/blob/main/LICENSE) and maintained by Saeed Vaziry, who takes sponsorship through GitHub. It is a Laravel application that the operator installs on a server of its own, from a shell script or as a Docker image, and every server it manages is rented elsewhere: the docs name AWS, Akamai Linode, DigitalOcean, Vultr and Hetzner as providers it can create machines at through their APIs, and a custom option for any Ubuntu server reachable as root over SSH.

Once a server is attached, Vito installs the services chosen for it — a web server, PHP in several versions, MySQL, MariaDB or PostgreSQL, Redis, Supervisor — and deploys sites from GitHub, GitLab or Bitbucket, with PHP, Laravel, WordPress, phpMyAdmin, Node.js and Bun as the site types. It also manages firewall rules, cron jobs, background workers, SSL certificates, backups to S3, FTP, Dropbox or local disk, and DNS records at a connected DNS provider. Servers are grouped into projects that other users of the instance can be invited to, and a REST API is documented on the instance itself. The home page carries a waitlist for a cloud edition, which is not yet a product.

## Worth knowing

The panel is itself a server to look after: it has to be installed, updated and kept reachable, and the docs note that some features only work when its public URL is configured. A server it provisions comes bare, so the services are chosen and installed afterwards, and each server can hold only one database engine at a time.

Zero-downtime deployment with rollbacks is [marked as beta](https://vitodeploy.com/docs/sites/modern-deployment) and supports Laravel sites only. There is no file manager built in; a site without a git repository is filled over SSH.

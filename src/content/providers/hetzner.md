---
id: hetzner
name: Hetzner
url: https://www.hetzner.com
category: vps
pricingUrl: https://www.hetzner.com/cloud/
statusUrl: https://status.hetzner.com
description: Hetzner is an independent German hosting company offering VPS, dedicated servers, cloud and storage infrastructure from its own data centres.
founded: 1997
hqCountry: DE
whoManagesOs: you
infraContract:
  - owns-metal
audience:
  - beginner
  - smb
  - enterprise
social:
  x: https://twitter.com/Hetzner_Online
  mastodon: https://mastodon.hetzner.social/@Hetzner
  linkedin: https://www.linkedin.com/company/hetzner-online/
  facebook: https://www.facebook.com/hetzner.de/
  youtube: https://www.youtube.com/user/HetznerOnline/
runtimes:
  - any
sshAccess: full
persistentStorage: true
backupsIncluded: paid-addon
pricingModel: hourly
entryPriceBand: under-5
contractMinimum: none
regions:
  - DE
  - FI
  - SG
  - US
supportChannels:
  - phone
  - forum
supportHours: 24-7
apiAvailable: public
cliTool: official
status: active
checkedAt: 2026-07-31
sources:
  - { field: founded, url: 'https://www.hetzner.com/unternehmen/ueber-uns/', checkedAt: 2026-07-31 }
  - { field: hqCountry, url: 'https://www.hetzner.com/unternehmen/ueber-uns/', checkedAt: 2026-07-31 }
  - { field: infraContract, url: 'https://www.hetzner.com/unternehmen/ueber-uns/', checkedAt: 2026-07-31 }
  - { field: regions, url: 'https://www.hetzner.com/cloud/', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://docs.hetzner.com/cloud/billing/faq/', checkedAt: 2026-07-31 }
  - { field: entryPriceBand, url: 'https://docs.hetzner.com/cloud/billing/faq/', checkedAt: 2026-07-31 }
  - { field: contractMinimum, url: 'https://docs.hetzner.com/cloud/billing/faq/', checkedAt: 2026-07-31 }
  - { field: backupsIncluded, url: 'https://docs.hetzner.com/cloud/billing/faq/', checkedAt: 2026-07-31 }
  - { field: persistentStorage, url: 'https://docs.hetzner.com/cloud/servers/backups-snapshots/faq/', checkedAt: 2026-07-31 }
  - { field: apiAvailable, url: 'https://www.hetzner.com/cloud/', checkedAt: 2026-07-31 }
  - { field: cliTool, url: 'https://www.hetzner.com/cloud/', checkedAt: 2026-07-31 }
  - { field: supportChannels, url: 'https://www.hetzner.com/support/', checkedAt: 2026-07-31 }
  - { field: audience, url: 'https://www.hetzner.com/', checkedAt: 2026-07-31 }
  - { field: social, url: 'https://www.hetzner.com/', checkedAt: 2026-07-31 }
figure:
  emoji: 🇩🇪
  color: rgb(200, 160, 60)
  textColor: rgb(50, 20, 20)
  text: IT made in Germany.
ai: co-authored
greenWebId: 131
---

## About Hetzner

Hetzner Online GmbH was founded in 1997 and is headquartered in Gunzenhausen, Germany. It runs its own data centre parks in Nuremberg and Falkenstein in Germany and in Helsinki, Finland, and has added capacity in Singapore and the United States.

The product range covers shared hosting, dedicated servers, colocation, cloud servers, storage and object storage. Cloud servers are billed by the hour against a monthly price cap, and a server deleted mid-month is charged at the hourly rate only, so there is no minimum term. Backups are an opt-in extra priced at 20 per cent of the server price. The infrastructure is managed through a documented REST API and a CLI tool.

General support runs on a German phone line, Monday to Friday, 08:00 to 18:00 CET. Each data centre publishes a separate 24-hour technical line for hardware faults.

## Reservations

Hetzner sells raw infrastructure. A cloud server arrives as a Linux machine with root access and nothing configured: web server, PHP-FPM, database, TLS certificates, firewall, security patches, OS upgrades and uptime monitoring are all the customer's responsibility. The low hourly price reflects that division of labour, and for a team without someone who does this work regularly the ongoing operational load can outweigh the saving. Liability follows the same line — an unpatched server is the account holder's problem, not the provider's.

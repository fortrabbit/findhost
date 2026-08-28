---
id: byet
name: Byet
urls:
  home: https://byet.host
  pricing: https://byet.host/paid-hosting
  terms: https://byet.host/terms-of-service
  docs: https://tutorials.ifastnet.com/
category:
  - shared-hosting
  - free-hosting
  - vps
  - bare-metal
  - domains-dns
description: iFastNet's free hosting brand, running PHP and MySQL accounts on a control panel it wrote itself.
founded: 2005
hqCountry: GB
ownership: subsidiary
whoManagesOs: managed
infraContract:
  - owns-metal
runtimes:
  - php
  - static
software:
  - wordpress
  - joomla
  - drupal
  - opencart
  - magento
deployMethods:
  - file-transfer
  - control-panel
sshAccess: none
managedDatabases:
  - mysql
  - mariadb
pricingModel: fixed-tier
entryPrice: { amount: 29.99, currency: USD, period: year }
priceFrom: xs
priceTo: lg
currencies:
  - USD
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
freeTier: permanent
regions:
  - US
  - GB
useCases:
  - cms
  - side-project
  - learning
audience:
  - solo
  - smb
  - non-profit
supportChannels:
  - email
  - forum
supportHours: 24-7
supportTiering: paid-upgrade
domainRegistration: paid-addon
dnsHosting: included
testDomain: included
status: active
checkedAt: 2026-08-28
sources:
  - { field: founded, url: 'https://byet.host/about', checkedAt: 2026-08-28 }
  - { field: hqCountry, url: 'https://byet.host/terms-of-service', checkedAt: 2026-08-28 }
  - { field: ownership, url: 'https://byet.host/paid-hosting', checkedAt: 2026-08-28 }
  - { field: infraContract, url: 'https://byet.host/about', checkedAt: 2026-08-28 }
  - { field: category, url: 'https://byet.host/', checkedAt: 2026-08-28 }
  - { field: runtimes, url: 'https://byet.host/free-hosting', checkedAt: 2026-08-28 }
  - { field: software, url: 'https://byet.host/free-hosting', checkedAt: 2026-08-28 }
  - { field: software, url: 'https://byet.host/paid-hosting', checkedAt: 2026-08-28 }
  - { field: deployMethods, url: 'https://byet.host/free-hosting', checkedAt: 2026-08-28 }
  - { field: sshAccess, url: 'https://byet.host/free-hosting', checkedAt: 2026-08-28 }
  - { field: managedDatabases, url: 'https://byet.host/free-hosting', checkedAt: 2026-08-28 }
  - { field: freeTier, url: 'https://byet.host/free-hosting', checkedAt: 2026-08-28 }
  - { field: entryPrice, url: 'https://byet.host/paid-hosting', checkedAt: 2026-08-28 }
  - { field: priceFrom, url: 'https://byet.host/paid-hosting', checkedAt: 2026-08-28 }
  - { field: priceTo, url: 'https://byet.host/dedicated', checkedAt: 2026-08-28 }
  - { field: currencies, url: 'https://byet.host/paid-hosting', checkedAt: 2026-08-28 }
  - { field: billingPeriods, url: 'https://byet.host/vpsplans', checkedAt: 2026-08-28 }
  - { field: billingTiming, url: 'https://byet.host/paid-hosting', checkedAt: 2026-08-28 }
  - { field: pricingModel, url: 'https://byet.host/paid-hosting', checkedAt: 2026-08-28 }
  - { field: regions, url: 'https://byet.host/terms-of-service', checkedAt: 2026-08-28 }
  - { field: useCases, url: 'https://byet.host/about', checkedAt: 2026-08-28 }
  - { field: useCases, url: 'https://byet.host/free-hosting', checkedAt: 2026-08-28 }
  - { field: audience, url: 'https://byet.host/about', checkedAt: 2026-08-28 }
  - { field: audience, url: 'https://byet.host/paid-hosting', checkedAt: 2026-08-28 }
  - { field: supportChannels, url: 'https://byet.host/paid-hosting', checkedAt: 2026-08-28 }
  - { field: supportHours, url: 'https://byet.host/paid-hosting', checkedAt: 2026-08-28 }
  - { field: supportTiering, url: 'https://byet.host/paid-hosting', checkedAt: 2026-08-28 }
  - { field: domainRegistration, url: 'https://byet.host/domain-registration', checkedAt: 2026-08-28 }
  - { field: dnsHosting, url: 'https://byet.host/free-hosting', checkedAt: 2026-08-28 }
  - { field: testDomain, url: 'https://byet.host/free-hosting', checkedAt: 2026-08-28 }
  - { field: 'VistaPanel and MyOwnFreeHost', url: 'https://byet.host/about', checkedAt: 2026-08-28 }
figure:
  emoji: 🧰
  color: rgb(38, 84, 166)
  textColor: rgb(237, 243, 251)
  text: Free tier out front, iFastNet behind it.
ai: authored
---

Byet is the free hosting brand of iFastNet, which has traded since 2005 and describes itself as having started in the UK. Its terms put the contract under UK law, name courts in Northumberland, and give the network's locations as California, Ohio and the UK. Byet sells the free accounts under its own name; everything above them — cPanel shared plans, VPS with root, dedicated machines and domain registration — is ordered through iFastNet's portal, and the paid pages call iFastNet the parent company.

The control panel explains the rest of the business. iFastNet [wrote VistaPanel itself](https://byet.host/about) rather than license cPanel, which is what makes a free account cost it nothing in software, and later gave the platform away as MyOwnFreeHost so that other people could run free hosting brands on it. [InfinityFree](/infinityfree/) is one of them.

## Worth knowing

The free tier is a VistaPanel account: PHP and MySQL, FTP and a file manager, cron, and a subdomain from a fixed list of two dozen with a certificate issued for it — on a domain of your own, you install the certificate yourself. It has no shell; root is what the VPS and dedicated lines are for. The published figures are storage and bandwidth rather than the ceilings that decide whether a busy site stays up, and the free tier's CPU, process and file limits are not on the site.

Most of the paperwork is iFastNet's rather than Byet's: the privacy policy, the abuse address and the support portal all sit on iFastNet's domain, and the terms reserve termination without notice and at Byet's sole discretion. Free accounts get the community forum, and the ticketed support portal is described on the paid pages.

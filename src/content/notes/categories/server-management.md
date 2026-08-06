---
description: Control panels and provisioning services for a server rented somewhere else. The hosting is a third party's; the software that tames it is the product.
lead: A panel that provisions and configures a server rented elsewhere.
figure:
  emoji: 🛠️
  color: rgb(20, 60, 120)
  textColor: rgb(235, 245, 255)
  text: Your server, your midnight pager.
---

Server management is an odd category. Most providers in this section sell no hosting at all. The product is a software layer to provision, web server and runtime configuration, certificates, deploys, backups, user accounts, and a panel or an API to drive it. Nearly every record is [bring your own infrastructure](/metal/): the account at the hosting provider stays with the customer and the panel connects to it.

That splits the comparison in two. The bill has two parts, a licence or subscription plus whatever the server costs, so an [entry price band](/entry-price/) in this category prices the panel alone. Responsibility splits the same way: the operating system stays with the customer with a panel to make it manageable, which is why "you, with panel" is the usual answer to [who manages the operating system](/operating-system/) here. A panel automates the routine and can patch unattended. It does not take the pager.

Two shapes sit side by side. The classic control panels — [cPanel](/cpanel/), [Plesk](/plesk/) — are licensed per server and run most of the [shared hosting](/categories/shared-hosting/) industry. The developer-facing provisioners — [Laravel Forge](/laravel-forge/), [Ploi](/ploi/), [RunCloud](/runcloud/), [Coolify](/coolify/) — sit closer to a self-hosted [PaaS](/categories/paas/), deploy pipeline included. A few resell the infrastructure as well and return one bill, which makes them hard to tell from a PaaS from outside. Whose name is on the server account is the difference.

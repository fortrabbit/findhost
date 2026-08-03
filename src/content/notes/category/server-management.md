---
title: Server Management
description: Control panels and provisioning services for servers rented somewhere else. The hosting is a third party's; the software that tames it is the product.
lead: A panel that provisions and configures a server rented elsewhere.
figure:
  emoji: 🛠️
  color: rgb(20, 60, 120)
  textColor: rgb(235, 245, 255)
  text: Your server, your midnight pager.
---

Server management is the odd category in this dataset: most of the companies in it sell no hosting at all. What they sell is the software layer over a machine rented from somebody else — provisioning, web server and runtime configuration, TLS certificates, deploys, backups, user accounts, and a panel or an API to drive it all. Nearly every record here is [bring your own infrastructure](/hardware/): the account at Hetzner, DigitalOcean or AWS stays with the customer, and the panel connects to it.

That splits a comparison in two. The bill is in two parts — a licence or subscription for the panel, plus whatever the underlying server costs — so an [entry price band](/entry-price/) in this category prices the panel alone. Responsibility is split the same way: the operating system stays with the customer, with a panel to make it manageable, which is why "you do, with a panel" is by far the most common answer to [who manages the operating system](/os-managed-by/) here. A panel automates the routine and can apply updates unattended. It does not take the pager.

Two shapes sit side by side under the label. There are the classic hosting control panels, [cPanel](/providers/cpanel/) and [Plesk](/providers/plesk/), which most of the [shared hosting](/category/shared/) industry runs on and which are licensed per server. And there are the developer-facing provisioners — [Laravel Forge](/providers/laravel-forge/), [Ploi](/providers/ploi/), [RunCloud](/providers/runcloud/), [Coolify](/providers/coolify/) — which sit much closer to a self-hosted [PaaS](/category/paas/), deploy pipeline included. A few, [Cloudways](/providers/cloudways/) among them, resell the underlying infrastructure as well and return a single bill, which makes them hard to tell from a PaaS from the outside. The difference is whose name is on the server account.

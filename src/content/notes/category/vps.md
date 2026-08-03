---
title: VPS hosting
description: A virtual server with root access — plus the operating system, the patching and the pager that come with it.
lead: A virtual machine with root, and a sysadmin job attached.
figure:
  emoji: 🚧
  color: rgb(250, 200, 30)
  textColor: rgb(40, 40, 0)
  text: Go ahead, ditch your VPS!
---

## What is VPS hosting?

With Virtual Private Server (VPS) hosting, customers gain root access to a fully functional virtual server. It is an empty machine: the provider keeps the hypervisor and the network running, and everything above that belongs to the customer, which is why most records in this category answer "you do" to [who manages the operating system](/os-managed-by/) and offer [full SSH access](/ssh/).

### Origins

Server virtualisation became popular in the early 2000s. Traditionally, a server was a physical machine dedicated to a specific user, often resulting in underutilised hardware. Virtualisation solved that inefficiency by running multiple virtual servers, each with its own operating system, on a single physical machine. Virtualisation has since become so good and so mainstream that several layers of it stacked on top of one another are normal rather than exceptional.

### Benefits

VPS hosting offers more control, flexibility, and customisation than [shared hosting](/category/shared/), which makes it a fit for anyone who wants to shape the environment rather than accept one. Resources are allotted per instance rather than shared out among accounts, the software stack is a free choice, and the entry price is low — a small instance is one of the cheapest ways to run something in [somebody else's data centre](/hardware/). Many VPS providers sell other services alongside it, shared hosting among them.

### Downsides

The empty box has to be filled and then kept full. Operating system updates, security patches, backups, monitoring, mail configuration and the response to a 3am outage are all the customer's job, and none of that work is visible in the monthly price. Skipping it is the common failure: an unattended VPS is an unpatched VPS.

The advertised specs are also softer than they look. Providers oversubscribe physical hosts to varying degrees, so identical vCPU counts can differ in real throughput depending on the neighbours. Where the work of running a server is not wanted, [PaaS](/category/paas/) hands the operating system back to the provider, and [server management](/category/server-management/) panels keep the server while automating most of the routine around it.

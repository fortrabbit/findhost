---
description: A virtual server with root access — plus the operating system, the patching and the pager that come with it.
lead: A virtual machine with root, and a sysadmin job attached.
figure:
  emoji: 🚧
  color: rgb(250, 200, 30)
  textColor: rgb(40, 40, 0)
  text: Go ahead, ditch your VPS!
---

A Virtual Private Server is an empty machine with root access. The provider keeps the hypervisor and the network running; everything above that belongs to the customer, which is why most records here answer "you" to [who manages the operating system](/os-managed-by/) and offer [full SSH access](/ssh/). Resources are allotted per instance rather than shared out among accounts, the software stack is a free choice, and a small instance is one of the cheapest ways to run something in [somebody else's data centre](/hardware/).

The empty box has to be filled and then kept full. Operating system updates, security patches, backups, monitoring, mail configuration and the response to a 3am outage are all the customer's, and none of that work appears in the monthly price. Skipping it is the common failure: an unattended VPS is an unpatched VPS.

The advertised specifications are softer than they look, too. Providers oversubscribe physical hosts to varying degrees, so identical vCPU counts can differ in real throughput depending on the neighbours. Where the work of running a server is not wanted, [PaaS](/categories/paas/) hands the operating system back to the provider, and a [management panel](/categories/server-management/) keeps the server while automating most of the routine around it.

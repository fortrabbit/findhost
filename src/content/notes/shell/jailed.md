---
description: Hosting with a shell inside the running environment — a command line on the thing serving the site, without root.
lead: A way in, without the keys.
---

A jailed shell is a command line inside the container that serves the site: enough to read a log, run a migration and settle an argument about what production is actually doing. It is not a root shell, so system packages and server configuration remain the provider's business. For most application platforms this is what SSH access means.

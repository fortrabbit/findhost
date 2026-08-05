---
description: Whether a provider gives full shell access to the running environment, a restricted shell, or none at all.
lead: Whether there is a way in when something breaks.
---

**Full** means a normal shell on the machine or container that serves the site, with the usual tooling. **Limited** means a shell that exists but is fenced — a restricted set of commands, a jump host, a file-transfer-only account, or access to a build step rather than to the running application. **None** means the control panel is the only way in.

The value of a shell is mostly diagnostic. Deployments run through git or a pipeline on most platforms here, so shell access matters on the day something behaves differently in production than it did anywhere else, and reading a log or running one command settles it. Restricted shells are common on [shared hosting](/categories/shared-hosting/) and on [PaaS](/categories/paas/), for different reasons: the first is protecting neighbours, the second is protecting a rebuild.

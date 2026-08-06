---
description: Remix hosting — a server-first framework, so a host that only serves files will not do.
lead: Server-first, by design.
---

Remix runs its loaders and actions on the server for every request, so unlike the static-capable frameworks it needs somewhere to execute — a node process or a supported edge runtime. That narrows the hosting question to platforms that keep a process alive or ship a matching adapter. Providers naming it are describing exactly that capability.

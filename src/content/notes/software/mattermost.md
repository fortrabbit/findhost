---
description: Mattermost hosting — a persistent Go chat server with PostgreSQL, WebSockets and file storage, so a VPS or container platform.
lead: A process that stays up, with sockets open.
---

Mattermost is a Go chat server with [PostgreSQL](/databases/postgres/) behind it and WebSockets in front: a persistent process that has to stay up and keep long-lived connections open. That rules out platforms that sleep idle applications and shared hosts without process control; a [VPS](/categories/vps/) or a container platform fits. File uploads need a volume or object storage that survives a restart.

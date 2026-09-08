---
description: Gitea hosting — a single-binary Git server that needs a persistent disk and an SSH port, which a small VPS provides.
lead: One binary and a disk.
---

Gitea is a single Go binary serving Git over HTTP and SSH, with SQLite for a small install or [PostgreSQL](/databases/postgres/) for a team. It wants a persistent disk for the repositories and, for SSH cloning, a port a shared host will not hand over. A small [VPS](/categories/vps/) runs it for years, and providers naming it ship a one-click image. Hosted alternatives sit under [git hosting](/categories/git-hosting/).

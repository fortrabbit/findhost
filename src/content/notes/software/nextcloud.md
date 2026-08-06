---
description: Nextcloud hosting — a PHP application whose real requirement is storage that keeps growing.
lead: The hosting question is disk.
---

Nextcloud is ordinary PHP and MySQL, so the runtime is never the constraint — storage is. It is a file server, and the plan that fits is the one whose disk can grow with what gets put in it, with background jobs running on a schedule for indexing and clean-up. Providers documenting it usually pair it with block storage rather than a fixed allowance.

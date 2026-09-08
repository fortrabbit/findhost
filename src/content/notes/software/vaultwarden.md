---
description: Vaultwarden hosting — a light Rust password server that runs on the smallest VPS but insists on HTTPS and backups.
lead: Tiny, but only over HTTPS.
---

Vaultwarden is a Rust reimplementation of the Bitwarden server, light enough for the smallest [VPS](/categories/vps/): one process, SQLite by default, a few hundred megabytes of memory. What it asks for is HTTPS, since the clients refuse plain HTTP, and a backup habit, since the database is the vault. Providers naming it offer a one-click image; the rest run it as a container.

---
description: Hosting marketed for dashboards and admin panels — small audiences, heavy queries, and data that must not leak.
lead: Few users, expensive pages.
---

An internal dashboard serves few people and asks a lot per request: aggregate queries, exports, and reports that would be unacceptable on a public page. Traffic is negligible and the database is the constraint. Access control matters more than scale, which is why providers marketing this often mention private networking, IP restrictions or an authentication layer in front.

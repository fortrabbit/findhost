---
id: hub-org
name: Hub.Org
category:
  - vps
  - shared-hosting
description: The host PostgreSQL's mailing lists and first CVS server ran on, later selling self-managed FreeBSD servers from Panama. Its site went dark in 2020.
founded: 1997
hqCountry: CA
ownership: independent
whoManagesOs: self-managed
runtimes:
  - php
  - perl
  - python
  - ruby
  - java
sshAccess: root
managedDatabases:
  - postgres
regions:
  - PA
status: discontinued
checkedAt: 2026-08-14
sources:
  - { field: founded, url: 'https://www.postgresql.org/about/news/huborg-announces-availability-of-postgresql-90-hosting-1237/', checkedAt: 2026-08-14 }
  - { field: managedDatabases, url: 'https://www.postgresql.org/about/news/huborg-announces-availability-of-postgresql-90-hosting-1237/', checkedAt: 2026-08-14 }
  - { field: hqCountry, url: 'https://www.postgresql.org/message-id/20041203184254.F6767@cookie.varlena.com', checkedAt: 2026-08-14 }
  - { field: 'PostgreSQL infrastructure', url: 'https://www.postgresql.org/message-id/20041203184254.F6767@cookie.varlena.com', checkedAt: 2026-08-14 }
  - { field: runtimes, url: 'https://web.archive.org/web/20141024152928/http://hub.org/applications', checkedAt: 2026-08-14 }
  - { field: sshAccess, url: 'https://web.archive.org/web/20141024152928/http://hub.org/applications', checkedAt: 2026-08-14 }
  - { field: regions, url: 'https://web.archive.org/web/20140518041220/https://www.hub.org/', checkedAt: 2026-08-14 }
  - { field: whoManagesOs, url: 'https://web.archive.org/web/20140518041220/https://www.hub.org/', checkedAt: 2026-08-14 }
  - { field: status, url: 'https://web.archive.org/web/20200314194153/http://www.hub.org/', checkedAt: 2026-08-14 }
figure:
  emoji: 🐘
  color: rgb(45, 74, 110)
  textColor: rgb(230, 238, 246)
  text: The machine PostgreSQL grew up on.
ai: authored
---

Hub.Org was the hosting business of Marc Fournier, one of the developers who took PostgreSQL over from Berkeley. The project's [history document](https://www.postgresql.org/message-id/20041203184254.F6767@cookie.varlena.com) records him in Canada hosting the mailing lists and servers, and the Hub.Org networking organization as started in 1999 to help fund the infrastructure the maintenance work needed. That is why a decade of PostgreSQL list archives carry message ids ending in `@hub.org`. The commercial side dated itself to 1997 and sold hosting to the general public, not only to the project.

What it sold was a virtual server on FreeBSD that the customer administered: root on the machine, a choice of operating system, and a long published list of languages, web servers and applications a customer could install. The exception was the database, which Hub.Org ran itself — shared PostgreSQL instances with PostGIS and pl/pgsql alongside dedicated ones. From around 2010 the machines were in a Panama data center, and the marketing turned on that: offshore hosting, outside US jurisdiction, with Bitcoin accepted from 2014.

## Worth knowing

The end is not documented. From March 2020 the site served a page reading only `not here`, and it stayed that way for six years; by mid-2026 the origin had stopped answering at all, though the domain is still registered. No shutdown notice, migration path or account wind-down was published anywhere we could find, which is why this record has no home page to link to and why the operating details above are read off the archived site rather than a live one.

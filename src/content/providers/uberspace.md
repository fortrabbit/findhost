---
id: uberspace
name: Uberspace
url: https://uberspace.de
category: shared
description: Uberspace is a small German hosting service sitting between shared hosting and a VPS, running since 2011, with a shell account and a documented stack.
hqCountry: DE
whoManagesOs: provider
audience:
  - developer
useCases:
  - cms
  - side-project
software:
  - wordpress
  - nextcloud
runtimes:
  - php
  - python
  - node
  - deno
  - ruby
  - go
  - rust
  - dotnet
  - java
  - clojure
sshAccess: full
managedDatabases:
  - mysql
  - postgres
  - mongodb
  - couchdb
  - redis
  - sqlite
  - influxdb
status: active
checkedAt: 2026-07-31
sources:
  - { field: runtimes, url: 'https://manual.uberspace.de/', checkedAt: 2026-07-31 }
  - { field: managedDatabases, url: 'https://manual.uberspace.de/', checkedAt: 2026-07-31 }
  - { field: sshAccess, url: 'https://manual.uberspace.de/', checkedAt: 2026-07-31 }
  - { field: software, url: 'https://manual.uberspace.de/', checkedAt: 2026-07-31 }
figure:
  emoji: 🧑‍🚀
  color: rgb(60, 60, 60)
  textColor: rgb(200, 200, 200)
  text: Hello Ubernauts!
ai: co-authored
greenWebId: 778
---

## About Uberspace

Uberspace is a small service oriented, developer friendly hosting service that might be located somewhere between shared hosting and VPS. It's based in Germany, privacy friendly since 2011. Support is available in German as well as English, and the service has a following in the Kirby CMS community. The name predates the taxi company: 'über' is the German for 'over'.

The manual describes the platform as "targeted at people who want to look behind the scenes, do things we didn't anticipate", and the documented stack is unusually wide for the price segment: PHP, Python, Node.js, Deno, Ruby, Go, Rust, .NET Core, Java, Clojure, Erlang/OTP, Perl, Prolog and C/C++, with MySQL, PostgreSQL, MongoDB, CouchDB, Redis, InfluxDB and SQLite available alongside. Access is over SSH and SFTP, and Uberlab publishes installation guides for applications such as WordPress and Nextcloud.

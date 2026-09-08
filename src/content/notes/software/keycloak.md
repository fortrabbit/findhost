---
description: Keycloak hosting — a Java identity server that needs a large JVM heap, PostgreSQL and a stable TLS hostname.
lead: Java, with a fixed hostname.
---

Keycloak is a Java identity server, the sign-in front door for other applications. It needs a JVM heap of a gigabyte or more and a stable hostname with TLS, since every client is configured against its URL and a change breaks them all. Production installs put [PostgreSQL](/databases/postgres/) behind it. [Java](/runtimes/java/) hosts and container platforms carry it; shared hosting does not.

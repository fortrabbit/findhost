---
description: Hosting that runs Elixir — BEAM applications, long-lived connections, and the clustering that makes them worth using.
lead: Long-lived connections, and a runtime that expects them.
---

Elixir runs on the BEAM, which is built for many long-lived connections and for processes that supervise each other. Hosting it well means letting those connections stay open and, for anything using distribution, letting instances find each other on a private network. A platform that recycles processes aggressively or blocks instance-to-instance traffic will run an Elixir application and quietly remove the reason for choosing it.

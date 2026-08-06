---
description: Hosting that runs Python — WSGI and ASGI applications, and the background workers most of them eventually need.
lead: Web framework first, worker second.
---

Python hosting usually means WSGI or ASGI: Django, Flask or FastAPI behind a server that speaks the protocol. The web process is the easy half. Most real applications also want a scheduled task or a queue worker, and that is where hosts diverge — some run a second process type without complaint, others expect a separate service. Version support matters here too, since a virtual environment pinned by the provider is a constraint the application inherits.

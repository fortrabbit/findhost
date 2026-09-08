---
description: FastAPI hosting — an async Python framework that needs an ASGI server and a persistent process rather than a request-scoped one.
lead: Python, but ASGI.
---

FastAPI is an async [Python](/runtimes/python/) framework served by an ASGI server such as Uvicorn, which is the one thing a host has to run that a [Flask](/software/flask/) deployment does not. Long-lived connections and background tasks favor a persistent process over a request-scoped one, so container platforms and a [VPS](/categories/vps/) suit it better than a shared Python plan.

---
description: Flask hosting — a minimal Python framework that needs a WSGI server behind a proxy and nothing framework-specific from a host.
lead: Python, with a WSGI server.
---

Flask is a minimal [Python](/runtimes/python/) web framework, so hosting it is hosting Python: a WSGI server such as Gunicorn behind a proxy, a virtual environment, and a way to run a database migration on deploy. There is nothing framework-specific for a provider to support. A host naming Flask is announcing Python, and a platform that names [Django](/software/django/) runs Flask the same way.

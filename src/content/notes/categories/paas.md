---
description: Push code and the platform runs it — the operating system, the web server and the scaling belong to the provider.
lead: Push code, the platform runs it.
# figure:
#   emoji: 🦕
#   color: rgb(30, 120, 34)
#   textColor: rgb(140, 230, 200)
#   text: Remember when PaaS was the future?
---

Platform as a Service (PaaS in short) takes code and runs it. The operating system, the web server, the runtime and the scaling belong to the provider; what the customer supplies is an application and a configuration file. Records here answer "provider" to [who manages the operating system](/operating-system/) and deploy by git push or a pipeline rather than by upload. The label carries baggage. Fueled by Heroku's early success, PaaS was widely predicted to replace classical hosting; instead many of the startups selling it failed, and the term went out of fashion with them. Plenty of services still work exactly this way — most of them now avoid calling themselves a PaaS. The boundaries blur on both sides. A [VPS](/categories/vps/) with a good [management panel](/categories/server-management/) does much of the same job while leaving the server in the customer's name, and [serverless](/categories/serverless/) is the same idea billed per request instead of per running instance. [Who manages the operating system](/operating-system/) is the field that separates the first pair; whether anything is still running when nobody is looking separates the second.

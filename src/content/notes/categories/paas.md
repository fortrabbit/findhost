---
description: Push code and the platform runs it — the operating system, the web server and the scaling belong to the provider.
lead: Push code, the platform runs it.
# figure:
#   emoji: 🦕
#   color: rgb(30, 120, 34)
#   textColor: rgb(140, 230, 200)
#   text: Remember when PaaS was the future?
faq:
  - q: 'What is the difference between PaaS and a VPS?'
    a: 'Who runs the server. On a PaaS, code goes in and the provider handles the operating system, the runtime and scaling. A [VPS](/categories/vps/) hands over root and leaves that work to the customer. Per unit of compute, PaaS usually costs more.'
---

Platform as a Service (PaaS in short) takes code and runs it. The operating system, the web server, the runtime and the scaling belong to the provider. You add code and config. For PaaS deploy by git push, deployment pipelines and other automation is common. Fueled by Heroku's early success, PaaS was widely predicted to replace classical hosting; instead many of the startups selling it failed, and the term went a bit out of fashion. Plenty of services still work exactly this way. Cloud hosting is often used as a synonym. The boundaries blur on both sides. A [VPS](/categories/vps/) with a good [management panel](/categories/server-management/) does much of the same job, [serverless](/categories/serverless/) is billed per request instead of per running instance.

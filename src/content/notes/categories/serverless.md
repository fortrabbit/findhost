---
description: Code that runs on demand and is billed per request, with nothing running and nothing charged while it sits idle.
lead: Runs on demand, billed per use.
figure:
  emoji: ⚡
  color: rgb(48, 54, 182)
  textColor: rgb(190, 220, 255)
  text: Servers invoked on demand.
---

The servers are still there; they are started on demand and stopped again. Strictly it means functions — small stateless handlers spun up for one request and thrown away, leaning on managed databases and storage for anything that has to be remembered. That fits spiky traffic, idle applications and event work: image resizing, webhooks, queue consumers, scheduled jobs.

It fits ordinary applications badly, and always in the same ways. Waking from idle costs time. The filesystem is throwaway and the next request may land elsewhere, so sessions, caches and uploads move to a shared store. Every cold environment opens its own database connection, so a burst can drown the database. Nothing runs longer than the platform's ceiling, which rules out daemons. And steady traffic costs more this way than a flat rate — per-request billing rewards irregular load and punishes the regular kind.

Vendors stretch the word: scale-to-zero containers and "serverless" databases that never stop are both sold under it. Whether anything runs while nobody is looking is the question worth asking. [PaaS](/categories/paas/) is the same convenience billed per running instance instead.

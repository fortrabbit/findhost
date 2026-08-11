---
description: Code that runs on demand and is billed per request, with nothing running and nothing charged while it sits idle.
lead: Runs on demand, billed per use.
figure:
  emoji: ⚡
  color: rgb(48, 54, 182)
  textColor: rgb(190, 220, 255)
  text: Servers invoked on demand.
---

The servers are still there, started on demand and stopped again. Strictly it means functions: small stateless handlers spun up for one request and thrown away, leaning on managed databases for anything that has to be remembered. That suits spiky traffic, idle applications and event work. It suits ordinary applications badly, always in the same ways — waking from idle costs time, the filesystem is throwaway, every cold environment opens its own database connection, nothing outlives the platform's ceiling, and steady traffic costs more than a flat rate. Vendors stretch the word, so the question worth asking is whether anything runs while nobody is looking. [PaaS](/categories/paas/) is the same convenience billed per running instance.

---
description: Code that runs on demand and is billed per request, with nothing running and nothing charged while it sits idle.
lead: Runs on demand, billed per use.
figure:
  emoji: ⚡
  color: rgb(28, 34, 52)
  textColor: rgb(150, 200, 255)
  text: Servers invoked on demand.
---

Serverless is a billing and deployment model rather than a technology, and every vendor stretches the label over whatever it happens to sell. The servers are still there; they are started on demand and stopped again, and the bill follows what ran rather than what was reserved. In the strict sense it means functions — small stateless handlers spun up for one request and thrown away — usually leaning on managed databases, auth and storage for anything that has to be remembered.

It fits some work very well. Spiky traffic scales out per request with no fleet waiting for it, idle applications cost close to nothing at rest, and event work — image resizing, webhooks, queue consumers, scheduled jobs — maps onto functions without a fight.

It fits ordinary applications badly, and the ways it does are consistent. Waking from idle costs time. The filesystem is throwaway and the next request may land elsewhere, so sessions, caches and uploads all move to a shared store. Every cold environment opens its own database connection, so a burst can drown the database. Nothing runs longer than the platform's ceiling, which rules out daemons. And steady traffic costs more this way than a flat rate: per-request billing rewards irregular load and punishes the regular kind.

How far a provider sits from the strict sense varies. Scale-to-zero containers and "serverless" databases that never actually stop are both sold under the word, so [pricing model](/entry-price/) and whether anything runs while nobody is looking are the questions worth asking. [PaaS](/category/paas/) is the same convenience billed per running instance instead.

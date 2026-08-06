---
description: Hosting marketed for data pipelines — scheduled work measured in minutes and memory rather than requests.
lead: Batch work, not page views.
---

A pipeline runs on a schedule, holds data in memory, and cares about how long a process may run and how much it may allocate — limits that page-oriented hosting sets low and rarely advertises. Providers marketing this usually offer worker instances, generous timeouts and somewhere to keep intermediate files. Serverless platforms are a poor fit unless the work fits inside their execution limit.

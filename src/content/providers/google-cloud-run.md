---
id: google-cloud-run
name: Google Cloud Run
url: https://cloud.google.com/run
category: serverless
description: Google Cloud Run runs PHP containers that scale to zero and bill per use.
figure:
  emoji: 🏃
  color: rgb(30, 40, 55)
  textColor: rgb(150, 200, 255)
  text: Containers that scale to zero.
ai: co-authored
greenWebId: 595
---

## About Google Cloud Run

Cloud Run is Google's serverless container platform. It runs any container, scales it to zero when idle, and bills only while a request is in flight. The scale-to-zero end of serverless, minus the function model. PHP runs as an ordinary container, usually php-fpm with nginx or a FrankenPHP build.

Language-agnostic containers make it portable. That portability has a price, and the price is the container. A Dockerfile to write and keep current. An image registry. The surrounding Google Cloud services to wire up. And scale-to-zero still buys a cold start on the first request after a quiet spell.

---
id: digitalocean-functions
name: DigitalOcean Functions
url: https://www.digitalocean.com/products/functions
category: serverless
description: DigitalOcean Functions runs PHP natively as a function-as-a-service.
figure:
  emoji: 🌊
  color: rgb(20, 40, 90)
  textColor: rgb(140, 190, 255)
  text: Native PHP functions on the ocean.
ai: co-authored
---

## About DigitalOcean Functions

DigitalOcean Functions is a function-as-a-service platform built on Apache OpenWhisk. It has the thing most serverless platforms lack for PHP: a native runtime, sitting next to Node, Python, and Go, with Composer support. So a PHP handler runs with no Bref-style layer bolted onto Lambda.

It scales to zero and bills per use. Good for small event handlers, webhooks, an API endpoint or two. The function rules still bite, though. Handlers are stateless and short-lived, so anything that has to outlive a call lives in a managed database or storage service, never on local disk.

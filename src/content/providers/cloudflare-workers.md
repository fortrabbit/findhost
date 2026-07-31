---
id: cloudflare-workers
name: Cloudflare Workers
url: https://workers.cloudflare.com
category: serverless
description: Cloudflare Workers runs code at the edge, but has no native PHP.
figure:
  emoji: 🔶
  color: rgb(60, 40, 20)
  textColor: rgb(255, 190, 120)
  text: PHP at the edge, via WASM.
ai: co-authored
---

## About Cloudflare Workers

Cloudflare Workers runs code at the edge, next to the visitor, with near-instant cold starts. It runs JavaScript and WebAssembly, with native paths for Python and Rust. Not PHP. The only way to get PHP onto Workers is the community php-wasm project, which compiles PHP to WebAssembly and drives it through a layer of JavaScript glue.

That path exists, and it makes a fun demo. It is not a first-class runtime, and not a serious way to run a full PHP app in production. Workers is built for edge logic, request rewriting, and JavaScript-shaped work, not for hosting Laravel or Symfony.

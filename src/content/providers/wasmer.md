---
id: wasmer
name: Wasmer
url: https://wasmer.io
category: serverless
description: Wasmer runs PHP compiled to WebAssembly at the edge.
figure:
  emoji: 🧩
  color: rgb(103, 126, 208)
  textColor: rgb(235, 237, 255)
  text: PHP at the WASM edge.
ai: co-authored
---

## About Wasmer

Wasmer is a WebAssembly runtime with an edge platform on top. That edge product runs PHP compiled to WASM next to the visitor, and reportedly runs WordPress, Laravel, and Symfony unmodified, with opcode caching making some pages faster than a normal origin. It sits at the experimental edge of serverless. WebAssembly buys near-instant cold starts, and that is the whole pitch.

The catch is real, and current. Persistent custom filesystem volumes are still on the way. SQLite writes live in memory, not on disk. Anything stateful needs care. Running production PHP on WASM is a promising thing to watch in 2026. Also a young one. It asks the whole stack to think in WebAssembly.

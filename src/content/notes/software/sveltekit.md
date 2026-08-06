---
description: SvelteKit hosting — an adapter per platform, which is the whole of the hosting question.
lead: Pick the adapter, then the host.
---

SvelteKit compiles through an adapter chosen for the target: node, static, or one written for a specific platform. Hosting it means having the right adapter, and a provider documenting SvelteKit is usually saying which one it expects. With the node adapter it is an ordinary long-lived Node process; with the static one it is a directory of files and no runtime at all.

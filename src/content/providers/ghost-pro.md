---
id: ghost-pro
name: Ghost(Pro)
urls:
  home: https://ghost.org
status: out-of-scope
criterion: 1
checkedAt: 2026-07-31
ai: authored
---

Ghost(Pro) is the managed service run by the Ghost Foundation, the non-profit behind the open-source Ghost publishing platform. Plans start at $18 a month billed yearly and run to $199, with a worldwide CDN, automated backups, SSL and DDoS mitigation included, and revenue funding the open-source project — an unusually clean arrangement.

**Criterion 1 — runs application code — fails.** A customer of Ghost(Pro) can install a theme and call the Admin and Content APIs, but cannot deploy an application in a general-purpose language. There is no way to run custom Node.js, no shell, and no server-side code of the customer's own. What is sold is a managed instance of one product, which makes it software as a service rather than hosting.

The line matters, because it is not the same as excluding single-application hosts generally. Seravo and Servd are listed: both run one application, but both give the customer a shell, a git project and PHP they can change. Ghost(Pro) does not. **If Ghost(Pro) gains a way for a customer to deploy their own server-side code, that would reverse this.**

Ghost itself is open-source and self-hostable on any provider in this dataset that runs Node.js.

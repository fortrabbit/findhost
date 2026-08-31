---
id: contentful
name: Contentful
urls:
  home: https://www.contentful.com
referringSubnets: { now: 3004, before: 3011 }
status: out-of-scope
criterion: 1
checkedAt: 2026-08-06
ai: authored
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-08-31 }
---

Contentful is a hosted content platform: an editing interface, a content model and a read API, sold per space and per API call. It is one of the products people mean by "CMS backend as a service", alongside Sanity, Storyblok and the hosted tiers of Directus and Strapi.

**Criterion 1 — runs application code — is not met, and cannot be.** Nothing of the customer's is deployed or executed: the product serves content over an API and the application that reads it runs somewhere else. That somewhere else is what this register is about, and it is a real question — a headless setup is [two things to host](/use-cases/headless-cms/), and only one of them is here.

This is not a judgement about the product. The register describes hosting by the fields hosting has — runtimes, deployment, shell access, where the machines are — and none of them has an answer for a content API. Self-hosting the same shape of software is a different matter and is in scope on the host's side: providers documenting [Directus](/software/directus/) or [Strapi](/software/strapi/) are listed under those names.

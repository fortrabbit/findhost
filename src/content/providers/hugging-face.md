---
id: hugging-face
name: Hugging Face
urls:
  home: https://huggingface.co
  pricing: https://huggingface.co/pricing
  status: https://status.huggingface.co/
  terms: https://huggingface.co/terms-of-service
  docs: https://huggingface.co/docs/hub/spaces-overview
category: paas
description: Machine-learning hub whose Spaces product hosts running applications — Gradio, Streamlit or an arbitrary Dockerfile — on CPU or rented GPU hardware.
hqCountry: US
ownership: vc-backed
whoManagesOs: container
useCases:
  - ai-app
  - dashboard
  - api
  - learning
  - side-project
audience:
  - education
  - startup
  - enterprise
  - indie-hacker
runtimes:
  - python
  - docker
  - static
deployMethods:
  - git-push
  - docker-image
  - api
pricingModel: fixed-tier
freeTier: permanent
persistentStorage: false
apiAvailable: public
cliTool: official
status: active
checkedAt: 2026-08-01
sources:
  - { field: priceFrom, url: 'https://huggingface.co/pricing', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://huggingface.co/pricing', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://huggingface.co/docs/hub/spaces-overview', checkedAt: 2026-08-01 }
  - { field: persistentStorage, url: 'https://huggingface.co/docs/hub/spaces-overview', checkedAt: 2026-08-01 }
  - { field: runtimes, url: 'https://huggingface.co/docs/hub/spaces-overview', checkedAt: 2026-08-01 }
  - { field: deployMethods, url: 'https://huggingface.co/docs/hub/spaces-overview', checkedAt: 2026-08-01 }
figure:
  emoji: 🤗
  color: rgb(75, 55, 10)
  textColor: rgb(255, 225, 150)
  text: A model registry that grew a host.
ai: authored
---

## About Hugging Face

Hugging Face is best known as the registry where machine-learning models and datasets live, but its Spaces product makes it a hosting provider as well. A Space is a Git repository that the platform builds and runs as a live application, either through one of the supported SDKs — Gradio and Streamlit for Python, or a plain static site — or from a Dockerfile, which admits anything that fits in a container.

Hardware is where the money is. A basic CPU tier and a dynamically allocated GPU pool are free; paid tiers rent Nvidia cards by the hour. Account plans step from a personal subscription through team and enterprise tiers, adding storage, SSO, audit logs and access controls. What is free has narrowed: static Spaces remain free for everyone, while Spaces that run compute generally require a paid plan to create.

## Worth knowing

This is not a general web host. Spaces are shaped around demonstrating a model, the Python SDKs assume that shape, and a free Space sleeps when idle.

Storage is billed on top of the plan and GPU rental is charged by the hour whether or not anyone visits, so an idle Space on rented hardware still costs money.

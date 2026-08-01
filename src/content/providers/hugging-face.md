---
id: hugging-face
name: Hugging Face
urls:
  home: https://huggingface.co
  pricing: https://huggingface.co/pricing
  status: https://status.huggingface.co/
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
entryPriceBand: free-tier
freeTier: permanent
apiAvailable: public
cliTool: official
figure:
  emoji: 🤗
  color: rgb(75, 55, 10)
  textColor: rgb(255, 225, 150)
  text: A model registry that grew a host.
ai: authored
---

## About Hugging Face

Hugging Face is best known as the registry where machine-learning models and datasets live, but Spaces makes it a hosting provider as well. A Space is a git repository that the platform builds and runs as a live application, either through one of the supported SDKs — Gradio and Streamlit for Python, or a static site — or from a Dockerfile, which allows anything that fits in a container.

Hardware is where the money is. CPU Basic with two vCPUs and sixteen gigabytes is free, as is ZeroGPU with dynamically allocated capacity, and paid tiers rent Nvidia T4, L4, L40S and A100 cards by the hour. Account plans are PRO at nine dollars a month, Team at twenty per user and Enterprise at fifty, adding storage, SSO, audit logs and access controls.

## Reservations

This is not a general web host and does not pretend to be. Spaces are shaped around demonstrating a model, the Python SDKs assume that shape, and a free Space sleeps when idle. Storage is billed by the terabyte on top of the plan, and GPU rental is charged by the hour whether or not anyone visits — a Space left running on an A100 is an expensive way to host a demo.

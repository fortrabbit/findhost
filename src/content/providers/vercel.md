---
id: vercel
name: Vercel
url: https://vercel.com
category: serverless
description: Vercel is a frontend cloud where PHP runs only through a community runtime.
figure:
  emoji: 🔺
  color: rgb(20, 20, 24)
  textColor: rgb(220, 220, 230)
  text: PHP on the frontend cloud.
ai: co-authored
---

## About Vercel

Vercel is a serverless platform for frontend frameworks and JavaScript functions. PHP is not officially supported. It runs through `vercel-php`, a community runtime that executes PHP inside Vercel's Node-based functions, Composer and all. One myth worth killing: that runtime is not dead. It is actively maintained and tracks PHP up to 8.5. But it rests on one community maintainer, not a platform promise.

Vercel is a fine home for a Next.js or SvelteKit frontend. For a PHP backend it is a workaround. The serverless function limits apply, and the PHP support lives or dies by one person's free time, not a roadmap.

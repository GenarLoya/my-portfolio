---
title: Graph Stream Feed — Real-time System Monitor
repo_url: https://github.com/GenarLoya/graph-stream-feed
site_url: https://graph-stream-feed.genarloya.deno.net
date: 2024-01-01
type: project
layout: layouts/project.tsx
tags:
  - sse
  - real-time
  - monitoring
  - system
  - devtools
technologies:
  - Deno
  - Hono
  - React
  - TypeScript
  - TanStack Query
  - Recharts
  - Tailwind
  - Vite
  - Spino
cover: ./images/cover.png
gallery:
  - ./images/screenshot-0.png
---

Real-time system monitor using **Server-Sent Events (SSE)**. A Deno +
Hono server reads CPU, memory, and process data from your computer and
streams it to the browser automatically. The React frontend renders
charts with the historical data and a table of active processes.

**Backend**: Deno + Hono, streams live data over SSE. **Frontend**: Vite
+ React 18 + TypeScript, TanStack Query, Recharts, Tailwind. **Shared
types**: Deno workspace package. **Dev orchestration**: Spino runs the
server and the frontend in parallel.

## Endpoints

- `GET /online/cpu` — SSE — CPU metrics every 3s
- `GET /online/memory` — SSE — memory metrics every 3s
- `GET /processes` — SSE — top 10 processes every 3s

## How it works

The server runs system commands (`top`, `free`, `ps`) to collect
metrics. The data is sent as JSON over the SSE stream. The frontend
receives the data and stores it in history (max 60 records). React
components read this data and render the charts and the table.

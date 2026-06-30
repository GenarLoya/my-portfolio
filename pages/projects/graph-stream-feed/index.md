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

Monitor de sistema en tiempo real usando **Server-Sent Events (SSE)**.
Un servidor hecho en Deno + Hono toma datos del CPU, la memoria y los
procesos de tu computadora y los envía al navegador automáticamente. La
página web en React muestra gráficas con el historial de datos y una
tabla con los procesos activos.

**Servidor**: Deno + Hono, envía datos en vivo por SSE. **Página web**:
Vite + React 18 + TypeScript, TanStack Query, Recharts, Tailwind. **Tipos
compartidos**: paquete del workspace de Deno. **Ejecución en dev**:
Spino corre el servidor y la página al mismo tiempo.

## Endpoints

- `GET /online/cpu` — SSE — datos de CPU cada 3s
- `GET /online/memory` — SSE — datos de memoria cada 3s
- `GET /processes` — SSE — top 10 procesos cada 3s

## Cómo funciona

El servidor ejecuta comandos del sistema (`top`, `free`, `ps`) para
obtener las métricas. Los datos se envían en formato JSON por el stream
SSE. La página recibe los datos y los guarda en el historial (máximo 60
registros). Los componentes de React leen estos datos y muestran las
gráficas y la tabla.

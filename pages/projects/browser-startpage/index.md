---
title: Browser Startpage — Personal Dashboard
repo_url: https://github.com/GenarLoya/browser-startpage
date: 2026-07-26
type: project
layout: layouts/project.tsx
tags:
  - startpage
  - bookmarks
  - productivity
  - dashboard
  - pwa
technologies:
  - Vite
  - React 19
  - TypeScript
  - Tailwind v4
  - Base UI
  - shadcn/ui
  - IndexedDB
  - dnd-kit
  - cmdk
  - vite-plugin-singlefile
cover: ./images/cover.png
gallery:
  - ./images/screenshot-0.png
---

Personal browser startpage built as a **single-file** Vite + React 19 + TypeScript app. Bookmark manager with nested folders, Obsidian-style markdown notes per bookmark, drag-and-drop reparenting, dark mode, and an omnibox/command palette powered by Google Suggestions via JSONP. State persists in **IndexedDB** (single-key blob with `idb-keyval`); theme and brand live in `localStorage`.

Designed to be opened directly from `file://` or served as a static asset — the entire bundle compiles into one HTML file thanks to `vite-plugin-singlefile`.

## Features

- **Nested folders** with infinite depth, inline rename, delete-with-confirm, and cascade-delete of descendants.
- **Bookmark CRUD** with URL, title, and **Obsidian-style markdown notes** (`react-markdown` preview).
- **Drag and drop** via `@dnd-kit/core` — bookmark/folder can be dragged onto any folder (or the All-bookmarks root) to reparent. Cycle protection when moving folders.
- **Omnibox / command palette** (`/` or `Cmd/Ctrl+K`) with live **Google Suggestions via JSONP** as a CORS workaround, local bookmark/folder matches, and an Enter-to-search-Google fallback. DuckDuckGo `/ac/` as the JSONP-backup provider.
- **Dark mode** persisted in `localStorage`, respects `prefers-color-scheme`.
- **Configurable brand** — icon (text/emoji) or uploaded image (≤256 KB), label, with live preview.
- **ASCII-art clock** rendered with Unicode block characters, locale-aware date via `Intl.DateTimeFormat`.
- **Three-column layout** — fixed 240px sidebar, main grid, optional panel for bookmark editor — with **independent scroll contexts**: `h-screen overflow-hidden` on the root, `min-h-0` on every overflow child.
- **Single-file build** — everything inlined into `dist/index.html` (~660 KB / 200 KB gz). No server required.

## Stack

| Layer        | Choice                                                                 |
|--------------|------------------------------------------------------------------------|
| Build        | Vite 8 + `@vitejs/plugin-react` + `babel-plugin-react-compiler` 1.0   |
| UI           | React 19 (strict TS), Tailwind v4 via `@tailwindcss/vite`              |
| Components   | Hand-rolled shadcn-style primitives in `src/components/ui/` over `@base-ui/react` |
| State        | `idb-keyval` (folders + bookmarks), `localStorage` (theme + brand)     |
| DnD          | `@dnd-kit/core` (PointerSensor + KeyboardSensor)                        |
| Omnibox      | `cmdk` + JSONP helper (`<script>` injection)                            |
| Markdown     | `react-markdown` + `@tailwindcss/typography`                            |
| Icons        | `lucide-react`                                                          |
| Release      | GitHub Actions workflow with conventional-commit based version bumping  |

## Layout pitfalls

The hardest part wasn't the components — it was the **scroll contexts**:

- Root must be `h-screen overflow-hidden` (not `min-h-screen`).
- Every overflow child needs `flex-1 min-h-0` or `overflow` silently no-ops on flex children.
- Nested bookmark rows used inline `marginLeft = depth*8 + 16px`, which grew horizontally without bound for deep nesting; the sidebar needed `overflow-x-hidden` to clip it.

## Releases

A GitHub Actions workflow at `.github/workflows/release.yml` runs on every push to `main` and bumps the version (`patch` for `fix:`/`perf:`/`refactor:`/`revert:`, `minor` for `feat:`, `major` for `BREAKING CHANGE:` or `feat!:`) non-interactively using `npm version` — then builds the single-file bundle and publishes it as a GitHub Release with `dist/index.html` as the downloadable asset.

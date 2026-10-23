# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Landing page for an architect ("Victoria"). README is in Spanish. Built spec-driven: uses `/spec` and `/spec-impl` workflow, following practices from https://github.com/Klerith/fernando-skills (installed via `npx skills@latest add Klerith/fernando-skills`).

`app/page.tsx` and `app/layout.tsx` are still the create-next-app boilerplate (default title/metadata, Next.js logo page).

## Commands

```bash
npm run dev      # dev server
npm run build    # production build
npm run start    # run production build
npm run lint     # eslint (flat config, eslint.config.mjs)
```

No test runner is configured.

## Stack / architecture

- Next.js 16.4.2 (App Router, `app/` only), React 19.3, TypeScript strict, Tailwind v4.
- **Next.js has breaking changes vs. training data** (see AGENTS.md): read the relevant guide in `node_modules/next/dist/docs/` before writing Next code.
- `next.config.ts` enables `cacheComponents` and `partialPrefetching`, and wires Tailwind through Turbopack rules (`@tailwindcss/turbopack` loader on `*.css`) rather than PostCSS.
- Layout uses the global `LayoutProps<"/">` type (generated route types) and `next/font/google` Geist fonts exposed as CSS variables.
- Path alias `@/*` maps to repo root.

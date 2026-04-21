# GameArena — Tournaments

A production-quality esports tournament browser built with **Next.js 15 App Router**, **TypeScript**, and **Tailwind CSS**.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/tournaments`.

---

## Features

- **Tournaments list** — responsive grid (1 col → 2 → 3), search input that queries the backend, skeleton loading state
- **Tournament modal** — native `<dialog>` element, accessible via direct URL (`/tournaments/[id]`), keyboard & backdrop close
- **Theme toggle** — dark / light mode with zero flash on load (CSS variables + `data-theme` attribute)

---

## API

By default, a local Next.js API route (`/api/tournaments`) serves `db.json` directly — no external dependencies.

### Using my-json-server (optional)

1. Push this repo to GitHub (it already contains `db.json`)
2. Edit `.env.local`:

```env
NEXT_PUBLIC_API_BASE_URL=https://my-json-server.typicode.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME
```

3. Restart the dev server

---

## Architecture Decisions

### Next.js 15 App Router patterns

- **Server Components** fetch data — no client-side waterfalls or loading spinners for initial paint
- **`searchParams`** drive search — URL is the source of truth, browser back works, links are shareable
- **Intercepting routes** (`@modal/(.)`) render the modal as an overlay when navigating from the list; refreshing or direct-linking renders the full page version — same modal component, different close behavior
- **`loading.tsx`** acts as the skeleton during navigation transitions

### Component architecture (follows Shield-Webapp conventions)

- `<Icon name="search" size="sm" color="accent" />` — all icons via a single typed component, no external icon library
- `<Btn variant="primary" size="lg" icon="arrowRight" />` — single button primitive with variants and icon slot
- `*.styles.ts` files colocated with components — styling separated from logic
- `cn()` utility (`clsx` + `tailwind-merge`) for conditional class merging

### Theming

- CSS custom properties (`--color-*`) on `:root` / `[data-theme="light"]`
- Tailwind maps to those vars (`bg-card`, `text-text-secondary`, etc.)
- An inline `<script>` in `<head>` reads `localStorage` and sets `data-theme` before first paint — eliminates flash of wrong theme

### Join flow

`POST /api/tournaments/[id]/join` — optimistic UI with loading / success / error states. In production this route would verify the JWT, check capacity, and write to the database.

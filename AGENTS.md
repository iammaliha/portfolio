# AGENTS.md — portfolio

## Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | ESLint (flat config) on all files |

No test or typecheck scripts are configured.

## Stack & quirks

- **React 19, Vite 8, Tailwind CSS v4, React Router 7** (BrowserRouter, SPA routing).
- **Tailwind v4** — `@import "tailwindcss"` in CSS (not old `@tailwind`). Custom theme values defined via `@theme` in `src/index.css`.
- **React Compiler** enabled via `@rolldown/plugin-babel` + `reactCompilerPreset()` in `vite.config.js`.
- **Framer Motion** for animations, **Lucide React** for icons, **shadcn/ui-style** components in `src/components/ui/`.
- **Full TypeScript** — `tsconfig.json` exists. Entrypoint is `src/main.tsx`.
- **ESLint flat config** (`eslint.config.js`). The `react-refresh/only-export-components` rule is set to `warn` with `allowConstantExport: true` to accommodate UI component variant exports.
- **Google Fonts** — Playfair Display (display/headings) + Inter (body) loaded in `index.html`.
- `dist/` is git-tracked (GitHub Pages deployment — `npm run build && git push`).

## Architecture

- **Entrypoint:** `index.html` → `src/main.tsx` → `src/App.tsx` → `src/routes/index.tsx`
- **Routing:** `BrowserRouter` + `useRoutes`. Single route `/` renders `Home` page containing all sections in order: Hero → About → Projects → Contact.
- **Layout:** `MainLayout` (Navbar + `<Outlet />` + Footer) wraps all routes via `react-router-dom`.
- **Styling:** Tailwind utility classes + `index.css` (Tailwind import, `@theme` block, CSS custom properties, keyframes, resets).

## Project structure

```
src/
  components/
    ui/       — shadcn-style primitives (Button, Card, Badge, Input, Textarea)
    layout/   — Navbar (sticky glassmorphism), Footer
    sections/ — HeroSection, AboutSection, ProjectsSection, ContactSection
  pages/      — Home.tsx (composes all sections into one scrollable page)
  layouts/    — MainLayout.tsx
  hooks/      — useScrollReveal (IntersectionObserver-based reveal)
  routes/     — Route definitions
  utils/      — cn() utility (clsx + tailwind-merge)
  types/      — Project, NavItem, Skill interfaces
  animations/ — Framer Motion variants (fadeIn, slideUp, staggerContainer, etc.)
  data/       — Static project & skills data
```

## Content

- `src/components/sections/ContactSection.tsx` — form is presentational (no backend wired).
- Section order on Home page: Hero → About → Projects → Contact.
- Navbar links scroll to routes (`/`, `/projects`, `/contact`). Section-based home page includes all content.

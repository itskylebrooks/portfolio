# Kyle Brooks — Portfolio (Enhanced Structure)

Modular Vite + React + TypeScript + Tailwind + React Router.

## Structure
- `src/app` – Router and shell
- `src/pages` – Page-level components
- `src/components` – Reusable UI + icons
- `src/content` – Typed MDX indexes
- `content/` – MDX project + post sources
- `src/hooks` – Reusable hooks
- `src/utils` – Helpers
- `src/styles` – Tailwind entry

## Run
```bash
pnpm install   # or npm / yarn
pnpm dev
pnpm build && pnpm preview
```

## Notes
- BrowserRouter is used; configure SPA fallback on hosting.
- Typography plugin is enabled for nicer post rendering.

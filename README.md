# Kyle Brooks — Personal Website

A minimalist portfolio + blog built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Content lives in **MDX** files (projects + essays) and is rendered with a calm, readable layout.

## What’s inside

- **Work / Projects** pages sourced from `content/projects/*.mdx`
- **Blog** index + post pages sourced from `content/posts/*.mdx`
- **MDX rendering** with consistent typography (`Prose` component)
- **Metadata generation** for posts/projects (`scripts/generate-meta.mjs`)
- **SEO helpers** (document title + meta tags hooks)
- **Newsletter form UI** (`NewsletterForm` component)
- **Static assets + PWA bits** (service worker in `public/sw.js`, icons/manifest in `public/`)
- **Accessibility** and a reduced-motion path (`prefersReducedMotion` utility)

## Tech stack

- **UI:** React + TypeScript
- **Build:** Vite
- **Styling:** Tailwind CSS + PostCSS
- **Content:** MDX
- **Deployment:** Vercel (`vercel.json`)

## Getting started

```bash
pnpm install
pnpm dev
```

Build + preview:

```bash
pnpm build
pnpm preview
```

## Content workflow

### Add a blog post

1. Create a new file in `content/posts/` (e.g. `my-post.mdx`).
2. Ensure it includes the frontmatter fields your post loader expects.
3. Regenerate metadata (see `scripts/generate-meta.mjs`).

### Add or edit a project page

1. Add or update an entry in `content/projects/`.
2. Regenerate metadata (see `scripts/generate-meta.mjs`).

> If you’re unsure which fields are required, copy an existing `.mdx` file from the same folder and adjust.

## Project structure

```txt
content/
  posts/            # MDX essays
  projects/         # MDX project pages
emails/
  news-template.html
public/
  sw.js             # service worker
  icons/            # web manifest + icons
  fonts/            # local fonts
  media/            # static media
scripts/
  generate-meta.mjs # metadata helper
src/
  features/
    home/           # landing page
    work/           # work list + project pages
    blog/           # blog list + post pages
    legal/          # imprint / privacy / license
    misc/           # 404
  shared/
    components/     # Header/Footer/Prose/SmartImage/etc.
    data/           # posts.ts + projects.ts (aggregated metadata)
    hooks/          # title/meta/scroll helpers
    utils/          # cn + prefersReducedMotion
```

## Deployment

This site is deployed on **Vercel**.

- Config: `vercel.json`
- Build output: Vite `dist/`

## License

Original work by Kyle Brooks. See `LICENSE` and `NOTICE`.
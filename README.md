# Ashstone Studios — Front-End Test Task

Blog landing built from a Figma mockup as a React test task.

**Live demo:** https://bernecyan1998.github.io/ashstone-studios-test-task/

## Features

- Sticky horizontal menu that hides after 200px of downward scroll and reappears on upward scroll
- Hover submenus (CSS-only) with an invisible bridge so the dropdown stays open while the cursor crosses the gap
- Mobile drawer menu with expandable submenus
- Responsive 3 / 2 / 1 column post grid
- Retina image support via `srcset`
- Posts fetched from a remote JSON endpoint
- Client-side search filtering posts by title and description
- Post detail popup, closable via the close button or backdrop click

## Tech stack

React 19, Vite 8, plain CSS (BEM naming, rem-based spacing per spec).

## Running locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`. Deploys to GitHub Pages automatically on push to `main` via the workflow in `.github/workflows/deploy.yml`.

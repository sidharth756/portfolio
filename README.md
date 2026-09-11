# React + Vite + Cloudflare Pages

This project is configured to build for Cloudflare Pages.

## Cloudflare Pages deployment

- Build command: `npm run build`
- Build output directory: `dist`
- SPA fallback: `public/_redirects` rewrites all routes to `index.html`

## Local development

- `npm install`
- `npm run dev`

## Preview the Pages output locally

- `npm run build`
- Deploy or preview the generated `dist` directory with Wrangler if needed

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

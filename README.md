# encyclipedia-landing

Public marketing site for [encyclipedia.ai](https://encyclipedia.ai).

This repository is separate from the authenticated
[Next.js product](https://github.com/encyclipedia-ai/encyclipedia-web-app) at
[app.encyclipedia.ai](https://app.encyclipedia.ai). It has no authentication,
database, API routes, or server runtime.

The site explains that
[Encyclipedia Librarian](https://github.com/encyclipedia-ai/encyclipedia-agent)
is a required desktop companion: source media is downloaded on the user's
computer before the
[API](https://github.com/encyclipedia-ai/encyclipedia-api) hands uploaded media
to the renderer.

## Development

```bash
pnpm install
pnpm dev
```

All product CTAs use `NEXT_PUBLIC_APP_URL`, falling back to
`https://app.encyclipedia.ai`:

```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000 pnpm dev
```

Because this is a static export, the value is baked into the generated files
at build time.

## Static build

`next.config.ts` sets `output: "export"` and disables image optimization for
static hosting. Build output is written to `out/`:

```bash
NEXT_PUBLIC_APP_URL=https://app.encyclipedia.ai pnpm build
```

You can inspect `out/` with any static HTTP server. `pnpm start` is not the
production deployment path for this exported site.

## GitHub Pages deployment

`.github/workflows/pages.yml` deploys on every push to `main` and supports
manual dispatch. It installs dependencies, runs `pnpm build`, adds
`out/.nojekyll`, uploads `out/`, and deploys through GitHub Pages.

The custom domain is preserved by `public/CNAME`. Configure
`NEXT_PUBLIC_APP_URL` in the workflow or repository environment if the product
origin changes; otherwise the code's production fallback is used.

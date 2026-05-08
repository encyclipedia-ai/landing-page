# encyclipedia-landing

Public marketing site for [encyclipedia.ai](https://encyclipedia.ai).

The product itself lives at [app.encyclipedia.ai](https://app.encyclipedia.ai)
in a separate repository. This site is intentionally a dumb static
marketing page: no auth, no database, no API. Sign-in / sign-up CTAs
hand the user off to the app subdomain, which owns the auth surface.

## Develop

```bash
pnpm install
pnpm dev
```

By default sign-in CTAs point at `https://app.encyclipedia.ai/sign-in`. Override
locally by setting `NEXT_PUBLIC_APP_URL` in `.env.local` (e.g. to
`http://localhost:3000` while developing both sides).

## Deploy

Vercel project pointing at `encyclipedia.ai` + `www.encyclipedia.ai`. Set
`NEXT_PUBLIC_APP_URL=https://app.encyclipedia.ai` in project env.

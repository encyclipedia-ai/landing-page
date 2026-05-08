# encyclipedia-landing

Public marketing site for [encyclipedia.ai](https://encyclipedia.ai).

The product itself lives at [app.encyclipedia.ai](https://app.encyclipedia.ai)
in a separate repository. This site is intentionally a dumb static
marketing page: no auth, no database, no API. While the app is in **closed
beta**, every CTA routes to a Google Form collecting invite requests
(falling back to a pre-filled `mailto:` if the form URL isn't configured).

## Develop

```bash
pnpm install
pnpm dev
```

Set `NEXT_PUBLIC_INVITE_FORM_URL` in `.env.local` to point at your Google
Form (or any URL). Without it, "Request an invite" buttons open a
pre-filled email to `mau@encyclipedia.ai`.

## Deploy

Vercel project pointing at `encyclipedia.ai` + `www.encyclipedia.ai`. Set
`NEXT_PUBLIC_INVITE_FORM_URL` in project env. When the app opens publicly,
swap the env var (and update CTA copy in [`src/app/page.tsx`](src/app/page.tsx))
to point at `https://app.encyclipedia.ai/sign-in` instead.

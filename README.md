# Prism Technosys Website

Corporate website for Prism Technosys, a digital product studio. Originally
scaffolded against the design reference and scope in `Crystal Engineers.pdf`
(a client project), then repurposed as Prism Technosys's own site — see
`docs/content-model.md` for the CMS handover and `.claude/plans/` (or ask
Claude) for the original build plan.

## Layout

- `apps/web` — the public site: Next.js (App Router, TypeScript), statically
  exported (`output: 'export'`) for deployment to shared/cPanel hosting with
  no Node runtime required.
- `apps/studio` — Sanity Studio, the content-editing UI for whoever manages
  the site's content. Not yet wired to `apps/web`'s data fetching — see
  `docs/content-model.md` for the remaining setup steps.
- `.github/workflows/` — CI: builds and FTP-deploys the site, and deploys the
  Studio, on push to `main` (and on a Sanity publish webhook, once wired).

## Local development

```bash
cd apps/web && npm install && npm run dev   # site at localhost:3000
cd apps/studio && npm install && npm run dev # studio at localhost:3333 (after `npx sanity init`)
```

## Building for production

```bash
cd apps/web && npm run build   # outputs static files to apps/web/out/
```

The contact form posts to `apps/web/public/contact-handler.php`, which is
copied into `out/` as-is and requires a PHP-capable host (any standard
cPanel plan).

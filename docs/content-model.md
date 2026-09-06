# Content Model & CMS Handover

This document maps the website's content to the Sanity Studio schema in
`apps/studio/schemaTypes/`, and lists the one-time setup still needed to go
from "code in this repo" to "client can edit content and see it go live."

## Current state

The site (`apps/web`) currently renders from local TypeScript content modules
in `apps/web/src/content/*.ts`, seeded with the placeholder copy from the
Emergent prototype (`crystal-innovate.preview.emergentagent.com`). The Sanity
Studio schema is written and type-checked but **not yet wired into the site's
data fetching** — that's the next phase, once a real Sanity project exists.

| Content module (`apps/web/src/content/`) | Sanity document type | Notes |
| --- | --- | --- |
| `site.ts` (`siteSettings`, `stats`) | `siteSettings` (singleton) | Nav labels stay in code — only company facts are editable. |
| `products.ts` (`heroSlides`, `productValueProps`, `products`, `productsHero`, `productsCta`) | `page` (`slug: "home"` / `"products"`) + `product` | Hero slide array lives on the `home` page doc; product cards are their own `product` docs. |
| `industries.ts` | `industry` | One document per sector. |
| `projects.ts` | `project` | References an `industry` document; **placeholder entries — replace with real case studies.** |
| `clients.ts` | `client` | Renders as a text wordmark until a `logo` image is uploaded. |
| `capabilities.ts` | `page` (`slug: "capabilities"`) | Lifecycle steps as portable text / structured content. |
| `home.ts` | `page` (`slug: "home"`) | |

## One-time setup to go live with the CMS

1. **Create the Sanity project**
   ```bash
   cd apps/studio
   npx sanity login
   npx sanity init --project-id <new-or-existing> --dataset production
   ```
   This gives you a real `projectId`. Put it in `apps/studio/.env` as
   `SANITY_STUDIO_PROJECT_ID` (and in `apps/web/.env.local` as
   `NEXT_PUBLIC_SANITY_PROJECT_ID` once the web app is wired to fetch from it).

2. **Seed content** — either re-enter the placeholder copy through the Studio
   UI (`npm run dev` in `apps/studio`), or write a one-off migration script
   using `@sanity/client` that reads `apps/web/src/content/*.ts` and creates
   the matching documents. Either way, the tables above are the mapping to
   follow.

3. **Wire `apps/web` to fetch from Sanity** — replace the imports in each
   page from `@/content/*` with a Sanity GROQ query (via `next-sanity` or the
   plain `@sanity/client`), fetched at build time so `output: 'export'` still
   works. This is a mechanical swap because the content module shapes already
   mirror the schema.

4. **Deploy the Studio** so the client has an editing UI:
   ```bash
   cd apps/studio
   npx sanity deploy
   ```
   This publishes to `<your-project-name>.sanity.studio` — no separate
   hosting needed.

5. **Wire the rebuild-on-publish webhook** — in sanity.io/manage, add a
   webhook that fires on document publish and calls the GitHub API to trigger
   `repository_dispatch` with type `sanity-publish` on this repo (see
   `.github/workflows/build-deploy.yml`). This is what makes "editor clicks
   Publish" turn into "live site updates" within a couple of minutes, even
   though the production site has no server.

6. **GitHub Actions secrets** required for the two workflows:
   - `SANITY_PROJECT_ID`, `SANITY_DATASET` — from step 1.
   - `SANITY_DEPLOY_TOKEN` — a Sanity API token with deploy rights, for
     `studio-deploy.yml`.
   - `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, and optionally
     `FTP_SERVER_DIR` — cPanel FTP/FTPS credentials for `build-deploy.yml`.

## Open questions for the client (also tracked in the plan)

- Real company facts to replace the placeholder stats, certifications and
  founding story.
- Confirmation on client-logo usage rights (currently rendered as text
  wordmarks, not logo artwork).
- Real project/case-study details for the `project` documents.
- Final domain name and which cPanel host/plan, to confirm PHP availability
  for `apps/web/public/contact-handler.php` and to fill in the FTP secrets
  above.

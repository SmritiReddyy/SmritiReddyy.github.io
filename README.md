# smritireddyy.github.io

Portfolio site, served at **https://smritireddyy.github.io**

## Relationship to `smriti-portfolio`

This is a static copy of [smriti-portfolio](https://github.com/SmritiReddyy/smriti-portfolio),
which remains the primary repo and deploys to Vercel. Two URLs exist because some
application forms reject `.vercel.app` addresses.

| | Primary | This repo |
|---|---|---|
| URL | smriti-reddy-portfolio.vercel.app | smritireddyy.github.io |
| Host | Vercel | GitHub Pages |
| Admin panel | Yes, at `/admin` | No — GitHub Pages has no server runtime |

The admin panel and its API routes are intentionally absent here: a static host
cannot keep a password or a GitHub token secret. Project data is read from
`data/portfolio-config.json` at build time.

## Updating content

Edit projects in the primary repo (via its `/admin` panel or by hand), then run
`scripts/sync-mirror.sh` there to copy the changes over and push. That triggers
the deploy workflow in this repo.

To edit directly here instead, change `data/portfolio-config.json` and push —
but note the next sync from upstream will overwrite it.

## Local development

```bash
npm install
npm run dev
```

`npm run build` produces a static site in `out/`.

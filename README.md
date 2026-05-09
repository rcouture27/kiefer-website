# Kiefer Tactical & Wildlife Services

Website for Brian Kiefer's wildlife control and gunsmith business in Southern New Hampshire.

## Tech Stack

- **Astro 5** — Static site framework
- **Tailwind CSS v4** — Utility-first styling
- **Keystatic CMS** — Git-based content management (@ `/keystatic` admin)
- **Cloudflare Pages** — Hosting adapter
- **React** — For Keystatic admin UI
- **Markdoc** — Content rendering support

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Visit http://localhost:4321
# Admin CMS at http://localhost:4321/keystatic
```

## Building for Production

```bash
npm run build
```

Output goes to `dist/`. Deploy to Cloudflare Pages by connecting your GitHub repo.

## Project Structure

```
kiefer-website/
├── keystatic.config.ts       # Keystatic CMS configuration
├── astro.config.mjs          # Astro + Tailwind + Cloudflare config
├── wrangler.jsonc            # Cloudflare Pages runtime config
├── public/                   # Static assets
│   ├── assets/
│   │   ├── logos/            # Business logos
│   │   └── wildlife/         # Wildlife work photos
│   └── favicon.svg
└── src/
    ├── config/
    │   └── site.ts           # Site-wide config (phone, email, etc.)
    ├── styles/
    │   └── global.css        # Global Tailwind v4 styles + custom tokens
    ├── layouts/
    │   └── BaseLayout.astro  # Shared layout (nav, footer, head)
    ├── components/
    │   ├── layout/
    │   │   └── Footer.astro  # Site footer
    │   ├── nav/
    │   │   ├── Navbar.astro  # Desktop navigation
    │   │   └── MobileMenu.astro  # Mobile hamburger menu
    │   ├── home/
    │   │   ├── HeroSection.astro
    │   │   ├── ServiceHighlights.astro
    │   │   ├── SpeciesSection.astro
    │   │   ├── TrustSection.astro
    │   │   └── ServiceAreaSection.astro
    │   ├── services/
    │   │   ├── ServiceCard.astro
    │   │   └── SpeciesList.astro
    │   └── ui/
    │       ├── CtaButton.astro
    │       └── Logo.astro
    └── pages/
        ├── index.astro       # Home
        ├── services.astro    # Services (Wildlife + Gunsmith)
        ├── about.astro       # About Brian
        ├── gallery.astro     # Photo gallery
        └── contact.astro     # Contact form + info
```

## Keystatic Admin

The Keystatic CMS admin panel is available at `/keystatic` in development.

Brian can edit:
- **Site Settings** — Business name, phone, email, address
- **Services** — Wildlife and gunsmith service entries
- **Gallery** — Photos with captions and categories
- **About** — Bio text, credentials, mission

Changes save to `src/content/keystatic/` as JSON files.

## Deploying to Cloudflare Pages

1. Push this repo to GitHub
2. Connect the repo in the [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Add Node.js v20+ compatibility date (already set in `wrangler.jsonc`)

## Content Editing for Brian

Once deployed, Brian can edit content at `https://kiefertactical.com/keystatic` (in local/GitHub mode).

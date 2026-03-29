# Espace Satya — espacesatya.fr

Site vitrine du cabinet pluridisciplinaire **Espace Satya** (bien-être, soins énergétiques, sophrologie…) situé à Elne (66).

## Stack

- **Astro 6** + **Tailwind CSS 4** (via `@tailwindcss/vite`)
- **astro-icon** avec `@iconify-json/heroicons`
- Fonts : Cormorant Garamond (titres), Nunito Sans (body), Caveat (accents)

## Déploiement

- **Netlify** — pas de lien GitHub automatique, déployer manuellement via CLI :
  ```sh
  NETLIFY_AUTH_TOKEN=$NETLIFY_TOKEN netlify deploy --prod --dir=dist
  ```
  Le token est dans le vault (`NETLIFY_TOKEN`).
- Site ID : `aad12ad9-6337-41fc-8c83-eb2a551b3d1a`
- Domaine : `espacesatya.fr`

## Structure

```
src/
├── assets/photos/          # Photos optimisées (hero, praticiens, salle)
├── components/             # Composants réutilisables (Header, Footer, HeroSection…)
├── content/praticiens/     # Collection de contenu (1 fichier .md par praticien·ne)
├── pages/                  # Routes : index, praticiens/, salle, contact, mentions-légales
└── styles/global.css       # Palette de couleurs (@theme) et styles de base
```

## Praticien·ne·s (content collection)

Chaque praticien·ne a un fichier `.md` dans `src/content/praticiens/` avec un frontmatter Zod-validé : `nom`, `titre`, `specialites`, `photo`, `tarifs[]`, et optionnellement `telephone`, `email`, `siteWeb`, `doctolib`.

## Photos

Les photos originales sont sur le NAS Freebox : `/mnt/freebox_t7/Janet/Satya/shooting/Photos/`.
Avant intégration : redimensionner à max 1200px de large, JPEG quality 85 via Pillow.

## Commandes

```sh
npm run dev       # Dev server (localhost:4321)
npm run build     # Build prod → dist/
npm run preview   # Preview du build
```

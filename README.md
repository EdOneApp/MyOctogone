# MyOctogone

Site vitrine corporate du groupe **Octogone** — holding multisectorielle (Abidjan, Côte d'Ivoire)
active dans huit domaines : Technologie, BTP, Global Logistique, Finance, Agro-alimentaire,
Transport, Formation et Sécurité.

## Stack

- **[Astro 5](https://astro.build)** — sortie 100 % statique
- **React (îlots)** + **[Motion](https://motion.dev)** (Framer Motion) pour les animations
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **i18n** natif Astro — français (`/`) et anglais (`/en/`)
- Déploiement **GitHub Pages** via GitHub Actions (`withastro/action`)

## Développement

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
npm run preview  # sert dist/ en local
npx astro check  # vérification TypeScript / Astro
```

## Contenu

Le contenu vit dans `src/data/` :

| Fichier | Rôle |
|---|---|
| `subsidiaries.ts` | Les 8 filiales (champs bilingues `{ fr, en }`) |
| `projects.ts` | Réalisations. `status: 'verified'` = projets réels livrés (Technologie) ; `status: 'draft'` = contenu **illustratif à valider** pour les 7 autres filiales |
| `partners.ts` | Logos partenaires |
| `stats.ts` | Chiffres clés animés |

Les chaînes d'interface sont dans `src/i18n/ui.ts`.

## Formulaire de contact

Le site étant statique, le formulaire poste vers un service tiers. Renseigner l'endpoint dans
un fichier `.env` (voir `.env.example`) :

```
PUBLIC_CONTACT_ENDPOINT=https://formspree.io/f/xxxxxxx
```

Sans endpoint, le formulaire bascule sur un lien `mailto:contact@myoctogone.com`.

## Déploiement

Chaque push sur `main` déclenche `.github/workflows/deploy.yml`.

Prérequis côté GitHub / DNS :

1. **Repo → Settings → Pages → Build and deployment → Source = GitHub Actions**
2. DNS du domaine `myoctogone.com` :
   - 4 enregistrements `A` vers `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` `www` → `edoneapp.github.io`
3. Le fichier `public/CNAME` (déjà présent) fixe le domaine personnalisé.

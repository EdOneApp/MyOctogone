# MyOctogone

Site vitrine corporate du groupe **Octogone** , holding multisectorielle (Abidjan, Côte d'Ivoire)
active dans huit domaines : Technologie, BTP, Global Logistique, Finance, Agro-alimentaire,
Transport, Formation et Sécurité.

## Stack

- **[Astro 5](https://astro.build)** , sortie 100 % statique
- **React (îlots)** + **[Motion](https://motion.dev)** (Framer Motion) pour les animations
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **i18n** natif Astro , français (`/`) et anglais (`/en/`)
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

## Contact et rendez-vous

Le bouton du formulaire ouvre WhatsApp vers **+225 07 48 73 33 65**, avec le nom, l’e-mail, l’organisation facultative, le sujet et le message préremplis. Le visiteur confirme l’envoi dans WhatsApp. Aucun envoi Formspree n’est effectué ; l’ancienne variable `PUBLIC_CONTACT_ENDPOINT` n’est plus utilisée. Si le navigateur bloque l’ouverture d’un onglet, un lien permet d’ouvrir le message préparé.

Le calendrier Cal.com utilise le même rendez-vous de 30 minutes que le portfolio :
`jean-marie-daniel-vianney-guedegbe-qfjxgu/30min`.
Il est intégré dans `src/components/AppointmentCalendar.astro`, avec un lien direct de secours et une présentation bilingue. Les disponibilités et confirmations sont gérées par Cal.com. La politique de confidentialité décrit les deux services.

## Déploiement

Chaque push sur `main` déclenche `.github/workflows/deploy.yml`.

Prérequis côté GitHub / DNS :

1. **Repo → Settings → Pages → Build and deployment → Source = GitHub Actions**
2. DNS du domaine `myoctogone.com` :
   - 4 enregistrements `A` vers `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` `www` → `edoneapp.github.io`
3. Le fichier `public/CNAME` (déjà présent) fixe le domaine personnalisé.

## Référencement

Robots : `/robots.txt`. Plan du site : `/sitemap-index.xml` et `/sitemap.xml`. Les 60 URL indexables sont générées avec leurs versions françaises et anglaises. Données structurées, métadonnées sociales et URLs canoniques sont définies dans `src/components/SEO.astro`. Voir `docs/seo.md` pour les contrôles après publication.

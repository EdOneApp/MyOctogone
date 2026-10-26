# Pages légales et erreurs

Pages bilingues : `/mentions-legales`, `/confidentialite`, `/cgu` (préfixe `/en` pour l’anglais). Les coordonnées légales non fournies et les règles de conservation à formaliser sont indiquées explicitement.

Erreurs : 400, 401, 403, 404, 405, 408, 410, 422, 429, 500, 502, 503, 504 ; `/maintenance` et `/hors-ligne`. Les pages sont exclues du sitemap et portent `noindex`.

Astro produit `dist/404.html`, utilisé automatiquement pour les URL inexistantes sur GitHub Pages. Les autres pages sont des écrans statiques, accessibles par leur URL : elles ne déclenchent pas une véritable erreur HTTP. GitHub Pages ne permet pas de remplacer automatiquement ses réponses serveur 500/502/503/504. Pour un futur reverse proxy ou serveur applicatif, configurer les documents d’erreur correspondants et conserver le véritable statut HTTP.

La page `/hors-ligne` ne constitue pas un cache hors ligne : sans service worker, un navigateur déconnecté ne peut pas télécharger une page qui n’a pas déjà été chargée. La page de maintenance n’active pas à elle seule un mode de maintenance.

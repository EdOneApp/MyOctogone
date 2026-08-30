export const languages = { fr: 'Français', en: 'English' } as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'fr';

export const ui = {
  fr: {
    'nav.home': 'Accueil',
    'nav.group': 'Le Groupe',
    'nav.subsidiaries': 'Filiales',
    'nav.projects': 'Réalisations',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Fermer',

    'cta.talk': 'Parlons de votre projet',
    'cta.discover': 'Découvrir le groupe',
    'cta.allProjects': 'Voir toutes les réalisations',
    'cta.explore': 'Explorer la filiale',
    'cta.back': 'Retour',
    'cta.viewProject': 'Voir le projet',
    'cta.viewRepo': 'Voir le dépôt',
    'cta.send': 'Envoyer le message',
    'cta.sending': 'Envoi…',

    'label.sectors': 'Domaines d’activité',
    'label.subsidiary': 'Filiale',
    'label.subsidiaries': 'Filiales',
    'label.projects': 'Réalisations',
    'label.project': 'Réalisation',
    'label.stack': 'Technologies',
    'label.capabilities': 'Savoir-faire',
    'label.relatedProjects': 'Autres réalisations de la filiale',
    'label.keyFigures': 'Chiffres clés',
    'label.partners': 'Ils nous font confiance',
    'label.approach': 'Notre démarche',
    'label.award': 'Distinction',
    'label.year': 'Année',
    'label.online': 'En ligne',
    'label.category': 'Catégorie',
    'label.scope': 'Périmètre',

    'hero.title.a': 'Un groupe,',
    'hero.title.b': 'huit expertises',
    'hero.subtitle':
      'Octogone est une holding ivoirienne qui conçoit, construit et opère des solutions à fort impact — de la technologie aux infrastructures, de la finance à la formation.',
    'hero.scroll': 'Défiler',

    'home.sectors.title': 'Huit filiales, une exigence commune',
    'home.sectors.subtitle':
      'Chaque filiale opère avec ses propres équipes et ses propres standards, réunies par une même culture de l’exécution.',
    'home.featured.title': 'Réalisations sélectionnées',
    'home.featured.subtitle':
      'Du cadrage à la mise en production, pour des acteurs publics et privés en Côte d’Ivoire et à l’international.',
    'home.approach.subtitle':
      'Une méthode éprouvée sur des dizaines de projets, du premier atelier à l’exploitation.',

    'about.title': 'À propos d’Octogone',
    'about.intro':
      'Octogone rassemble huit filiales spécialisées sous une même holding, avec une conviction : l’impact durable naît d’une exécution rigoureuse, ancrée dans le contexte africain.',
    'about.mission.title': 'Notre mission',
    'about.mission.body':
      'Bâtir des champions sectoriels capables de servir le marché ivoirien et régional avec un niveau d’exigence international.',
    'about.vision.title': 'Notre vision',
    'about.vision.body':
      'Un groupe panafricain de référence, présent sur toute la chaîne de valeur de l’économie réelle et de la technologie.',
    'about.values.title': 'Nos valeurs',

    'contact.title': 'Parlons de votre projet',
    'contact.subtitle':
      'Décrivez votre besoin : la filiale concernée revient vers vous sous 48 heures ouvrées.',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'E-mail professionnel',
    'contact.form.company': 'Organisation',
    'contact.form.subject': 'Filiale / sujet',
    'contact.form.message': 'Votre message',
    'contact.form.success': 'Message envoyé. Merci — nous revenons vers vous très vite.',
    'contact.form.error':
      'L’envoi a échoué. Écrivez-nous directement à contact@myoctogone.com.',
    'contact.form.fallback': 'ou écrivez-nous à',
    'contact.direct': 'Contact direct',

    '404.title': 'Page introuvable',
    '404.body': 'La page que vous cherchez a été déplacée ou n’existe pas.',
    '404.cta': 'Revenir à l’accueil',

    'footer.tagline': 'Holding multisectorielle — Abidjan, Côte d’Ivoire.',
    'footer.rights': 'Tous droits réservés.',
    'footer.nav': 'Navigation',
    'footer.legal': 'Mentions légales',
    'footer.madeIn': 'Conçu à Abidjan',

    'meta.home.title': 'Octogone — Holding multisectorielle',
    'meta.home.desc':
      'Octogone est une holding ivoirienne active dans huit domaines : technologie, BTP, logistique, finance, agro-alimentaire, transport, formation et sécurité.',
    'meta.about.title': 'À propos — Octogone',
    'meta.about.desc':
      'Mission, vision et valeurs du groupe Octogone, holding multisectorielle basée à Abidjan.',
    'meta.contact.title': 'Contact — Octogone',
    'meta.contact.desc':
      'Contactez le groupe Octogone et ses filiales pour vos projets en Côte d’Ivoire et en Afrique de l’Ouest.',
    'meta.subsidiaries.title': 'Filiales — Octogone',
    'meta.projects.title': 'Réalisations — Octogone',
  },
  en: {
    'nav.home': 'Home',
    'nav.group': 'The Group',
    'nav.subsidiaries': 'Subsidiaries',
    'nav.projects': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close',

    'cta.talk': 'Let’s talk about your project',
    'cta.discover': 'Discover the group',
    'cta.allProjects': 'See all work',
    'cta.explore': 'Explore the subsidiary',
    'cta.back': 'Back',
    'cta.viewProject': 'View project',
    'cta.viewRepo': 'View repository',
    'cta.send': 'Send message',
    'cta.sending': 'Sending…',

    'label.sectors': 'Fields of activity',
    'label.subsidiary': 'Subsidiary',
    'label.subsidiaries': 'Subsidiaries',
    'label.projects': 'Work',
    'label.project': 'Project',
    'label.stack': 'Technologies',
    'label.capabilities': 'Capabilities',
    'label.relatedProjects': 'More work from this subsidiary',
    'label.keyFigures': 'Key figures',
    'label.partners': 'Trusted by',
    'label.approach': 'Our approach',
    'label.award': 'Award',
    'label.year': 'Year',
    'label.online': 'Live',
    'label.category': 'Category',
    'label.scope': 'Scope',

    'hero.title.a': 'One group,',
    'hero.title.b': 'eight expertises',
    'hero.subtitle':
      'Octogone is an Ivorian holding that designs, builds and operates high-impact solutions — from technology to infrastructure, from finance to training.',
    'hero.scroll': 'Scroll',

    'home.sectors.title': 'Eight subsidiaries, one standard',
    'home.sectors.subtitle':
      'Each subsidiary runs with its own teams and its own standards, bound by a shared culture of execution.',
    'home.featured.title': 'Selected work',
    'home.featured.subtitle':
      'From framing to production, for public and private organisations in Côte d’Ivoire and beyond.',
    'home.approach.subtitle':
      'A method proven across dozens of projects, from the first workshop to operations.',

    'about.title': 'About Octogone',
    'about.intro':
      'Octogone brings together eight specialised subsidiaries under one holding, with a single conviction: lasting impact comes from rigorous execution, rooted in the African context.',
    'about.mission.title': 'Our mission',
    'about.mission.body':
      'Build sector champions able to serve the Ivorian and regional market to international standards.',
    'about.vision.title': 'Our vision',
    'about.vision.body':
      'A leading pan-African group present across the whole value chain of the real economy and technology.',
    'about.values.title': 'Our values',

    'contact.title': 'Let’s talk about your project',
    'contact.subtitle':
      'Describe your need: the relevant subsidiary gets back to you within 48 business hours.',
    'contact.form.name': 'Full name',
    'contact.form.email': 'Work email',
    'contact.form.company': 'Organisation',
    'contact.form.subject': 'Subsidiary / topic',
    'contact.form.message': 'Your message',
    'contact.form.success': 'Message sent. Thank you — we’ll be in touch shortly.',
    'contact.form.error':
      'Sending failed. Please email us directly at contact@myoctogone.com.',
    'contact.form.fallback': 'or email us at',
    'contact.direct': 'Direct contact',

    '404.title': 'Page not found',
    '404.body': 'The page you are looking for has moved or no longer exists.',
    '404.cta': 'Back to home',

    'footer.tagline': 'Multi-sector holding — Abidjan, Côte d’Ivoire.',
    'footer.rights': 'All rights reserved.',
    'footer.nav': 'Navigation',
    'footer.legal': 'Legal notice',
    'footer.madeIn': 'Built in Abidjan',

    'meta.home.title': 'Octogone — Multi-sector holding',
    'meta.home.desc':
      'Octogone is an Ivorian holding active in eight fields: technology, construction, logistics, finance, agri-food, transport, training and security.',
    'meta.about.title': 'About — Octogone',
    'meta.about.desc':
      'Mission, vision and values of the Octogone group, a multi-sector holding based in Abidjan.',
    'meta.contact.title': 'Contact — Octogone',
    'meta.contact.desc':
      'Get in touch with the Octogone group and its subsidiaries for your projects in West Africa.',
    'meta.subsidiaries.title': 'Subsidiaries — Octogone',
    'meta.projects.title': 'Work — Octogone',
  },
} as const;

export type UIKey = keyof (typeof ui)['fr'];

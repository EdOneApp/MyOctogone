import type { Project } from './types';

/**
 * Octogone Technologies projects (status: 'verified') are real, delivered work.
 * All other subsidiary projects (status: 'draft') are illustrative and must be
 * validated / replaced by the group before public launch.
 */
export const projects: Project[] = [
  // ------------------------------------------------------------------ //
  //  OCTOGONE TECHNOLOGIES — verified
  // ------------------------------------------------------------------ //
  {
    slug: 'fne-ivoire',
    title: 'FNE Ivoire',
    subsidiarySlug: 'technologies',
    category: { fr: 'Facturation électronique', en: 'Electronic invoicing' },
    summary: {
      fr: 'Plateforme SaaS de Facturation Normalisée Électronique connectée en temps réel à l’administration fiscale ivoirienne.',
      en: 'SaaS platform for standardised electronic invoicing, connected in real time to the Ivorian tax administration.',
    },
    description: [
      {
        fr: 'FNE Ivoire répond à l’obligation de Facturation Normalisée Électronique instaurée par la Direction Générale des Impôts en 2025 : générer, signer et transmettre les factures en temps réel à l’administration fiscale.',
        en: 'FNE Ivoire addresses the standardised electronic invoicing obligation introduced by the Directorate General of Taxes in 2025: generate, sign and transmit invoices to the tax administration in real time.',
      },
      {
        fr: 'L’architecture Django + Celery assure le traitement asynchrone des volumes. Une API REST documentée permet l’intégration aux ERP des clients, dans un modèle SaaS multi-tenant.',
        en: 'A Django + Celery architecture handles asynchronous processing at volume. A documented REST API enables integration with client ERPs, in a multi-tenant SaaS model.',
      },
    ],
    stack: ['Django', 'Celery', 'PostgreSQL', 'REST API', 'SaaS multi-tenant'],
    image: 'assets/proj_fne.png',
    url: 'https://fne.myoctogone.com',
    year: '2025',
    status: 'verified',
  },
  {
    slug: 'xofa',
    title: 'XOFA',
    subsidiarySlug: 'technologies',
    category: { fr: 'Données financières', en: 'Financial data' },
    summary: {
      fr: 'Plateforme d’analyse des marchés boursiers de l’UEMOA en temps réel — cours, volumes et indices de la BRVM.',
      en: 'Real-time analytics platform for WAEMU stock markets — prices, volumes and indices of the BRVM.',
    },
    description: [
      {
        fr: 'Anciennement BRVM Analytics, XOFA agrège les cours, volumes et indices des sociétés cotées à la Bourse Régionale des Valeurs Mobilières de l’UEMOA, dans huit pays d’Afrique de l’Ouest.',
        en: 'Formerly BRVM Analytics, XOFA aggregates the prices, volumes and indices of companies listed on the WAEMU regional stock exchange, across eight West African countries.',
      },
      {
        fr: 'Le backend Django collecte, normalise et expose les données via une API REST, avec un cache Redis pour des temps de réponse en temps réel.',
        en: 'The Django backend collects, normalises and exposes the data through a REST API, with a Redis cache for real-time response times.',
      },
    ],
    stack: ['Django', 'PostgreSQL', 'REST API', 'Redis', 'Fintech'],
    image: 'assets/proj_xofa.png',
    url: 'https://xofa.myoctogone.com',
    year: '2024',
    status: 'verified',
  },
  {
    slug: 'wave-business-api-sdk',
    title: 'Wave Business API SDK',
    subsidiarySlug: 'technologies',
    category: { fr: 'Outillage open-source', en: 'Open-source tooling' },
    summary: {
      fr: 'Kit de développement Python, publié sur PyPI, pour intégrer paiements, payouts et webhooks Wave Business en quelques lignes.',
      en: 'Python SDK published on PyPI to integrate Wave Business payments, payouts and webhooks in a few lines.',
    },
    description: [
      {
        fr: 'Le SDK permet d’intégrer les paiements, payouts et webhooks de Wave Business rapidement, avec une sécurité des échanges garantie par une signature HMAC-SHA256 systématique.',
        en: 'The SDK makes it fast to integrate Wave Business payments, payouts and webhooks, with exchange security guaranteed by systematic HMAC-SHA256 signing.',
      },
      {
        fr: 'Documentation complète et tests automatisés accompagnent le paquet, distribué en open-source sur PyPI.',
        en: 'Full documentation and automated tests ship with the package, distributed open-source on PyPI.',
      },
    ],
    stack: ['Python', 'PyPI', 'REST API', 'HMAC-SHA256', 'Tests automatisés'],
    image: 'assets/proj_wave.png',
    repo: 'https://github.com/daniel10027/wave-business-api',
    year: '2024',
    status: 'verified',
  },
  {
    slug: 'pandatree',
    title: 'PandaTree',
    subsidiarySlug: 'technologies',
    category: { fr: 'Cartographie & SIG', en: 'Mapping & GIS' },
    summary: {
      fr: 'Plateforme de recensement et de cartographie du patrimoine arboricole ivoirien, développée avec le CNRA.',
      en: 'Platform for the inventory and mapping of Ivorian tree heritage, built with the CNRA.',
    },
    description: [
      {
        fr: 'Développée avec le Centre National de Recherche Agronomique (CNRA), PandaTree recense et cartographie le patrimoine arboricole national.',
        en: 'Built with the National Centre for Agronomic Research (CNRA), PandaTree inventories and maps the national tree heritage.',
      },
      {
        fr: 'Backend Django / DRF, application mobile Flutter pour la collecte terrain, et outils SIG pour la visualisation géospatiale des essences recensées.',
        en: 'Django / DRF backend, a Flutter mobile app for field collection, and GIS tools for geospatial visualisation of the recorded species.',
      },
    ],
    stack: ['Django', 'DRF', 'Flutter', 'SIG / Cartographie', 'PostgreSQL'],
    image: 'assets/proj_pandatree.jpg',
    repo: 'https://github.com/daniel10027/PandaTree',
    year: '2024',
    status: 'verified',
  },
  {
    slug: 'edone',
    title: 'Edone',
    subsidiarySlug: 'technologies',
    category: { fr: 'ERP éducatif', en: 'Education ERP' },
    summary: {
      fr: 'Système de gestion scolaire nouvelle génération couvrant l’intégralité du cycle académique, administratif et financier.',
      en: 'Next-generation school management system covering the full academic, administrative and financial cycle.',
    },
    description: [
      {
        fr: 'Edone couvre inscriptions, emplois du temps, notes, facturation et communication avec les familles. Le système a été déployé en phase pilote dans quatre établissements.',
        en: 'Edone covers enrolment, timetables, grades, billing and communication with families. The system was deployed in a pilot phase across four schools.',
      },
      {
        fr: 'Architecture Django / DRF avec applications Flutter pour le web, Android et iOS.',
        en: 'Django / DRF architecture with Flutter apps for web, Android and iOS.',
      },
    ],
    stack: ['Django', 'DRF', 'Flutter', 'PostgreSQL', 'Web / Android / iOS'],
    image: 'assets/proj_edone.png',
    repo: 'https://github.com/daniel10027',
    award: {
      fr: '1er Prix — Moov Africa CI StartUp Challenge 2025',
      en: '1st Prize — Moov Africa CI StartUp Challenge 2025',
    },
    year: '2025',
    status: 'verified',
  },
  {
    slug: 'allocar',
    title: 'AlloCar',
    subsidiarySlug: 'technologies',
    category: { fr: 'Mobilité & covoiturage', en: 'Mobility & carpooling' },
    summary: {
      fr: 'Plateforme de covoiturage pensée pour les contraintes locales : connectivité variable, paiements mobiles, itinéraires informels.',
      en: 'Carpooling platform designed for local constraints: variable connectivity, mobile payments, informal routes.',
    },
    description: [
      {
        fr: 'AlloCar met en relation conducteurs et passagers en temps réel, avec géolocalisation, en tenant compte des réalités de terrain.',
        en: 'AlloCar matches drivers and passengers in real time, with geolocation, accounting for on-the-ground realities.',
      },
      {
        fr: 'Backend Flask exposant une API consommée par une application Flutter et une interface web Angular.',
        en: 'A Flask backend exposes an API consumed by a Flutter app and an Angular web interface.',
      },
    ],
    stack: ['Flask', 'Angular', 'Flutter', 'PostgreSQL', 'Géolocalisation'],
    image: 'assets/proj_allocar.jpg',
    url: 'https://allocar.app',
    year: '2023',
    status: 'verified',
  },
  {
    slug: 'spaghetti-dabidjan',
    title: 'Spaghetti d’Abidjan',
    subsidiarySlug: 'technologies',
    category: { fr: 'E-commerce alimentaire', en: 'Food e-commerce' },
    summary: {
      fr: 'Plateforme de commande et de livraison de plats ivoiriens authentiques : attiéké, garba, alloco, sauces mijotées.',
      en: 'Ordering and delivery platform for authentic Ivorian dishes: attiéké, garba, alloco, slow-cooked sauces.',
    },
    description: [
      {
        fr: 'Catalogue dynamique par catégories, filtres par budget et par profil (épicé, végétal, promotions), et tunnel de commande fluide du choix du plat à la livraison.',
        en: 'Dynamic catalogue by category, filters by budget and profile (spicy, plant-based, promotions), and a smooth checkout flow from dish selection to delivery.',
      },
    ],
    stack: ['E-commerce', 'Catalogue produits', 'Panier & commande', 'UI/UX'],
    image: 'assets/proj_spaghetti.jpg',
    url: 'https://spaguettidabidjan.com',
    year: '2024',
    status: 'verified',
  },
  {
    slug: 'sportif-africa',
    title: 'Sportif Africa',
    subsidiarySlug: 'technologies',
    category: { fr: 'E-commerce sportif', en: 'Sports e-commerce' },
    summary: {
      fr: 'Boutique en ligne pour clubs, académies et athlètes de Côte d’Ivoire : équipements, matériel médical et accessoires d’entraînement.',
      en: 'Online store for Ivorian clubs, academies and athletes: equipment, medical supplies and training accessories.',
    },
    description: [
      {
        fr: 'Ventes flash avec compte à rebours, catalogue segmenté, paiement mobile sécurisé via Wave, livraison à Abidjan et retrait en boutique.',
        en: 'Flash sales with countdown, segmented catalogue, secure mobile payment via Wave, delivery in Abidjan and in-store pickup.',
      },
    ],
    stack: ['E-commerce', 'Ventes flash', 'Paiement Wave', 'Catalogue produits'],
    image: 'assets/proj_sportif-africa.png',
    url: 'https://sportifafrica.com',
    year: '2024',
    status: 'verified',
  },
  {
    slug: 'os-iris',
    title: 'OS-IRIS',
    subsidiarySlug: 'technologies',
    category: { fr: 'ERP / Gestion', en: 'ERP / Management' },
    summary: {
      fr: 'ERP complet pour la gestion des stocks, des ventes et de la comptabilité commerciale, conçu pour des PME ivoiriennes.',
      en: 'Full ERP for inventory, sales and commercial accounting, built for Ivorian SMEs.',
    },
    description: [
      {
        fr: 'OS-IRIS centralise stock, ventes et comptabilité commerciale dans une interface unique, adaptée aux processus des PME.',
        en: 'OS-IRIS centralises inventory, sales and commercial accounting in a single interface, tailored to SME processes.',
      },
    ],
    stack: ['Django', 'PostgreSQL', 'Stock'],
    image: 'assets/proj_osiris.jpg',
    year: '2023',
    status: 'verified',
  },
  {
    slug: 'sentinelle-rh',
    title: 'Sentinelle RH',
    subsidiarySlug: 'technologies',
    category: { fr: 'RH / Biométrie', en: 'HR / Biometrics' },
    summary: {
      fr: 'Système de gestion des présences par RFID, QR codes et reconnaissance faciale, avec données en direct.',
      en: 'Attendance management via RFID, QR codes and facial recognition, with live data.',
    },
    description: [
      {
        fr: 'Sentinelle RH gère les présences via RFID, QR codes et reconnaissance faciale, avec un flux de données live grâce à Django Channels.',
        en: 'Sentinelle RH manages attendance via RFID, QR codes and facial recognition, with a live data stream powered by Django Channels.',
      },
    ],
    stack: ['Django', 'OpenCV', 'Redis', 'Channels'],
    image: 'assets/proj_sentinelle.jpg',
    year: '2023',
    status: 'verified',
  },
  {
    slug: 'momofund',
    title: 'MomoFund',
    subsidiarySlug: 'technologies',
    category: { fr: 'Fintech / Mobile', en: 'Fintech / Mobile' },
    summary: {
      fr: 'Plateforme de crowdfunding via l’API MTN Mobile Money.',
      en: 'Crowdfunding platform via the MTN Mobile Money API.',
    },
    description: [
      {
        fr: 'MomoFund permet de lancer et financer des campagnes de crowdfunding directement via Mobile Money, avec une application Flutter.',
        en: 'MomoFund lets users launch and fund crowdfunding campaigns directly via Mobile Money, with a Flutter app.',
      },
    ],
    stack: ['Flutter', 'MTN MoMo API'],
    image: 'assets/proj_momofund.jpg',
    award: {
      fr: '2ᵉ place — Hackathon MTN MTS Côte d’Ivoire 2024',
      en: '2nd place — MTN MTS Côte d’Ivoire Hackathon 2024',
    },
    year: '2024',
    status: 'verified',
  },
  {
    slug: 'timestrackers',
    title: 'TimesTrackers',
    subsidiarySlug: 'technologies',
    category: { fr: 'Productivité', en: 'Productivity' },
    summary: {
      fr: 'Suivi du temps de travail et gestion de projets pour équipes distribuées, avec rapports automatisés.',
      en: 'Time tracking and project management for distributed teams, with automated reports.',
    },
    description: [
      {
        fr: 'TimesTrackers suit le temps de travail et pilote les projets d’équipes distribuées, avec génération automatique de rapports.',
        en: 'TimesTrackers tracks working time and manages distributed-team projects, with automatic report generation.',
      },
    ],
    stack: ['Django', 'Flutter'],
    image: 'assets/proj_timestracker.png',
    year: '2023',
    status: 'verified',
  },
  {
    slug: 'ma-resie',
    title: 'Ma Resie',
    subsidiarySlug: 'technologies',
    category: { fr: 'Immobilier', en: 'Real estate' },
    summary: {
      fr: 'Plateforme de mise en relation immobilière, interface Next.js connectée à une API Django.',
      en: 'Real-estate matchmaking platform, a Next.js interface connected to a Django API.',
    },
    description: [
      {
        fr: 'Ma Resie met en relation propriétaires et locataires / acheteurs, avec une interface Next.js rapide adossée à une API Django.',
        en: 'Ma Resie connects owners with tenants / buyers, with a fast Next.js interface backed by a Django API.',
      },
    ],
    stack: ['Next.js', 'Django'],
    image: 'assets/proj_maresie.jpg',
    year: '2023',
    status: 'verified',
  },
  {
    slug: 'traceagrichain',
    title: 'TraceAgriChain',
    subsidiarySlug: 'technologies',
    category: { fr: 'Agritech / Spatial', en: 'Agritech / Spatial' },
    summary: {
      fr: 'Traçabilité agricole combinant blockchain, imagerie satellite et cartographie 3D.',
      en: 'Agricultural traceability combining blockchain, satellite imagery and 3D mapping.',
    },
    description: [
      {
        fr: 'TraceAgriChain trace les filières agricoles de la parcelle au marché, en combinant registre blockchain, imagerie satellite et cartographie 3D.',
        en: 'TraceAgriChain traces agricultural value chains from plot to market, combining a blockchain ledger, satellite imagery and 3D mapping.',
      },
    ],
    stack: ['Blockchain', 'Satellite', '3D Mapping'],
    image: 'assets/proj_trace-agri-chain.jpg',
    award: {
      fr: 'Finaliste — MASS / ICESCO 2025',
      en: 'Finalist — MASS / ICESCO 2025',
    },
    year: '2025',
    status: 'verified',
  },

  // ------------------------------------------------------------------ //
  //  OCTOGONE BTP — draft / illustrative
  // ------------------------------------------------------------------ //
  {
    slug: 'siege-tertiaire-plateau',
    title: 'Siège tertiaire — Plateau',
    subsidiarySlug: 'btp',
    category: { fr: 'Bâtiment tertiaire', en: 'Office building' },
    summary: {
      fr: 'Construction d’un immeuble de bureaux R+8 avec parking en sous-sol, au cœur du quartier des affaires d’Abidjan.',
      en: 'Construction of an 8-storey office building with underground parking, in the heart of Abidjan’s business district.',
    },
    description: [
      {
        fr: 'Gros œuvre en béton armé, façade ventilée, lots techniques CVC et courants faibles, livraison en site occupé. Coordination de douze corps d’état sur dix-huit mois.',
        en: 'Reinforced-concrete structure, ventilated façade, HVAC and low-voltage packages, delivery on an occupied site. Coordination of twelve trades over eighteen months.',
      },
    ],
    stack: ['Béton armé', 'Façade ventilée', 'CVC', 'Site occupé'],
    image: 'assets/batimemt-et-travaux-public.jpeg',
    year: '2024',
    status: 'draft',
  },
  {
    slug: 'lotissement-bingerville',
    title: 'Viabilisation — Bingerville',
    subsidiarySlug: 'btp',
    category: { fr: 'VRD & aménagement', en: 'Earthworks & development' },
    summary: {
      fr: 'Viabilisation d’un lotissement de 120 parcelles : voirie, assainissement, réseaux d’eau et d’électricité.',
      en: 'Servicing of a 120-plot development: roads, drainage, water and power networks.',
    },
    description: [
      {
        fr: 'Terrassement général, chaussées en grave bitume, réseau d’assainissement gravitaire, adduction d’eau potable et éclairage public.',
        en: 'General earthworks, bitumen-gravel pavements, gravity drainage network, potable water supply and street lighting.',
      },
    ],
    stack: ['Terrassement', 'Assainissement', 'Voirie', 'Éclairage public'],
    image: 'assets/batimemt-et-travaux-public.jpeg',
    year: '2023',
    status: 'draft',
  },
  {
    slug: 'rehabilitation-marche-cocody',
    title: 'Réhabilitation d’un marché — Cocody',
    subsidiarySlug: 'btp',
    category: { fr: 'Équipement collectif', en: 'Community facility' },
    summary: {
      fr: 'Réhabilitation lourde d’un marché municipal : structure, couverture, réseaux et mise aux normes sécurité incendie.',
      en: 'Major refurbishment of a municipal market: structure, roofing, utilities and fire-safety upgrade.',
    },
    description: [
      {
        fr: 'Reprise en sous-œuvre, remplacement de la charpente métallique, réfection des étals, création d’un bloc sanitaire et d’un système de désenfumage.',
        en: 'Underpinning, replacement of the steel roof frame, refurbishment of stalls, new sanitary block and smoke-extraction system.',
      },
    ],
    stack: ['Réhabilitation', 'Charpente métallique', 'Sécurité incendie'],
    image: 'assets/batimemt-et-travaux-public.jpeg',
    year: '2023',
    status: 'draft',
  },
  {
    slug: 'pont-dalles-san-pedro',
    title: 'Pont-dalles — axe San Pedro',
    subsidiarySlug: 'btp',
    category: { fr: 'Ouvrage d’art', en: 'Civil engineering structure' },
    summary: {
      fr: 'Construction d’un pont-dalles de 45 mètres franchissant un cours d’eau sur une route de desserte agricole.',
      en: 'Construction of a 45-metre slab bridge over a watercourse on an agricultural access road.',
    },
    description: [
      {
        fr: 'Fondations profondes sur pieux, tablier en béton précontraint, protection de berges, rétablissement des accès pendant les travaux.',
        en: 'Deep pile foundations, prestressed-concrete deck, bank protection, access maintained throughout the works.',
      },
    ],
    stack: ['Fondations profondes', 'Béton précontraint', 'Ouvrage d’art'],
    image: 'assets/batimemt-et-travaux-public.jpeg',
    year: '2022',
    status: 'draft',
  },
  {
    slug: 'centre-sante-yamoussoukro',
    title: 'Centre de santé — Yamoussoukro',
    subsidiarySlug: 'btp',
    category: { fr: 'Santé', en: 'Healthcare' },
    summary: {
      fr: 'Construction clé en main d’un centre de santé communautaire : consultations, maternité, pharmacie et logements de personnel.',
      en: 'Turnkey construction of a community health centre: consultations, maternity, pharmacy and staff housing.',
    },
    description: [
      {
        fr: 'Bâtiments à ossature poteaux-poutres, alimentation solaire en secours, forage et château d’eau, aménagement des espaces extérieurs.',
        en: 'Post-and-beam buildings, backup solar power, borehole and water tower, landscaping of outdoor areas.',
      },
    ],
    stack: ['Clé en main', 'Solaire', 'Forage', 'Santé'],
    image: 'assets/batimemt-et-travaux-public.jpeg',
    year: '2024',
    status: 'draft',
  },

  // ------------------------------------------------------------------ //
  //  OCTOGONE GLOBAL LOGISTIQUE — draft / illustrative
  // ------------------------------------------------------------------ //
  {
    slug: 'hub-logistique-vridi',
    title: 'Hub logistique — Vridi',
    subsidiarySlug: 'logistique',
    category: { fr: 'Entreposage', en: 'Warehousing' },
    summary: {
      fr: 'Mise en service d’un entrepôt de 8 000 m² à proximité du port, avec zones sèches et sous température dirigée.',
      en: 'Commissioning of an 8,000 m² warehouse near the port, with dry and temperature-controlled zones.',
    },
    description: [
      {
        fr: 'Racking grande hauteur, quais de chargement niveleurs, WMS intégré au système de traçabilité du groupe, équipe cariste formée en interne.',
        en: 'High-bay racking, dock levellers, a WMS integrated with the group’s traceability system, an in-house-trained forklift team.',
      },
    ],
    stack: ['WMS', 'Chaîne du froid', 'Cross-docking'],
    image: 'assets/global-logistics.jpeg',
    year: '2024',
    status: 'draft',
  },
  {
    slug: 'chaine-froid-agro-export',
    title: 'Chaîne du froid — agro-export',
    subsidiarySlug: 'logistique',
    category: { fr: 'Supply chain froid', en: 'Cold supply chain' },
    summary: {
      fr: 'Conception d’une chaîne du froid continue pour l’export de produits frais, de l’unité de conditionnement à l’avion.',
      en: 'Design of an unbroken cold chain for fresh-produce export, from the packing unit to the aircraft.',
    },
    description: [
      {
        fr: 'Conteneurs réfrigérés suivis par sonde, procédures de rupture de charge, relevés de température horodatés et audités.',
        en: 'Reefer containers monitored by probe, controlled transfer procedures, timestamped and audited temperature logs.',
      },
    ],
    stack: ['Reefer', 'Capteurs IoT', 'Traçabilité', 'Export'],
    image: 'assets/global-logistics.jpeg',
    year: '2023',
    status: 'draft',
  },
  {
    slug: 'distribution-retail-abidjan',
    title: 'Distribution retail — Grand Abidjan',
    subsidiarySlug: 'logistique',
    category: { fr: 'Dernier kilomètre', en: 'Last mile' },
    summary: {
      fr: 'Externalisation de la distribution d’un réseau de 140 points de vente, avec tournées optimisées et preuve de livraison numérique.',
      en: 'Outsourced distribution for a 140-store network, with optimised routes and digital proof of delivery.',
    },
    description: [
      {
        fr: 'Planification quotidienne des tournées, application chauffeur avec signature électronique, tableau de bord de taux de service par magasin.',
        en: 'Daily route planning, a driver app with electronic signature, a per-store service-level dashboard.',
      },
    ],
    stack: ['Optimisation de tournées', 'App chauffeur', 'POD numérique'],
    image: 'assets/global-logistics.jpeg',
    year: '2024',
    status: 'draft',
  },
  {
    slug: 'tour-controle-flotte',
    title: 'Tour de contrôle flotte',
    subsidiarySlug: 'logistique',
    category: { fr: 'Pilotage', en: 'Control tower' },
    summary: {
      fr: 'Centre de supervision temps réel des flux transport et entrepôt, avec alertes et indicateurs partagés clients.',
      en: 'Real-time supervision centre for transport and warehouse flows, with alerts and client-shared KPIs.',
    },
    description: [
      {
        fr: 'Agrégation des données télématiques et WMS, détection des retards, portail client, reporting mensuel automatisé.',
        en: 'Aggregation of telematics and WMS data, delay detection, a client portal, automated monthly reporting.',
      },
    ],
    stack: ['Télématique', 'Tableaux de bord', 'Portail client'],
    image: 'assets/global-logistics.jpeg',
    year: '2025',
    status: 'draft',
  },

  // ------------------------------------------------------------------ //
  //  OCTOGONE FINANCE — draft / illustrative
  // ------------------------------------------------------------------ //
  {
    slug: 'levee-dette-agro-industrie',
    title: 'Levée de dette — agro-industrie',
    subsidiarySlug: 'finance',
    category: { fr: 'Conseil en financement', en: 'Financing advisory' },
    summary: {
      fr: 'Structuration et placement d’une dette senior pour financer l’extension d’une unité de transformation.',
      en: 'Structuring and placement of senior debt to finance the extension of a processing unit.',
    },
    description: [
      {
        fr: 'Modélisation financière, préparation du dossier bancaire, mise en concurrence de prêteurs régionaux, négociation des sûretés et des covenants.',
        en: 'Financial modelling, preparation of the bank package, competitive process among regional lenders, negotiation of security and covenants.',
      },
    ],
    stack: ['Modélisation', 'Dette senior', 'Négociation bancaire'],
    image: 'assets/finance.jpeg',
    year: '2024',
    status: 'draft',
  },
  {
    slug: 'ppp-infrastructure-scolaire',
    title: 'PPP — infrastructure scolaire',
    subsidiarySlug: 'finance',
    category: { fr: 'Structuration d’opérations', en: 'Deal structuring' },
    summary: {
      fr: 'Conseil sur le montage d’un partenariat public-privé pour la construction et l’entretien d’établissements scolaires.',
      en: 'Advisory on structuring a public-private partnership to build and maintain schools.',
    },
    description: [
      {
        fr: 'Analyse de bancabilité, répartition des risques, matrice contractuelle, plan de financement mixte subvention / dette / fonds propres.',
        en: 'Bankability analysis, risk allocation, contractual matrix, a blended grant / debt / equity financing plan.',
      },
    ],
    stack: ['PPP', 'Bancabilité', 'Matrice des risques'],
    image: 'assets/finance.jpeg',
    year: '2023',
    status: 'draft',
  },
  {
    slug: 'plateforme-agregation-paiements',
    title: 'Plateforme d’agrégation de paiements',
    subsidiarySlug: 'finance',
    category: { fr: 'Paiements & inclusion', en: 'Payments & inclusion' },
    summary: {
      fr: 'Conception d’une offre d’agrégation multi-opérateurs mobile money pour marchands et facturiers.',
      en: 'Design of a multi-operator mobile-money aggregation offer for merchants and billers.',
    },
    description: [
      {
        fr: 'Cadrage produit, modèle économique, conformité, intégration technique avec Octogone Technologies, pilote auprès de commerçants.',
        en: 'Product framing, business model, compliance, technical integration with Octogone Technologies, a merchant pilot.',
      },
    ],
    stack: ['Mobile money', 'Agrégation', 'Conformité'],
    image: 'assets/finance.jpeg',
    year: '2024',
    status: 'draft',
  },
  {
    slug: 'programme-epargne-digitale',
    title: 'Programme d’épargne digitale',
    subsidiarySlug: 'finance',
    category: { fr: 'Inclusion financière', en: 'Financial inclusion' },
    summary: {
      fr: 'Conception d’un produit d’épargne accessible via mobile, avec objectifs programmés et micro-versements.',
      en: 'Design of a mobile-accessible savings product, with goal-based plans and micro-deposits.',
    },
    description: [
      {
        fr: 'Étude des usages, design du parcours, partenariat avec un établissement agréé, indicateurs d’impact sur la constitution d’épargne.',
        en: 'Usage research, journey design, partnership with a licensed institution, impact metrics on savings build-up.',
      },
    ],
    stack: ['Épargne', 'Mobile', 'Partenariat bancaire'],
    image: 'assets/finance.jpeg',
    year: '2025',
    status: 'draft',
  },

  // ------------------------------------------------------------------ //
  //  OCTOGONE AGRO-ALIMENTAIRE — draft / illustrative
  // ------------------------------------------------------------------ //
  {
    slug: 'unite-transformation-manioc',
    title: 'Unité de transformation du manioc',
    subsidiarySlug: 'agro-alimentaire',
    category: { fr: 'Transformation', en: 'Processing' },
    summary: {
      fr: 'Mise en place d’une unité de transformation du manioc en attiéké et farine, avec approvisionnement contractualisé.',
      en: 'Set-up of a cassava processing unit for attiéké and flour, with contracted sourcing.',
    },
    description: [
      {
        fr: 'Ligne de râpage, pressage et séchage, contrôle qualité des lots, conditionnement sous marque propre, réseau de 300 productrices partenaires.',
        en: 'Grating, pressing and drying line, batch quality control, own-brand packaging, a network of 300 partner producers.',
      },
    ],
    stack: ['Transformation', 'Contrôle qualité', 'Marque propre'],
    image: 'assets/agro-alimentaire.jpeg',
    year: '2024',
    status: 'draft',
  },
  {
    slug: 'filiere-cajou-tracee',
    title: 'Filière cajou tracée',
    subsidiarySlug: 'agro-alimentaire',
    category: { fr: 'Structuration de filière', en: 'Value-chain structuring' },
    summary: {
      fr: 'Structuration d’une filière anacarde de l’achat bord-champ à l’export, avec traçabilité des lots.',
      en: 'Structuring of a cashew value chain from farm-gate purchase to export, with batch traceability.',
    },
    description: [
      {
        fr: 'Contractualisation avec des coopératives, préfinancement de campagne, cartographie des parcelles et suivi des rendements via les outils SIG du groupe.',
        en: 'Contracting with cooperatives, campaign pre-financing, plot mapping and yield monitoring via the group’s GIS tools.',
      },
    ],
    stack: ['Anacarde', 'Traçabilité', 'SIG', 'Export'],
    image: 'assets/agro-alimentaire.jpeg',
    year: '2023',
    status: 'draft',
  },
  {
    slug: 'marque-jus-locaux',
    title: 'Marque de jus locaux',
    subsidiarySlug: 'agro-alimentaire',
    category: { fr: 'Produits de marque', en: 'Branded products' },
    summary: {
      fr: 'Lancement d’une gamme de jus à base de fruits locaux (bissap, gingembre, mangue), distribuée en GMS.',
      en: 'Launch of a juice range from local fruits (hibiscus, ginger, mango), distributed in retail.',
    },
    description: [
      {
        fr: 'Recettes, pasteurisation, packaging, référencement en grande distribution et circuits hors-domicile, plan média local.',
        en: 'Recipes, pasteurisation, packaging, listing in retail and food-service channels, a local media plan.',
      },
    ],
    stack: ['Boissons', 'Packaging', 'Distribution GMS'],
    image: 'assets/agro-alimentaire.jpeg',
    year: '2024',
    status: 'draft',
  },
  {
    slug: 'plateforme-appro-producteurs',
    title: 'Plateforme d’approvisionnement producteurs',
    subsidiarySlug: 'agro-alimentaire',
    category: { fr: 'Numérique agricole', en: 'Agricultural digital' },
    summary: {
      fr: 'Outil de gestion des achats auprès des producteurs : commandes, pesées, paiements et historique par exploitant.',
      en: 'Tool to manage purchasing from producers: orders, weighing, payments and per-farmer history.',
    },
    description: [
      {
        fr: 'Application terrain hors-ligne, paiement mobile à la livraison, tableau de bord des volumes collectés, développée avec Octogone Technologies.',
        en: 'Offline field app, mobile payment on delivery, a dashboard of collected volumes, built with Octogone Technologies.',
      },
    ],
    stack: ['App terrain', 'Paiement mobile', 'Hors-ligne'],
    image: 'assets/agro-alimentaire.jpeg',
    year: '2025',
    status: 'draft',
  },

  // ------------------------------------------------------------------ //
  //  OCTOGONE TRANSPORT — draft / illustrative
  // ------------------------------------------------------------------ //
  {
    slug: 'reseau-navettes-entreprises',
    title: 'Réseau de navettes entreprises',
    subsidiarySlug: 'transport',
    category: { fr: 'Transport de personnes', en: 'Passenger transport' },
    summary: {
      fr: 'Exploitation de navettes domicile-travail pour des zones industrielles, avec application de réservation de siège.',
      en: 'Operation of commuter shuttles for industrial zones, with a seat-booking app.',
    },
    description: [
      {
        fr: 'Plan de transport optimisé, véhicules climatisés suivis par GPS, badge d’accès, reporting de ponctualité auprès des employeurs.',
        en: 'Optimised transport plan, air-conditioned GPS-tracked vehicles, access badge, punctuality reporting to employers.',
      },
    ],
    stack: ['Navettes', 'Réservation', 'GPS'],
    image: 'assets/transport.jpeg',
    year: '2024',
    status: 'draft',
  },
  {
    slug: 'ligne-interurbaine-abidjan-bouake',
    title: 'Ligne interurbaine Abidjan – Bouaké',
    subsidiarySlug: 'transport',
    category: { fr: 'Ligne régulière', en: 'Scheduled line' },
    summary: {
      fr: 'Ouverture d’une liaison régulière confort avec billetterie en ligne et suivi du véhicule en temps réel.',
      en: 'Opening of a regular comfort service with online ticketing and real-time vehicle tracking.',
    },
    description: [
      {
        fr: 'Autocars récents, sièges numérotés, points de vente physiques et application, contrôle du temps de conduite et de la vitesse.',
        en: 'Modern coaches, numbered seats, physical outlets and an app, monitoring of driving time and speed.',
      },
    ],
    stack: ['Autocar', 'Billetterie en ligne', 'Sécurité routière'],
    image: 'assets/transport.jpeg',
    year: '2023',
    status: 'draft',
  },
  {
    slug: 'billettique-mobile-transport',
    title: 'Billettique mobile',
    subsidiarySlug: 'transport',
    category: { fr: 'Numérique mobilité', en: 'Mobility digital' },
    summary: {
      fr: 'Déploiement d’une solution de vente et de contrôle de titres de transport sur mobile, sans matériel dédié.',
      en: 'Roll-out of a mobile ticket sales and validation solution, with no dedicated hardware.',
    },
    description: [
      {
        fr: 'Paiement mobile money, billet à QR code, application de contrôle pour les agents, statistiques de fréquentation par ligne.',
        en: 'Mobile-money payment, QR-code ticket, an inspector app, ridership statistics by line.',
      },
    ],
    stack: ['QR code', 'Mobile money', 'Contrôle'],
    image: 'assets/transport.jpeg',
    year: '2024',
    status: 'draft',
  },
  {
    slug: 'centre-gestion-flotte',
    title: 'Centre de gestion de flotte',
    subsidiarySlug: 'transport',
    category: { fr: 'Gestion de flotte', en: 'Fleet management' },
    summary: {
      fr: 'Mise en place d’un atelier et d’un système de maintenance préventive pour une flotte tierce de 50 véhicules.',
      en: 'Set-up of a workshop and preventive-maintenance system for a third-party 50-vehicle fleet.',
    },
    description: [
      {
        fr: 'Plan de maintenance par kilométrage, gestion des pièces, télématique embarquée, indicateurs de coût au kilomètre et de disponibilité.',
        en: 'Mileage-based maintenance plan, parts management, onboard telematics, cost-per-kilometre and availability metrics.',
      },
    ],
    stack: ['Maintenance préventive', 'Télématique', 'Gestion de pièces'],
    image: 'assets/transport.jpeg',
    year: '2025',
    status: 'draft',
  },

  // ------------------------------------------------------------------ //
  //  OCTOGONE FORMATION — draft / illustrative
  // ------------------------------------------------------------------ //
  {
    slug: 'academie-numerique-abidjan',
    title: 'Académie numérique — Abidjan',
    subsidiarySlug: 'formation',
    category: { fr: 'Formation numérique', en: 'Digital training' },
    summary: {
      fr: 'Programme intensif de six mois formant développeurs web et mobile, avec projets réels et accompagnement à l’emploi.',
      en: 'Six-month intensive programme training web and mobile developers, with real projects and job support.',
    },
    description: [
      {
        fr: 'Pédagogie par projet adossée aux cas du groupe, mentorat par des ingénieurs d’Octogone Technologies, jury de fin de parcours avec des entreprises partenaires.',
        en: 'Project-based learning built on the group’s cases, mentoring by Octogone Technologies engineers, a final panel with partner companies.',
      },
    ],
    stack: ['Bootcamp', 'Mentorat', 'Insertion'],
    image: 'assets/formation.jpeg',
    year: '2024',
    status: 'draft',
  },
  {
    slug: 'programme-reconversion-btp',
    title: 'Programme de reconversion BTP',
    subsidiarySlug: 'formation',
    category: { fr: 'Métiers techniques', en: 'Technical trades' },
    summary: {
      fr: 'Parcours qualifiant aux métiers du chantier : conduite de travaux, topographie, sécurité et lecture de plans.',
      en: 'Qualifying track for construction trades: works supervision, surveying, safety and plan reading.',
    },
    description: [
      {
        fr: 'Alternance entre centre et chantiers d’Octogone BTP, évaluation en situation, certification reconnue par la profession.',
        en: 'Alternation between the centre and Octogone BTP sites, on-site assessment, an industry-recognised certificate.',
      },
    ],
    stack: ['Alternance', 'Chantier-école', 'Certification'],
    image: 'assets/formation.jpeg',
    year: '2023',
    status: 'draft',
  },
  {
    slug: 'plateforme-elearning-groupe',
    title: 'Plateforme e-learning du groupe',
    subsidiarySlug: 'formation',
    category: { fr: 'Ingénierie de formation', en: 'Learning engineering' },
    summary: {
      fr: 'Conception d’une plateforme de formation en ligne mutualisée pour les huit filiales, avec parcours et évaluations.',
      en: 'Design of a shared online learning platform for the eight subsidiaries, with tracks and assessments.',
    },
    description: [
      {
        fr: 'Catalogue de modules, suivi individuel, quiz et attestations, mode hors-ligne pour les zones à faible connectivité, développée avec Octogone Technologies.',
        en: 'Module catalogue, individual tracking, quizzes and certificates, an offline mode for low-connectivity areas, built with Octogone Technologies.',
      },
    ],
    stack: ['LMS', 'Hors-ligne', 'Évaluation'],
    image: 'assets/formation.jpeg',
    year: '2025',
    status: 'draft',
  },
  {
    slug: 'certificat-logistique-operationnelle',
    title: 'Certificat de logistique opérationnelle',
    subsidiarySlug: 'formation',
    category: { fr: 'Métiers de la logistique', en: 'Logistics trades' },
    summary: {
      fr: 'Certificat court formant aux opérations d’entrepôt : magasinage, préparation de commandes, WMS et sécurité.',
      en: 'Short certificate covering warehouse operations: storekeeping, order picking, WMS and safety.',
    },
    description: [
      {
        fr: 'Modules pratiques sur plateau logistique, prise en main d’un WMS, gestes et postures, stages au sein d’Octogone Global Logistique.',
        en: 'Hands-on modules on a logistics platform, WMS practice, manual-handling safety, internships at Octogone Global Logistique.',
      },
    ],
    stack: ['Entrepôt', 'WMS', 'Sécurité'],
    image: 'assets/formation.jpeg',
    year: '2024',
    status: 'draft',
  },

  // ------------------------------------------------------------------ //
  //  OCTOGONE SÉCURITÉ — draft / illustrative
  // ------------------------------------------------------------------ //
  {
    slug: 'supervision-multisite-industriel',
    title: 'Supervision multisite — groupe industriel',
    subsidiarySlug: 'securite',
    category: { fr: 'Télésurveillance', en: 'Remote monitoring' },
    summary: {
      fr: 'Mise en place d’un centre de supervision pour huit sites industriels, avec levée de doute vidéo et intervention.',
      en: 'Set-up of a monitoring centre for eight industrial sites, with video alarm verification and response.',
    },
    description: [
      {
        fr: 'Raccordement des alarmes et caméras, procédures d’escalade, équipes d’intervention mobiles, reporting mensuel d’incidents.',
        en: 'Connection of alarms and cameras, escalation procedures, mobile response teams, monthly incident reporting.',
      },
    ],
    stack: ['Centre de supervision', 'Levée de doute', 'Intervention'],
    image: 'assets/security.jpeg',
    year: '2024',
    status: 'draft',
  },
  {
    slug: 'controle-acces-biometrique-campus',
    title: 'Contrôle d’accès biométrique — campus',
    subsidiarySlug: 'securite',
    category: { fr: 'Contrôle d’accès', en: 'Access control' },
    summary: {
      fr: 'Déploiement d’un contrôle d’accès par badge et reconnaissance faciale sur un campus de 4 000 personnes.',
      en: 'Deployment of badge and facial-recognition access control on a 4,000-person campus.',
    },
    description: [
      {
        fr: 'Portiques, lecteurs biométriques, gestion centralisée des droits, intégration à la gestion des présences via la brique Sentinelle du groupe.',
        en: 'Turnstiles, biometric readers, centralised rights management, integration with attendance via the group’s Sentinelle component.',
      },
    ],
    stack: ['Biométrie', 'Badge', 'Gestion des droits'],
    image: 'assets/security.jpeg',
    year: '2023',
    status: 'draft',
  },
  {
    slug: 'videoprotection-zone-commerciale',
    title: 'Vidéoprotection — zone commerciale',
    subsidiarySlug: 'securite',
    category: { fr: 'Vidéoprotection', en: 'Video surveillance' },
    summary: {
      fr: 'Conception et exploitation d’un système de vidéoprotection pour une galerie marchande et ses parkings.',
      en: 'Design and operation of a video surveillance system for a shopping mall and its car parks.',
    },
    description: [
      {
        fr: 'Étude d’implantation des caméras, analytique vidéo (comptage, maraudage), poste de visionnage, hypervision reliée aux agents terrain.',
        en: 'Camera placement study, video analytics (counting, loitering), a viewing station, hypervision linked to field officers.',
      },
    ],
    stack: ['Vidéoprotection', 'Analytique vidéo', 'Hypervision'],
    image: 'assets/security.jpeg',
    year: '2024',
    status: 'draft',
  },
  {
    slug: 'audit-surete-site-portuaire',
    title: 'Audit de sûreté — site portuaire',
    subsidiarySlug: 'securite',
    category: { fr: 'Conseil en sûreté', en: 'Security consulting' },
    summary: {
      fr: 'Audit de vulnérabilité et plan de sûreté pour un terminal portuaire, avec feuille de route de mise à niveau.',
      en: 'Vulnerability audit and security plan for a port terminal, with an upgrade roadmap.',
    },
    description: [
      {
        fr: 'Analyse des accès et des flux, scénarios de menace, recommandations organisationnelles et techniques, formation des équipes de sûreté.',
        en: 'Analysis of access and flows, threat scenarios, organisational and technical recommendations, training of security teams.',
      },
    ],
    stack: ['Audit', 'Plan de sûreté', 'Formation'],
    image: 'assets/security.jpeg',
    year: '2022',
    status: 'draft',
  },
];

export const projectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const projectsBySubsidiary = (subsidiarySlug: string): Project[] =>
  projects.filter((p) => p.subsidiarySlug === subsidiarySlug);

export const featuredSlugs = [
  'fne-ivoire',
  'xofa',
  'edone',
  'pandatree',
  'traceagrichain',
  'allocar',
];

export const featuredProjects = (): Project[] =>
  featuredSlugs
    .map((s) => projectBySlug(s))
    .filter((p): p is Project => Boolean(p));

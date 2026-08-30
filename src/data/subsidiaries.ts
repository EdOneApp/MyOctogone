import type { Subsidiary } from './types';

/**
 * The eight Octogone subsidiaries.
 * Technologies content is factual. The seven other subsidiaries carry
 * illustrative positioning content to be validated by the group.
 */
export const subsidiaries: Subsidiary[] = [
  {
    slug: 'technologies',
    name: 'Octogone Technologies',
    sector: { fr: 'Technologie', en: 'Technology' },
    tagline: {
      fr: 'Logiciels, data, cloud et cybersécurité, du cadrage à la production.',
      en: 'Software, data, cloud and cybersecurity, from framing to production.',
    },
    heroImage: 'assets/technologie.jpeg',
    accent: { from: '#22d3ee', to: '#2563eb' },
    intro: [
      {
        fr: 'Octogone Technologies conçoit et opère des plateformes numériques pour l’administration, la finance, l’agriculture et le commerce. Web, mobile, desktop : nos équipes couvrent tout le cycle, de l’atelier de cadrage à l’exploitation en production.',
        en: 'Octogone Technologies designs and operates digital platforms for government, finance, agriculture and commerce. Web, mobile, desktop: our teams cover the full cycle, from the framing workshop to production operations.',
      },
      {
        fr: 'La filiale intervient sur les projets à forte contrainte : volumétrie élevée, conformité réglementaire, connectivité variable, intégration à des systèmes existants. Nos solutions sont documentées, testées et pensées pour durer.',
        en: 'The subsidiary takes on high-constraint projects: heavy volumes, regulatory compliance, variable connectivity, integration with legacy systems. Our solutions are documented, tested and built to last.',
      },
      {
        fr: 'Analyse de données, cloud, sécurité applicative : nous accompagnons aussi nos clients sur la donnée et l’infrastructure, avec une exigence de sobriété et de maîtrise des coûts.',
        en: 'Data analytics, cloud, application security: we also support clients on data and infrastructure, with a focus on efficiency and cost control.',
      },
    ],
    capabilities: [
      {
        title: { fr: 'Développement logiciel', en: 'Software engineering' },
        description: {
          fr: 'Applications web, mobiles (Flutter) et desktop, API REST documentées, architectures orientées services.',
          en: 'Web, mobile (Flutter) and desktop applications, documented REST APIs, service-oriented architectures.',
        },
      },
      {
        title: { fr: 'Plateformes SaaS', en: 'SaaS platforms' },
        description: {
          fr: 'Solutions multi-tenant, facturation, gestion des rôles, traitement asynchrone des volumes.',
          en: 'Multi-tenant solutions, billing, role management, asynchronous processing at scale.',
        },
      },
      {
        title: { fr: 'Données & temps réel', en: 'Data & real time' },
        description: {
          fr: 'Collecte, normalisation et exposition de données, caches Redis, tableaux de bord analytiques.',
          en: 'Collection, normalisation and exposure of data, Redis caches, analytics dashboards.',
        },
      },
      {
        title: { fr: 'Cartographie & SIG', en: 'Mapping & GIS' },
        description: {
          fr: 'Collecte terrain mobile, visualisation géospatiale, imagerie satellite, cartographie 3D.',
          en: 'Mobile field collection, geospatial visualisation, satellite imagery, 3D mapping.',
        },
      },
      {
        title: { fr: 'Cloud & DevOps', en: 'Cloud & DevOps' },
        description: {
          fr: 'Industrialisation des déploiements, observabilité, maîtrise des coûts d’infrastructure.',
          en: 'Deployment automation, observability, infrastructure cost control.',
        },
      },
      {
        title: { fr: 'Cybersécurité applicative', en: 'Application security' },
        description: {
          fr: 'Signatures HMAC, gestion des secrets, revues de code, tests automatisés de sécurité.',
          en: 'HMAC signatures, secret management, code reviews, automated security testing.',
        },
      },
    ],
    figures: [
      { label: { fr: 'Projets livrés', en: 'Projects delivered' }, value: '14+' },
      { label: { fr: 'Distinctions', en: 'Awards' }, value: '3' },
      { label: { fr: 'Pays couverts (UEMOA)', en: 'WAEMU countries covered' }, value: '8' },
      { label: { fr: 'Stack principale', en: 'Core stack' }, value: 'Django · Flutter' },
    ],
    projectSlugs: [
      'fne-ivoire',
      'xofa',
      'wave-business-api-sdk',
      'pandatree',
      'edone',
      'allocar',
      'spaghetti-dabidjan',
      'sportif-africa',
      'os-iris',
      'sentinelle-rh',
      'momofund',
      'timestrackers',
      'ma-resie',
      'traceagrichain',
    ],
  },

  {
    slug: 'btp',
    name: 'Octogone BTP',
    sector: { fr: 'Bâtiment & Travaux publics', en: 'Construction & Public works' },
    tagline: {
      fr: 'Construire des ouvrages fiables, dans les délais et les budgets.',
      en: 'Delivering reliable structures, on time and on budget.',
    },
    heroImage: 'assets/batimemt-et-travaux-public.jpeg',
    accent: { from: '#38bdf8', to: '#6366f1' },
    intro: [
      {
        fr: 'Octogone BTP réalise des projets de bâtiment et d’infrastructure pour des maîtres d’ouvrage publics et privés : immeubles tertiaires, équipements collectifs, voiries et réseaux divers.',
        en: 'Octogone BTP delivers building and infrastructure projects for public and private clients: office buildings, community facilities, roads and utility networks.',
      },
      {
        fr: 'La filiale pilote l’ensemble de la chaîne — études, gros œuvre, second œuvre, VRD — avec une culture de la sécurité sur chantier et un suivi budgétaire serré.',
        en: 'The subsidiary manages the full chain — studies, structural work, finishing, earthworks and utilities — with a strong site-safety culture and tight budget control.',
      },
    ],
    capabilities: [
      {
        title: { fr: 'Bâtiment tertiaire & résidentiel', en: 'Commercial & residential building' },
        description: {
          fr: 'Immeubles de bureaux, logements collectifs, réhabilitations lourdes.',
          en: 'Office buildings, multi-family housing, major refurbishments.',
        },
      },
      {
        title: { fr: 'Voirie & réseaux divers', en: 'Roads & utility networks' },
        description: {
          fr: 'Terrassement, assainissement, réseaux d’eau et d’électricité, aménagements urbains.',
          en: 'Earthworks, drainage, water and power networks, urban development.',
        },
      },
      {
        title: { fr: 'Équipements collectifs', en: 'Community facilities' },
        description: {
          fr: 'Écoles, centres de santé, marchés, infrastructures sportives.',
          en: 'Schools, health centres, markets, sports facilities.',
        },
      },
      {
        title: { fr: 'Maîtrise d’œuvre & suivi', en: 'Project management & supervision' },
        description: {
          fr: 'Planning, coordination des corps d’état, contrôle qualité, réception des ouvrages.',
          en: 'Scheduling, trade coordination, quality control, handover.',
        },
      },
    ],
    figures: [
      { label: { fr: 'Chantiers livrés', en: 'Sites delivered' }, value: '30+' },
      { label: { fr: 'm² construits', en: 'm² built' }, value: '85 000' },
      { label: { fr: 'Taux de livraison à temps', en: 'On-time delivery' }, value: '94 %' },
      { label: { fr: 'Régions couvertes', en: 'Regions covered' }, value: '6' },
    ],
    projectSlugs: [
      'siege-tertiaire-plateau',
      'lotissement-bingerville',
      'rehabilitation-marche-cocody',
      'pont-dalles-san-pedro',
      'centre-sante-yamoussoukro',
    ],
  },

  {
    slug: 'logistique',
    name: 'Octogone Global Logistique',
    sector: { fr: 'Logistique & Supply chain', en: 'Logistics & Supply chain' },
    tagline: {
      fr: 'Faire circuler les marchandises, du port au dernier kilomètre.',
      en: 'Moving goods, from the port to the last mile.',
    },
    heroImage: 'assets/global-logistics.jpeg',
    accent: { from: '#22d3ee', to: '#0ea5e9' },
    intro: [
      {
        fr: 'Octogone Global Logistique organise le transport, l’entreposage et la distribution de marchandises pour des industriels, des distributeurs et des acteurs du e-commerce.',
        en: 'Octogone Global Logistique organises the transport, warehousing and distribution of goods for manufacturers, retailers and e-commerce players.',
      },
      {
        fr: 'La filiale combine des entrepôts sous température maîtrisée, une flotte suivie en temps réel et des outils numériques de traçabilité conçus avec Octogone Technologies.',
        en: 'The subsidiary combines temperature-controlled warehouses, a real-time tracked fleet and digital traceability tools built with Octogone Technologies.',
      },
    ],
    capabilities: [
      {
        title: { fr: 'Transit & dédouanement', en: 'Freight forwarding & customs' },
        description: {
          fr: 'Import-export, formalités douanières, groupage maritime et aérien.',
          en: 'Import-export, customs clearance, sea and air consolidation.',
        },
      },
      {
        title: { fr: 'Entreposage', en: 'Warehousing' },
        description: {
          fr: 'Stockage sec et froid, préparation de commandes, gestion des stocks.',
          en: 'Dry and cold storage, order picking, inventory management.',
        },
      },
      {
        title: { fr: 'Distribution & dernier kilomètre', en: 'Distribution & last mile' },
        description: {
          fr: 'Livraison urbaine et régionale, tournées optimisées, preuve de livraison numérique.',
          en: 'Urban and regional delivery, optimised routes, digital proof of delivery.',
        },
      },
      {
        title: { fr: 'Traçabilité', en: 'Traceability' },
        description: {
          fr: 'Suivi temps réel des flottes et des colis, tableaux de bord de performance.',
          en: 'Real-time fleet and parcel tracking, performance dashboards.',
        },
      },
    ],
    figures: [
      { label: { fr: 'm² d’entrepôts', en: 'm² of warehouses' }, value: '12 000' },
      { label: { fr: 'Véhicules suivis', en: 'Tracked vehicles' }, value: '60+' },
      { label: { fr: 'Livraisons / mois', en: 'Deliveries / month' }, value: '18 000' },
      { label: { fr: 'Taux de service', en: 'Service level' }, value: '97 %' },
    ],
    projectSlugs: [
      'hub-logistique-vridi',
      'chaine-froid-agro-export',
      'distribution-retail-abidjan',
      'tour-controle-flotte',
    ],
  },

  {
    slug: 'finance',
    name: 'Octogone Finance',
    sector: { fr: 'Finance & Conseil', en: 'Finance & Advisory' },
    tagline: {
      fr: 'Structurer, financer et sécuriser la croissance.',
      en: 'Structuring, financing and securing growth.',
    },
    heroImage: 'assets/finance.jpeg',
    accent: { from: '#34d399', to: '#22d3ee' },
    intro: [
      {
        fr: 'Octogone Finance accompagne entreprises et institutions sur le financement, la structuration d’opérations et l’ingénierie financière, avec une bonne connaissance du marché UEMOA.',
        en: 'Octogone Finance supports companies and institutions on financing, deal structuring and financial engineering, with deep knowledge of the WAEMU market.',
      },
      {
        fr: 'La filiale conçoit également des produits de paiement et d’inclusion financière, en s’appuyant sur les briques technologiques du groupe.',
        en: 'The subsidiary also designs payment and financial-inclusion products, building on the group’s technology components.',
      },
    ],
    capabilities: [
      {
        title: { fr: 'Conseil en financement', en: 'Financing advisory' },
        description: {
          fr: 'Recherche de dette et de fonds propres, relations bancaires, modélisation financière.',
          en: 'Debt and equity raising, banking relationships, financial modelling.',
        },
      },
      {
        title: { fr: 'Structuration d’opérations', en: 'Deal structuring' },
        description: {
          fr: 'Montages de projets, partenariats public-privé, due diligence.',
          en: 'Project structuring, public-private partnerships, due diligence.',
        },
      },
      {
        title: { fr: 'Paiements & inclusion', en: 'Payments & inclusion' },
        description: {
          fr: 'Intégration mobile money, agrégation de paiements, produits d’épargne digitale.',
          en: 'Mobile money integration, payment aggregation, digital savings products.',
        },
      },
      {
        title: { fr: 'Pilotage de la performance', en: 'Performance management' },
        description: {
          fr: 'Contrôle de gestion, tableaux de bord, optimisation du besoin en fonds de roulement.',
          en: 'Management control, dashboards, working-capital optimisation.',
        },
      },
    ],
    figures: [
      { label: { fr: 'Opérations conseillées', en: 'Deals advised' }, value: '25+' },
      { label: { fr: 'Volume structuré', en: 'Volume structured' }, value: '38 Md FCFA' },
      { label: { fr: 'Partenaires financiers', en: 'Financial partners' }, value: '15' },
      { label: { fr: 'Secteurs couverts', en: 'Sectors covered' }, value: '9' },
    ],
    projectSlugs: [
      'levee-dette-agro-industrie',
      'ppp-infrastructure-scolaire',
      'plateforme-agregation-paiements',
      'programme-epargne-digitale',
    ],
  },

  {
    slug: 'agro-alimentaire',
    name: 'Octogone Agro-alimentaire',
    sector: { fr: 'Agro-alimentaire', en: 'Agri-food' },
    tagline: {
      fr: 'De la parcelle au rayon, une filière maîtrisée.',
      en: 'From the field to the shelf, a controlled value chain.',
    },
    heroImage: 'assets/agro-alimentaire.jpeg',
    accent: { from: '#4ade80', to: '#22d3ee' },
    intro: [
      {
        fr: 'Octogone Agro-alimentaire structure des filières agricoles : approvisionnement auprès des producteurs, transformation, conditionnement et mise en marché de produits locaux.',
        en: 'Octogone Agri-food structures agricultural value chains: sourcing from producers, processing, packaging and market access for local products.',
      },
      {
        fr: 'La filiale investit dans la qualité et la traçabilité, en s’appuyant sur les outils numériques et logistiques du groupe pour réduire les pertes et sécuriser les approvisionnements.',
        en: 'The subsidiary invests in quality and traceability, using the group’s digital and logistics tools to cut losses and secure supply.',
      },
    ],
    capabilities: [
      {
        title: { fr: 'Approvisionnement & contractualisation', en: 'Sourcing & contract farming' },
        description: {
          fr: 'Réseaux de producteurs, appui technique, contrats d’achat, préfinancement de campagne.',
          en: 'Producer networks, technical support, purchase contracts, campaign pre-financing.',
        },
      },
      {
        title: { fr: 'Transformation & conditionnement', en: 'Processing & packaging' },
        description: {
          fr: 'Unités de transformation, contrôle qualité, packaging adapté au marché.',
          en: 'Processing units, quality control, market-ready packaging.',
        },
      },
      {
        title: { fr: 'Distribution', en: 'Distribution' },
        description: {
          fr: 'Mise en marché GMS et hors-domicile, marques propres, export régional.',
          en: 'Retail and food-service distribution, own brands, regional export.',
        },
      },
      {
        title: { fr: 'Traçabilité & qualité', en: 'Traceability & quality' },
        description: {
          fr: 'Suivi des lots, certification, cartographie des parcelles et des rendements.',
          en: 'Batch tracking, certification, mapping of plots and yields.',
        },
      },
    ],
    figures: [
      { label: { fr: 'Producteurs partenaires', en: 'Partner producers' }, value: '1 200+' },
      { label: { fr: 'Tonnes transformées / an', en: 'Tonnes processed / year' }, value: '6 500' },
      { label: { fr: 'Réduction des pertes', en: 'Losses reduced by' }, value: '−22 %' },
      { label: { fr: 'Filières structurées', en: 'Value chains structured' }, value: '4' },
    ],
    projectSlugs: [
      'unite-transformation-manioc',
      'filiere-cajou-tracee',
      'marque-jus-locaux',
      'plateforme-appro-producteurs',
    ],
  },

  {
    slug: 'transport',
    name: 'Octogone Transport',
    sector: { fr: 'Transport & Mobilité', en: 'Transport & Mobility' },
    tagline: {
      fr: 'Déplacer les personnes et les biens, efficacement et en sécurité.',
      en: 'Moving people and goods, efficiently and safely.',
    },
    heroImage: 'assets/transport.jpeg',
    accent: { from: '#22d3ee', to: '#3b82f6' },
    intro: [
      {
        fr: 'Octogone Transport opère des services de transport de personnes et de marchandises : lignes régulières, transport à la demande, affrètement et gestion de flotte pour compte de tiers.',
        en: 'Octogone Transport runs passenger and freight transport services: scheduled lines, on-demand transport, charter and third-party fleet management.',
      },
      {
        fr: 'La filiale s’appuie sur la télématique embarquée et les plateformes numériques du groupe pour la billettique, la planification et la sécurité routière.',
        en: 'The subsidiary relies on onboard telematics and the group’s digital platforms for ticketing, planning and road safety.',
      },
    ],
    capabilities: [
      {
        title: { fr: 'Transport de personnes', en: 'Passenger transport' },
        description: {
          fr: 'Lignes interurbaines, navettes entreprises, transport scolaire.',
          en: 'Intercity lines, corporate shuttles, school transport.',
        },
      },
      {
        title: { fr: 'Fret & affrètement', en: 'Freight & charter' },
        description: {
          fr: 'Transport routier de marchandises, affrètement, messagerie régionale.',
          en: 'Road freight, charter, regional parcel service.',
        },
      },
      {
        title: { fr: 'Gestion de flotte', en: 'Fleet management' },
        description: {
          fr: 'Maintenance préventive, télématique, éco-conduite, réduction du coût au kilomètre.',
          en: 'Preventive maintenance, telematics, eco-driving, lower cost per kilometre.',
        },
      },
      {
        title: { fr: 'Billettique & planification', en: 'Ticketing & planning' },
        description: {
          fr: 'Vente en ligne et mobile, optimisation des rotations, information voyageurs.',
          en: 'Online and mobile sales, rotation optimisation, passenger information.',
        },
      },
    ],
    figures: [
      { label: { fr: 'Véhicules exploités', en: 'Vehicles operated' }, value: '75' },
      { label: { fr: 'Passagers / an', en: 'Passengers / year' }, value: '480 000' },
      { label: { fr: 'Lignes régulières', en: 'Scheduled lines' }, value: '12' },
      { label: { fr: 'Disponibilité de la flotte', en: 'Fleet availability' }, value: '92 %' },
    ],
    projectSlugs: [
      'reseau-navettes-entreprises',
      'ligne-interurbaine-abidjan-bouake',
      'billettique-mobile-transport',
      'centre-gestion-flotte',
    ],
  },

  {
    slug: 'formation',
    name: 'Octogone Formation',
    sector: { fr: 'Formation & Développement des compétences', en: 'Training & Skills development' },
    tagline: {
      fr: 'Former les talents dont l’économie a besoin.',
      en: 'Training the talent the economy needs.',
    },
    heroImage: 'assets/formation.jpeg',
    accent: { from: '#818cf8', to: '#a855f7' },
    intro: [
      {
        fr: 'Octogone Formation conçoit et anime des programmes de formation professionnelle et continue : numérique, métiers du BTP, logistique, finance et management.',
        en: 'Octogone Formation designs and delivers vocational and continuing-education programmes: digital, construction trades, logistics, finance and management.',
      },
      {
        fr: 'La filiale s’appuie sur les projets réels du groupe pour proposer une pédagogie par la pratique, en présentiel comme à distance.',
        en: 'The subsidiary draws on the group’s real projects to deliver hands-on, practice-based learning, both in person and online.',
      },
    ],
    capabilities: [
      {
        title: { fr: 'Formations numériques', en: 'Digital training' },
        description: {
          fr: 'Développement web et mobile, données, cloud, cybersécurité, bureautique avancée.',
          en: 'Web and mobile development, data, cloud, cybersecurity, advanced office tools.',
        },
      },
      {
        title: { fr: 'Métiers techniques', en: 'Technical trades' },
        description: {
          fr: 'Conduite de chantier, topographie, sécurité, magasinage et gestion de stock.',
          en: 'Site supervision, surveying, safety, warehousing and stock management.',
        },
      },
      {
        title: { fr: 'Management & soft skills', en: 'Management & soft skills' },
        description: {
          fr: 'Gestion de projet, leadership, relation client, communication professionnelle.',
          en: 'Project management, leadership, customer relations, professional communication.',
        },
      },
      {
        title: { fr: 'Ingénierie de formation', en: 'Learning engineering' },
        description: {
          fr: 'Conception de parcours, plateformes e-learning, évaluation et certification.',
          en: 'Curriculum design, e-learning platforms, assessment and certification.',
        },
      },
    ],
    figures: [
      { label: { fr: 'Apprenants formés', en: 'Learners trained' }, value: '2 400+' },
      { label: { fr: 'Taux d’insertion', en: 'Placement rate' }, value: '78 %' },
      { label: { fr: 'Parcours certifiants', en: 'Certified tracks' }, value: '18' },
      { label: { fr: 'Formateurs', en: 'Trainers' }, value: '35' },
    ],
    projectSlugs: [
      'academie-numerique-abidjan',
      'programme-reconversion-btp',
      'plateforme-elearning-groupe',
      'certificat-logistique-operationnelle',
    ],
  },

  {
    slug: 'securite',
    name: 'Octogone Sécurité',
    sector: { fr: 'Sécurité & Sûreté', en: 'Security & Safety' },
    tagline: {
      fr: 'Protéger les sites, les biens et les personnes.',
      en: 'Protecting sites, assets and people.',
    },
    heroImage: 'assets/security.jpeg',
    accent: { from: '#60a5fa', to: '#7c3aed' },
    intro: [
      {
        fr: 'Octogone Sécurité assure la protection physique et électronique des sites : gardiennage, télésurveillance, contrôle d’accès, vidéoprotection et conseil en sûreté.',
        en: 'Octogone Sécurité provides physical and electronic site protection: guarding, remote monitoring, access control, video surveillance and security consulting.',
      },
      {
        fr: 'La filiale intègre les technologies du groupe — biométrie, supervision temps réel, analytique vidéo — pour des dispositifs mesurables et pilotables.',
        en: 'The subsidiary integrates the group’s technologies — biometrics, real-time supervision, video analytics — for measurable, manageable protection.',
      },
    ],
    capabilities: [
      {
        title: { fr: 'Gardiennage & protection', en: 'Guarding & protection' },
        description: {
          fr: 'Agents formés, rondes, filtrage des accès, gestion des flux visiteurs.',
          en: 'Trained officers, patrols, access filtering, visitor-flow management.',
        },
      },
      {
        title: { fr: 'Télésurveillance', en: 'Remote monitoring' },
        description: {
          fr: 'Centre de supervision, levée de doute vidéo, intervention sur alarme.',
          en: 'Monitoring centre, video alarm verification, alarm response.',
        },
      },
      {
        title: { fr: 'Contrôle d’accès & biométrie', en: 'Access control & biometrics' },
        description: {
          fr: 'Badges, RFID, QR codes, reconnaissance faciale, gestion des présences.',
          en: 'Badges, RFID, QR codes, facial recognition, attendance management.',
        },
      },
      {
        title: { fr: 'Conseil en sûreté', en: 'Security consulting' },
        description: {
          fr: 'Audits de vulnérabilité, plans de sûreté, formation du personnel.',
          en: 'Vulnerability audits, security plans, staff training.',
        },
      },
    ],
    figures: [
      { label: { fr: 'Sites protégés', en: 'Sites protected' }, value: '90+' },
      { label: { fr: 'Agents', en: 'Officers' }, value: '320' },
      { label: { fr: 'Délai moyen d’intervention', en: 'Average response time' }, value: '11 min' },
      { label: { fr: 'Supervision', en: 'Supervision' }, value: '24 / 7' },
    ],
    projectSlugs: [
      'supervision-multisite-industriel',
      'controle-acces-biometrique-campus',
      'videoprotection-zone-commerciale',
      'audit-surete-site-portuaire',
    ],
  },
];

export const subsidiaryBySlug = (slug: string): Subsidiary | undefined =>
  subsidiaries.find((s) => s.slug === slug);

export const subsidiarySlugs = subsidiaries.map((s) => s.slug);

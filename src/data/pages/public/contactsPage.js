const contactHero = {
    title: "Contacts et sources officielles",
    description: "Retrouvez ici les liens officiels des organismes importants : CAF, CPAM, MDPH, Impôts, Service-public…Des ressources fiables pour effectuer vos démarches en toute sécurité.",
};

const contactEssentials = {
    title: "Contacts essentiels",
    description: "Voici les organismes les plus importants à contacter dans le cadre d’une tutelle ou d’une curatelle :",
    contacts: [
        {
            items: [
                {
                    label: "CAF",
                    details: "— Allocations, RSA, AAH, APL",
                    href: "https://www.caf.fr",
                },
                {
                    label: "CPAM / Ameli",
                    details: "— Santé, remboursements, CSS, arrêt maladie",
                    href: "https://www.ameli.fr",
                },
                {
                    label: "Impôts (DGFIP)",
                    details: "— Déclarations, paiements, avis",
                    href: "https://www.impots.gouv.fr",
                },
                {
                    label: "Service Public",
                    details: "— Démarches officielles, informations légales", 
                    href: "https://www.service-public.fr",
                },
                {
                    label: "Légifrance",
                    details: "— Textes de loi, codes officiels", 
                    href: "https://www.legifrance.gouv.fr",
                },
            ],
        },
    ],
    conclusion: "Les sites ci-dessus sont les seules sources officielles pour vos démarches.",
};

const contactMdph = {
    title: "Trouver la MDPH de votre département",
    description: [
        "Chaque département possède une MDPH dédiée.",
        "Retrouvez leurs adresses, numéros de téléphone et horaires via l’annuaire officiel :",
    ],
    url: "https://www.monparcourshandicap.gouv.fr/annuaire",
    introList: "Ce site permet de :",
    features: [
        "trouver la MDPH locale",
        "vérifier les horaires",
        "accéder aux formulaires spécifiques",
        "préparer un dossier AAH, PCH, CMI...",
    ],
};

const contactOnlineTools = {
    title: "Simulateurs et outils en ligne",
    description: "Ces outils permettent d’évaluer vos droits et d’obtenir des estimations fiables :",
    tools: [
        {
            name: "Mesdroitssociaux.gouv.fr",
            description: "Simulation des droits : RSA, AAH, APL, CSS, allocations familiales.",
            url: "https://www.mesdroitssociaux.gouv.fr/accueil/",
        },
        {
            name: "Simulateurs CAF",
            details: "(logement, ressources)",
            url: "https://www.caf.fr/allocataires/aides-et-demarches/mes-demarches",
        },
        {
            name: "Simulateur CSS/CMU-C",
            url: "https://www.ameli.fr/",
        },
        {
            name: "Simulateur Impôts",
            details: "(revenus, taxes, calculs)",
            url: "https://www.impots.gouv.fr/simulateurs",
        },
    ],
    conclusion: "Ces simulateurs facilitent les démarches du tuteur ou du curateur.",
};

const contactLocalTransportHelp = {
    title: "Aides locales (transport et région)",
    description: "Certaines régions proposent des aides supplémentaires :",
    aids: [
        {
            name: "Tarification Solidaire TBM (Bordeaux Métropole)",
            text: "Réductions ou gratuité selon les revenus.",
            linkLabel: "Accéder à la tarification solidaire TBM",
            url: "https://www.infotbm.com/fr/tarificationsolidaire",
        },
        {
            name: "Carte solidaire / TER Nouvelle-Aquitaine",
            text: "Réductions sur trains, RER, TER.",
            linkLabel: "Voir les cartes et réductions TER Nouvelle-Aquitaine",
            url: "https://www.ter.sncf.com/nouvelle-aquitaine",
        },
        {
            name: "Tarification solidaire TBM – informations générales",
            text: "Informations complémentaires sur les tarifs, abonnements et conditions.",
            linkLabel: "Consulter les infos TBM",
            url: "https://www.infotbm.com",
        },
        {
            name: "Transports adaptés",
            details: "(handicap > 80 %, personnes âgées)",
            text: "Certains départements proposent un service de transport spécialisé (TAD).",
            extra: "Renseignez-vous sur le site de votre département ou MDPH.",
        },
    ],

    conclusion: "Ces dispositifs varient selon votre lieu de résidence.",
};

export {
    contactHero,
    contactEssentials,
    contactMdph,
    contactOnlineTools,
    contactLocalTransportHelp,
}
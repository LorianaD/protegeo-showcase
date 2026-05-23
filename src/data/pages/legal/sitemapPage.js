const sitemapHero = {
    title: "Plan du site",
    description: "Retrouvez l’ensemble des pages disponibles sur Protégéo pour accéder rapidement aux informations, aux démarches et aux espaces utiles."
};

const sitemapSections = [
    {
        title: "Pages principales",
        links: [
            {
                label: "Accueil",
                path: "/",
                description: "Présentation générale de Protégéo et accès rapide aux fonctionnalités essentielles."
            },
            {
                label: "Comprendre les mesures",
                path: "/measure",
                description: "Explications simples sur la tutelle, la curatelle et la sauvegarde de justice."
            },
            {
                label: "Aides et droits",
                path: "/helps",
                description: "Informations sur les aides financières, la CAF, la MDPH, la CPAM et les impôts."
            },
            {
                label: "Modèles utiles",
                path: "/templates",
                description: "Courriers administratifs, attestations et documents utiles."
            },
            {
                label: "Étapes après le jugement",
                path: "/steps",
                description: "Guide des démarches importantes après une mesure de protection."
            },
            {
                label: "Contact",
                path: "/contact",
                description: "Page de contact et accès aux sources officielles."
            },
            {
                label: "À propos",
                path: "/about",
                description: "Présentation du projet Protégéo et de ses objectifs."
            }
        ]
    },

    {
        title: "Compte utilisateur",
        links: [
            {
                label: "Connexion",
                path: "/auth/login",
                description: "Connexion à l’espace Protégéo."
            },
            {
                label: "Créer un compte",
                path: "/auth/register",
                description: "Création d’un compte utilisateur Protégéo."
            },
            {
                label: "Mot de passe oublié",
                path: "/auth/forgot-password",
                description: "Récupération de l’accès au compte."
            }
        ]
    },

    {
        title: "Espace protégé",
        links: [
            {
                label: "Dashboard",
                path: "/dashboard",
                description: "Vue d’ensemble des dossiers protégés, alertes et échéances."
            },
            {
                label: "Mes protégés",
                path: "/dashboard/protected",
                description: "Liste des personnes protégées suivies."
            },
            {
                label: "Profil du protégé",
                path: "/dashboard/profile",
                description: "Informations personnelles, jugement, famille et référents."
            },
            {
                label: "Compte de gestion annuel",
                path: "/dashboard/annual-report",
                description: "Gestion des ressources, dépenses et comptes bancaires."
            },
            {
                label: "Budget prévisionnel",
                path: "/dashboard/budget",
                description: "Préparation du budget annuel prévisionnel."
            },
            {
                label: "Inventaire du patrimoine",
                path: "/dashboard/inventory",
                description: "Inventaire des biens et documents importants."
            },
            {
                label: "Documents officiels",
                path: "/dashboard/documents",
                description: "Gestion des jugements, justificatifs et documents PDF."
            }
        ]
    },

    {
        title: "Pages d’aide et informations",
        links: [
            {
                label: "FAQ",
                path: "/faq",
                description: "Réponses aux questions fréquentes."
            },
            {
                label: "Communauté",
                path: "/community",
                description: "Espace d’échange et d’entraide."
            },
            {
                label: "Mentions légales",
                path: "/legal-notice",
                description: "Informations légales concernant Protégéo."
            },
            {
                label: "Données personnelles",
                path: "/privacy-policy",
                description: "Gestion et protection des données personnelles."
            },
            {
                label: "Gestion des cookies",
                path: "/cookies",
                description: "Informations et paramètres liés aux cookies."
            },
            {
                label: "Plan du site",
                path: "/sitemap",
                description: "Vue globale des pages et sections du site."
            }
        ]
    },

    {
        title: "Liens officiels utiles",
        links: [
            {
                label: "Service Public",
                path: "https://www.service-public.fr",
                external: true,
                description: "Informations administratives et démarches officielles."
            },
            {
                label: "CAF",
                path: "https://www.caf.fr",
                external: true,
                description: "Allocations familiales, AAH, RSA et aides au logement."
            },
            {
                label: "Ameli",
                path: "https://www.ameli.fr",
                external: true,
                description: "Assurance maladie et remboursements santé."
            },
            {
                label: "Impôts",
                path: "https://www.impots.gouv.fr",
                external: true,
                description: "Déclarations fiscales et démarches liées aux impôts."
            },
            {
                label: "Légifrance",
                path: "https://www.legifrance.gouv.fr",
                external: true,
                description: "Consultation des textes de loi officiels."
            },
            {
                label: "Mon Parcours Handicap",
                path: "https://www.monparcourshandicap.gouv.fr",
                external: true,
                description: "Annuaire MDPH et ressources handicap."
            }
        ]
    }
];

export {
    sitemapHero,
    sitemapSections,
};
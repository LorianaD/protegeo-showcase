const aboutHero = {
    title: "À propos",
    description: "Une plateforme conçue pour expliquer, organiser et accompagner la gestion des mesures de protection juridique.", 
    btnLabel: "Découvrir Protégéo",
    btnLink: "/",
};

const aboutOverviewCards = [
    {
        title: "Pourquoi Protégéo ?",
        description: "Centraliser les informations utiles et simplifier les démarches du quotidien.",
        linkLabel: "En savoir plus →",
        linkUrl: "#about-purpose",
    },
    {
        title: "Pour qui ?",
        description: "Tuteurs, curateurs, mandataires et familles qui ont besoin d’un espace clair.",
        linkLabel: "En savoir plus →",
        linkUrl: "/measure",
    },
    {
        title: "Ce que le site propose",
        description: "Mesures expliquées, suivi pratique, documents utiles et repères administratifs.",
        linkLabel: "En savoir plus →",
        linkUrl: "#about-tools",
    }
];

const aboutPurpose = {
    id: "about-purpose",
    title: "Pourquoi ce site a été créé",
    description: [
        "La gestion d’une mesure de protection peut vite devenir complexe : il faut comprendre les démarches, retrouver les bonnes informations, suivre les dépenses, conserver les justificatifs et préparer les éléments nécessaires au compte de gestion.",
        "Protégéo a été imaginé pour rendre cet ensemble plus lisible, plus structuré et plus rassurant au quotidien."
    ],
    btnLabel: "Voir les fonctionnalités",
    btnLink: "#about-tools",
};

const aboutTools = {
    id: "about-tools",
    title: "Ce que Protégéo permet de faire",
    lists: [
        {
            items: [
                "Comprendre les mesures de protection",
                "Retrouver des aides, droits et informations utiles",
                "Accéder à des modèles et documents pratiques",
                "Suivre plus facilement les éléments utiles à la gestion",
                "Structurer les informations importantes dans un même espace",
            ],
        },
    ],
    btnLabel: "Découvrir les outils",
    btnLink: "/templates",    
};

export {
    aboutHero,
    aboutOverviewCards,
    aboutPurpose,
    aboutTools,
};
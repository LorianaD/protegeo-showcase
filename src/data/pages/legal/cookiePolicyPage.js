const cookiesPolicy = {
    hero: {
        title: "Gestion des cookies",
        description:
            "Protégéo peut utiliser des cookies ou technologies similaires afin d’assurer le bon fonctionnement du site et d’améliorer l’expérience utilisateur.",
    },

    sections: [
        {
            title: "Qu’est-ce qu’un cookie ?",
            description:
                "Un cookie est un petit fichier enregistré sur l’appareil de l’utilisateur lors de la consultation d’un site web.",
            lists: [
                {
                    items: [
                        "Mémoriser certaines préférences",
                        "Améliorer la navigation",
                        "Faciliter certaines fonctionnalités techniques",
                    ],
                },
            ],
        },

        {
            title: "Cookies utilisés sur Protégéo",
            lists: [
                {
                    title: "Cookies nécessaires au fonctionnement",
                    items: [
                        "Navigation entre les pages",
                        "Sécurisation des espaces connectés",
                        "Maintien des préférences d’affichage",
                        "Bon fonctionnement des formulaires",
                    ],
                },
                {
                    title: "Cookies de préférence",
                    items: [
                        "Thème clair ou sombre",
                        "Préférences d’affichage",
                        "Paramètres de navigation",
                    ],
                },
                {
                    title: "Cookies statistiques (éventuels)",
                    items: [
                        "Mesure d’audience",
                        "Analyse des pages consultées",
                        "Détection d’erreurs techniques",
                        "Amélioration de l’expérience utilisateur",
                    ],
                },
            ],
            conclusion:
                "Ces données seraient utilisées uniquement dans le cadre de l’amélioration du projet.",
        },

        {
            title: "Gestion des cookies",
            description:
                "L’utilisateur peut gérer les cookies directement depuis son navigateur.",
            lists: [
                {
                    items: [
                        "Accepter certains cookies",
                        "Refuser certains cookies",
                        "Supprimer les cookies enregistrés",
                    ],
                },
            ],
            conclusion:
                "La gestion des cookies peut varier selon le navigateur utilisé.",
        },

        {
            title: "Cookies tiers",
            description:
                "Certaines pages peuvent contenir des liens vers des sites externes disposant de leurs propres politiques de gestion des cookies.",
            lists: [
                {
                    items: [
                        "service-public.gouv.fr",
                        "legifrance.gouv.fr",
                        "caf.fr",
                        "ameli.fr",
                        "impots.gouv.fr",
                    ],
                },
            ],
            conclusion:
                "Protégéo n’est pas responsable des cookies utilisés par ces services externes.",
        },

        {
            title: "Durée de conservation",
            description:
                "Les cookies sont conservés pendant une durée limitée conformément aux besoins techniques du site.",
            conclusion:
                "Les cookies peuvent être supprimés à tout moment depuis les paramètres du navigateur.",
        },

        {
            title: "Évolution de cette politique",
            description:
                "Cette page peut être modifiée afin d’accompagner l’évolution du projet ou des fonctionnalités proposées.",
            conclusion:
                "Dernière mise à jour : mai 2026.",
        },
    ],
};

const cookiesBanner = {
    title: "Protégéo utilise des cookies",

    description: "Nous utilisons des cookies nécessaires au bon fonctionnement du site et, avec votre accord, des cookies de mesure d’audience afin d’améliorer Protégéo.",

    actions: {
        refuse: "Tout refuser",
        customize: "Personnaliser",
        accept: "Tout accepter",
    },

    links: {
        policy: "/cookies",
    },

    preferences: {
        title: "Préférences des cookies",
        description: "Vous pouvez choisir les cookies que vous souhaitez autoriser.",

        categories: [
            {
                name: "necessary",
                title: "Cookies nécessaires",
                description: "Nécessaires au bon fonctionnement et à la sécurité de Protégéo.",
                disabled: true,
            },
            {
                name: "preferences",
                title: "Cookies de préférence",
                description: "Permettent de mémoriser certaines préférences d’affichage et de navigation.",
            },
            {
                name: "analytics",
                title: "Mesure d’audience",
                description: "Permet de mesurer l’utilisation de Protégéo afin d’améliorer le site.",
            },
        ],

        actions: {
            refuse: "Tout refuser",
            save: "Enregistrer mes choix",
        },
    },
};

export {
    cookiesPolicy,
    cookiesBanner,
};
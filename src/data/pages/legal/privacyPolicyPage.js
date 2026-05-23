const privacyPolicyHero = {
    title: "Données personnelles",
    description : "Protégéo accorde une attention particulière à la protection des données personnelles et au respect de la vie privée des utilisateurs.",
}

const privacyPolicySections = [
    {
        title: "Introduction",
        description:
            "Cette page explique quelles données peuvent être collectées, pourquoi elles sont utilisées et comment elles sont protégées. Protégéo est un projet personnel et pédagogique réalisé dans le cadre d’un projet de développement web.",
    },

    {
        title: "Données pouvant être collectées",
        lists: [
            {
                title: "Données de contact",
                items: [
                    "Nom",
                    "Prénom",
                    "Adresse e-mail",
                ],
            },
            {
                title: "Données liées aux formulaires",
                items: [
                    "Messages envoyés via le formulaire de contact",
                    "Suggestions ou remarques transmises au projet",
                ],
            },
            {
                title: "Données techniques",
                items: [
                    "Type d’appareil",
                    "Navigateur utilisé",
                    "Informations techniques nécessaires au bon fonctionnement du site",
                ],
            },
        ],
    },

    {
        title: "Finalité des traitements",
        description:
            "Les données collectées sont utilisées uniquement dans le cadre du fonctionnement et de l’amélioration du projet.",
        lists: [
            {
                items: [
                    "Permettre le fonctionnement du site",
                    "Répondre aux messages envoyés via le formulaire de contact",
                    "Améliorer l’expérience utilisateur",
                    "Corriger des problèmes techniques",
                    "Développer les fonctionnalités du projet",
                ],
            },
        ],
        conclusion:
            "Protégéo ne revend pas les données personnelles et ne les utilise pas à des fins commerciales.",
    },

    {
        title: "Données sensibles",
        description:
            "Protégéo peut être amené, à terme, à traiter des informations administratives ou financières liées à une mesure de protection.",
        lists: [
            {
                items: [
                    "Confidentialité des informations",
                    "Limitation des accès selon les rôles",
                    "Sécurisation des données",
                    "Protection des espaces connectés",
                ],
            },
        ],
    },

    {
        title: "Durée de conservation",
        description:
            "Les données sont conservées uniquement pendant la durée nécessaire au fonctionnement du service ou au traitement des demandes.",
        conclusion:
            "Les données devenues inutiles ou obsolètes peuvent être supprimées.",
    },

    {
        title: "Sécurité",
        description:
            "Protégéo met en œuvre plusieurs mesures visant à limiter les risques liés à la sécurité des données.",
        lists: [
            {
                items: [
                    "Sécurisation des accès",
                    "Protection des espaces connectés",
                    "Limitation des permissions",
                    "Architecture séparée entre front-end et back-end",
                ],
            },
        ],
        conclusion:
            "Malgré ces précautions, aucun système informatique ne peut garantir une sécurité absolue.",
    },

    {
        title: "Partage des données",
        description:
            "Les données personnelles ne sont pas transmises à des tiers sans consentement, sauf obligation légale.",
        conclusion:
            "Les sites externes accessibles depuis Protégéo disposent de leurs propres politiques de confidentialité.",
    },

    {
        title: "Droits des utilisateurs",
        description:
            "Conformément à la réglementation applicable, chaque utilisateur peut demander :",
        lists: [
            {
                items: [
                    "L’accès à ses données",
                    "La rectification de ses données",
                    "La suppression de ses données lorsque cela est possible",
                    "Des informations sur l’utilisation de ses données",
                ],
            },
        ],
        conclusion:
            "Les demandes peuvent être effectuées via la page « Nous contacter ».",
    },

    {
        title: "Cookies",
        description:
            "Le site peut utiliser des cookies nécessaires au bon fonctionnement de l’interface et à certaines préférences d’affichage.",
        conclusion:
            "Une page dédiée à la gestion des cookies précise leur fonctionnement.",
    },

    {
        title: "Évolution de cette politique",
        description:
            "Cette page peut être modifiée afin d’accompagner l’évolution du projet, des fonctionnalités ou des obligations légales.",
        conclusion:
            "Dernière mise à jour : mai 2026.",
    },
];

export {
    privacyPolicyHero,
    privacyPolicySections,
};
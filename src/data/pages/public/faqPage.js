import { iconDoc, iconTrib, iconBank } from "@/assets";

const faqHero = {
    title: "Questions fréquentes",
    description: "Retrouvez rapidement des réponses simples concernant la tutelle, la curatelle, les démarches administratives et l’utilisation de Protégéo.",
    btnLabel: "Comprendre les mesures",
    btnLink: "/measure",
    searchLabel: "Rechercher une question...",
};

const faqCards = [
    {
        icon: iconDoc,
        title: "Comment remplir le compte de gestion ?",
    },
    {
        icon: iconTrib,
        title: "Quelle différence entre tutelle et curatelle ?",
    },
    {
        icon: iconBank,
        title: "Quels documents faut-il conserver ?",
    }
];

const faqQuestions = [
    {
        categoryTitle: "Mesures de protection",
        questions: [
            {
                questionTitle: "Quelle est la différence entre une tutelle et une curatelle ?",
                questionAnswer: [{
                    type: "paragraph",
                    content: [
                        "La curatelle accompagne la personne dans certains actes importants.",
                        "La tutelle représente davantage la personne dans la gestion quotidienne."
                    ],
                }],
            },
            {
                questionTitle: "Une personne sous protection garde-t-elle ses droits ?",
                questionAnswer: [{
                    type: "paragraph",
                    content: "Oui. Elle conserve ses droits fondamentaux, sa vie privée et participe autant que possible aux décisions.",
                }],
            },
            {
                questionTitle: "Combien de temps dure une mesure ?",
                questionAnswer: [{
                    type: "paragraph",
                    content: "Cela dépend du jugement. Une mesure peut être temporaire ou renouvelée.",
                }],
            },
        ],
    },

    {
        categoryTitle: "Gestion administrative",
        questions: [
            {
                questionTitle: "Quels documents faut-il garder ?",
                questionAnswer: [{
                    type: "list",
                    content: [
                        "relevés bancaires",
                        "avis d’imposition",
                        "factures importantes",
                        "justificatifs CAF / MDPH",
                        "jugement de protection",
                    ]
                    
                }],
            },
            {
                questionTitle: "Quand faut-il rendre le compte de gestion ?",
                questionAnswer: [{
                    type: "paragraph",
                    content: "Le compte de gestion doit être transmis chaque année au tribunal compétent.",
                }],
            },
            {
                questionTitle: "Peut-on faire les démarches CAF à distance ?",
                questionAnswer: [{
                    type: "paragraph",
                    content: "Oui, la majorité des démarches peuvent être réalisées depuis les espaces en ligne officiels.",
                }],
            },
        ],
    },

    {
        categoryTitle: "Protégéo",
        questions: [
            {
                questionTitle: "Protégéo remplace-t-il le tribunal ?",
                questionAnswer: [{
                    type: "paragraph",
                    content: "Non. Protégéo est un outil d’accompagnement et d’organisation.",
                }],
            },
            {
                questionTitle: "Les données sont-elles sécurisées ?",
                questionAnswer: [{
                    type: "paragraph",
                    content: "Protégéo prévoit une gestion sécurisée des accès et des rôles utilisateurs.",
                }],
            },
            {
                questionTitle: "Qui peut accéder aux dossiers ?",
                questionAnswer: [
                    {
                        type: "paragraph",
                        content: "Cela dépend des autorisations et du rôle :",
                    },
                    {
                        type: "list",
                        content: [
                            "tuteur",
                            "curateur",
                            "mandataire",
                            "famille",
                            "personne protégée",
                        ],
                    },
                ],
            },
        ],
    },
];

const faqSupport = {
    title: "Besoin d’aide supplémentaire ?",
    description: [
        "Vous ne trouvez pas votre réponse ?",
        "Consultez nos guides pratiques ou contactez les organismes officiels.",
    ],
    btns: [
        {
            btnLabel: "Voir les démarches",
            btnLink: "/steps",
        },
        {
            btnLabel: "Contacts utiles",
            btnLink: "/contact",
        }
    ]
}

export {
    faqHero,
    faqCards,
    faqQuestions,
    faqSupport,
}
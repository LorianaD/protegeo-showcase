const measureHero = 
{
    title: "Comprendre les mesures de protection juridique",
    description: "Les mesures de tutelle, curatelle et sauvegarde de justice ont pour but de protéger une personne vulnérable dans la gestion de ses droits et de ses biens. Voici les différences expliquées simplement.",
}

const measureMeasures =
{
    title: "Les mesures",
    cards: [
        {
            id: 1,
            title: "La sauvegarde de justice (la mesure la plus simple)",
            description: "La sauvegarde de justice est une mesure temporaire destinée à protéger rapidement une personne.",
            lists: [
                {
                    title: "Elle permet :",
                    items: [
                        "d’être représenté pour certains actes",
                        "de contester des actes faits pendant la période",
                        "d’éviter des décisions préjudiciables"
                    ]
                }
            ],
            infos: [
                {
                    label: "Durée",
                    value: "quelques mois, renouvelable une fois."
                },
                {
                    label: "Personne protégée",
                    value: "conserve la plupart de ses droits."
                }
            ]
        },
        {
            id: 2,
            title: "La curatelle (accompagnement)",
            description: "La curatelle permet d’accompagner une personne qui a encore de l’autonomie mais nécessite une aide dans la gestion de ses affaires.",
            lists: [
                {
                    title: "Il existe 3 types de curatelle :",
                    items: [
                        "Curatelle simple : assistance pour les actes importants",
                        "Curatelle renforcée : le curateur gère les comptes",
                        "Curatelle aménagée : adaptée au cas particulier"
                    ]
                }
            ],
            infos: [
                {
                    label: "Personne protégée",
                    value: "peut faire seule les actes simples du quotidien."
                }
            ]
        },
        {
            id: 3,
            title: "La tutelle (la mesure la plus complète)",
            description: "La tutelle s’adresse aux personnes qui ne peuvent plus agir seules. Le tuteur représente la personne pour la plupart des actes.",
            lists: [
                {
                    title: "Il doit :",
                    items: [
                        "gérer les dépenses",
                        "signer les documents",
                        "rendre des comptes au juge",
                        "protéger les intérêts de la personne"
                    ]
                }
            ],
            infos: [
                {
                    label: "Personne protégée",
                    value: "conserve ses droits fondamentaux (vie privée, choix personnels)."
                }
            ]
        }
    ]
};

const measureRole = {
    title: "Le rôle du tuteur ou curateur",
    description: {
        title: "Le tuteur ou curateur est chargé de:",
        items: [
            "protéger les intérêts de la personne",
            "gérer les dépenses courantes",
            "vérifier les revenus",
            "conserver et classer les documents importants",
            "rendre compte au juge une fois par an (compte de gestion)",
            "accompagner la personne le plus possible dans ses choix",
        ],
        conclusion: "La mission doit toujours être exercée dans l’intérêt de la personne protégée."
    },
};

const measureProtectedPersonneRights = {
    title: "Les droits de la personne protégée",
    description: {
        title: "Même sous mesure de protection, la personne conserve:",
        items: [
            "ses droits fondamentaux",
            "son droit au respect de sa vie privée",
            "son droit de vote",
            "son droit d’être informée",
            "son droit de participer aux décisions",
            "ses choix personnels (loisirs, amis, habitudes de vie)",
        ],
        conclusion: "Le rôle de la mesure est d’aider, pas de contrôler."
    },
};

export {
    measureHero,
    measureMeasures,
    measureRole,
    measureProtectedPersonneRights,
}
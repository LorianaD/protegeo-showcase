const hero = 
    {
        title: "Comprendre les mesures de protection juridique",
        description: "Les mesures de tutelle, curatelle et sauvegarde de justice ont pour but de protéger une personne vulnérable dans la gestion de ses droits et de ses biens. Voici les différences expliquées simplement.",
    }

const measures =
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

export {
    hero,
    measures
}
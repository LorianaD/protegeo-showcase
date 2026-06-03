const helpsHero = 
{
    title: "Vos aides et droits",
    description: "Découvrez les principales aides financières et administratives : AAH, APL, RSA, MDPH, impôts, CPAM… Toutes ces informations sont rassemblées ici pour faciliter vos démarches.",
}

const helpsFinancial =
{
    title: "Aides financières et sociales",
    cards: [
        {
            id: 1,
            title: "AAH - Allocation aux Adultes Handicapés",
            description: "L' AAH garantit un revenu minimum aux personnes en situation de handicap.",
            lists: [
                {
                    title: "Elle peut être attribuée : ",
                    items: [
                        "en fonction du taux d'incapacité",
                        "ou de restrictions durables à l'emploi",
                    ]
                }
            ],
            infos: [
                {
                    label: "Montant",
                    value: "dépend des ressources."
                },
                {
                    label: "Versement",
                    value: "par la CAF chaque 5 du mois."
                },
                {
                    label: "Demande",
                    value: "se fait auprès de la MDPH."
                },
            ]
        },
        {
            id: 2,
            title: "APL - Aide au logement",
            description: "L’APL aide à réduire le montant du loyer ou des charges.",
            lists: [
                {
                    title: "Elle est attribuée selon :",
                    items: [
                        "les revenus",
                        "le logement",
                        "la composition du foyer"
                    ]
                }
            ],
            infos: [
                {
                    label: "Important",
                    value: "peut être versée directement au bailleur."
                },
            ]
        },
        {
            id: 3,
            title: "RSA - Revenu de Solidarité Active",
            description: "Le RSA assure un revenu minimum lorsque les ressources sont faibles.",
            lists: [
                {
                    title: "La demande se fait auprès de :",
                    items: [
                        "la CAF",
                        "ou du Conseil Départemental",
                    ]
                }
            ],
            infos: [
                {
                    label: "Conditions",
                    value: "revenu, âge, situation familiale."
                },
                {
                    label: "Versement",
                    value: "par la CAF chaque 5 du mois."
                }
            ]
        }
    ]
}

const helpsMdph = {
    title: "MDPH - Droits & démarches",
    description: "La MDPH évalue la situation de handicap de la personne protégée.",
    lists: [
        {
            title: "Elle peut attribuer :",
            items: [
                "la carte mobilité inclusion (CMI)",
                "l’AAH (première demande ou renouvellement)",
                "la PCH (Prestation de Compensation du Handicap)",
                "les orientations (ESAT, IME, SAVS…)",
            ],
        },
    ],
    infos: [
        {
            label: "Important",
            value: "les dossiers MDPH peuvent prendre 4 à 12 mois.",
        },
    ],
    conclusion: "Toujours anticiper les renouvellements.",
};

const helpsCpam = {
    title: "CPAM - Droits à la santé",
    infos: [
        {
            label: "Spécificité",
            value: "Le tuteur ou curateur peut déclarer au nom de la personne, en accord avec elle."
        },
        {
            label: "Important",
            value: "vérifier régulièrement les remboursements dans l’espace ameli.fr.",
        }
    ]
}

const helpsTaxes = {
    title: "Impôts - Déclaration & obligations",
    lists: [
        {
            title: "Même sous mesure de protection, la personne doit effectuer :",
            items: [
                "la déclaration de revenus",
                "la mise à jour des situations (adresse, situation familiale)",
                "les paiements éventuels de taxe d’habitation / foncier",
            ],
        },
    ],
    infos: [
        {
            label: "Spécificité",
            value: "Le tuteur ou curateur peut déclarer au nom de la personne, en accord avec elle.",
        },
    ],
};

const helpsAccess = {
    title: "Évaluer vos droits et aides disponibles",
    description: "Il existe plusieurs outils officiels permettant de connaître vos droits, d’estimer des aides financières ou d’accéder aux services proches de chez vous :",
    infos: [
        {
            label: "Mesdroitssociaux.gouv.fr",
            value: "évalue vos droits aux aides sociales (AAH, RSA, APL, CSS…).",
        },
        {
            label: "CAF.fr – Estimations",
            value: "calcule les aides logement ou familiales.",
        },
        {
            label: "Ameli.fr",
            value: "vérifie les droits santé, CSS/CMU, ALD.",
        },
        {
            label: "Annuaire MDPH",
            value: "recherchez l’adresse et les coordonnées de votre MDPH par département.",
        },
        {
            label: "Service-public.fr",
            value: "démarches officielles, formulaires, obligations.",
        },
    ],
    btn: "Évaluer vos droits en ligne",
    href: "https://www.mesdroitssociaux.gouv.fr/accueil/",
};

const helpsTransport = {
    title: "Aides locales au transport et à la mobilité",
    description: "Selon votre région ou département, des aides spécifiques existent :",
    lists: [
        {
            title: "",
            items: [
                "Tarification Solidaire TBM (Bordeaux Métropole) : réductions importantes ou gratuité selon les ressources.",
                "Carte Modalis / TER Nouvelle-Aquitaine : réduction sur les trains régionaux et RER.",
                "Transports adaptés (handicap ou perte d’autonomie) : services de transport spécialisés pour les personnes ayant un taux d’incapacité supérieur à 80 % ou les personnes âgées en perte d’autonomie.",
                "Aide Mobilité Région : aide aux déplacements professionnels et médicaux dans certaines situations.",
            ],
        },
    ],
    infos: [
        {
            label: "Important",
            value: "ces aides varient selon les départements. Consultez les sites officiels pour connaître vos droits.",
        },
    ],
    links: [
        {
            label: "Voir les aides de transport sur Bordeaux Metropole",
            href: "https://tarificationsolidaire.bordeaux-metropole.fr/Accueil.aspx",
        },
        {
            label: "Voir les aides de transport Nouvelle-Aquitaine",
            href: "https://transports.nouvelle-aquitaine.fr/les-offres/la-carte-solidaire",
        },
    ],
};

export {
    helpsHero,
    helpsFinancial,
    helpsMdph,
    helpsCpam,
    helpsTaxes,
    helpsAccess,
    helpsTransport,
}
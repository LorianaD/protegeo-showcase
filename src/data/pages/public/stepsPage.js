const stepsHero = {
    title: "Étapes essentielles après le jugement",
    description: "Après une mise sous tutelle, curatelle ou sauvegarde de justice, plusieurs démarches doivent être effectuées rapidement. Voici un guide simple et complet pour vous accompagner étape par étape.",
};

const steps = [
    {
        id: 1,
        title: "1. Comprendre le jugement",
        lists: [
            {
                title: "Le jugement précise :",
                items: [
                    "la mesure prononcée (tutelle, curatelle, sauvegarde)",
                    "la durée de la mesure",
                    "les missions confiées au tuteur/curateur",
                    "les actes pour lesquels la personne doit être assistée ou représentée",
                    "les obligations annuelles (compte de gestion, inventaire du patrimoine)",
                ],
            },
        ],
        infos: [
            {
                label: "Important",
                value: "toujours conserver le jugement original dans un endroit sécurisé.",
            },
        ],
    },
    {
        id: 2,
        title: "2. Informer rapidement les organismes",
        lists: [
            {
                title: "Il est indispensable de transmettre une copie du jugement aux principaux organismes :",
                items: [
                    {
                        label: "CAF",
                        details: "(APL, AAH, allocations familiales…)",
                    },
                    {
                        label: "CPAM",
                        details: "(droits santé, remboursements, CSS)",
                    },
                    {
                        label: "MDPH",
                        details: "(droits handicap, CMI, PCH, AAH renouvellement)",
                    },
                ],
            },
        ],
        infos: [
            {
                label: "Conseil",
                value: "joignez un courrier expliquant que vous êtes désormais tuteur/curateur.",
            },
        ],
        conclusion: "(Vous pouvez trouver des modèles dans “Modèles utiles”.)",
    },
    {
        id: 3,
        title: "3. Mise à jour des comptes bancaires",
        description: "La banque doit légalement :",
        lists: [
            {
                title: "",
                items: [
                    "prendre en compte le jugement",
                    "modifier les accès aux comptes (selon la mesure)",
                    "sécuriser les opérations",
                    "fournir les relevés nécessaires au futur compte de gestion",
                ],
            },
            {
                title: "À demander :",
                items: [
                    "un accès au compte",
                    "les historiques de prélèvements",
                    "les dernières opérations bancaires",
                    "une carte bancaire adaptée (selon la situation)",
                ],
            },
        ],
    },
    {
        id: 4,
        title: "4. Mise à jour auprès des impôts",
        description: "Vous devez transmettre le jugement pour :",
        lists: [
            {
                title: "",
                items: [
                    "déclarer les revenus au nom de la personne protégée",
                    "mettre à jour l’adresse fiscale",
                    "régulariser une situation en retard si besoin",
                ],
            },
        ],
        infos: [
            {
                label: "Spécificité",
                value: "Le tuteur/curateur signe la déclaration en accord avec la personne protégée.",
            },
        ],
    },
    {
        id: 5,
        title: "5. Mise à jour des dossiers officiels",
        description: "Il est important de vérifier :",
        lists: [
            {
                title: "",
                items: [
                    "adresse postale",
                    "informations de contact",
                    "abonnements (téléphone, internet, transports…)",
                    "assurances (logement, responsabilité civile)",
                    "dossiers en cours (prestations, soins, crédit…)",
                ],
            },
        ],
    },
    {
        id: 6,
        title: "6. Classer et conserver les documents essentiels",
        description: "À conserver soigneusement :",
        lists: [
            {
                title: "",
                items: [
                    "jugement original",
                    "relevés bancaires",
                    "factures",
                    "devis et justificatifs",
                    "dossier MDPH complet",
                    "documents de santé",
                    "impôts",
                    "contrats",
                ],
            },
        ],
        infos: [
            {
                label: "Astuce",
                value: "créez un “Dossier Protégéo” avec des sous-dossiers par thème.",
            },
        ],
    },
    {
        id: 7,
        title: "7. Budget, dépenses et compte de gestion",
        description: "Vous devez :",
        lists: [
            {
                title: "",
                items: [
                    "noter les revenus mensuels",
                    "suivre chaque dépense",
                    "garder tous les justificatifs",
                    "préparer le compte de gestion annuel",
                    "anticiper les paiements importants (loyer, factures, impôts…)",
                ],
            },
        ],
        infos: [
            {
                label: "Conseil",
                value: "un tableau Excel simple ou l’outil Protégéo facilite le suivi.",
            },
        ],
    },
];

export {
    stepsHero,
    steps,
};
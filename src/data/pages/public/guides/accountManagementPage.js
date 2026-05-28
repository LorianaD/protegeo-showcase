import { iconWarning, iconInfo, step1, step2, step3, step4, step5, step6, step7 } from "@/assets";

const accountManagementGuideHero = {
    target: "GUIDE PÉDAGOGIQUE",
    title: "Comment remplir le Compte de Gestion",
    description: "Protection des majeurs — Formulaire officiel du Tribunal judiciaire",
};

const accountManagementGuideWarning = {
    img: iconWarning,
    description: "Le compte de gestion retrace toutes les ressources et dépenses de la personne protégée sur une année. Il doit être remis au greffe du Tribunal judiciaire pour vérification et approbation. Ce guide vous accompagne section par section.",
}

const accountManagementGuideSteps = {
    img: iconInfo,
    sign: "i",
    title: "Les 9 étapes en un coup d’œil",
    items: [
        {
            number: 1,
            iconColor: "blue",
            title: "La personne protégée & la mesure",
            description: "Identité, adresse, type de mesure, date du jugement, tuteur/curateur.",
            questions: [
                {
                    title: "À quoi ça sert ?",
                    description: "Cette partie sert à identifier la personne protégée et la mesure décidée par le tribunal.",
                },
                {
                    title: "Comment remplir ?",
                    description: [
                        "Recopiez les informations indiquées dans le jugement : identité de la personne protégée, adresse, date du jugement, type de mesure et identité du tuteur, curateur ou mandataire.",
                        "Vérifiez que l’adresse est bien à jour avant l’envoi.",
                    ]
                },
                {
                    title: "Exemple :",
                    description: "Mesure prononcée : curatelle renforcée. Jugement du : date indiquée sur le jugement.",
                },
                {
                    title: "Documents utiles :",
                    description: "Jugement de protection, pièce d’identité, justificatif d’adresse.",
                },
                {
                    title: "Erreur fréquente :",
                    description: "Oublier de mettre à jour l’adresse ou cocher une mesure différente de celle indiquée dans le jugement.",
                },
            ],
            screenshot: step1,
        },
        {
            number: 2,
            iconColor: "blue",
            title: "Les modifications de situation",
            description: "Déménagement, changement de tuteur, autre modification depuis le dernier compte.",
            questions: [
                {
                    title: "À quoi ça sert ?",
                    description: "Cette partie sert à signaler les changements importants intervenus depuis le précédent compte de gestion.",
                },
                {
                    title: "Comment remplir ?",
                    description: [
                        "Cochez uniquement les cases concernées : changement de domicile de la personne protégée, changement de domicile du tuteur ou curateur, ou autre modification importante.",
                        "S’il n’y a eu aucun changement, vous pouvez laisser cette partie vide ou indiquer qu’aucune modification n’est intervenue.",
                    ]
                },
                {
                    title: "Exemple :",
                    description: "Changement de domicile : indiquez la nouvelle adresse complète.",
                },
                {
                    title: "Documents utiles :",
                    description: "Justificatif de domicile, courrier du tribunal, document prouvant le changement.",
                },
                {
                    title: "Erreur fréquente :",
                    description: "Oublier de signaler un déménagement ou un changement concernant la personne chargée de la mesure.",
                },
            ],
            screenshot: step2,
        },
        {
            number: 3,
            iconColor: "blue",
            title: "Les actes de gestion",
            description: "Immobilier ou placements modifiés ? Cocher et joindre les justificatifs.",
            questions: [
                {
                    title: "À quoi ça sert ?",
                    description: "Cette partie sert à indiquer si le patrimoine immobilier ou les placements de la personne protégée ont été modifiés pendant l’année.",
                },
                {
                    title: "Comment remplir ?",
                    description: [
                        "Cochez oui ou non. Si vous cochez oui, précisez la nature de l’opération réalisée et joignez les justificatifs correspondants.",
                        "Cette partie concerne surtout les ventes, achats, successions, donations, transferts de fonds ou nouveaux placements.",
                    ]
                },
                {
                    title: "Exemple :",
                    description: "Vente d’un bien, succession reçue, transfert d’argent vers un autre compte ou ouverture d’un nouveau placement.",
                },
                {
                    title: "Documents utiles :",
                    description: "Acte de vente, justificatif bancaire, document du notaire, courrier de succession, relevé de placement.",
                },
                {
                    title: "Erreur fréquente :",
                    description: "Cocher oui sans joindre les justificatifs demandés.",
                },
            ],
            screenshot: step3,
        },
        {
            number: 4,
            iconColor: "light-blue",
            title: "A — Les ressources",
            description: "Tous les revenus et allocations perçus. Montants annuels.",
            questions: [
                {
                    title: "À quoi ça sert ?",
                    description: "Cette partie sert à indiquer tous les revenus et ressources perçus par la personne protégée pendant l’année.",
                },
                {
                    title: "Comment remplir ?",
                    description: [
                        "Additionnez les montants réellement reçus sur l’année : salaires, pensions, allocations, revenus mobiliers, remboursements ou autres ressources.",
                        "Afin de vous faciliter le travail, vous pouvez reporter chaque mois sur un fichier Excel ou utiliser notre site.",
                    ]
                },
                {
                    title: "Exemple :",
                    description: "Allocation mensuelle x nombre de mois perçus = montant annuel à inscrire.",
                },
                {
                    title: "Documents utiles :",
                    description: "Bulletins de salaire, relevés CAF, relevés bancaires, avis d’imposition, relevés CPAM ou mutuelle.",
                },
                {
                    title: "Erreur fréquente :",
                    description: "Oublier les remboursements CPAM ou mutuelle, ou oublier un changement de montant en cours d’année.",
                },
            ],
            screenshot: step4,
            footer: {
                title: "Total A — ressources de l'année",
                conclusion: "→ à reporter dans la section C",
            },
        },
        {
            number: 5,
            iconColor: "light-blue",
            title: "B — Les dépenses",
            description: "Toutes les dépenses par catégorie. Justificatifs pour les dépenses dépassant le seuil fixé par le juge",
            warning: {
                warningColor: "danger",
                icon: "!",
                iconColor: "danger",
                title: "Règle clé : ",
                description: "tout achat dépassant le seuil fixé par le juge doit être justifié. Certains achats importants nécessitent une autorisation préalable du juge des tutelles.",
            },
            questions: [
                {
                    title: "À quoi ça sert ?",
                    description: "Cette partie sert à indiquer toutes les dépenses payées pour la personne protégée pendant l’année.",
                },
                {
                    title: "Comment remplir ?",
                    description: [
                        "Additionnez les dépenses par catégorie : vie courante, logement, assurances, santé, impôts, achats importants, travaux, emprunts ou autres dépenses.",
                        "Afin de vous faciliter le travail, vous pouvez reporter chaque mois sur un fichier Excel ou utiliser notre site.",
                    ]
                },
                {
                    title: "Exemple :",
                    description: "Téléphone mensuel x nombre de mois payés = montant annuel à inscrire.",
                },
                {
                    title: "Documents utiles :",
                    description: "Relevés bancaires, factures, quittances de loyer, avis d’imposition, justificatifs d’assurance.",
                },
                {
                    title: "Erreur fréquente :",
                    description: "Confondre une dépense réellement payée avec une dépense seulement prévue ou estimée.",
                },
            ],
            screenshot: step5,
            footer: {
                title: "Total B — dépenses de l'année",
                conclusion: "→ à reporter dans la section C",
            },
        },
        {
            number: 6,
            iconColor: "light-blue",
            title: "C — La balance",
            description: "Solde antérieur + A - B = Solde final à reporter l’année suivante.",
            band: {
                title: "Solde antérieur + A - B = Solde final",
                description: "Ce solde est reporté sur le prochain compte de gestion",
            },
            info: {
                title: "Solde antérieur",
                description: [
                    {
                        title: "1er compte : ",
                        text: "solde des comptes à l'inventaire de patrimoine remis au tribunal.",
                    },
                    {
                        title: "Comptes suivants : ",
                        text: "solde final du dernier compte approuvé par le greffe.",
                    },
                ]
            },
            explain: {
                title: "Solde final = A - B",
                description: "Si négatif → expliquer dans les Observations. Les dépenses ont dépassé les ressources.",
            },
            questions: [
                {
                    title: "À quoi ça sert ?",
                    description: "Cette partie sert à calculer le résultat de l’année à partir du solde de départ, des ressources et des dépenses.",
                },
                {
                    title: "Comment remplir ?",
                    description: [
                        "Indiquez le solde antérieur, ajoutez le total des ressources, retirez le total des dépenses, puis inscrivez le solde final.",
                    ]
                },
                {
                    title: "Exemple :",
                    description: "Solde antérieur + total A des ressources - total B des dépenses = solde final.",
                },
                {
                    title: "Documents utiles :",
                    description: "Dernier compte de gestion, inventaire de patrimoine, relevés bancaires.",
                },
                {
                    title: "Erreur fréquente :",
                    description: "Reporter un mauvais solde antérieur ou oublier de reprendre les totaux A et B.",
                },
            ],
            screenshot: step6,
        },
        {
            number: 7,
            iconColor: "light-blue",
            title: "D — Les comptes bancaires",
            description: "Situation de chaque compte. Joindre le dernier relevé.",
            questions: [
                {
                    title: "À quoi ça sert ?",
                    description: "Cette partie sert à présenter la situation de chaque compte bancaire ou livret ouvert au nom de la personne protégée.",
                },
                {
                    title: "Comment remplir ?",
                    description: [
                        "Pour chaque compte, indiquez le nom du compte, le numéro, l’agence, l’ancien solde, les recettes, les dépenses, les mouvements entre comptes et le solde final.",
                    ]
                },
                {
                    title: "Exemple :",
                    description: "Compte courant : ancien solde, total des recettes, total des dépenses, mouvements éventuels, puis solde final.",
                },
                {
                    title: "Documents utiles :",
                    description: "Derniers relevés bancaires de tous les comptes et attestations bancaires si demandées.",
                },
                {
                    title: "Erreur fréquente :",
                    description: "Oublier un livret, une assurance-vie, un compte peu utilisé ou un compte récemment ouvert.",
                },
            ],
            screenshot: step7,
        },
        {
            number: 8,
            iconColor: "green",
            title: "Pièces jointes",
            description: "Relevés bancaires, avis d’imposition, justificatifs de dépenses…",
            items: [
                "Relevés bancaires de tous les comptes",
                "Feuille d’imposition sur les revenus",
                "Avis de taxe foncière ou d’habitation",
                "Attestation bancaire de situation",
                "Dernier relevé assurance-vie",
                "Justificatifs des dépenses supérieures à 1 000 €",
            ],
            reminder: {
                title: "Rappel important : ",
                text: "tous les fonds et valeurs mobilières de la personne protégée doivent obligatoirement être déposés sur un compte ouvert à son nom, mentionnant la mesure de protection.",
            }
        },
        {
            number: 9,
            iconColor: "green",
            title: "Observations, date & signature",
            description: "Certifier le compte sincère et véritable. Signer et dater.",
            questions: [
                {
                    title: "À quoi ça sert ?",
                    description: "",
                },
                {
                    title: "Comment remplir ?",
                    description: [
                        "",
                    ]
                },
                {
                    title: "Exemple :",
                    description: "",
                },
                {
                    title: "Documents utiles :",
                    description: "",
                },
                {
                    title: "Erreur fréquente :",
                    description: "",
                },
            ],
            screenshot: "",
        },
    ],

};

const accountManagementGuideFooter = {
    title: "Checklist avant envoi au greffe",
    items: [
        "Rubriques A, B, C, D remplies",
        "Totaux cohérents avec les relevés",
        "Justificatifs joints pour les dépenses supérieures à 1 000 €",
        "Copies des relevés bancaires jointes",
        "Feuille d’imposition jointe",
        "Document signé et daté",
        "Envoyé avant la date limite",
        "Conserver une copie pour soi",
    ],
    leftText:
        "Protégéo — Projet d’aide à la gestion de la protection juridique des majeurs · Loriana Diano · 2025",
    rightText:
        "Document non contractuel — à titre indicatif uniquement",
};

export {
    accountManagementGuideHero,
    accountManagementGuideWarning,
    accountManagementGuideSteps,
    accountManagementGuideFooter,
};
const bankAccountsAccount = {
    monthNav : true,

    header : {
        title : "Situation des comptes et livret bancaires",

        description : {
            currentMonth : "Vous êtes en train de renseigner les données du mois de",
            annual: "Vous consultez les données de l’année",
            integration : "Ces informations seront automatiquement intégrées dans le compte de gestion annuel.",
            officialSection : "Ces informations correspondent à la SECTION D - SITUATION DES COMPTES ET LIVRETS BANCAIRES.",
        },

        notice : "Important : Les fonds et valeurs mobilières de la personne protégée doivent obligatoirement être déposés sur un compte ouvert à son nom et mentionnant la mesure de protection. Pour chaque compte bancaire, vous devrez joindre une copie du dernier relevé bancaire.",

        addLabel : "+ Ajouter un compte",
        addMovementLabel: "+ Ajouter un mouvement",
        variantBtn : "secondary",
    },

    mainStats : [
        {
            name : "totalBalance",
            title : "Solde total",
            description : "Fin",
            format : "currency",
            variant : "balance",
        },
        {
            name : "totalIncome",
            title : "Recettes cumulées",
            description : "Fin",
            format : "currency",
            variant : "balance",
        },
        {
            name : "totalExpenses",
            title : "Dépenses cumulées",
            description : "Fin",
            format : "currency",
            variant : "balance",
        },
    ],

    account : {
        editLabel : "Modifier",

        fields: [
            [
                {
                    name: "accountNumber",
                    label: "Numéro de compte",
                    format: "text",
                },
                {
                    name: "bankAgency",
                    label: "Nom de l'agence",
                    format: "text",
                },
            ],
            [
                {
                    name: "previousBalance",
                    label: "Ancien solde",
                    format: "currency",
                },
                {
                    name: "income",
                    label: "Recettes",
                    format: "currency",
                },
                {
                    name: "expenses",
                    label: "Dépenses",
                    format: "currency",
                },
            ],
            [
                {
                    name: "creditMovement",
                    label: "Mouv. crédit",
                    format: "currency",
                },
                {
                    name: "debitMovement",
                    label: "Mouv. débit",
                    format: "currency",
                },
                {
                    name: "balance",
                    label: "Solde",
                    format: "currency",
                },
            ],
        ],
    },

    other : {
        title : "Autres",
        addLabel : "+ Ajouter un autre organisme",
    },
};

export {
    bankAccountsAccount,
};
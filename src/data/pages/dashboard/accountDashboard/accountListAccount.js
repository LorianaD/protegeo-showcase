const accountListAccount = {
    title: "Historique des comptes de gestion",
    description: {
        history: "Consultez les comptes de gestion annuels de la personne protégée.",
    },

    button: {
        label: "Ajouter un compte de gestion",
        variant : "secondary",
    },

    columns: [
        {
            key: "year",
            label: "Année",
        },
        {
            key: "period",
            label: "Période",
        },
        {
            key: "status",
            label: "Statut",
            type: "badge",
            variantKey: "statusVariant",
        },
        {
            key: "sent_at",
            label: "Date d’envoi",
        },
        {
            key: "actions",
            label: "Actions",
            type: "button",
            variant: "primary"
        },
        {
            name: "edit",
            label: "Modifier",
            type: "button",
        },
    ],

    emptyMessage: "Aucun compte de gestion disponible.",
};

export {
    accountListAccount,
};
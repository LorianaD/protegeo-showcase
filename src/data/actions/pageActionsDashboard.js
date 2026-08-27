const pageActionsDashboard = {
    monthlyFolder: {
        name: "monthlyFolder",
        label: "Compte de gestion",
        variant: "page-action-left",
        to: "/dashboard/account/:reference",
    },

    history: {
        name: "history",
        label: "Historique",
        variant: "page-action-center",
        // to: "/dashboard/history",
    },

    generateAnnualAccount: {
        name: "generateAnnualAccount",
        label: "Générer le compte annuel",
        variant: "page-action-right",
        // to: "/dashboard/account/generate",
    },

    edit: {
        name: "edit",
        label: "Modifier les informations",
        variant: "page-action-left",
        to: "",
    },

    downloadPdf: {
        name: "downloadPdf",
        label: "Télécharger en PDF",
        variant: "page-action-right",
        href: "",
        download: true,
    },
};

export {
    pageActionsDashboard
};
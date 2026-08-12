const pageActionsDashboard = {
    monthlyFolder: {
        name: "monthlyFolder",
        label: "Classeur mensuel",
        type: "secondary",
        to: "/dashboard/monthly-folder",
    },

    history: {
        name: "history",
        label: "Historique",
        type: "primary",
        to: "/dashboard/history",
    },

    generateAnnualAccount: {
        name: "generateAnnualAccount",
        label: "Générer le compte annuel",
        type: "secondary",
        to: "/dashboard/account/generate",
    },

    edit: {
        name: "edit",
        label: "Modifier les informations",
        type: "secondary",
        to: "",
    },

    downloadPdf: {
        name: "downloadPdf",
        label: "Télécharger en PDF",
        type: "secondary",
        href: "",
        download: true,
    },
};

export {
    pageActionsDashboard
};
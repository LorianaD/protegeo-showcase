const quickActions = {
    addExpense: {
        label: "+ Ajouter une dépense",
        to: "/dashboard/expenses/new",
    },
    addResource: {
        label: "+ Ajouter une ressource",
        to: "/dashboard/resources/new",
    },
    generateProtectedList: {
        label: "+ Générer la liste des protégés",
        to: "/dashboard/protected/export",
    },
    generateAnnualAccount: {
        label: "+ Générer le compte annuel",
        to: "/dashboard/account/generate",
    },
};

export default quickActions;
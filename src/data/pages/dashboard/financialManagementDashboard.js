import { pageActionsDashboard, quickActionsDashboard } from "@/data/actions"
import { messages } from "@/data/form"

const financialManagementDashboard = {
    hero : {
        title : "Tableau de bord de la gestion annuelle",
        description : "Résumé clair de vos ressources, dépenses, alertes et actions importantes pour l’année sélectionnée.",
        option : {
            personName : "Veuillez selectionnez votre protégée",
            annual : "Sélectionner une année",
        },
    },

    stats : [
        {
            name: "annualResources",
            title : "Ressources annuelles",
            description : "Revenus saisis et validés",
            format: "currency",
            variant : "resources",
        },
        {
            name: "annualExpenditure",
            title : "Dépenses annuelles",
            description : "Charges et dépenses suivies",
            format: "currency",
            variant : "expenses",
        },
        {
            name: "estimatedBalance",
            title : "Solde estimé",
            description : "Équilibre budgétaire actuel",
            format: "currency",
            variant : "balance",
        },
        // {
        //     name: "missingDocuments",
        //     title : "Justificatifs manquants",
        //     description : "Documents à compléter",
        //     format: "number",
        // },
    ],

    charts : [
        {
            name: "monthlyEvolution",
            title: "Évolution mensuelle",
            labels: {
                resources: "Ressources",
                expenses: "Dépenses",
            },
            colors: {
                resources: "#4F9E49",
                expenses: "#C62828",
            },
        },
        {
            name: "expenseDistribution",
            title: "Répartition des dépenses",
            labels: {
                housing: "Logement",
                dailyLife: "Vie courante",
                insurance: "Assurances",
                health: "Santé",
                other: "Autres",
            },
            colors: [
                "#F4511E",
                "#FBBF24",
                "#43A047",
                "#1E88E5",
                "#8E24AA",
            ],
        },
    ],

    caseStatus: {
        title: "État du dossier",
        emptyMessage: "Aucune information disponible.",
    },

    quickActions: {
        title: "Actions rapides",
        items: [
            {
                ...quickActionsDashboard.addResource,
            },
            {
                ...quickActionsDashboard.addExpense,
            },
            // {
            //     ...quickActionsDashboard.generateAnnualAccount,
            // },
        ],
    },

    alerts: {
        title: "Alertes",
        emptyMessage: "Aucune alerte.",
    },

    actions: {
        title: "Actions",
        items: [
            {
                ...pageActionsDashboard.monthlyFolder,
            },
            {
                ...pageActionsDashboard.history,
            },
            {
                ...pageActionsDashboard.generateAnnualAccount,
            },
        ],
    },

    messages: {
        header: {
            title: "",
            ...messages.loading,
            error: "Le dossier est introuvable ou inaccessible.",
        }

    }
}

export {
    financialManagementDashboard,
}
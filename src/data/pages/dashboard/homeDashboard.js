import { quickActionsDashboard } from "@/data/actions";
import { protectedColumns } from "@/data/tables";

const homeDashboard = {
    hero: {
        title: "Tableau de bord",
        description: "Résumé clair de vos protégés, et la situation globale.",
    },

    stats: [
        {
            name: "protectedPersons",
            title: "Protégés suivis",
            description: "Majeurs protégés",
        },
        {
            name: "urgentDossiers",
            title: "Dossiers urgents",
            description: "Échéances proches",
        },
        {
            name: "managementAccounts",
            title: "Comptes à rendre",
            description: "Comptes",
        },
    ],

    alert: {
        title: "Alertes",
    },

    protected: {
        header: {
            title: "Protégés",
        },
        columns: protectedColumns,
        emptyMessage: "Aucun protégé enregistré",
    },

    deadline: {
        title: "Échéances",
        emptyMessage: "Aucune échéance à venir",
    },

    actions: {
        title: "Actions rapides",

        items: [
            {
                ...quickActionsDashboard.addProtectedPerson,
            },
            {
                ...quickActionsDashboard.generateProtectedPersons,
            },
            {
                ...quickActionsDashboard.generateAnnualAccount,
            },
        ],
    },
};

export {
    homeDashboard,
};
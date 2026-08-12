import { quickActionsDashboard } from "@/data/actions"
import { protectedColumns } from "@/data/tables"

const protectedPersonsDashboard = {
    hero : {
        title : "Mes protégés",
        description : "Résumé clair de vos protégés.",
    },

    protected : {
        columns: protectedColumns,
        emptyMessage: "Aucun protégés enregistré",
    },

    deadline: {
        title: "Échéances",
        emptyMessage: "Aucune échéance à venir",
    },

    actions: {
        title: "Actions rapides",

        items: [
            {
                ...quickActionsDashboard.addExpense,
            },
            {
                ...quickActionsDashboard.addResource,
            },
            {
                ...quickActionsDashboard.generateProtectedPersons,
            },
            {
                ...quickActionsDashboard.generateAnnualAccount,
            },
        ],
    },
}

export {
    protectedPersonsDashboard,
}
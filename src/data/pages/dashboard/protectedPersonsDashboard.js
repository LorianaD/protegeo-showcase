import { quickActionsDashboard } from "@/data/actions"
import { protectedColumns } from "@/data/tables"

const protectedPersonsDashboard = {
    hero : {
        title : "Mes protégés",
        description : "Résumé clair de vos protégés.",
    },

    add : {
        title : "Liste de mes protégés",
        actionLabel : {
            ...quickActionsDashboard.addProtectedPerson
        },
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
                ...quickActionsDashboard.addProtectedPerson,
            },
            // {
            //     ...quickActionsDashboard.generateProtectedPersons,
            // },
            // {
            //     ...quickActionsDashboard.generateAnnualAccount,
            // },
        ],
    },
}

export {
    protectedPersonsDashboard,
}
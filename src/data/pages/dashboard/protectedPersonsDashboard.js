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
}

export {
    protectedPersonsDashboard,
}
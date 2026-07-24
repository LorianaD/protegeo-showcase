import { protectedColumns } from "@/data/tables"

const homeDashboard = {
    hero : {
        title : "Tableau de bord",
        description : "Résumé clair de vos protégés, et la situation globale.",
    },
    stats : [
        {
            title : "Protégés suivis",
            data : "24",
            description : "Majeurs protégés",
        },
        {
            title : "Dossiers urgents",
            data : "3",
            description : "Documents",
        },
        {
            title : "Comptes à rendre",
            data : "5",
            description : "Comptes",
        },
        {
            title : "Justificatifs manquants",
            data : "3",
            description : "Documents à compléter",
        },
    ],
    alert : {
        title : "Alertes",
    },
    protected : {
        header: {
            title : "Protégés",
        },
        columns: protectedColumns,
        emptyMessage: "Aucun protégés enregistré",
    },
    deadline : {
        title : "Échéances",
    }
}

export {
    homeDashboard,
}
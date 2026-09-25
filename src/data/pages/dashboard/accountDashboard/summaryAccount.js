import { ExpensesStats, FinalBalanceStats, PreviousBalanceStats, ResourcesStats } from "@/assets"
import { cta, fields } from "@/data/form"

const summaryAccount = {
    header : {
        annualTitle: "Résumé annuel",
        monthlyTitle: "Résumé mensuel du mois de",

        addLabel : "+ Ajouter une opération",
        variantBtn : "secondary",
    },

    messages : {
        loading : "Chargement du compte de gestion...",
        error : "Impossible de charger le compte de gestion.",
    },

    stats : [
        {
            name : "previousBalance",
            title : "Solde antérieur",
            description : "Fin",
            format : "currency",
            img : PreviousBalanceStats,
            variant : "balance",
        },
        {
            name : "resources",
            title : "Ressources",
            description : "Fin",
            format : "currency",
            img : ResourcesStats,
            variant : "resources",
        },
        {
            name : "expenses",
            title : "Dépenses",
            description : "Fin",
            format : "currency",
            img : ExpensesStats,
            variant : "expenses",
        },
        {
            name : "finalBalance",
            title : "Solde final",
            description : "Fin",
            format : "currency",
            img : FinalBalanceStats,
            variant : "balance",
        },
    ],

    status : [
        {
            name : "year",
            title : "Année",
            format : "number",
        },
        {
            name : "status",
            title : "Statut",
            format : "text",
        },
        {
            name : "sentAt",
            title : "Date d'envoi",
            format : "date",
            emptyValue : "Non envoyé",
        },
    ],

    resourcesSection : {
        title : "A - Ressources",

        addLabel : "+ Ajouter une ressource",
        variantBtn : "edit",

        columns : [
            {
                name : "label",
                label : "Ressources",
            },
            {
                name : "amount",
                label : "Montant",
            },
        ],

        items : [
            {
                name : "income",
                label : "Revenus",
                format : "currency",
            },
            {
                name : "allowances",
                label : "Allocations",
                format : "currency",
            },
            {
                name : "investment_income",
                label : "Revenus mobiliers",
                format : "currency",
            },
            {
                name : "other_resources",
                label : "Autres ressources",
                format : "currency",
            },
        ],

        total : {
            name : "totalResources",
            label : "Total des ressources",
            format : "currency",
        },

        emptyMessage : "Aucune transaction enregistrer.",
    },

    expensesSection : {
        title : "B - Dépenses",

        addLabel : "+ Ajouter une dépense",
        variantBtn : "edit",

        columns : [
            {
                name : "label",
                label : "Dépenses",
            },
            {
                name : "amount",
                label : "Montant",
            },
        ],

        items : [
            {
                name : "current_expenses",
                label : "Vie courante",
                format : "currency",
            },
            {
                name : "housing",
                label : "Logement",
                format : "currency",
            },
            {
                name : "insurance",
                label : "Assurances",
                format : "currency",
            },
            {
                name : "home_care",
                label : "Maintien à domicile",
                format : "currency",
            },
            {
                name : "taxes",
                label : "Impôts",
                format : "currency",
            },
            {
                name : "major_purchases",
                label : "Achats importants",
                format : "currency",
            },
            {
                name : "investments",
                label : "Placements",
                format : "currency",
            },
            {
                name : "repairs",
                label : "Travaux",
                format : "currency",
            },
            {
                name : "loans",
                label : "Emprunts",
                format : "currency",
            },
            {
                name : "other_expenses",
                label : "Autres dépenses",
                format : "currency",
            },
        ],

        total : {
            name : "totalExpenses",
            label : "Total des dépenses",
            format : "currency",
        },

        emptyMessage : "Aucune transaction enregistrer.",
    },

    bankAccountsSection : {
        title : "D - Comptes bancaires",

        columns : [
            {
                name : "accountLabel",
                label : "Nom du compte",
                format : "text",
            },
            {
                name : "accountNumber",
                label : "Numéro",
                type : "truncate",
                format : "text",
            },
            {
                name : "bankName",
                label : "Banque/agence",
                format : "text",
            },
            {
                name : "previousBalance",
                label : "Ancien solde",
                format : "currency",
            },
            {
                name : "resources",
                label : "Recettes",
                format : "currency",
            },
            {
                name : "expenses",
                label : "Dépenses",
                format : "currency",
            },
            {
                name : "movements",
                label : "Mouvements",
                format : "currency",
            },
            {
                name : "balance",
                label : "Solde",
                format : "currency",
            },
        ],

        total : {
            name : "totalBalance",
            label : "Total",
            format : "currency",
        },

        emptyMessage : "Aucun compte enregistré.",
    },

    notes : {
        title : "Observations",
        
        field: {
            ...fields.notes,
        },

        action : {
            label : "Modifier",
        },

        footer : {
            btn_cancel_label : cta.cancel,
            btn_recorded_label : cta.recorded,
        },
    },
}

export {
    summaryAccount
}
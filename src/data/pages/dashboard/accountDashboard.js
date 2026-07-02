import { BankAccount, BankAccountGray, Expenses, ExpensesGray, Resources, ResourcesGray, SummaryAccount, SummaryAccountGray } from "@/assets"

const accountDashboard = {
    hero : {
        title : "Compte de gestion annuel",
        description : "Renseignez les ressources, dépenses, soldes et comptes bancaires pour préparer le document annuel.",
        option : {
            personName : "Céline DIANO",
            annual : "2025",
        },
    },

    nav : [
            {
                link_icon : {
                    default : SummaryAccountGray,
                    active : SummaryAccount,
                },
                link_label : "Résumé annuel",
                link_url : "",
            },
            {
                link_icon : {
                    default : ResourcesGray,
                    active : Resources,
                },
                link_label : "Ressources",
                link_url : "",
            },
            {
                link_icon : {
                    default : ExpensesGray,
                    active : Expenses,
                },
                link_label : "Dépenses",
                link_url : "",
            },
            {
                link_icon : {
                    default : BankAccountGray,
                    active : BankAccount,
                },
                link_label : "Comptes bancaire",
                link_url : "",
            },
        ],
}

export {
    accountDashboard,
}
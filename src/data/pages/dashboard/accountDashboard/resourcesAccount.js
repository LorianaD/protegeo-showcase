import { AllowanceStats, EarningStats, FinancialProfitStats, OtherResourceStats } from "@/assets"

const resourcesAccount = {
    header : {
        title : "Ressources",

        description : {
            currentMonth : "Vous êtes en train de renseigner les données du mois de",
            annual: "Vous consultez les données de l’année",
            integration : "Ces informations seront automatiquement intégrées dans le compte de gestion annuel.",
            officialSection : "Ces informations correspondent à la SECTION A - RESSOURCES DU COMPTE DE GESTION OFFICIEL.",
        },

        addLabel : "+ Ajouter une ressource",
        variantBtn : "secondary",
    },

    mainStats : [
        {
            name : "previousMonthResources",
            title : "Ressources du mois précédent",
            description : "Fin",
            format : "currency",
            variant: "resources",
        },
        {
            name : "currentMonthResources",
            title : "Ressources du mois en cours",
            description : "Fin",
            format : "currency",
            variant: "resources",
        },
        {
            name : "finalBalance",
            title : "Solde final",
            description : "Fin",
            format : "currency",
            variant: "resources",
        },
    ],

    categoryStats : [
        {
            name : "income",
            title : "Revenus",
            description : "Fin",
            format : "currency",
            img : EarningStats,
            variant: "resources",
        },
        {
            name : "allowances",
            title : "Allocations",
            description : "Fin",
            format : "currency",
            img : AllowanceStats,
            variant: "resources",
        },
        {
            name : "investment_income",
            title : "Revenus mobiliers",
            description : "Fin",
            format : "currency",
            img : FinancialProfitStats,
            variant: "resources",
        },
        {
            name : "other_resources",
            title : "Autres ressources",
            description : "Fin",
            format : "currency",
            img : OtherResourceStats,
            variant: "resources",
        },
    ],

    sections : [
        {
            name : "income",
            title : "Revenus",
            actionLabel : "Modifier",

            table : {
                columns : [
                    {
                        name : "label",
                        label : "Les revenus",
                    },
                    {
                        name : "amount",
                        label : "Montant en euros",
                        format : "currency",
                    },
                ],

                items : [
                    {
                        name : "salary",
                        label : "Salaire",
                    },
                    {
                        name : "retirement_pension",
                        label : "Pension de retraite",
                    },
                    {
                        name : "disability_pension",
                        label : "Pension invalidité",
                    },
                    {
                        name : "alimony",
                        label : "Pension alimentaire",
                    },
                    {
                        name : "life_annuity",
                        label : "Rente viagère",
                    },
                    {
                        name : "rental_income",
                        label : "Revenus locatifs",
                    },
                ],

                addLabel : "+ ajouter",

                total : {
                    name : "totalEarnings",
                    label : "Total des revenus",
                    format : "currency",
                },
            },
        },
        {
            name : "allowances",
            title : "Allocations",
            actionLabel : "Modifier",

            table : {
                columns : [
                    {
                        name : "label",
                        label : "Les allocations",
                    },
                    {
                        name : "amount",
                        label : "Montant en euros",
                        format : "currency",
                    },
                ],

                items : [
                    {
                        name : "disabled_adult_allowance",
                        label : "Allocation adulte handicapé (A.A.H.)",
                    },
                    {
                        name : "family_allowance",
                        label : "Allocations familiales",
                    },
                    {
                        name : "housing_allowance",
                        label : "Allocation logement",
                    },
                    {
                        name : "unemployment_allowance",
                        label : "Allocation chômage",
                    },
                    {
                        name : "minimum_income",
                        label : "Revenu Solidaire d'insertion (R.S.A)",
                    },
                    // {
                    //     name : "otherAllowance",
                    //     label : "Autres (précisez)",
                    // },
                ],

                addLabel : "- ajouter",

                total : {
                    name : "totalAllowances",
                    label : "Total des allocations",
                    format : "currency",
                },
            },
        },
        {
            name : "investment_income",
            title : "Revenus mobiliers",
            actionLabel : "Modifier",

            table : {
                columns : [
                    {
                        name : "label",
                        label : "Les revenus mobiliers",
                    },
                    {
                        name : "amount",
                        label : "Montant en euros",
                        format : "currency",
                    },
                ],

                items : [
                    {
                        name : "interestAndDividends",
                        label : "Montant des intérêts ou dividendes versés sur les comptes bancaires",
                    },
                ],

                total : {
                    name : "totalFinancialIncome",
                    label : "Total des revenus mobiliers",
                    format : "currency",
                },
            },
        },
        {
            name : "other_resources",
            title : "Autres ressources",
            actionLabel : "Modifier",

            table : {
                columns : [
                    {
                        name : "label",
                        label : "Les autres ressources",
                    },
                    {
                        name : "amount",
                        label : "Montant en euros",
                        format : "currency",
                    },
                ],

                items : [
                    {
                        name : "real_estate_sale",
                        label : "Vente d'un bien immobilier : (ex : appartement, maison)",
                    },
                    {
                        name : "movable_property_sale",
                        label : "Vente d'un bien mobilier : (ex : voiture, meuble de valeur)",
                    },
                    {
                        name : "healthcare_reimbursement",
                        label : "Remboursements C.P.A.M. ou mutuelle",
                    },
                    {
                        name : "other_resource",
                        label : "Autres (précisez)",
                    },
                ],

                addLabel : "- ajouter",

                total : {
                    name : "totalOtherResources",
                    label : "Total des autres ressources",
                    format : "currency",
                },
            },
        },
    ],
}

export {
    resourcesAccount,
}
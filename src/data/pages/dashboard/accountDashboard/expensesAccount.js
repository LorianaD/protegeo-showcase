import { DailyLivingStats, HomeCareStats, HousingStats, InsuranceStats, InvestmentStats, LoanStats, MajorPurchaseStats, OtherExpensesStats, TaxStats, WorkStats } from "@/assets";

const expensesAccount = {
    header : {
        title : "Dépenses",

        description : {
            currentMonth : "Vous êtes en train de renseigner les données du mois de",
            annual: "Vous consultez les données de l’année",
            integration : "Ces informations seront automatiquement intégrées dans le compte de gestion annuel.",
            officialSection : "Ces informations correspondent à la SECTION B - DÉPENSES DU COMPTE DE GESTION OFFICIEL.",
        },

        addLabel : "+ Ajouter une dépense",
        variantBtn : "secondary",
    },

    mainStats : [
        {
            name : "previous_month_expenses",
            title : "Dépenses du mois précédent",
            description : "Fin",
            format : "currency",
            variant: "expenses",
        },
        {
            name : "current_month_expenses",
            title : "Dépenses du mois en cours",
            description : "Fin",
            format : "currency",
            variant: "expenses",
        },
        {
            name : "final_balance",
            title : "Solde final",
            description : "Fin",
            format : "currency",
            variant: "expenses",
        },
    ],

    categoryStats : [
        {
            name : "daily_living",
            title : "Dépenses de la vie courante",
            description : "Fin",
            format : "currency",
            img : DailyLivingStats,
            variant: "expenses",
        },
        {
            name : "housing",
            title : "Logement",
            description : "Fin",
            format : "currency",
            img : HousingStats,
            variant: "expenses",
        },
        {
            name : "insurance",
            title : "Frais d'assurance",
            description : "Fin",
            format : "currency",
            img : InsuranceStats,
            variant: "expenses",
        },
        {
            name : "home_care",
            title : "Frais de maintien à domicile",
            description : "Fin",
            format : "currency",
            img : HomeCareStats,
            variant: "expenses",
        },
        {
            name : "taxes",
            title : "Impôts et taxes",
            description : "Fin",
            format : "currency",
            img : TaxStats,
            variant: "expenses",
        },
        {
            name : "major_purchases",
            title : "Achats importants",
            description : "Fin",
            format : "currency",
            img : MajorPurchaseStats,
            variant: "expenses",
        },
        {
            name : "investments",
            title : "Placements",
            description : "Fin",
            format : "currency",
            img : InvestmentStats,
            variant: "expenses",
        },
        {
            name : "works",
            title : "Travaux divers et réparations",
            description : "Fin",
            format : "currency",
            img : WorkStats,
            variant: "expenses",
        },
        {
            name : "loans",
            title : "Emprunts en cours",
            description : "Fin",
            format : "currency",
            img : LoanStats,
            variant: "expenses",
        },
        {
            name : "other_expenses",
            title : "Autres dépenses",
            description : "Fin",
            format : "currency",
            img : OtherExpensesStats,
            variant: "expenses",
        },
    ],

    sections : [
        {
            name : "daily_living",
            title : "Dépenses de la vie courante",
            actionLabel : "Modifier",
            actionVariant : "edit",

            table: {
                columns: [
                    {
                        name: "label",
                        label: "Les dépenses de la vie courante",
                    },
                    {
                        name: "amount",
                        label: "Montant annuel en euros",
                        format: "currency",
                    },
                ],

                items: [
                    {
                        name: "clothing",
                        label: "Habillement",
                    },
                    {
                        name: "food",
                        label: "Alimentation",
                    },
                ],

                addLabel: "- ajouter",

                total: {
                    name: "total_daily_living",
                    label: "Total des dépenses de la vie courante",
                    format: "currency",
                },
            },
        },
        {
            name : "housing",
            title : "Logement",
            actionLabel : "Modifier",

            table : {
                columns: [
                    {
                        name: "label",
                        label: "Le logement",
                    },
                    {
                        name: "amount",
                        label: "Montant annuel en euros",
                        format: "currency",
                    },
                ],

                items: [
                    {
                        name: "rent",
                        label: "Loyer",
                    },
                    {
                        name: "accommodation",
                        label: "Frais d'hébergement",
                    },
                    {
                        name: "electricity",
                        label: "Électricité",
                    },
                    {
                        name: "gas",
                        label: "Gaz",
                    },
                    {
                        name: "water",
                        label: "Eau",
                    },
                    {
                        name: "telephone",
                        label: "Téléphone",
                    },
                ],

                total : {
                    name: "totalHousing",
                    label: "Total des dépenses logement",
                    format: "currency",
                },
            },
        },
        {
            name : "insurance",
            title : "Frais d'assurance",
            actionLabel : "Modifier",

            table : {
                columns: [
                    {
                        name: "label",
                        label: "Les frais d'assurance",
                    },
                    {
                        name: "amount",
                        label: "Montant annuel en euros",
                        format: "currency",
                    },
                ],

                items: [
                    {
                        name: "home_insurance",
                        label: "Habitation",
                    },
                    {
                        name: "car_insurance",
                        label: "Automobile",
                    },
                    {
                        name: "personal_insurance",
                        label: "Assurance personnelle",
                    },
                    {
                        name: "other_insurance",
                        label: "Autres (précisez)",
                    },
                ],

                addLabel : "- ajouter",

                total: {
                    name: "totalInsurance",
                    label: "Total des frais d'assurance",
                    format: "currency",
                },
            },
        },
        {
            name : "home_care",
            title : "Frais de maintien à domicile",
            actionLabel : "Modifier",

            table : {
                columns: [
                    {
                        name: "label",
                        label: "Les frais de maintien à domicile",
                    },
                    {
                        name: "amount",
                        label: "Montant annuel en euros",
                        format: "currency",
                    },
                ],

                items: [
                    {
                        name: "housekeeping",
                        label: "Aide ménagère",
                    },
                    {
                        name: "household_staff",
                        label: "Personnel de maison",
                    },
                    {
                        name: "other_home_care",
                        label: "Autres (précisez)",
                    },
                ],

                addLabel : "- ajouter",

                total: {
                    name: "totalHomeCare",
                    label: "Total des frais de maintien à domicile",
                    format: "currency",
                },
            },
        },
        {
            name : "taxes",
            title : "Impôts et taxes",
            actionLabel : "Modifier",

            table : {
                columns: [
                    {
                        name: "label",
                        label: "Les impôts et taxes",
                    },
                    {
                        name: "amount",
                        label: "Montant annuel en euros",
                        format: "currency",
                    },
                ],

                items: [
                    {
                        name: "income_tax",
                        label: "Impôt sur les revenus",
                    },
                    {
                        name: "housing_tax",
                        label: "Taxe d'habitation",
                    },
                    {
                        name: "property_tax",
                        label: "Taxe foncière",
                    },
                    {
                        name: "television_fee",
                        label: "Redevance télévision",
                    },
                ],

                total: {
                    name: "totalTaxes",
                    label: "Total des impôts et taxes",
                    format: "currency",
                },
            },
        },
        {
            name : "major_purchases",
            title : "Achats importants",
            actionLabel : "Modifier",

            table : {
                columns: [
                    {
                        name: "label",
                        label: "Les achats importants",
                    },
                    {
                        name: "amount",
                        label: "Montant annuel en euros",
                        format: "currency",
                    },
                ],

                items: [
                    {
                        name: "property_purchase",
                        label: "Immeuble",
                    },
                    {
                        name: "vehicle_purchase",
                        label: "Automobile",
                    },
                    {
                        name: "securities_purchase",
                        label: "Valeurs mobilières (ex : bijoux...)",
                    },
                    {
                        name: "other_major_purchase",
                        label: "Autres (précisez)",
                    },
                ],

                addLabel : "- ajouter",

                total: {
                    name: "totalMajorPurchases",
                    label: "Total des achats importants",
                    format: "currency",
                },
            },
        },
        {
            name : "investments",
            title : "Placements",
            actionLabel : "Modifier",

            table : {
                columns: [
                    {
                        name: "label",
                        label: "Les placements",
                    },
                    {
                        name: "amount",
                        label: "Montant annuel en euros",
                        format: "currency",
                    },
                ],

                items: [
                    {
                        name: "investment",
                        label: "Placements (actions, SICAV, livret, etc.)",
                    },
                ],

                total: {
                    name: "totalInvestments",
                    label: "Total des placements",
                    format: "currency",
                },
            },
        },
        {
            name : "works",
            title : "Travaux divers et réparations",
            actionLabel : "Modifier",

            table : {
                columns: [
                    {
                        name: "label",
                        label: "Les travaux divers et réparations",
                    },
                    {
                        name: "amount",
                        label: "Montant annuel en euros",
                        format: "currency",
                    },
                ],

                items: [
                    {
                        name: "property_improvement",
                        label: "Travaux d'aménagement immobilier",
                    },
                    {
                        name: "maintenance_repairs",
                        label: "Réparations d'entretien",
                    },
                    {
                        name: "other_works",
                        label: "Autres (précisez)",
                    },
                ],

                addLabel : "- ajouter",

                total: {
                    name: "totalWorks",
                    label: "Total des travaux divers et réparations",
                    format: "currency",
                },
            },
        },
        {
            name : "loans",
            title : "Emprunts en cours",
            actionLabel : "Modifier",

            table : {
                columns: [
                    {
                        name: "label",
                        label: "Les emprunts en cours",
                    },
                    {
                        name: "amount",
                        label: "Montant annuel en euros",
                        format: "currency",
                    },
                ],

                items: [
                    {
                        name: "privateLoanPayments",
                        label: "Prélèvements mensuels liés aux emprunts privés",
                    },
                ],

                addLabel : "- ajouter",

                total: {
                    name: "totalLoans",
                    label: "Total des emprunts en cours",
                    format: "currency",
                },
            },
        },
        {
            name : "otherExpenses",
            title : "Autres dépenses",
            actionLabel : "Modifier",

            table : {
                columns: [
                    {
                        name: "label",
                        label: "Autres dépenses",
                    },
                    {
                        name: "amount",
                        label: "Montant annuel en euros",
                        format: "currency",
                    },
                ],

                items: [
                    {
                        name: "guardianFees",
                        label: "Émoluments du gérant privé de la mesure de protection",
                    },
                    {
                        name: "otherExpense",
                        label: "Autres (précisez)",
                    },
                ],

                addLabel : "+ ajouter",

                total: {
                    name: "totalOtherExpenses",
                    label: "Total des autres dépenses",
                    format: "currency",
                },
            },
        },
    ],
};

export {
    expensesAccount,
}
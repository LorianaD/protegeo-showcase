import { AllowanceStats, BankAccount, BankAccountGray, DailyLivingStats, EarningStats, Expenses, ExpensesGray, ExpensesStats, FinalBalanceStats, FinancialProfitStats, HomeCareStats, HousingStats, InsuranceStats, InvestmentStats, LoanStats, MajorPurchaseStats, OtherExpensesStats, OtherResourceStats, PreviousBalanceStats, Resources, ResourcesGray, ResourcesStats, SummaryAccount, SummaryAccountGray, TaxStats, WorkStats } from "@/assets";
import { pageActionsDashboard } from "@/data/actions";
import { cta, messages } from "@/data/form";

const accountDashboard = {
    hero : {
        title : "Compte de gestion annuel",
        description : "Renseignez les ressources, dépenses, soldes et comptes bancaires pour préparer le document annuel.",
        option : {
            personName : "Veuillez sélectionner une personne protégée",
            annual : "Sélectionner une année",
        },
    },

    nav : [
        {
            name : "summaryAccount",
            link_icon : {
                default : SummaryAccountGray,
                active : SummaryAccount,
            },
            link_label : "Résumé annuel",
            link_url : "/dashboard/account/:reference",
        },
        {
            name : "resources",
            link_icon : {
                default : ResourcesGray,
                active : Resources,
            },
            link_label : "Ressources",
            link_url : "",
        },
        {
            name : "expenses",
            link_icon : {
                default : ExpensesGray,
                active : Expenses,
            },
            link_label : "Dépenses",
            link_url : "",
        },
        {
            name : "bankAccounts",
            link_icon : {
                default : BankAccountGray,
                active : BankAccount,
            },
            link_label : "Comptes bancaire",
            link_url : "",
        },
    ],

    summaryAccount : {
        header : {
            title : "Résumé annuel",
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

            items : [
                {
                    name : "salary",
                    label : "Salaire",
                    format : "currency",
                },
                {
                    name : "allowances",
                    label : "Allocations",
                    format : "currency",
                },
                {
                    name : "financialIncome",
                    label : "Revenus mobiliers",
                    format : "currency",
                },
                {
                    name : "otherResources",
                    label : "Autres ressources",
                    format : "currency",
                },
            ],

            total : {
                name : "totalResources",
                label : "Total des ressources",
                format : "currency",
            },
        },

        expensesSection : {
            title : "B - Dépenses",

            items : [
                {
                    name : "dailyLiving",
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
                    name : "homeCare",
                    label : "Maintien à domicile",
                    format : "currency",
                },
                {
                    name : "taxes",
                    label : "Impôts",
                    format : "currency",
                },
                {
                    name : "majorPurchases",
                    label : "Achats importants",
                    format : "currency",
                },
                {
                    name : "investments",
                    label : "Placements",
                    format : "currency",
                },
                {
                    name : "works",
                    label : "Travaux",
                    format : "currency",
                },
                {
                    name : "loans",
                    label : "Emprunts",
                    format : "currency",
                },
                {
                    name : "otherExpenses",
                    label : "Autres dépenses",
                    format : "currency",
                },
            ],

            total : {
                name : "totalExpenses",
                label : "Total des dépenses",
                format : "currency",
            },
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
        },

        notes : {
            title : "Observations",
            label : "Observations générales",
        },
    },

    monthNav : {
        label : "Sélectionner le mois",
    },

    resources : {
        header : {
            title : "Ressources",

            description : {
                currentMonth : "Vous êtes en train de renseigner les données du mois de",
                integration : "Ces informations seront automatiquement intégrées dans le compte de gestion annuel.",
                officialSection : "Ces informations correspondent à la SECTION A - RESSOURCES DU COMPTE DE GESTION OFFICIEL.",
            },
        },

        mainStats : [
            {
                name : "previousMonthResources",
                title : "Ressources du mois précédent",
                description : "Fin",
                format : "currency",
            },
            {
                name : "currentMonthResources",
                title : "Ressources du mois en cours",
                description : "Fin",
                format : "currency",
            },
            {
                name : "finalBalance",
                title : "Solde final",
                description : "Fin",
                format : "currency",
            },
        ],

        categoryStats : [
            {
                name : "earnings",
                title : "Revenus",
                description : "Fin",
                format : "currency",
                img : EarningStats,
            },
            {
                name : "allowances",
                title : "Allocations",
                description : "Fin",
                format : "currency",
                img : AllowanceStats,
            },
            {
                name : "financialIncome",
                title : "Revenus mobiliers",
                description : "Fin",
                format : "currency",
                img : FinancialProfitStats,
            },
            {
                name : "otherResources",
                title : "Autres ressources",
                description : "Fin",
                format : "currency",
                img : OtherResourceStats,
            },
        ],

        sections : [
            {
                name : "earnings",
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
                            name : "retirementPension",
                            label : "Pension de retraite",
                        },
                        {
                            name : "disabilityPension",
                            label : "Pension invalidité",
                        },
                        {
                            name : "alimony",
                            label : "Pension alimentaire",
                        },
                        {
                            name : "lifeAnnuity",
                            label : "Rente viagère",
                        },
                        {
                            name : "rentalIncome",
                            label : "Revenus locatifs",
                        },
                    ],

                    addLabel : "- ajouter",

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
                            name : "aah",
                            label : "Allocation adulte handicapé (A.A.H.)",
                        },
                        {
                            name : "familyAllowances",
                            label : "Allocations familiales",
                        },
                        {
                            name : "housingAllowance",
                            label : "Allocation logement",
                        },
                        {
                            name : "unemploymentAllowance",
                            label : "Allocation chômage",
                        },
                        {
                            name : "minimumIncome",
                            label : "Revenu minimum d'insertion (R.M.I)",
                        },
                        {
                            name : "otherAllowance",
                            label : "Autres (précisez)",
                        },
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
                name : "financialIncome",
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
                name : "otherResources",
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
                            name : "realEstateSale",
                            label : "Vente d'un bien immobilier : (ex : appartement, maison)",
                        },
                        {
                            name : "movablePropertySale",
                            label : "Vente d'un bien mobilier : (ex : voiture, meuble de valeur)",
                        },
                        {
                            name : "healthRefund",
                            label : "Remboursements C.P.A.M. ou mutuelle",
                        },
                        {
                            name : "otherResource",
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
    },

    expenses : {
        header : {
            title : "Les dépenses",

            description : {
                currentMonth : "Vous êtes en train de renseigner les données du mois de",
                integration : "Ces informations seront automatiquement intégrées dans le compte de gestion annuel.",
                officialSection : "Ces informations correspondent à la SECTION B - DÉPENSES DU COMPTE DE GESTION OFFICIEL.",
            },
        },

        mainStats : [
            {
                name : "previousMonthExpenses",
                title : "Dépenses du mois précédent",
                description : "Fin",
                format : "currency",
            },
            {
                name : "currentMonthExpenses",
                title : "Dépenses du mois en cours",
                description : "Fin",
                format : "currency",
            },
            {
                name : "finalBalance",
                title : "Solde final",
                description : "Fin",
                format : "currency",
            },
        ],

        categoryStats : [
            {
                name : "dailyLiving",
                title : "Dépenses de la vie courante",
                description : "Fin",
                format : "currency",
                img : DailyLivingStats,
            },
            {
                name : "housing",
                title : "Logement",
                description : "Fin",
                format : "currency",
                img : HousingStats,
            },
            {
                name : "insurance",
                title : "Frais d'assurance",
                description : "Fin",
                format : "currency",
                img : InsuranceStats,
            },
            {
                name : "homeCare",
                title : "Frais de maintien à domicile",
                description : "Fin",
                format : "currency",
                img : HomeCareStats,
            },
            {
                name : "taxes",
                title : "Impôts et taxes",
                description : "Fin",
                format : "currency",
                img : TaxStats,
            },
            {
                name : "majorPurchases",
                title : "Achats importants",
                description : "Fin",
                format : "currency",
                img : MajorPurchaseStats,
            },
            {
                name : "investments",
                title : "Placements",
                description : "Fin",
                format : "currency",
                img : InvestmentStats,
            },
            {
                name : "works",
                title : "Travaux divers et réparations",
                description : "Fin",
                format : "currency",
                img : WorkStats,
            },
            {
                name : "loans",
                title : "Emprunts en cours",
                description : "Fin",
                format : "currency",
                img : LoanStats,
            },
            {
                name : "otherExpenses",
                title : "Autres dépenses",
                description : "Fin",
                format : "currency",
                img : OtherExpensesStats,
            },
        ],

        sections : [
            {
                name : "dailyLiving",
                title : "Dépenses de la vie courante",
                actionLabel : "Modifier",

                table : {
                    title : "Les dépenses de la vie courante",

                    items : [
                        "Habillement",
                        "Alimentation",
                        "Loisirs - vacances",
                        "Frais médicaux",
                        "Frais de scolarité",
                        "Argent de poche",
                    ],

                    addLabel : "- ajouter",

                    total : "Total des dépenses de la vie courante",
                },
            },
            {
                name : "housing",
                title : "Logement",
                actionLabel : "Modifier",

                table : {
                    title : "Le logement",

                    items : [
                        "Loyer",
                        "Frais d'hébergement",
                        "Électricité",
                        "Gaz",
                        "Eau",
                        "Téléphone",
                    ],

                    total : "Total des dépenses logement",
                },
            },
            {
                name : "insurance",
                title : "Frais d'assurance",
                actionLabel : "Modifier",

                table : {
                    title : "Les frais d'assurance",

                    items : [
                        "Habitation",
                        "Automobile",
                        "Assurance personnelle",
                        "Autres (précisez)",
                    ],

                    addLabel : "- ajouter",

                    total : "Total des frais d'assurance",
                },
            },
            {
                name : "homeCare",
                title : "Frais de maintien à domicile",
                actionLabel : "Modifier",

                table : {
                    title : "Les frais de maintien à domicile",

                    items : [
                        "Aide ménagère",
                        "Personnel de maison",
                        "Autres (précisez)",
                    ],

                    addLabel : "- ajouter",

                    total : "Total des frais de maintien à domicile",
                },
            },
            {
                name : "taxes",
                title : "Impôts et taxes",
                actionLabel : "Modifier",

                table : {
                    title : "Les impôts et taxes",

                    items : [
                        "Impôt sur les revenus",
                        "Taxe d'habitation",
                        "Taxe foncière",
                        "Redevance télévision",
                    ],

                    total : "Total des impôts et taxes",
                },
            },
            {
                name : "majorPurchases",
                title : "Achats importants",
                actionLabel : "Modifier",

                table : {
                    title : "Les achats importants",

                    items : [
                        "Immeuble",
                        "Automobile",
                        "Valeurs mobilières (ex : bijoux...)",
                        "Autres (précisez)",
                    ],

                    addLabel : "- ajouter",

                    total : "Total des achats importants",
                },
            },
            {
                name : "investments",
                title : "Placements",
                actionLabel : "Modifier",

                table : {
                    title : "Les placements",

                    items : [
                        "Placements (actions, SICAV, livret, etc.)",
                    ],

                    total : "Total des placements",
                },
            },
            {
                name : "works",
                title : "Travaux divers et réparations",
                actionLabel : "Modifier",

                table : {
                    title : "Les travaux divers et réparations",

                    items : [
                        "Travaux d'aménagement immobilier",
                        "Réparations d'entretien",
                        "Autres (précisez)",
                    ],

                    addLabel : "- ajouter",

                    total : "Total des travaux divers et réparations",
                },
            },
            {
                name : "loans",
                title : "Emprunts en cours",
                actionLabel : "Modifier",

                table : {
                    title : "Les emprunts en cours",

                    items : [
                        "Prélèvements mensuels liés aux emprunts privés",
                    ],

                    addLabel : "- ajouter",

                    total : "Total des emprunts en cours",
                },
            },
            {
                name : "otherExpenses",
                title : "Autres dépenses",
                actionLabel : "Modifier",

                table : {
                    title : "Autres dépenses",

                    items : [
                        "Émoluments du gérant privé de la mesure de protection",
                        "Autres (précisez)",
                    ],

                    addLabel : "- ajouter",

                    total : "Total des autres dépenses",
                },
            },
        ],
    },

    bankAccounts : {
        monthNav : true,

        header : {
            title : "Situation des comptes et livret bancaires",

            description : {
                currentMonth : "Vous êtes en train de renseigner les données du mois de",
                integration : "Ces informations seront automatiquement intégrées dans le compte de gestion annuel.",
                officialSection : "Ces informations correspondent à la SECTION D - SITUATION DES COMPTES ET LIVRETS BANCAIRES.",
            },

            notice : "Les fonds et valeurs mobilières de la personne protégée doivent obligatoirement être déposés sur un compte ouvert à son nom et mentionnant la mesure de protection. Pour chaque compte bancaire, vous devrez joindre une copie du dernier relevé bancaire.",
        },

        mainStats : [
            {
                name : "totalBalance",
                title : "Solde total",
                description : "Fin",
                format : "currency",
            },
            {
                name : "totalIncome",
                title : "Recettes cumulées",
                description : "Fin",
                format : "currency",
            },
            {
                name : "totalExpenses",
                title : "Dépenses cumulées",
                description : "Fin",
                format : "currency",
            },
        ],

        account : {
            actionLabel : "Modifier",

            fields : [
                {
                    name : "accountNumber",
                    label : "Numéro de compte",
                    format : "text",
                },
                {
                    name : "agencyName",
                    label : "Nom de l'agence",
                    format : "text",
                },
                {
                    name : "previousBalance",
                    label : "Ancien solde",
                    format : "currency",
                },
                {
                    name : "income",
                    label : "Recettes",
                    format : "currency",
                },
                {
                    name : "expenses",
                    label : "Dépenses",
                    format : "currency",
                },
                {
                    name : "creditMovement",
                    label : "Mouv. crédit",
                    format : "currency",
                },
                {
                    name : "debitMovement",
                    label : "Mouv. débit",
                    format : "currency",
                },
                {
                    name : "balance",
                    label : "Solde",
                    format : "currency",
                },
            ],
        },

        other : {
            title : "Autres",
            addLabel : "+ Ajouter un autre organisme",
        },
    },

    messages : {
        loading : messages.loading,
        error : "Le compte de gestion est introuvable ou inaccessible.",
    },

    footer_form : {
        btn_cancel_label : cta.cancel,
        btn_recorded_label : cta.recorded,
    },

    actions : {
        title : "Actions",

        items : [
            {
                ...pageActionsDashboard.downloadPdf,
                variant: "page-action-left",
            },
            {
                ...pageActionsDashboard.history,
            },
            {
                ...pageActionsDashboard.generateAnnualAccount,
            },
        ],
    },
};

export {
    accountDashboard,
};
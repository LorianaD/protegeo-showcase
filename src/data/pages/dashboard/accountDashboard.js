import { AllowanceStats, BankAccount, BankAccountGray, DailyLivingStats, EarningStats, Expenses, ExpensesGray, ExpensesStats, FinalBalanceStats, FinancialProfitStats, HomeCareStats, HousingStats, InsuranceStats, InvestmentStats, LoanStats, MajorPurchaseStats, OtherExpensesStats, OtherResourceStats, PreviousBalanceStats, Resources, ResourcesGray, ResourcesStats, SummaryAccount, SummaryAccountGray, TaxStats, WorkStats } from "@/assets";
import { pageActionsDashboard } from "@/data/actions";
import { cta, messages } from "@/data/form";
import { summaryAccount, resourcesAccount, expensesAccount, bankAccountsAccount } from "./accountDashboard/index";

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
            end: true,
        },
        {
            name : "resources",
            link_icon : {
                default : ResourcesGray,
                active : Resources,
            },
            link_label : "Ressources",
            link_url : "/dashboard/account/:reference/resources",
        },
        {
            name : "expenses",
            link_icon : {
                default : ExpensesGray,
                active : Expenses,
            },
            link_label : "Dépenses",
            link_url : "/dashboard/account/:reference/expenses",
        },
        {
            name : "bankAccounts",
            link_icon : {
                default : BankAccountGray,
                active : BankAccount,
            },
            link_label : "Comptes bancaire",
            link_url : "/dashboard/account/:reference/bank-accounts",
        },
    ],

    monthNav: {
        label: "Sélectionner le mois",

        months: [
            { value: "annual", label: "Année" },
            { value: 1, label: "Janvier" },
            { value: 2, label: "Février" },
            { value: 3, label: "Mars" },
            { value: 4, label: "Avril" },
            { value: 5, label: "Mai" },
            { value: 6, label: "Juin" },
            { value: 7, label: "Juillet" },
            { value: 8, label: "Août" },
            { value: 9, label: "Septembre" },
            { value: 10, label: "Octobre" },
            { value: 11, label: "Novembre" },
            { value: 12, label: "Décembre" },
        ],
    },

    summaryAccount,
    resources : resourcesAccount,
    expenses : expensesAccount,
    bankAccounts : bankAccountsAccount,

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

    period: {
        label: "Période sélectionnée",
        missing: "Période non renseignée",
    },
};

export {
    accountDashboard,
};
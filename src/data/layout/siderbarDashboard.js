import { dashboardAccount, dashboardAccountWhite, dashboardAlert, dashboardAlertWhite, dashboardBudget, dashboardBudgetWhite, dashboardHistory, dashboardHistoryWhite, dashboardHome, dashboardHomeWhite, dashboardInvetory, dashboardInvetoryWhite, dashboardPlus, dashboardProfile, dashboardProfileWhite, dashboardProtected, dashboardProtectedProfile, dashboardProtectedProfileWhite, dashboardProtectedWhite, dashboardSetting, dashboardSettingWhite, logo, logOut } from "@/assets"

const siderbarDashboard = {
    header : {
        logo : logo,
        slogan : "Maîtrisez le budget, facilitez la tutelle.",
    },
    nav : {
        home : {
            link_icon : {
                default : dashboardHome,
                active : dashboardHomeWhite,
            },
            link_label : "Tableau de bord",
            link_url : "/dashboard",
        },
        sections: [
            {
                title: "Protégés",
                links: [
                    {
                        link_icon : {
                            default : dashboardProtected,
                            active : dashboardProtectedWhite
                        },
                        link_label : "Mes protégés",
                        link_url: "/dashboard/protected-persons",
                    },
                    {
                        link_icon : {
                            default : dashboardPlus,
                            active : dashboardPlus,
                        },
                        link_label: "Ajouter un protégé",
                        link_url: "",
                    },
                ],
            },
            {
                title: "Dossier",
                links: [
                    {
                        link_icon : {
                            default : dashboardHome,
                            active : dashboardHomeWhite,
                        },
                        link_label : "Gestion financière",
                        link_url : "/dashboard/financial",
                    },
                    {
                        link_icon : {
                            default : dashboardProtectedProfile,
                            active : dashboardProtectedProfileWhite,
                        },
                        link_label : "Profil",
                        link_url : "/dashboard/protected-profile",
                    },
                    {
                        link_icon : {
                            default : dashboardBudget,
                            active : dashboardBudgetWhite,
                        },
                        link_label : "Budget prévisionnel",
                        link_url : "/dashboard/budget",
                    },
                    {
                        link_icon : {
                            default : dashboardInvetory,
                            active : dashboardInvetoryWhite,
                        },
                        link_label : "Inventaire",
                        link_url : "/dashboard/inventory",
                    },
                    {
                        link_icon : {
                            default : dashboardAccount,
                            active : dashboardAccountWhite,
                        },
                        link_label : "Comptes de gestion",
                        link_url : "/dashboard/account",
                    },
                ],
            },
            {
                title: "Suivi",
                links: [
                    {
                        link_icon : {
                            default : dashboardHistory,
                            active : dashboardHistoryWhite,
                        },
                        link_label : "Historique",
                        link_url : "",
                    },
                    {
                        link_icon : {
                            default : dashboardAlert,
                            active : dashboardAlertWhite,
                        },
                        link_label : "Alertes",
                        link_url : "",
                    },
                ],
            },
            {
                title: "Paramètres",
                links: [
                    {
                        link_icon : {
                            default : dashboardProfile,
                            active : dashboardProfileWhite
                        },
                        link_label : "Mon profil",
                        link_url : "",
                    },
                    // {
                    //     link_icon : {
                    //         default : dashboardSetting,
                    //         active : dashboardSettingWhite,
                    //     },
                    //     link_label : "Paramètres",
                    //     link_url : "",
                    // },
                ],
            },
        ],
    },
    footer : {
        btn_label : "Se déconnecter",
        btn_icon : logOut,
    }
}

export {
    siderbarDashboard,
};
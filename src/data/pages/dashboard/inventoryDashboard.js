import { BankAccountFinancial, BankAccountFinancialGray, Estate, EstateGray, HomeInventory, HomeInventoryGray, Movable, MovableGray } from "@/assets"

const invetoryDashboard = {
    hero : {
        title : "Inventaire du patrimoine",
        description : "Renseignez les ressources, dépenses, soldes et comptes bancaires pour préparer le document annuel.",
        option : {
            personName : "Céline DIANO",
            annual : "2025",
        },
    },

    nav : [
        {
            link_icon : {
                default : HomeInventoryGray,
                active : HomeInventory,
            },
            link_label : "Accueil",
            link_url : "",
        },
        {
            link_icon : {
                default : MovableGray,
                active : Movable,
            },
            link_label : "Biens mobiliers",
            link_url : "",
        },
        {
            link_icon : {
                default : BankAccountFinancialGray,
                active : BankAccountFinancial,
            },
            link_label : "Comptes bancaires et placements",
            link_url : "",
        },
        {
            link_icon : {
                default : EstateGray,
                active : Estate,
            },
            link_label : "Biens immobiliers",
            link_url : "",
        },
    ],
}

export {
    invetoryDashboard,
}
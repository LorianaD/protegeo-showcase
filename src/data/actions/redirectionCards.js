import { iconMeasure, iconHelps, iconAccount, iconContacts, iconTemplate, iconSteps, iconFaq } from "@/assets";

const redirectionCards = {
    measure: {
        name: "measure",
        img: iconMeasure,
        title: "Comprendre la mesure",
        description: "Tutelle, curatelle, sauvegarde de justice : des explications simples...",
        link: "/measure"
    },

    helps: {
        name: "helps",
        img: iconHelps,
        title: "Vos aides et droits",
        description: "CAF, MDPH, CPAM, impôts.",
        link: "/helps"
    },

    account: {
        name: "account",
        img: iconAccount,
        title: "Le compte de gestion",
        description: "Explication simple et exemples.",
        link: "/account"
    },

    contact: {
        name: "contact",
        img: iconContacts,
        title: "Contact & sources officielles",
        description: "Sites officiels, annuaires MDPH, CAF, CPAM.",
        link: "/contact"
    },

    template: {
        name: "templates",
        img: iconTemplate,
        title: "Modèles utiles",
        description: "Dossiers, attestations, documents PDF nécessaires.",
        link: "/templates"
    },

    steps: {
        name: "steps",
        img: iconSteps,
        title: "Étapes après le jugement",
        description: "Les actions indispensables après la décision.",
        link: "/steps"
    },

    faq: {
        name: "faq",
        img: iconFaq,
        title: "Consulter la FAQ",
        description: "Retrouvez les réponses aux questions fréquentes.",
        link: "/faq"
    },
};

export default redirectionCards;
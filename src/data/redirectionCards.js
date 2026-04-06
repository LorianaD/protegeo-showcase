import measureIcon from "../assets/imgs/icon-measure.png";
import helpsIcon from "../assets/imgs/icon-helps.png";
import accountIcon from "../assets/imgs/icon-account.png";
import contactIcon from "../assets/imgs/icon-contacts.png";
import templateIcon from "../assets/imgs/icon-template.png";
import stepsIcon from "../assets/imgs/icon-steps.png";

const redirectionCards = {
    measure: {
        name: "measure",
        img: measureIcon,
        title: "Comprendre la mesure",
        description: "Tutelle, curatelle, sauvegarde de justice : des explications simples...",
        link: "/measure"
    },

    helps: {
        name: "helps",
        img: helpsIcon,
        title: "Vos aides et droits",
        description: "CAF, MDPH, CPAM, impôts.",
        link: "/helps"
    },

    account: {
        name: "account",
        img: accountIcon,
        title: "Le compte de gestion",
        description: "Explication simple et exemples.",
        link: "/account"
    },

    contact: {
        name: "contact",
        img: contactIcon,
        title: "Contact & sources officielles",
        description: "Sites officiels, annuaires MDPH, CAF, CPAM.",
        link: "/contact"
    },

    template: {
        name: "templates",
        img: templateIcon,
        title: "Modèles utiles",
        description: "Dossiers, attestations, documents PDF nécessaires.",
        link: "/templates"
    },

    steps: {
        name: "steps",
        img: stepsIcon,
        title: "Étapes après le jugement",
        description: "Les actions indispensables après la décision.",
        link: "/steps"
    },
};

export default redirectionCards;
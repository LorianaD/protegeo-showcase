import { options } from "./options";

const fields = {
    email: {
        name: "email",
        type: "email",
        label: "Identifiant",
        description: "Format attendu : nom@domaine.fr",
        placeholder: "",
    },

    password: {
        name: "password",
        type: "password",
        label: "Mot de passe",
    },

    civility : {
        name: "civility",
        title : "Civilité",
        options : options.civility,
        required: true,
    },

    lastname: {
        name: "lastname",
        type: "text",
        label: "Nom",
        description: "",
        placeholder: "",
    },

    firstname: {
        name: "firstname",
        type: "text",
        label: "Prénom",
        description: "",
        placeholder: "",
    },

    address: {
        name: "address",
        type: "text",
        label: "Adresse",
        description: "Indication : numéro et voie",
        placeholder: "",
    },

    addressComplement: {
        name: "addressComplement",
        type: "text",
        label: "Complément d’adresse",
        description: "Indication : bâtiment, immeuble, escalier et numéro d’appartement",
        placeholder: "",
        required: false,
    },

    postalCode: {
        name: "postalCode",
        type: "text",
        label: "Code postal",
        description: "Format attendu : 5 chiffres",
        placeholder: "",
    },

    city: {
        name: "city",
        type: "text",
        label: "Ville ou commune",
        description: "Exemple : Bordeaux",
        placeholder: "",
    },
};

export {
    fields,
};
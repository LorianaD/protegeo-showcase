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
        label : "Civilité",
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

    birth_date: {
        name: "birth_date",
        type: "date",
        label: "Date de naissance",
    },

    birth_place: {
        name: "birth_place",
        type: "text",
        label: "Lieu de naissance",
    },

    nationality: {
        name: "nationality",
        type: "text",
        label: "Nationalité",
    },

    address: {
        name: "address",
        type: "text",
        label: "Adresse",
        description: "Indication : numéro et voie",
        placeholder: "",
    },

    postal_code: {
        name: "postal_code",
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

    phone_number: {
        name: "phone_number",
        type: "text",
        label: "Téléphone",
    },

    profession: {
        name: "profession",
        type: "text",
        label: "Emplois",
    },

    practicing: {
        name: "practicing",
        type: "text",
        label: "Exerçant en",
    },

    roles : {
        name: "roles",
        label : "Rôles",
        options : options.roleType,
        required: false,
    },

    relation: {
        name: "relation",
        title: "Type de relation",
        options: options.relation,
        required: true,
    },

    measureType: {
        name: "measureType",
        title: "Type de measure",
        options: options.measureType,
        required: true,
    },
};

export {
    fields,
};
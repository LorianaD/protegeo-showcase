import { fields } from "./fields";

const addDossierForm = {
    protectedPerson: {
        title: "Identité de la personne",
        subtitle: "Majeur protégé",
        description: "Ces informations permettent d’identifier la personne protégée.",
        mention : "Sauf mention contraire tout les champs sont obligatoires.",

        fields: [
            fields.gender,
            fields.lastname,
            fields.firstname,
            fields.birth_date,
            fields.birth_place,
            fields.nationality,
            fields.address,
            fields.postal_code,
            fields.city,
        ],
    },

    measure: {
        title: "La mesure",
        description: "Informations concernant la mesure de protection.",

        fields: [
            fields.judgment_date,
            fields.measure_type,
            fields.reference_number,
            fields.tribunal_name,
        ],
    },

    curator: {
        title: "Curateur",
        description: "Informations concernant la mesure de protection.",

        fields: [
            fields.roles,
            fields.lastname,
            fields.firstname,
            fields.birth_date,
            fields.birth_place,
            fields.nationality,
            fields.address,
            fields.postal_code,
            fields.city,
        ],
    },
};

export {
    addDossierForm,
};
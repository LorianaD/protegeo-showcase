import { fields } from "./fields";

const addDossierForm = {
    protectedPerson: {
        title: "Identité de la personne",
        subtitle: "Majeur protégé",
        description: "Ces informations permettent d’identifier la personne protégée.",
        mention: "Sauf mention contraire tous les champs sont obligatoires.",

        fields: [
            fields.civility,
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
            fields.start_date,
            fields.measure_type,
            fields.reference_number,
            fields.tribunal_name,
            fields.tribunal_city,
            fields.duration,
        ],
    },

    representative: {
        title: "Votre rôle",
        description: "Indiquez votre rôle auprès de la personne protégée.",

        fields: [
            {
                ...fields.roles,
                required: true,
            },
        ],
    },
};

export {
    addDossierForm,
};
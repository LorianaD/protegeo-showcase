const addDossierForm = {
    protectedPerson: {
        title: "Identité de la personne",
        subtitle: "Majeur protégé",
        description: "Ces informations permettent d’identifier la personne protégée.",

        fields: [
            "gender",
            "lastname",
            "firstname",
            "birthDate",
            "address",
            "postalCode",
            "city",
        ],
    },

    measure: {
        title: "La mesure",
        description: "Informations concernant la mesure de protection.",

        fields: [
            "judgmentDate",
            "measureType",
            "referenceNumber",
            "tribunalName",
        ],
    },

    curator: {
        title: "Curateur",
        description: "Informations concernant la mesure de protection.",

        fields: [
            "roleType",
            "lastname",
            "firstname",
            "birthDate",
            "address",
            "postalCode",
            "city",
        ],
    },
};

export {
    addDossierForm,
};
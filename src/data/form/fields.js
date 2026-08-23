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
        type: "radio",
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
        placeholder: "",
    },

    family_situation : {
        name: "family_situation",
        type: "select",
        title: "Situation familiale",
        label: "Situation familiale",
        options: options.family_situation,
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
        placeholder: "",
    },

    profession: {
        name: "profession",
        type: "text",
        label: "Emplois",
        placeholder: "ex. Infirmière",
    },

    practicing: {
        name: "practicing",
        type: "text",
        label: "Exerçant en",
        placeholder: "ex. France",
    },

    roles: {
        name: "role_type",
        type: "select",
        label: "Rôle",
        options: options.roleType,
        placeholder: "Sélectionner un rôle",
        required: false,
    },

    contact_type_family: {
        name: "contact_type",
        type: "select",
        label: "Type de relation",
        options: options.contact_type_family,
        placeholder: "Veuillez sélectionner le type de relation",
        required: true,
    },

    relation_type: {
        name: "relation_type",
        label: "Lien avec le protégé",
        type: "text",
        placeholder: "ex. Tante maternelle",
    },

    measure_type: {
        name: "measure_type",
        type: "select",
        label: "Type de measure",
        options: options.measureType,
        required: true,
    },

    reference_number: {
        name: "reference_number",
        label: "Numéro de dossier",
        type: "text",
        placeholder: "",
    },

    judgment_date: {
        name: "judgment_date",
        label: "Date du jugement",
        type: "date",
    },

    start_date: {
        name: "start_date",
        label: "Date de début",
        type: "date",      
    },

    end_date: {
        name: "end_date",
        label: "Date de fin",
        type: "date",    
    },

    duration: {
        name: "duration_years",
        label: "Durée",
        type: "integer"
    },

    renewal: {
        name: "renewal",
        label: "Date éventuelle de renouvellement",
    },

    tribunal_name: {
        name: "tribunal_name",
        label: "Tribunal compétent",
        type: "text",
        placeholder: "",
    },

    tribunal_city: {
        name: "tribunal_city",
        label: "Ville",
        type: "text",
        placeholder: "",
    },

    cabinet: {
        name: "cabinet_number",
        label: "Cabinet",
        type: "text",
        placeholder: "",
    },

    curator: {
        name: "curator",
        label: "Curateurs",
    },

    subrogated: {
        name: "subrogated",
        label: "Subrogé",
    },

    notes: {
        name: "notes",
        label: "Observations générales",
        type: "textarea",
        placeholder: "Saisisez vos observation sur la situation"
    },

    gender : {
        name: "gender",
        label: "Sexe",
        type: "radio",
        options: options.gender,
        required: true,
    },

    is_current_user_representative: {
        name: "is_current_user_representative",
        type: "radio",
        label: "Êtes-vous le représentant légal de cette personne ?",
        options: options.yes_no,
        required: true,
    },
};

const familyContactFields = [
    {
        name: ["firstname", "lastname"],
        label: "Prénom NOM",
    },
    {
        name: ["birth_date", "birth_place"],
        label: "Date et lieu de naissance",
    },
    {
        ...fields.address,
    },
    {
        ...fields.phone_number,
        name: "phone",
        label: "Téléphone",
    },
    {
        ...fields.email,
        label: "Adresse électronique",
    },
    {
        ...fields.profession,
        label: "Profession",
    },
];

export {
    fields,
    familyContactFields,
};
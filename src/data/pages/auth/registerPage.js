const register = {

    header : {
        title : "Création  de compte sur Protégéo",
    },

    stepIndicator : {
        count_step : "Étape ",
        count_on : " sur ",
        steps : {
            step1 : "Choisir un identifiant",
            step2 : "Renseigner une identité",
            step3 : "Saisir des coordonnéés"
        },
        next_important : "Étape suivante : ",
    },

    loginName : {
        title : "Se créer un compte  en choisissant un identifiant",
        description : "",
        mention : "Sauf mention contraire tout les champs sont obligatoires.",
        fields : [
            {
                name : "email",
                type : "text",
                label : "Identifiant",
                description : "Format attendu : nom@domaine.fr",
                placeholder : "",
            },
            {
                name : "password",
                type : "password",
                label : "Mot de passe",
                description : "",
                placeholder : "",
                mention : {
                    title : "Votre mot de passe doit contenir au moins :",
                    indicator : [
                        "! 12 caractères minimum",
                        "! 1 caractère spécial",
                        "! 1 chiffre minimum",
                    ],
                },
            },
        ],
    },

    registerIdentity : {
        title : "Identité personnelle",
        description : "Curatrice, tuteur, mandataire",
        mention : "Sauf mention contraire tout les champs sont obligatoires.",
        fields : [
            {
                name : "name",
                type : "text",
                label : "Nom",
                description : "",
                placeholder : "",
            },
            {
                name : "firstname",
                type : "text",
                label : "Prénom",
                description : "",
                placeholder : "",
            },
        ],
        civility : {
            title : "Civilité",
            gender : [
                "Madame",
                "Monsieur",
            ]
        }
    },

    coordinate : {
        title : "Coordonnées personnelles",
        description : "Curatrice, tuteur, mandataire",
        mention : "Sauf mention contraire tout les champs sont obligatoires.",
        fields : [
            {
                name : "address",
                type : "text",
                label : "Adresse",
                description : "Indication : numéro et voie",
                placeholder : "",
            },
            {
                name : "complementary",
                type : "text",
                label : "Complément d’adresse (optionnelle)",
                description : "Indication : bâtiment, immeuble, escalier et numero d’appartement",
                placeholder : "",
            },
        ],
        town : [
            {
                name : "postal",
                type : "text",
                label : "Code postal",
                description : "Format attendu : 5 chiffres",
                placeholder : "",
            },
            {
                name : "city",
                type : "text",
                label : "Ville ou commune",
                description : "Exemple : Bordeaux",
                placeholder : "",
            },
        ]
    },

};


const registerHeader = {
    title : "Création  de compte sur Protégéo",
};

const registerStepIndicator = {
    count_step : "Étape ",
    count_on : " sur ",
    steps : {
        step1 : "Choisir un identifiant",
        step2 : "Renseigner une identité",
        step3 : "Saisir des coordonnéés"
    },
    next_important : "Étape suivante : ",
};

const registerLoginName = {
    title : "Se créer un compte  en choisissant un identifiant",
    description : "",
    mention : "Sauf mention contraire tout les champs sont obligatoires.",
    fields : [
        {
            name : "email",
            type : "text",
            label : "Identifiant",
            description : "Format attendu : nom@domaine.fr",
            placeholder : "",
        },
        {
            name : "password",
            type : "password",
            label : "Mot de passe",
            description : "",
            placeholder : "",
            mention : {
                title : "Votre mot de passe doit contenir au moins :",
                indicator : [
                    "! 12 caractères minimum",
                    "! 1 caractère spécial",
                    "! 1 chiffre minimum",
                ],
            },
        },
    ],
};

const registerIdentity = {
    title : "Identité personnelle",
    description : "Curatrice, tuteur, mandataire",
    mention : "Sauf mention contraire tout les champs sont obligatoires.",
    fields : [
        {
            name : "name",
            type : "text",
            label : "Nom",
            description : "",
            placeholder : "",
        },
        {
            name : "firstname",
            type : "text",
            label : "Prénom",
            description : "",
            placeholder : "",
        },
    ],
    civility : {
        title : "Civilité",
        gender : [
            "Madame",
            "Monsieur",
        ]
    }
};

const registerCoordinate = {
    title : "Coordonnées personnelles",
    description : "Curatrice, tuteur, mandataire",
    mention : "Sauf mention contraire tout les champs sont obligatoires.",
    fields : [
        {
            name : "address",
            type : "text",
            label : "Adresse",
            description : "Indication : numéro et voie",
            placeholder : "",
        },
        {
            name : "complementary",
            type : "text",
            label : "Complément d’adresse (optionnelle)",
            description : "Indication : bâtiment, immeuble, escalier et numero d’appartement",
            placeholder : "",
        },
    ],
    town : [
        {
            name : "postal",
            type : "text",
            label : "Code postal",
            description : "Format attendu : 5 chiffres",
            placeholder : "",
        },
        {
            name : "city",
            type : "text",
            label : "Ville ou commune",
            description : "Exemple : Bordeaux",
            placeholder : "",
        },
    ]
};

export {
    registerHeader,
    registerStepIndicator,
    registerLoginName,
    registerIdentity,
    registerCoordinate,
};
import { cta, fields, messages } from "@/data/form";


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
        mention : messages.requiredFields,
        fields : [
            fields.email,
            {
                ...fields.password,
                mention: {
                    title: "Votre mot de passe doit contenir au moins :",
                    indicators: [
                        "12 caractères minimum",
                        "1 caractère spécial",
                        "1 chiffre minimum",
                    ],
                },
            },        
        ],
        btn_label : cta.next,
        btn_link : "",
        secondary_btn_label : cta.cancel,
        secondary_btn_link : "",
    },

    identity : {
        title : "Identité personnelle",
        description : "Curatrice, tuteur, mandataire",
        mention : messages.requiredFields,
        groups : [
            {
                type : "choice",
                fields : [
                    fields.civility,
                ],
            },
            {
                type : "default",
                fields : [
                    fields.lastname,
                    fields.firstname,
                ],
            },
        ],
        btn_label : cta.next,
        btn_link : "",
        secondary_btn_label : cta.previous,
        secondary_btn_link : "",
    },

    coordinates : {
        title : "Coordonnées personnelles",
        description : "Curatrice, tuteur, mandataire",
        mention : messages.requiredFields,
        groups : [
            {
                type : "default",
                fields : [
                    fields.address,
                    fields.addressComplement,
                ],
            },
            {
                type : "inline",
                fields : [
                    fields.postalCode,
                    fields.city,
                ],
            },
        ],
        btn_label : cta.confirm,
        btn_link : "",
        secondary_btn_label : cta.previous,
        secondary_btn_link : "",
    },

};

export {
    register
};
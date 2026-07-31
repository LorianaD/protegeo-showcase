import { Family, FamilyGray, Judgment, JudgmentGray, Profile, ProfileGray, Referent, ReferentGray } from "@/assets";
import { cta, familyContactFields, fields, messages } from "@/data/form";

const protectedProfileDashboard = {
    hero : {
        title : "Profil de la personne protégée",
        description : "Informations essentielles concernant l’identité, la mesure de protection et les contacts associés.",
        option : {
            personName : "Sélectionner une personne protégée",
        }
    },

    nav : [
        {
            link_icon : {
                default : ProfileGray,
                active : Profile,
            },
            link_label : "Informations personnelles",
            link_url : "/dashboard/protected-profile/:reference",
            end: true,
        },
        {
            link_icon : {
                default : JudgmentGray,
                active : Judgment,
            },
            link_label : "Jugement",
            link_url : "/dashboard/protected-profile/:reference/judgment",
            end: true,
        },
        {
            link_icon : {
                default : FamilyGray,
                active : Family,
            },
            link_label : "Famille",
            link_url : "/dashboard/protected-profile/:reference/family",
        },
        {
            link_icon : {
                default : ReferentGray,
                active : Referent,
            },
            link_label : "Référents",
            link_url : "",
        },
        {
            link_icon : {
                default : ProfileGray,
                active : Profile,
            },
            link_label : "Contacts utiles",
            link_url : "",
        },
    ],

    profile : {
        header : {
            title : "Informations personnelles",
            btn_label : "Modifier",
            btn_link : "",
        },

        identity : {
            photo : "DefaultProtectedPerson",
            photo_alt : "Photo de",
            fields : {
                civility: {
                    ...fields.civility,
                },
                lastname : {
                    ...fields.lastname,
                },
                firstname : {
                    ...fields.firstname,
                },
                birth_date : {
                    ...fields.birth_date,
                },
                birth_place : {
                    ...fields.birth_place,
                },
                nationality : {
                    ...fields.nationality,
                },
                family_situation : {
                    ...fields.family_situation,
                }
            },

            rows: [
                [
                    "civility",
                ],
                [
                    "lastname",
                    "firstname",
                ],
                [
                    "birth_date",
                    "birth_place",
                ],
                [
                    "nationality",
                    "family_situation",
                ],
            ],            
        },

        details :[
            [
                { ...fields.address },
            ],
            [
                { ...fields.postal_code },
                { ...fields.city },
            ],
            [
                { ...fields.phone_number },
                { 
                    ...fields.email, 
                    label: "Adresse électronique", 
                },
            ],
            [
                { 
                    ...fields.profession,
                    label: "Situation professionnelle"
                },
            ],
            [
                { label: "N° Sécurité Sociale", value: "2 XX XX XX XXX XXX XX" },
            ],
            [
                { label: "Niveau d’autonomie", value: "Aidante familiale" },
            ],
        ],

        notes: {
            ...fields.notes,
            // placeholder: "",
        },
    },

    judgment : {
        header : {
            title : "Jugement et mesure de protection",
            btn_label : "Modifier",
            btn_link : "",
        },
        details :[
            [
                { 
                    ...fields.measure_type,
                },
            ],
            [
                { 
                    ...fields.judgment_date,
                },
                {
                    ...fields.renewal,
                },
            ],
            [
                {
                    ...fields.start_date,
                },
                { 
                    ...fields.end_date,
                },
            ],
            [
                { 
                    ...fields.reference_number, 
                },
                { 
                    ...fields.duration, 
                },
            ],
            [
                { 
                    ...fields.tribrunal_name,
                },
                {
                    ...fields.tribrunal_city,
                },
                { 
                    ...fields.cabinet, 
                },
            ],
            [
                { 
                    ...fields.curator, 
                    value: [
                        "Madame Loriana DIANO",
                        "Madame Carine PELLET",
                    ],
                },
                { 
                    ...fields.subrogated, 
                },
            ],
        ],
        notes : {
            ...fields.notes,
        },
        btn_label : "Télécharger la mesure de protection PDF",
        btn_link : "",
    },

    family : {
        header : {
            title : "Famille et proches",
            btn_label : "Modifier",
            btn_link : "",
            btn_label_add : "Ajouter",
            btn_link_add : "",
        },

        partners: {
            current: {
                title: "Partenaire de vie",
                fields: familyContactFields,
            },

            former: {
                title: "Ancien partenaire de vie",
                fields: familyContactFields,
            },
        },
       
        parents : {
            father : {
                title : "Pére",
                fields : familyContactFields,
            },
            mother : {
                title : "Mère",
                fields : familyContactFields,
            },
        },

        sibling: {
            title: "Frères / Sœurs",
            columns: [
                {
                    key: "fullname",
                    label: "Prénom NOM",
                },
                {
                    key: "birth",
                    label: "Date et lieu de naissance",
                },
                {
                    key: "address",
                    label: "Adresse",
                },
                {
                    key: "phone",
                    label: "Téléphone",
                },
                {
                    key: "email",
                    label: "Adresse électronique",
                },
                {
                    key: "profession",
                    label: "Profession",
                },
            ],
        },

        trusted_people : {
            title: "Personnes de cofiance",
            columns: [
                {
                    key: "fullname",
                    label: "Prénom NOM",
                },
                {
                    key: "relation",
                    label: "Lien avec le protégé",
                },
                {
                    key: "birth",
                    label: "Date et lieu de naissance",
                },
                {
                    key: "address",
                    label: "Adresse",
                },
                {
                    key: "phone",
                    label: "Téléphone",
                },
                {
                    key: "email",
                    label: "Adresse électronique",
                },
                {
                    key: "profession",
                    label: "Profession",
                },
            ],
        },

        subrogated : {
            title: "Subrogé tuteur (si nommé)",
            columns: [
                {
                    key: "fullname",
                    label: "Prénom NOM",
                },
                {
                    key: "relation",
                    label: "Lien avec le protégé",
                },
                {
                    key: "birth",
                    label: "Date et lieu de naissance",
                },
                {
                    key: "address",
                    label: "Adresse",
                },
                {
                    key: "phone",
                    label: "Téléphone",
                },
                {
                    key: "email",
                    label: "Adresse électronique",
                },
                {
                    key: "profession",
                    label: "Profession",
                },
            ],
        },

        notes : {
            label : "Observations générales",
            value : "",
        },

        form: {
            header: {
                title: "Ajouter un membre de la famille",
                description: "Renseignez les informations concernant le membre de la famille.",
            },

            fields: [
                {
                    ...fields.contact_type_family,
                },
                {
                    ...fields.relation_type,
                },
                {
                    ...fields.lastname,
                },
                {
                    ...fields.firstname,
                },
                {
                    ...fields.birth_date,
                },
                {
                    ...fields.birth_place,
                },
                {
                    ...fields.address,
                },
                {
                    ...fields.phone_number,
                },
                {
                    ...fields.email,
                    label : "Adresse électronique",
                },
                {
                    ...fields.profession,
                },
            ],
        },
    },

    professional_contacts : {
        header : {
            title : "Référents professionnels",
            btn_label : "Modifier",
            btn_link : "",
        },
        general_practitioner : {
            title : "Médecin traitant",
            fields : [
                {
                    label : "Raison sociale",
                    value : "Dr RICHARD-MOLLARD Aurélie",
                },
                {
                    label : "Spécialité",
                    value : "Médecin généraliste",
                },
                {
                    label : "Cabinet",
                    value : "Cabinet du Dr Richard-Mollard et Dr VIALARS HARO",
                },
                {
                    label : "Adresse",
                    value : "Cours du Général de Gaulle,\n 33170 GRADIGNAN",
                },
                {
                    label : "Téléphone",
                    value : "05 XX XX XX XX",
                },
                {
                    label : "Adresse électronique",
                    value : "Nan",
                }
            ],

            notes : {
                label : "Observations générales",
                value : "",
            },
        },

        social_worker : {
            title : "Travailleur social / accompagnement",
            fields : [
                {
                    label : "Nom",
                    value : "QUESADA Julien",
                },
                {
                    label : "Service / Fonction",
                    value : "Assistant social",
                },
                {
                    label : "Centre Social",
                    value : "CCAS de Gradignan",
                },
                {
                    label : "Adresse",
                    value : "Mairie de Gradignan \n 33170 GRADIGNAN",
                },
                {
                    label : "Téléphone",
                    value : "05 XX XX XX XX",
                },
                {
                    label : "Adresse électronique",
                    value : "quesada.julien@example.com",
                }
            ],
            
            notes : {
                label : "Observations générales",
                value : "",
            },
        },

        trustee : {
            title : "Curateur ou tuteur professionnel (si co-gestion)",
            fields : [
                {
                    label : "Nom",
                    value : "Nan",
                },
                {
                    label : "Service / Fonction",
                    value : "Nan",
                },
                {
                    label : "Centre Social",
                    value : "Nan",
                },
                {
                    label : "Adresse",
                    value : "Nan",
                },
                {
                    label : "Téléphone",
                    value : "Nan",
                },
                {
                    label : "Adresse électronique",
                    value : "Nan",
                }
            ],
            
            notes : {
                label : "Observations générales",
                value : "",
            },
        },
    },

    organization : {
        header : {
            title : "Contacts utiles",
            btn_label : "Modifier",
            btn_link : "",
        },
        caf : {
            title : "CAF",
            fields : [
                {
                    label : "Organisme",
                    value : "CAF de la Gironde",
                },
                {
                    label : "Adresse",
                    value : "CAF de la Gironde,\n 33100 Bordeaux Cedex",
                },
                {
                    label : "Identifiant",
                    value : "XXXXXXXXXXXX",
                }
            ],

            notes : {
                label : "Observations générales",
                value : "",
            },
        },

        mdph : {
            title : "MDPH",
            fields : [
                {
                    label : "Organisme",
                    value : "MDPH de la Gironde",
                },
                {
                    label : "Adresse",
                    value : "MDPH de la Gironde, \n 33000 Bordeaux",
                },
                {
                    label : "Identifiant",
                    value : "XXXXXXXXXXXX",
                }
            ],
            
            notes : {
                label : "Observations générales",
                value : "",
            },
        },

        cpam : {
            title : "CPAM",
            fields : [
                {
                    label : "Organisme",
                    value : "CPAM de la Gironde",
                },
                {
                    label : "Adresse",
                    value : "CPAM de la Gironde, \n 33000 Bordeaux",
                },
                {
                    label : "N° Sécurité Sociale",
                    value : "2 97 04 99 XXX XXX XX",
                },
            ],
            
            notes : {
                label : "Observations générales",
                value : "",
            },
        },

        tax : {
            title : "Service des impôts",
            fields : [
                {
                    label : "Organisme",
                    value : "CENTRE DES FINANCES PUBLIQUES",
                },
                {
                    label : "Adresse",
                    value : "CENTRE DES FINANCES PUBLIQUES \n SIP PESSAC TALENCE \n SAID PESSAC-TALENCE \n RUE JULES FERRY \n 33090 BORDEAUX CEDEX",
                },
                {
                    label : "N° Fiscal",
                    value : "XX XX XXX XXX XXX",
                },
            ],
            
            notes : {
                label : "Observations générales",
                value : "",
            },
        },

        bank : {
            title : "Banque principale",
            fields : [
                {
                    label : "Agence",
                    value : "Banque",
                },
                {
                    label : "Conseillé",
                    value : "Nom Prénom",
                },
                {
                    label : "Adresse",
                    value : "Agence de Gradignan, \n 33170 Gradignan",
                },
                {
                    label : "Téléphone",
                    value : "XX XX XX XX XX",
                },
                {
                    label : "Adresse électronique",
                    value : "banque@example.com",
                },
            ],
            
            notes : {
                label : "Observations générales",
                value : "",
            },
        },
    },

    messages: {
        loading: messages.loading,
    },

    footer_form: {
        btn_cancel_label : cta.cancel,
        btn_recorded_label : cta.recorded,
    }
}

export {
    protectedProfileDashboard,
}
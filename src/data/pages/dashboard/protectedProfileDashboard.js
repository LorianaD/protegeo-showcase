import { Family, FamilyGray, Judgment, JudgmentGray, Profile, ProfileGray, Referent, ReferentGray } from "@/assets";

const protectedProfileDashboard = {
    hero : {
        title : "Profil de la personne protégée",
        description : "Informations essentielles concernant l’identité, la mesure de protection et les contacts associés.",
    },

    nav : [
        {
            link_icon : {
                default : ProfileGray,
                active : Profile,
            },
            link_label : "Informations personnelles",
            link_url : "",
        },
        {
            link_icon : {
                default : JudgmentGray,
                active : Judgment,
            },
            link_label : "Jugement",
            link_url : "",
        },
        {
            link_icon : {
                default : FamilyGray,
                active : Family,
            },
            link_label : "Famille",
            link_url : "",
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
            photo : "",
            photo_alt : "Photo de",
            fields : [
                [
                    { label: "Civilité", value: "Madame" },
                ],
                [
                    { label: "Nom", value: "DIANO" },
                    { label: "Prénom", value: "Céline" },
                ],
                [
                    { label: "Date de naissance", value: "24 / 04 / 1997" },
                    { label: "Lieu de naissance", value: "Rome (Italie)" },
                ],
                [
                    { label: "Nationalité", value: "Française" },
                    { label: "Situation familiale", value: "Célibataire" },
                ],
            ]
        },

        details :[
            [
                { label: "Adresse complète", value: "Résidence Barthes entrée 4C\n33170 GRADIGNAN" },
            ],
            [
                { label: "Téléphone", value: "06 XX XX XX XX" },
                { label: "Adresse électronique", value: "celine.diano@example.com" },
            ],
            [
                { label: "Situation professionnelle", value: "Sur liste d’attente à l’ESAT de Pessac Magellan" },
            ],
            [
                { label: "N° Sécurité Sociale", value: "2 XX XX XX XXX XXX XX" },
            ],
            [
                { label: "Niveau d’autonomie", value: "Aidante familiale" },
            ],
        ],

        notes: {
            label: "Observations générales",
            value: "Madame Céline a des difficultés pour les démarches administratives, cependant elle peut...",
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
                    label: "Type de mésure", 
                    value: "Curatelle renforcée" 
                },
            ],
            [
                { 
                    label: "Date du jugement", 
                    value: "19 / 09 / 2024" 
                },
                { 
                    label: "Date éventuelle de renouvellement ", 
                    value: "19 / 09 / 2029" 
                },
            ],
            [
                { 
                    label: "Date de début", 
                    value: "19 / 09 / 2024" 
                },
                { 
                    label: "Date de fin", 
                    value: "19 / 09 / 2029" 
                },
            ],
            [
                { 
                    label: "Numéro de dossier", 
                    value: "19XXX - XXX" 
                },
                { 
                    label: "Durée", 
                    value: "5 ans" 
                },
            ],
            [
                { 
                    label: "Tribunal compétent", 
                    value: "Tribunal des tutelles Bordeaux" 
                },
            ],
            [
                { 
                    label: "Cabinet", 
                    value: "4" 
                },
            ],
            [
                { 
                    label: "Curateurs", 
                    value: [
                        "Madame Loriana DIANO",
                        "Madame Carine PELLET",
                    ],
                },
                { 
                    label: "Subrogé", 
                    value: "Aucun" 
                },
            ],
        ],
        notes : {
            label : "Observations générales",
            value : "",
        },
        btn_label : "Télécharger la mesure de protection PDF",
        btn_link : "",
    },

    family : {
        header : {
            title : "Famille et proches",
            btn_label : "Modifier",
            btn_link : "",
        },
        father : {
            title : "Pére",
            fields : [
                {
                    label : "Prénom NOM",
                    value : "Francesco DIANO",
                },
                {
                    label : "Date et lieu de naissance",
                    value : "11 / 07 / 1963 à Addis - Abbeba (Ethiopie)",
                },
                {
                    label : "Adresse",
                    value : "Résidence Barthés, 33170 GRADIGNAN\n (souvent en déplacement à l’étranger)",
                },
                {
                    label : "Téléphone",
                    value : "06 XX XX XX XX",
                },
                {
                    label : "Adresse électronique",
                    value : "francesco.diano@example.com",
                },
                {
                    label : "Profession",
                    value : "Auto-entrepreuneur",
                }
            ],
        },
        mother : {
            title : "Mère",
            fields : [
                {
                    label : "Prénom NOM",
                    value : "Sabine VAN DER MENSBRUGGHE",
                },
                {
                    label : "Date et lieu de naissance",
                    value : "06 / 03 / 1959 à Uccle (Belgique)",
                },
                {
                    label : "Adresse",
                    value : "Décédée",
                },
                {
                    label : "Téléphone",
                    value : "Décédée",
                },
                {
                    label : "Adresse électronique",
                    value : "Décédée",
                },
                {
                    label : "Profession",
                    value : "Infirmière",
                }
            ],
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

    professional_contacts : {
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

}

export {
    protectedProfileDashboard,
}
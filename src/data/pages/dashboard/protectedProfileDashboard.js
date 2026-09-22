import { Family, FamilyGray, Judgment, JudgmentGray, Profile, ProfileGray, Referent, ReferentGray } from "@/assets";
import { pageActionsDashboard } from "@/data/actions";
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
            link_url : "/dashboard/protected-profile/:reference/professional",
        },
        {
            link_icon : {
                default : ProfileGray,
                active : Profile,
            },
            link_label : "Contacts utiles",
            link_url : "/dashboard/protected-profile/:reference/organization",
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
                    type: "select",
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
            name: "situation_summary",
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
                    source: "measure",
                },
            ],
            [
                { 
                    ...fields.judgment_date,
                    source: "measure",
                },
                {
                    ...fields.renewal,
                },
            ],
            [
                {
                    ...fields.start_date,
                    source: "measure",
                },
                { 
                    ...fields.end_date,
                    source: "measure",
                },
            ],
            [
                { 
                    ...fields.reference_number,
                    source: "dossier",
                },
                { 
                    ...fields.duration, 
                    source: "measure",
                },
            ],
            [
                { 
                    ...fields.tribunal_name,
                    source: "measure",
                },
                {
                    ...fields.tribunal_city,
                    source: "measure",
                },
                { 
                    ...fields.cabinet,
                    source: "measure",
                },
            ],
            [
                { 
                    ...fields.curator,
                },
                { 
                    ...fields.subrogated, 
                },
            ],
        ],
        notes : {
            ...fields.notes,
            source: "measure",
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

        actions: {
            column_label: "Actions",

            edit: {
                label: "Modifier",
                variant: "secondary",
            },

            delete: {
                label: "Supprimer",
                variant: "danger",
            },
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
            emptyMessage: "Aucun frère ou aucune sœur enregistré.",
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
                    name: ["address", "postal_code", "city"],
                },
                {
                    key: "phone",
                    label: "Téléphone",
                    type: "truncate",
                },
                {
                    key: "email",
                    label: "Adresse électronique",
                    type: "truncate",
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
                    name: ["address", "postal_code", "city"],
                },
                {
                    key: "phone",
                    label: "Téléphone",
                    type: "truncate",
                },
                {
                    key: "email",
                    label: "Adresse électronique",
                    type: "truncate",
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
                    name: ["address", "postal_code", "city"],
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
            ...fields.notes,
            name : "family_note",
            label : "Observations générales",
        },

        form: {
            add: {
                header: {
                    title: "Ajouter un membre de la famille",
                    description: "Renseignez les informations concernant le membre de la famille.",
                },
            },

            edit: {
                header: {
                    title: "Modifier un membre de la famille",
                    description: "Modifiez les informations concernant le membre de la famille.",
                },
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
                    ...fields.postal_code,
                },
                {
                    ...fields.city,
                },
                {
                    ...fields.phone_number,
                    name: "phone",
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
            btn_label_add : "Ajouter",
            btn_link_add : "",
        },

        actions: {
            column_label: "Actions",

            edit: {
                label: "Modifier",
                variant: "secondary",
            },

            delete: {
                label: "Supprimer",
                variant: "danger",
            },
        },

        general_practitioner: {
            title: "Médecin traitant",

            fields: [
                {
                    name: ["firstname", "lastname"],
                    label: "Raison sociale",
                },
                {
                    name: "profession",
                    label: "Spécialité",
                },
                {
                    name: "organization_name",
                    label: "Cabinet",
                },
                {
                    name: ["address", "postal_code", "city"],
                    label: "Adresse",
                },
                {
                    name: "phone",
                    label: "Téléphone",
                },
                {
                    name: "email",
                    label: "Adresse électronique",
                },
                {
                    ...fields.notes,
                    variant: "textarea",
                }
            ],

            // notes: {
            //     ...fields.notes,
            // },
        },

        social_worker: {
            title: "Travailleur social / accompagnement",

            fields: [
                {
                    name: ["firstname", "lastname"],
                    label: "Nom",
                },
                {
                    name: "job_function",
                    label: "Service / Fonction",
                },
                {
                    name: "organization_name",
                    label: "Centre social",
                },
                {
                    name: ["address", "postal_code", "city"],
                    label: "Adresse",
                },
                {
                    name: "phone",
                    label: "Téléphone",
                },
                {
                    name: "email",
                    label: "Adresse électronique",
                },
                {
                    ...fields.notes,
                    variant: "textarea",
                }
            ],

            // notes: {
            //     ...fields.notes,
            // },
        },

        trustee: {
            title: "Curateur ou tuteur professionnel (si co-gestion)",

            fields: [
                {
                    name: ["firstname", "lastname"],
                    label: "Nom",
                },
                {
                    name: "job_function",
                    label: "Service / Fonction",
                },
                {
                    name: "organization_name",
                    label: "Structure",
                },
                {
                    name: ["address", "postal_code", "city"],
                    label: "Adresse",
                },
                {
                    name: "phone",
                    label: "Téléphone",
                },
                {
                    name: "email",
                    label: "Adresse électronique",
                },
                {
                    ...fields.notes,
                    variant: "textarea",
                }
            ],

            // notes: {
            //     ...fields.notes,
            // },
        },

        lawyer: {
            title: "Avocat",

            fields: [
                {
                    name: ["firstname", "lastname"],
                    label: "Nom",
                },
                {
                    name: "profession",
                    label: "Spécialité",
                },
                {
                    name: "organization_name",
                    label: "Cabinet",
                },
                {
                    name: ["address", "postal_code", "city"],
                    label: "Adresse",
                },
                {
                    name: "phone",
                    label: "Téléphone",
                },
                {
                    name: "email",
                    label: "Adresse électronique",
                },
                {
                    ...fields.notes,
                    variant: "textarea",
                },
            ],
        },

        notary: {
            title: "Notaire",

            fields: [
                {
                    name: ["firstname", "lastname"],
                    label: "Nom",
                },
                {
                    name: "profession",
                    label: "Fonction",
                },
                {
                    name: "organization_name",
                    label: "Étude notariale",
                },
                {
                    name: ["address", "postal_code", "city"],
                    label: "Adresse",
                },
                {
                    name: "phone",
                    label: "Téléphone",
                },
                {
                    name: "email",
                    label: "Adresse électronique",
                },
                {
                    ...fields.notes,
                    variant: "textarea",
                },
            ],
        },

        form: {
            add: {
                header: {
                    title: "Ajouter un référent professionnel",
                    description: "Renseignez les informations concernant le référent professionnel.",
                },
            },

            edit: {
                header: {
                    title: "Modifier un référent professionnel",
                    description: "Modifiez les informations concernant le référent professionnel.",
                },
            },

            fields: [
                {
                    ...fields.contact_type_professional,
                },
                {
                    ...fields.lastname,
                },
                {
                    ...fields.firstname,
                },
                {
                    ...fields.profession,

                    contactTypes: [
                        "doctor",
                        "lawyer",
                        "notary",
                    ],

                    labels: {
                        doctor: "Spécialité",
                        lawyer: "Spécialité",
                        notary: "Domaine d’intervention",
                    },

                    placeholders: {
                        doctor: "ex. Médecin généraliste",
                        lawyer: "ex. Droit de la famille",
                        notary: "ex. Droit immobilier",
                    },
                },
                {
                    ...fields.job_function,

                    contactTypes: [
                        "social_worker",
                        "professional_guardian",
                    ],

                    labels: {
                        social_worker: "Service / Fonction",
                        professional_guardian: "Fonction",
                    },

                    placeholders: {
                        social_worker: "ex. Assistante sociale",
                        professional_guardian: "ex. Mandataire judiciaire",
                    },
                },
                {
                    ...fields.organization_name,

                    labels: {
                        doctor: "Cabinet",
                        social_worker: "Centre social / Structure",
                        professional_guardian: "Structure",
                        lawyer: "Cabinet",
                        notary: "Étude notariale",
                    },

                    placeholders: {
                        doctor: "ex. Cabinet médical des Acacias",
                        social_worker: "ex. CCAS de Bordeaux",
                        professional_guardian: "ex. Association tutélaire",
                        lawyer: "ex. Cabinet Dupont",
                        notary: "ex. Étude notariale Oudgedy",
                    },

                    required: false,
                },
                {
                    ...fields.address,
                },
                {
                    ...fields.postal_code,
                },
                {
                    ...fields.city,
                },
                {
                    ...fields.phone_number,
                    name: "phone",
                },
                {
                    ...fields.email,
                    label: "Adresse électronique",
                    required: false,
                },
                {
                    ...fields.notes,
                    required: false,
                    variant: "textarea",
                }
            ],
        },
    },

    organization : {
        header: {
            title: "Contacts utiles",
            btn_label: "Modifier",
            btn_link: "",
            btn_label_add: "Ajouter",
            btn_link_add: "",
        },

        actions: {
            column_label: "Actions",

            edit: {
                label: "Modifier",
                variant: "secondary",
            },

            delete: {
                label: "Supprimer",
                variant: "danger",
            },
        },

        caf: {
            title: "CAF",

            fields: [
                {
                    name: "organization_name",
                    label: "Organisme",
                },
                {
                    name: ["address", "postal_code", "city"],
                    label: "Adresse",
                },
                {
                    name: "identifier",
                    label: "N° allocataire",
                },
                {
                    ...fields.notes,
                    variant: "textarea",
                },
            ],
        },

        mdph: {
            title: "MDPH",

            fields: [
                {
                    name: "organization_name",
                    label: "Organisme",
                },
                {
                    name: ["address", "postal_code", "city"],
                    label: "Adresse",
                },
                {
                    name: "identifier",
                    label: "N° de dossier",
                },
                {
                    ...fields.notes,
                    variant: "textarea",
                },
            ],
        },

        cpam: {
            title: "CPAM",

            fields: [
                {
                    name: "organization_name",
                    label: "Organisme",
                },
                {
                    name: ["address", "postal_code", "city"],
                    label: "Adresse",
                },
                {
                    name: "identifier",
                    label: "N° de Sécurité sociale",
                },
                {
                    ...fields.notes,
                    variant: "textarea",
                },
            ],
        },

        tax_office: {
            title: "Service des impôts",

            fields: [
                {
                    name: "organization_name",
                    label: "Service",
                },
                {
                    name: ["address", "postal_code", "city"],
                    label: "Adresse",
                },
                {
                    name: "identifier",
                    label: "N° fiscal",
                },
                {
                    ...fields.notes,
                    variant: "textarea",
                },
            ],
        },

        bank: {
            title: "Banque principale",

            fields: [
                {
                    name: "organization_name",
                    label: "Agence",
                },
                {
                    name: "contact_person",
                    label: "Conseiller",
                },
                {
                    name: ["address", "postal_code", "city"],
                    label: "Adresse",
                },
                {
                    name: "phone",
                    label: "Téléphone",
                },
                {
                    name: "email",
                    label: "Adresse électronique",
                },
                {
                    ...fields.notes,
                    variant: "textarea",
                },
            ],
        },

        other_organization: {
            title: "Autre organisme",

            fields: [
                {
                    name: "organization_name",
                    label: "Organisme",
                },
                {
                    name: "contact_person",
                    label: "Personne à contacter",
                },
                {
                    name: ["address", "postal_code", "city"],
                    label: "Adresse",
                },
                {
                    name: "phone",
                    label: "Téléphone",
                },
                {
                    name: "email",
                    label: "Adresse électronique",
                },
                {
                    ...fields.notes,
                    variant: "textarea",
                },
            ],
        },

        form: {
            add: {
                header: {
                    title: "Ajouter un organisme",
                    description: "Renseignez les informations concernant l’organisme.",
                },
            },

            edit: {
                header: {
                    title: "Modifier un organisme",
                    description: "Modifiez les informations concernant l’organisme.",
                },
            },

            fields: [
                {
                    ...fields.contact_type_organization,
                },
                {
                    ...fields.organization_name,
                    required: true,
                },
                {
                    ...fields.address,
                },
                {
                    ...fields.postal_code,
                },
                {
                    ...fields.city,
                },
                {
                    ...fields.phone_number,
                    name: "phone",
                    required: false,
                },
                {
                    ...fields.notes,
                    required: false,
                    variant: "textarea",
                },
            ],
        },
    },

    messages: {
        loading: messages.loading,
    },

    footer_form: {
        btn_cancel_label : cta.cancel,
        btn_recorded_label : cta.recorded,
    },

    actions: {
        title: "Actions",
        items: [
            {
                ...pageActionsDashboard.edit,
            },
            {
                ...pageActionsDashboard.history,
            },
            {
                ...pageActionsDashboard.downloadPdf,
            },
        ],
    },
}

export {
    protectedProfileDashboard,
}
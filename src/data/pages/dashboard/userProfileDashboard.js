import { cta, fields, messages } from "@/data/form";

const userProfileDashboard = {
    hero : {
        title : "Mon profil personnel",
        description: "Informations essentielles concernant mon identité, mon ou mes rôles et mes identifiants.",
    },

    identify : {
        header : {
            title : "Informations personnelles",
            btn_label : "Modifier",
        },
        fields : {
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
            address : {
                ...fields.address,
                label : "Adresse complète",
            },
            postal_code: {
                ...fields.postal_code,
            },
            city: {
                ...fields.city,
            },
            phone_number : {
                ...fields.phone_number,
            },
            email : {
                ...fields.email,
                label : "Adresse électronique",
            },
        },

        rows: [
            [
                "lastname",
                "firstname",
            ],
            [
                "birth_date",
                "birth_place",
                "nationality",
            ],
            [
                "address",
            ],
            [
                "postal_code",
                "city",
            ],
            [
                "phone_number",
                "email",
            ],
        ],

        messages: {
            loading: messages.loading,
        },

        footer: {
            btn_cancel_label : cta.cancel,
            btn_recorded_label : cta.recorded,
        }
    },

    complementary_information : {
        header : {
            title : "Mes informations complémentaires",
            btn_label : "Modifier",
            btn_url : "",
        },
        fields : {
            profession : {
                ...fields.profession,
            },
            practicing : {
                ...fields.practicing,
            },
            roles : {
                ...fields.roles,
            },
        },

        rows: [
            [
                "profession",
            ],
            [
                "practicing",
            ],
            [
                "roles",
            ],
        ],
        
        messages: {
            loading: messages.loading,
        },

        footer: {
            btn_cancel_label : cta.cancel,
            btn_recorded_label : cta.recorded,
        }

    },

    security : {
        header : {
            title : "Sécurité",
            btn_label : "Modifier",
        },

        modal : {
            title : "Modifier le mot de passe",
        },

        fields: {
            password: {
                title: "Mot de passe",
                value: "••••••••••••",
            },

            currentPassword: {
                ...fields.password,
                label: "Mot de passe actuel",
                name: "currentPassword",
            },

            newPassword: {
                ...fields.password,
                label: "Nouveau mot de passe",
                name: "newPassword",
            },

            confirmPassword: {
                ...fields.password,
                label: "Confirmation du nouveau mot de passe",
                name: "confirmPassword",
            },
        },

        rows: [
            ["currentPassword"],
            ["newPassword"],
            ["confirmPassword"],
        ],

        messages: {
            currentRequired: messages.password.currentRequired,
            newRequired: messages.password.newRequired,
            confirmRequired: messages.password.confirmRequired,
            passwordMismatch: messages.password.mismatch,
            loading: messages.loading,
        },

        footer: {
            btn_cancel_label : cta.cancel,
            btn_recorded_label : cta.recorded,
        },
    },
};

export {
    userProfileDashboard,
};
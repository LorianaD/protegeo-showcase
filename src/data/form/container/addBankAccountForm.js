import { cta } from "../cta";
import { fields } from "../fields";

const addBankAccountForm = {
    header: {
        create: {
            title: "Ajouter un compte bancaire",
            description: "Renseignez les informations du compte bancaire.",
        },

        update: {
            title: "Modifier un compte bancaire",
            description: "Modifiez les informations du compte bancaire.",
        },
    },

    fields: [
        fields.bank_name,
        fields.agency_name,
        fields.account_type,
        fields.account_label,
        fields.account_number,
        fields.bank_account_opened_at,
    ],

    actions: {
        cancel: cta.cancel,
        submit: cta.confirm,
        update: cta.recorded,
    },
};

export {
    addBankAccountForm,
};
import { cta, fields } from "..";

const addManagementAccountForm = {
    header: {
        title: "Ajouter un compte annuel",
        description: "Renseignez l’année et la période couverte par le compte.",
    },

    fields: [
        fields.management_account_year,
        fields.start_date,
        fields.end_date,
        fields.management_account_note,
    ],

    actions: {
        cancel: cta.cancel,
        submit: cta.recorded,
    },
};

export {
    addManagementAccountForm,
};
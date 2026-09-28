import { cta } from "../cta";
import { fields } from "../fields";

const editManagementAccountForm = {
    header: {
        title: "Modifier la période",
        description: "Modifiez les dates couvertes par ce compte de gestion.",
    },

    fields: [
        fields.start_date,
        fields.end_date,
    ],

    actions: {
        cancel: cta.cancel,
        submit: cta.recorded,
    },
};

export {
    editManagementAccountForm,
};
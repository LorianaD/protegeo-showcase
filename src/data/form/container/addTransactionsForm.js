import { cta, fields } from "..";

const resourceFields = [
    fields.bank_account_id,
    fields.transaction_category,
    fields.transaction_amount,
    fields.operation_date,
];

const expenseFields = [
    fields.bank_account_id,
    fields.transaction_category,
    fields.transaction_label,
    fields.transaction_amount,
    fields.operation_date,
    fields.payment_method,
];

const addTransactionForm = {
    resource: {
        header: {
            title: "Ajouter une ressource",
        },

        fields: resourceFields,

        actions: {
            cancel: cta.cancel,
            submit: cta.recorded,
        },
    },

    expense: {
        header: {
            title: "Ajouter une dépense",
        },

        fields: expenseFields,

        actions: {
            cancel: cta.cancel,
            submit: cta.recorded,
        },
    },
};

export {
    addTransactionForm,
};
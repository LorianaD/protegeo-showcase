import { cta, fields } from "@/data/form";

const addBankingTransactionForm = {
    header: {
        create: {
            title: "Ajouter un mouvement bancaire",
            description: "Enregistrez un mouvement entre deux comptes bancaires.",
        },
    },

    fields: [
        fields.source_bank_account_id,
        fields.destination_bank_account_id,
        fields.transaction_amount,
        fields.operation_date,
        fields.banking_movement_type,
    ],

    actions: {
        cancel: cta.cancel,
        submit: cta.recorded,
    },
};

export {
    addBankingTransactionForm,
};
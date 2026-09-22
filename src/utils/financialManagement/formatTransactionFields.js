import { getTransactionFieldValue } from "./getTransactionFieldValue";

/**
 * Prepares transaction fields for accordion display and edit modes.
 */
function formatTransactionFields(fields, fieldOrder, fieldLabels) {
    return fieldOrder
        .map((fieldName) =>
            fields.find((field) => field.name === fieldName)
        )
        .filter((field) => field !== undefined)
        .map((field) => ({
            ...field,
            label: fieldLabels[field.name],
            formatValue: (transaction) =>
                getTransactionFieldValue(field, transaction),
        }));
}

export {
    formatTransactionFields,
};
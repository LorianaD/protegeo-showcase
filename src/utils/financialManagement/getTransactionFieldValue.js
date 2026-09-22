import { formatCurrency, formatDate } from "@/utils";

/**
 * Formats a transaction field for display mode.
 */
function getTransactionFieldValue(field, transaction) {
    const value = transaction[field.name];

    if (field.name === "operation_date") {
        return formatDate(value);
    }

    if (field.name === "amount") {
        return formatCurrency(value);
    }

    if (field.options) {
        const option = field.options.find(
            (option) => String(option.value) === String(value)
        );

        return option?.label ?? "Non renseigné";
    }

    return value ?? "Non renseigné";
}

export {
    getTransactionFieldValue,
};
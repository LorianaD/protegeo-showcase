import { formatCurrency, formatDate } from "../format";
import { getTransactionCategoryTotal } from "./getTotal";

function formatTransactionEntries(transactions, defaultLabel) {
    return transactions.map((transaction) => ({
        id: transaction.id,

        label:
            transaction.label
            ?? defaultLabel,

        operationDate: formatDate(
            transaction.operation_date
        ),

        bankAccount:
            transaction.bank_account?.account_label
            ?? transaction.bank_account_label
            ?? "Non renseigné",

        paymentMethod:
            transaction.payment_method_label
            ?? transaction.payment_method
            ?? "Non renseigné",

        amount: formatCurrency(
            transaction.amount
        ),

        transaction,
    }));
}

function formatTransactionRows(
    items,
    transactions,
    transactionType
) {
    return items.map((item) => {
        const itemTransactions = transactions.filter(
            (transaction) =>
                transaction.transaction_type === transactionType
                && transaction.category_type === item.name
        );

        return {
            ...item,
            id: item.name,

            amount: formatCurrency(
                getTransactionCategoryTotal(
                    transactions,
                    transactionType,
                    item.name
                )
            ),

            entries: formatTransactionEntries(
                itemTransactions,
                item.label
            ),
        };
    });
}

function formatResourceRows(items, transactions) {
    return formatTransactionRows(
        items,
        transactions,
        "resource"
    );
}

function formatExpensesRows(items, transactions) {
    return formatTransactionRows(
        items,
        transactions,
        "expense"
    );
}

export {
    formatResourceRows,
    formatExpensesRows,
};
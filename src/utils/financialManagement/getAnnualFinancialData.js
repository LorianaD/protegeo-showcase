import { getTransactionTotal } from "./getTotal";

/**
 * Builds the financial data for an annual management account summary.
 *
 * @param {Array} transactions
 * @param {Array} previousManagementAccountTransactions
 * @returns {Object}
 */
function getAnnualFinancialData(
    transactions = [],
    previousManagementAccountTransactions = []
) {
    const previousResources = getTransactionTotal(
        previousManagementAccountTransactions,
        "resource"
    );

    const previousExpenses = getTransactionTotal(
        previousManagementAccountTransactions,
        "expense"
    );

    const previousBalance =
        previousResources - previousExpenses;

    const resources = getTransactionTotal(
        transactions,
        "resource"
    );

    const expenses = getTransactionTotal(
        transactions,
        "expense"
    );

    const finalBalance =
        previousBalance + resources - expenses;

    return {
        previousBalance,
        resources,
        expenses,
        finalBalance,
    };
}

export {
    getAnnualFinancialData,
};
import {
    getTransactionCategoryGroupTotal,
    getTransactionTotal,
} from "./getTotal";

/**
 * Builds the financial data shared by monthly account pages.
 *
 * @param {Array} monthTransactions
 * @param {Array} previousMonthTransactions
 * @param {number} previousResources
 * @param {number} previousExpenses
 * @returns {Object}
 */
function getMonthlyFinancialData(monthTransactions, previousMonthTransactions, previousResources = 0, previousExpenses = 0) {
    const previousMonthResources = getTransactionTotal(
        previousMonthTransactions,
        "resource"
    );

    const previousMonthExpenses = getTransactionTotal(
        previousMonthTransactions,
        "expense"
    );

    const currentMonthResources = getTransactionTotal(
        monthTransactions,
        "resource"
    );

    const currentMonthExpenses = getTransactionTotal(
        monthTransactions,
        "expense"
    );

    const previousBalance = previousResources - previousExpenses;

    const resourcesBalance = previousResources + currentMonthResources;

    const expensesBalance = previousExpenses + currentMonthExpenses;

    const finalBalance = previousBalance + currentMonthResources - currentMonthExpenses;

    return {
        previousMonthResources,
        previousMonthExpenses,
        currentMonthResources,
        currentMonthExpenses,
        previousBalance,
        resourcesBalance,
        expensesBalance,
        finalBalance,

    };
}

export {
    getMonthlyFinancialData,
};
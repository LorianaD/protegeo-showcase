import {
    getTransactionCategoryGroupTotal,
    getTransactionTotal,
} from "./getTotal";

/**
 * Builds the financial data shared by monthly account pages.
 *
 * @param {Array} monthTransactions
 * @param {Array} previousMonthTransactions
 * @returns {Object}
 */
function getMonthlyFinancialData(monthTransactions, previousMonthTransactions, previousBalance = 0) {
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

    return {
        previousMonthResources,
        previousMonthExpenses,
        currentMonthResources,
        currentMonthExpenses,

        finalBalance: previousBalance + currentMonthResources - currentMonthExpenses,

        resources: {
            income: getTransactionCategoryGroupTotal(
                monthTransactions,
                "resource",
                "income"
            ),

            allowances: getTransactionCategoryGroupTotal(
                monthTransactions,
                "resource",
                "allowances"
            ),

            investment_income: getTransactionCategoryGroupTotal(
                monthTransactions,
                "resource",
                "investment_income"
            ),

            other_resources: getTransactionCategoryGroupTotal(
                monthTransactions,
                "resource",
                "other_resources"
            ),
        },

        expenses: {
            current_expenses: getTransactionCategoryGroupTotal(
                monthTransactions,
                "expense",
                "current_expenses"
            ),

            housing: getTransactionCategoryGroupTotal(
                monthTransactions,
                "expense",
                "housing"
            ),

            insurance: getTransactionCategoryGroupTotal(
                monthTransactions,
                "expense",
                "insurance"
            ),

            home_care: getTransactionCategoryGroupTotal(
                monthTransactions,
                "expense",
                "home_care"
            ),

            taxes: getTransactionCategoryGroupTotal(
                monthTransactions,
                "expense",
                "taxes"
            ),

            major_purchases: getTransactionCategoryGroupTotal(
                monthTransactions,
                "expense",
                "major_purchases"
            ),

            investments: getTransactionCategoryGroupTotal(
                monthTransactions,
                "expense",
                "investments"
            ),

            repairs: getTransactionCategoryGroupTotal(
                monthTransactions,
                "expense",
                "repairs"
            ),

            loans: getTransactionCategoryGroupTotal(
                monthTransactions,
                "expense",
                "loans"
            ),

            other_expenses: getTransactionCategoryGroupTotal(
                monthTransactions,
                "expense",
                "other_expenses"
            ),
        },
    };
}

export {
    getMonthlyFinancialData,
};
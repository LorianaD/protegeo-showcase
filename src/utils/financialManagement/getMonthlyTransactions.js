/**
 * Returns the transactions matching a selected month.
 *
 * @param {Array} transactions
 * @param {string} selectedMonth
 * @returns {Array}
 */
function getMonthlyTransactions(transactions, selectedMonth) {
    if (!selectedMonth) {
        return [];
    }

    return transactions.filter((transaction) => {
        if (!transaction.operation_date) {
            return false;
        }

        return transaction.operation_date.slice(0, 7) === selectedMonth;
    });
}

/**
 * Returns the month preceding the selected month.
 *
 * @param {string} selectedMonth
 * @returns {string}
 */
function getPreviousMonth(selectedMonth) {
    if (!selectedMonth) {
        return "";
    }

    const [year, month] = selectedMonth
        .split("-")
        .map(Number);

    const previousMonthDate = new Date(
        year,
        month - 2,
        1
    );

    const previousYear = previousMonthDate.getFullYear();

    const previousMonth = String(
        previousMonthDate.getMonth() + 1
    ).padStart(2, "0");

    return `${previousYear}-${previousMonth}`;
}

function formatMonthLabel(selectedMonth, monthDefinitions) {
    if (!selectedMonth) {
        return "";
    }

    const [year, month] = selectedMonth
        .split("-")
        .map(Number);

    const monthDefinition = monthDefinitions.find(
        (monthDefinition) => monthDefinition.value === month
    );

    if (!monthDefinition) {
        return "";
    }

    return `${monthDefinition.label} ${year}`;
}

export {
    getMonthlyTransactions,
    getPreviousMonth,
    formatMonthLabel,
};
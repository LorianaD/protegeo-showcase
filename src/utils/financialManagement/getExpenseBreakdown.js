function getExpenseBreakdown(transactions, startDate, endDate) {
    if (!startDate || !endDate) {
        return [];
    }

    const periodStart = new Date(startDate);
    const periodEnd = new Date(endDate);

    const expensesByCategory = {};

    transactions.forEach((transaction) => {
        if (transaction.transaction_type !== "expense") {
            return;
        }

        const transactionDate = new Date(
            transaction.operation_date
        );

        // Only include expenses from the selected management period.
        if (
            transactionDate < periodStart
            || transactionDate > periodEnd
        ) {
            return;
        }

        const category = transaction.category_group;
        const amount = Number(transaction.amount);

        if (!expensesByCategory[category]) {
            expensesByCategory[category] = 0;
        }

        expensesByCategory[category] += amount;
    });

    return Object.entries(expensesByCategory).map(
        ([category, amount]) => ({
            category,
            amount,
        })
    );
}

export {
    getExpenseBreakdown,
};
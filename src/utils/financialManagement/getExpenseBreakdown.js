function getExpenseBreakdown(transactions) {
    const expensesByCategory = {};

    transactions.forEach((transaction) => {
        if (transaction.transaction_type !== "expense") {
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
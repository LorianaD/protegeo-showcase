function getMonthlyEvolution(transactions, startDate, endDate) {
    if (!startDate || !endDate) {
        return [];
    }

    const periodStart = new Date(startDate);
    const periodEnd = new Date(endDate);

    const monthlyEvolution = [];

    const currentMonth = new Date(
        periodStart.getFullYear(),
        periodStart.getMonth(),
        1
    );

    const lastMonth = new Date(
        periodEnd.getFullYear(),
        periodEnd.getMonth(),
        1
    );

    // Build every month included in the management account period.
    while (currentMonth <= lastMonth) {
        monthlyEvolution.push({
            key: `${currentMonth.getFullYear()}-${currentMonth.getMonth()}`,
            month: currentMonth.toLocaleDateString("fr-FR", {
                month: "short",
                year: "2-digit",
            }),
            resources: 0,
            expenses: 0,
        });

        currentMonth.setMonth(currentMonth.getMonth() + 1);
    }

    transactions.forEach((transaction) => {
        const transactionDate = new Date(transaction.operation_date);

        // Ignore transactions outside the selected management account period.
        if (
            transactionDate < periodStart
            || transactionDate > periodEnd
        ) {
            return;
        }

        const monthKey =
            `${transactionDate.getFullYear()}-${transactionDate.getMonth()}`;

        const monthData = monthlyEvolution.find(
            (item) => item.key === monthKey
        );

        if (!monthData) {
            return;
        }

        const amount = Number(transaction.amount);

        if (transaction.transaction_type === "resource") {
            monthData.resources += amount;
        }

        if (transaction.transaction_type === "expense") {
            monthData.expenses += amount;
        }
    });

    return monthlyEvolution;
}

export {
    getMonthlyEvolution,
};
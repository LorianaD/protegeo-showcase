function getMonthlyEvolution(transactions) {
    const months = [
        "Jan",
        "Fév",
        "Mar",
        "Avr",
        "Mai",
        "Juin",
        "Juil",
        "Août",
        "Sep",
        "Oct",
        "Nov",
        "Déc",
    ];

    const monthlyEvolution = months.map((month) => ({
        month,
        resources: 0,
        expenses: 0,
    }));

    transactions.forEach((transaction) => {
        const date = new Date(transaction.operation_date);
        const monthIndex = date.getMonth();
        const amount = Number(transaction.amount);

        if (transaction.transaction_type === "income") {
            monthlyEvolution[monthIndex].resources += amount;
        }

        if (transaction.transaction_type === "expense") {
            monthlyEvolution[monthIndex].expenses += amount;
        }
    });

    return monthlyEvolution;
}

export {
    getMonthlyEvolution,
};
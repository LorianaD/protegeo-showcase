function getMonthlyUpdateDate(
    transactions,
    selectedPeriod,
    currentDate = new Date()
) {
    const selectedYear = selectedPeriod === "annual"
        ? currentDate.getFullYear()
        : Number(selectedPeriod?.slice(0, 4));

    const currentMonth = [
        currentDate.getFullYear(),
        String(currentDate.getMonth() + 1).padStart(2, "0"),
    ].join("-");

    if (
        selectedPeriod === currentMonth
        || selectedPeriod === "annual"
    ) {
        return currentDate;
    }

    const transactionDates = transactions
        .map((transaction) => transaction.operation_date)
        .filter((operationDate) => operationDate)
        .map((operationDate) => new Date(operationDate))
        .filter((operationDate) => !Number.isNaN(
            operationDate.getTime()
        ));

    if (transactionDates.length === 0) {
        return null;
    }

    return new Date(
        Math.max(
            ...transactionDates.map(
                (operationDate) => operationDate.getTime()
            )
        )
    );
}

export {
    getMonthlyUpdateDate,
};
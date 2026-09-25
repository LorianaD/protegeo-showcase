import { useEffect, useState } from "react";

function useFinancialManagementStats(transactions, startDate, endDate) {
    const [statsData, setStatsData] = useState({
        annualResources: 0,
        annualExpenditure: 0,
        estimatedBalance: 0,
        missingDocuments: 0,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function calculateStats() {
        try {
            setLoading(true);
            setError(null);

            let annualResources = 0;
            let annualExpenditure = 0;

            if (!startDate || !endDate) {
                return;
            }

            const periodStart = new Date(startDate);
            const periodEnd = new Date(endDate);

            transactions.forEach((transaction) => {
                const transactionDate = new Date(
                    transaction.operation_date
                );

                // Only include transactions from the selected management period.
                if (
                    transactionDate < periodStart
                    || transactionDate > periodEnd
                ) {
                    return;
                }

                const amount = Number(transaction.amount);

                if (transaction.transaction_type === "resource") {
                    annualResources += amount;
                }

                if (transaction.transaction_type === "expense") {
                    annualExpenditure += amount;
                }
            });

            setStatsData({
                annualResources,
                annualExpenditure,
                estimatedBalance:
                    annualResources - annualExpenditure,
                missingDocuments: 0,
            });
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        calculateStats();
    }, [transactions, startDate, endDate]);

    return {
        statsData,
        loading,
        error,
    };
}

export {
    useFinancialManagementStats,
};
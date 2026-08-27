import { useEffect, useState } from "react";

function useFinancialManagementStats(transactions, managementAccountId) {
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

            transactions.forEach((transaction) => {
                const amount = Number(transaction.amount);

                if (transaction.transaction_type === "income") {
                    annualResources += amount;
                }

                if (transaction.transaction_type === "expense") {
                    annualExpenditure += amount;
                }
            });

            setStatsData({
                annualResources,
                annualExpenditure,
                estimatedBalance: annualResources - annualExpenditure,
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
    }, [transactions]);

    return {
        statsData,
        loading,
        error,
    };
}

export {
    useFinancialManagementStats,
};
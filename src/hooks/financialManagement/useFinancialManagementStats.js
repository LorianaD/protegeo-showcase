import { getFinancialManagementStatsService } from "@/services";
import { useEffect, useState } from "react";

function useFinancialManagementStats(reference, year) {
    const [statsData, setStatsData] = useState({
        annualResources: 0,
        annualExpenditure: 0,
        estimatedBalance: 0,
        missingDocuments: 0,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    async function fetchFinancialManagementStats() {
        if (!reference || !year) {
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const data = await getFinancialManagementStatsService(reference, year);

            setStatsData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchFinancialManagementStats();
    }, [reference, year]);

    return {
        statsData,
        loading,
        error,
    };
}

export {
    useFinancialManagementStats,
};
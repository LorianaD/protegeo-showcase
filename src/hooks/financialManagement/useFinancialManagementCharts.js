import { getExpenseBreakdown, getMonthlyEvolution } from "@/utils";
import { useEffect, useState } from "react";

function useFinancialManagementCharts(transactions, managementAccountId) {
    const [monthlyEvolution, setMonthlyEvolution] = useState([]);
    const [expenseBreakdown, setExpenseBreakdown] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function calculateCharts() {
        try {
            setLoading(true);
            setError(null);

            setMonthlyEvolution(
                getMonthlyEvolution(transactions)
            );

            setExpenseBreakdown(
                getExpenseBreakdown(transactions)
            );
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        calculateCharts();
    }, [transactions]);

    return {
        monthlyEvolution,
        expenseBreakdown,
        loading,
        error,
    };
}

export {
    useFinancialManagementCharts,
};
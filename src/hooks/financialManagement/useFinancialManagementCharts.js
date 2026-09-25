import { getExpenseBreakdown, getMonthlyEvolution } from "@/utils";
import { useEffect, useState } from "react";

function useFinancialManagementCharts(transactions, startDate, endDate) {
    const [monthlyEvolution, setMonthlyEvolution] = useState([]);
    const [expenseBreakdown, setExpenseBreakdown] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function calculateCharts() {
        try {
            setLoading(true);
            setError(null);

            setMonthlyEvolution(
                getMonthlyEvolution(
                    transactions,
                    startDate,
                    endDate
                )
            );

            setExpenseBreakdown(
                getExpenseBreakdown(transactions, startDate, endDate)
            );
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        calculateCharts();
    }, [transactions, startDate, endDate]);

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
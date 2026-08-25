import { getDossierByReferenceService, getManagementAccountsService, getTransactionsService } from "@/services";
import { getExpenseBreakdown, getMonthlyEvolution } from "@/utils";
import { useEffect, useState } from "react";

function useFinancialManagementCharts(reference, year) {
    const [monthlyEvolution, setMonthlyEvolution] = useState([]);
    const [expenseBreakdown, setExpenseBreakdown] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchFinancialManagementCharts() {
        if (!reference || !year) {
            setMonthlyEvolution([]);
            setExpenseBreakdown([]);
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const dossier = await getDossierByReferenceService(reference);

            const managementAccounts = await getManagementAccountsService(
                dossier.id
            );

            const managementAccount = managementAccounts.find(
                (account) => Number(account.year) === Number(year)
            );

            if (!managementAccount) {
                setMonthlyEvolution([]);
                setExpenseBreakdown([]);
                return;
            }

            const transactions = await getTransactionsService(
                dossier.id,
                managementAccount.id
            );

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
        fetchFinancialManagementCharts();
    }, [reference, year]);

    return {
        monthlyEvolution,
        expenseBreakdown,
        loading,
        error,
    };
}

export {
    useFinancialManagementCharts,
}
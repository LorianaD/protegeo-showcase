import { useEffect, useState } from "react";
import { getTransactionsService } from "@/services";

function useTransactions(dossierId, managementAccountId, refreshKey = 0) {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchTransactions() {
        try {
            setLoading(true);
            setError(null);

            const data = await getTransactionsService(
                dossierId,
                managementAccountId
            );

            setTransactions(data);
        } catch (error) {
            setTransactions([]);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setTransactions([]);
        setError(null);

        if (!dossierId || !managementAccountId) {
            setLoading(false);
            return;
        }

        fetchTransactions();
    }, [dossierId, managementAccountId, refreshKey]);

    return {
        transactions,
        loading,
        error,
    };
}

export {
    useTransactions,
};
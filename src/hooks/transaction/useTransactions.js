import { useEffect, useState } from "react";
import { getTransactionsService } from "@/services";

function useTransactions(dossierId, managementAccountId) {
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
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (!dossierId || !managementAccountId) {
            return;
        }

        fetchTransactions();
    }, [dossierId, managementAccountId]);

    return {
        transactions,
        loading,
        error,
    };
}

export {
    useTransactions,
};
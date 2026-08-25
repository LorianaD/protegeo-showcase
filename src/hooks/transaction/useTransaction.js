import { useEffect, useState } from "react";
import { getTransactionService } from "@/services";

function useTransaction(dossierId, managementAccountId, transactionId) {
    const [transaction, setTransaction] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchTransaction() {
        try {
            setLoading(true);
            setError(null);

            const data = await getTransactionService(
                dossierId,
                managementAccountId,
                transactionId
            );

            setTransaction(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (!dossierId || !managementAccountId || !transactionId) {
            return;
        }

        fetchTransaction();
    }, [dossierId, managementAccountId, transactionId]);

    return {
        transaction,
        loading,
        error,
    };
}

export {
    useTransaction,
};
import { useState } from "react";
import { updateTransactionService } from "@/services";

function useUpdateTransaction() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function updateTransaction(dossierId, managementAccountId, transactionId, transactionData) {
        try {
            setLoading(true);
            setError(null);

            return await updateTransactionService(
                dossierId,
                managementAccountId,
                transactionId,
                transactionData
            );
        } catch (error) {
            setError(error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    }

    return {
        updateTransaction,
        loading,
        error,
    };
}

export {
    useUpdateTransaction,
};
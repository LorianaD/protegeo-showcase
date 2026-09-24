import { useState } from "react";
import { deleteTransactionService } from "@/services";

function useDeleteTransaction() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function deleteTransaction(dossierId, managementAccountId, transactionId) {
        try {
            setLoading(true);
            setError(null);

            const data = await deleteTransactionService(
                dossierId,
                managementAccountId,
                transactionId
            );

            return data;
        } catch (error) {
            setError(error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    }

    return {
        deleteTransaction,
        loading,
        error,
    };
}

export {
    useDeleteTransaction,
};
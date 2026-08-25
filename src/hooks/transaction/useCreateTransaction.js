import { useState } from "react";
import { createTransactionService } from "@/services";

function useCreateTransaction() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function createTransaction(dossierId, managementAccountId, transactionData) {
        try {
            setLoading(true);
            setError(null);

            return await createTransactionService(
                dossierId,
                managementAccountId,
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
        createTransaction,
        loading,
        error,
    };
}

export {
    useCreateTransaction,
};
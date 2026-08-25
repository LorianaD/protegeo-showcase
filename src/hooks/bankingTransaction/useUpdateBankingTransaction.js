import { useState } from "react";
import { updateBankingTransactionService } from "@/services";

function useUpdateBankingTransaction() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function updateBankingTransaction(dossierId, bankingTransactionId, bankingTransactionData) {
        try {
            setLoading(true);
            setError(null);

            const data = await updateBankingTransactionService(
                dossierId,
                bankingTransactionId,
                bankingTransactionData
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
        updateBankingTransaction,
        loading,
        error,
    };
}

export {
    useUpdateBankingTransaction,
};
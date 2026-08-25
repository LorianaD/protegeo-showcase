import { useState } from "react";
import { deleteBankingTransactionService } from "@/services";

function useDeleteBankingTransaction() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function deleteBankingTransaction(dossierId, bankingTransactionId) {
        try {
            setLoading(true);
            setError(null);

            const data = await deleteBankingTransactionService(
                dossierId,
                bankingTransactionId
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
        deleteBankingTransaction,
        loading,
        error,
    };
}

export {
    useDeleteBankingTransaction,
};
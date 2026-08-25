import { useState } from "react";
import { createBankingTransactionService } from "@/services";

function useCreateBankingTransaction() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function createBankingTransaction(dossierId, bankingTransactionData) {
        try {
            setLoading(true);
            setError(null);

            const data = await createBankingTransactionService(
                dossierId,
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
        createBankingTransaction,
        loading,
        error,
    };
}

export {
    useCreateBankingTransaction,
};
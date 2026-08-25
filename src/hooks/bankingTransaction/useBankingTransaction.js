import { useEffect, useState } from "react";
import { getBankingTransactionService } from "@/services";

function useBankingTransaction(dossierId, bankingTransactionId) {
    const [bankingTransaction, setBankingTransaction] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchBankingTransaction() {
        try {
            setLoading(true);
            setError(null);

            const data = await getBankingTransactionService(
                dossierId,
                bankingTransactionId
            );

            setBankingTransaction(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (!dossierId || !bankingTransactionId) {
            return;
        }

        fetchBankingTransaction();
    }, [dossierId, bankingTransactionId]);

    return {
        bankingTransaction,
        loading,
        error,
    };
}

export {
    useBankingTransaction,
};
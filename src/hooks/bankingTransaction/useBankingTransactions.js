import { useEffect, useState } from "react";
import { getBankingTransactionsService } from "@/services";

function useBankingTransactions(dossierId) {
    const [bankingTransactions, setBankingTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchBankingTransactions() {
        try {
            setLoading(true);
            setError(null);

            const data = await getBankingTransactionsService(dossierId);

            setBankingTransactions(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (!dossierId) {
            return;
        }

        fetchBankingTransactions();
    }, [dossierId]);

    return {
        bankingTransactions,
        loading,
        error,
    };
}

export {
    useBankingTransactions,
};
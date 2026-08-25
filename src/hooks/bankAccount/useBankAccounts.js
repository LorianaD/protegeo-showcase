import { useEffect, useState } from "react";
import { getBankAccountsService } from "@/services";

function useBankAccounts(dossierId) {
    const [bankAccounts, setBankAccounts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchBankAccounts() {
        try {
            setLoading(true);
            setError(null);

            const data = await getBankAccountsService(dossierId);

            setBankAccounts(data);
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

        fetchBankAccounts();
    }, [dossierId]);

    return {
        bankAccounts,
        loading,
        error,
    };
}

export {
    useBankAccounts,
};
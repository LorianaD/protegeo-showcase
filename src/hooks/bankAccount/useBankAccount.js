import { useEffect, useState } from "react";
import { getBankAccountService } from "@/services";

function useBankAccount(dossierId, bankAccountId) {
    const [bankAccount, setBankAccount] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchBankAccount() {
        try {
            setLoading(true);
            setError(null);

            const data = await getBankAccountService(
                dossierId,
                bankAccountId
            );

            setBankAccount(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (!dossierId || !bankAccountId) {
            return;
        }

        fetchBankAccount();
    }, [dossierId, bankAccountId]);

    return {
        bankAccount,
        loading,
        error,
    };
}

export {
    useBankAccount,
};
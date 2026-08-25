import { useState } from "react";
import { updateBankAccountService } from "@/services";

function useUpdateBankAccount() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function updateBankAccount(dossierId, bankAccountId, bankAccountData) {
        try {
            setLoading(true);
            setError(null);

            const data = await updateBankAccountService(
                dossierId,
                bankAccountId,
                bankAccountData
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
        updateBankAccount,
        loading,
        error,
    };
}

export {
    useUpdateBankAccount,
};
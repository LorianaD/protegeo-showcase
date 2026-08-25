import { useState } from "react";
import { createBankAccountService } from "@/services";

function useCreateBankAccount() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function createBankAccount(dossierId, bankAccountData) {
        try {
            setLoading(true);
            setError(null);

            const data = await createBankAccountService(
                dossierId,
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
        createBankAccount,
        loading,
        error,
    };
}

export {
    useCreateBankAccount,
};
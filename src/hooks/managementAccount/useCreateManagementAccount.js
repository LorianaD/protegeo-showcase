import { useState } from "react";
import { createManagementAccountService } from "@/services";

function useCreateManagementAccount() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function createManagementAccount(dossierId, managementAccountData) {
        try {
            setLoading(true);
            setError(null);

            return await createManagementAccountService(
                dossierId,
                managementAccountData
            );
        } catch (error) {
            setError(error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    }

    return {
        createManagementAccount,
        loading,
        error,
    };
}

export {
    useCreateManagementAccount,
};
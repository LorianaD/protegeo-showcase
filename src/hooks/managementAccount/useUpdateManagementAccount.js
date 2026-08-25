import { useState } from "react";
import { updateManagementAccountService } from "@/services";

function useUpdateManagementAccount() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function updateManagementAccount(dossierId, managementAccountId, managementAccountData) {
        try {
            setLoading(true);
            setError(null);

            return await updateManagementAccountService(
                dossierId,
                managementAccountId,
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
        updateManagementAccount,
        loading,
        error,
    };
}

export {
    useUpdateManagementAccount,
};
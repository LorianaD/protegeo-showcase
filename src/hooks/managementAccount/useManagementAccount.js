import { useEffect, useState } from "react";
import { getManagementAccountService } from "@/services";

function useManagementAccount(dossierId, managementAccountId) {
    const [managementAccount, setManagementAccount] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchManagementAccount() {
        try {
            setLoading(true);
            setError(null);

            const data = await getManagementAccountService(
                dossierId,
                managementAccountId
            );

            setManagementAccount(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (!dossierId || !managementAccountId) {
            return;
        }

        fetchManagementAccount();
    }, [dossierId, managementAccountId]);

    return {
        managementAccount,
        loading,
        error,
    };
}

export {
    useManagementAccount,
};
import { useEffect, useState } from "react";
import { getManagementAccountsService } from "@/services";

function useManagementAccounts(dossierId) {
    const [managementAccounts, setManagementAccounts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchManagementAccounts() {
        try {
            setLoading(true);
            setError(null);

            const data = await getManagementAccountsService(dossierId);

            setManagementAccounts(data);
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

        fetchManagementAccounts();
    }, [dossierId]);

    return {
        managementAccounts,
        loading,
        error,
    };
}

export {
    useManagementAccounts,
};
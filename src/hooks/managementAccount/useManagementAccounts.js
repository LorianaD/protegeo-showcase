import { useEffect, useState } from "react";
import { getManagementAccountsService } from "@/services";

function useManagementAccounts(dossierId) {
    const [managementAccounts, setManagementAccounts] = useState([]);
    const [loadedDossierId, setLoadedDossierId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchManagementAccounts() {
        try {
            setLoading(true);
            setError(null);

            const data = await getManagementAccountsService(dossierId);

            setManagementAccounts(data);
            setLoadedDossierId(dossierId);
        } catch (error) {
            setManagementAccounts([]);
            setLoadedDossierId(null);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (!dossierId) {
            setManagementAccounts([]);
            setLoadedDossierId(null);
            setLoading(false);
            setError(null);
            return;
        }

        fetchManagementAccounts();
    }, [dossierId]);

    const currentManagementAccounts =
        loadedDossierId === dossierId ? managementAccounts : [];

    return {
        managementAccounts: currentManagementAccounts,
        loading: loadedDossierId !== dossierId || loading,
        error,
    };
}

export {
    useManagementAccounts,
};
import { apiFetch } from "@/services";

async function getTransactionsService(dossierId, managementAccountId, query = "") {
    const data = await apiFetch(`/dossiers/${dossierId}/management-accounts/${managementAccountId}/transactions${query}`, {
            method: "GET",
        }
    );

    return data;
}

export {
    getTransactionsService,
};
import { apiFetch } from "@/services";

async function getTransactionService(dossierId, managementAccountId, transactionId) {
    const data = await apiFetch(`/dossiers/${dossierId}/management-accounts/${managementAccountId}/transactions/${transactionId}`, {
            method: "GET",
        }
    );

    return data;
}

export {
    getTransactionService,
};
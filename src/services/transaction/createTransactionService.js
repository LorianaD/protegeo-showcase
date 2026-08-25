import { apiFetch } from "@/services";

async function createTransactionService(dossierId, managementAccountId, transactionData) {
    const data = await apiFetch(`/dossiers/${dossierId}/management-accounts/${managementAccountId}/transactions`, {
        method: "POST",
        body: transactionData,
    });

    return data;
}

export {
    createTransactionService,
}
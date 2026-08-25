import { apiFetch } from "@/services";

async function updateTransactionService(dossierId, managementAccountId, transactionId, transactionData) {
    const data = await apiFetch(`/dossiers/${dossierId}/management-accounts/${managementAccountId}/transactions/${transactionId}`, {
        method: "PATCH",
        body: transactionData,
    })

    return data;
}

export {
    updateTransactionService,
}
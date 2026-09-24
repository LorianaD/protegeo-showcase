import { apiFetch } from "../api";

async function deleteTransactionService(dossierId, managementAccountId, transactionId) {
    const data = await apiFetch(`/dossiers/${dossierId}/management-accounts/${managementAccountId}/transactions/${transactionId}`, {
            method: "DELETE",
        }
    );

    return data;
}

export {
    deleteTransactionService,
};
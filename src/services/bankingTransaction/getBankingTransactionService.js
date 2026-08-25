import { apiFetch } from "@/services";

async function getBankingTransactionsService(dossierId, bankingTransactionId) {
    const data = await apiFetch(`/dossiers/${dossierId}/banking-transactions/${bankingTransactionId}`, {
        method: "GET",
    });

    return data;
}

export {
    getBankingTransactionsService,
}
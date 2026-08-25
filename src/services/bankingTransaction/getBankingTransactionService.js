import { apiFetch } from "@/services";

async function getBankingTransactionService(dossierId, bankingTransactionId) {
    const data = await apiFetch(`/dossiers/${dossierId}/banking-transactions/${bankingTransactionId}`, {
        method: "GET",
    });

    return data;
}

export {
    getBankingTransactionService,
}
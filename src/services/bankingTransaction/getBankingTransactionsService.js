import { apiFetch } from "@/services";

async function getBankingTransactionsService(dossierId) {
    const data = await apiFetch(`/dossiers/${dossierId}/banking-transactions`, {
        method: "GET",
    });

    return data;
}

export {
    getBankingTransactionsService,
}
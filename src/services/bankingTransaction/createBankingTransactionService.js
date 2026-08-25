import { apiFetch } from "@/services";

async function createBankingTransactionService(dossierId, bankingTransactionData) {
    const data = await apiFetch(`/dossiers/${dossierId}/banking-transactions`, {
            method: "POST",
            body: bankingTransactionData,
        }
    );

    return data;
}

export {
    createBankingTransactionService,
};
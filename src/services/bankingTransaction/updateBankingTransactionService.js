import { apiFetch } from "@/services";

async function updateBankingTransactionService(dossierId, bankingTransactionId, bankingTransactionData) {
    const data = await apiFetch(`/dossiers/${dossierId}/banking-transactions/${bankingTransactionId}`, {
            method: "PATCH",
            body: JSON.stringify(bankingTransactionData),
        }
    );

    return data;
}

export {
    updateBankingTransactionService,
};
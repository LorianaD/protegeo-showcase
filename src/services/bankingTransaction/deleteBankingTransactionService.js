import { apiFetch } from "@/services";

async function deleteBankingTransactionService(dossierId, bankingTransactionId) {
    const data = await apiFetch(`/dossiers/${dossierId}/banking-transactions/${bankingTransactionId}`, {
            method: "DELETE",
        }
    );

    return data;
}

export {
    deleteBankingTransactionService,
};
import { apiFetch } from "@/services";

async function updateBankAccountService(dossierId, bankAccountId, bankAccountData) {
    const data = await apiFetch(`/dossiers/${dossierId}/bank-accounts/${bankAccountId}`, {
            method: "PATCH",
            body: bankAccountData,
        }
    );

    return data;
}

export {
    updateBankAccountService,
};
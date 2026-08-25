import { apiFetch } from "@/services";

async function createBankAccountService(dossierId, bankAccountId, bankAccountData) {
    const data = await apiFetch(`/dossiers/${dossierId}/bank-accounts/${bankAccountId}`, {
            method: "POST",
            body: bankAccountData,
        }
    );

    return data;
}

export {
    createBankAccountService,
};
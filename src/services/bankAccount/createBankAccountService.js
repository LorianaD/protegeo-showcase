import { apiFetch } from "@/services";

async function createBankAccountService(dossierId, bankAccountData) {
    const data = await apiFetch(`/dossiers/${dossierId}/bank-accounts`, {
            method: "POST",
            body: JSON.stringify(bankAccountData),
        }
    );

    return data;
}

export {
    createBankAccountService,
};
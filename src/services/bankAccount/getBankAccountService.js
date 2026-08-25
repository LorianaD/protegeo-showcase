import { apiFetch } from "@/services";

async function getBankAccountService(dossierId, bankAccountId) {
    const data = await apiFetch(`/dossiers/${dossierId}/bank-accounts/${bankAccountId}`, {
            method: "GET",
        }
    );

    return data;
}

export {
    getBankAccountService,
};
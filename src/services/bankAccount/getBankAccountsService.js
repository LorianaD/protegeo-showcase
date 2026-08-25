import { apiFetch } from "@/services";

async function getBankAccountsService(dossierId) {
    const data = await apiFetch(`/dossiers/${dossierId}/bank-accounts`, {
        method: "GET",
    });

    return data;    
}

export {
    getBankAccountsService,
}
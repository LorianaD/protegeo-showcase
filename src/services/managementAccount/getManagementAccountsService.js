import { apiFetch } from "@/services";

async function getManagementAccountsService(dossierId) {
    const data = await apiFetch(`/dossiers/${dossierId}/management-accounts`, {
        method: "GET",
    });

    return data;
}

export {
    getManagementAccountsService,
};
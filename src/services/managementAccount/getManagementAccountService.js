import { apiFetch } from "../api"

async function getManagementAccountService(dossierId, year) {
    const data = await apiFetch(`/dossiers/${dossierId}/management-accounts/{managementAccountId}`, {
        methhod: "GET",
    });

    return data;
}

export {
    getManagementAccountService,
}
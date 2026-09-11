import { apiFetch } from "@/services";

async function getManagementAccountService(dossierId, managementAccountId) {
    const data = await apiFetch(`/dossiers/${dossierId}/management-accounts/${managementAccountId}`, {
        methhod: "GET",
    });

    return data;
}

export {
    getManagementAccountService,
}
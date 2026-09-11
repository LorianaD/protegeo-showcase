import { apiFetch } from "@/services";

async function updateManagementAccountService(dossierId, managementAccountId, managementAccountData) {
    const data = await apiFetch(`/dossiers/${dossierId}/management-accounts/${managementAccountId}`, {
            method: "PATCH",
            body: JSON.stringify(managementAccountData),
        }
    );

    return data;
}

export {
    updateManagementAccountService,
};
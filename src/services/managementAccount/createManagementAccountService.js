import { apiFetch } from "@/services";

async function createManagementAccountService(dossierId, managementAccountData) {
    const data = await apiFetch(`/dossiers/${dossierId}/management-accounts`, {
            method: "POST",
            body: managementAccountData,
        }
    );

    return data;
}

export {
    createManagementAccountService,
};
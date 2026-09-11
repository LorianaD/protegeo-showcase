import { apiFetch } from "@/services";

async function getProtectedPersonService(dossierId) {
    const data = await apiFetch(`/dossiers/${dossierId}/protected-person`, {
        method: "GET",
    });

    return data?.protected_person ?? null;
}

export {
    getProtectedPersonService,
};
import { apiFetch } from "@/services";

async function updateProtectedPersonService(dossierId, personData) {
    const data = await apiFetch(`/dossiers/${dossierId}/protected-person`, {
        method: "PATCH",
        body: JSON.stringify(personData),
    });

    return data?.protected_person ?? null;
}

export {
    updateProtectedPersonService,
};
import { apiFetch } from "@/services";

async function deleteProtectedPersonPhotoService(dossierId) {
    const data = await apiFetch(
        `/dossiers/${dossierId}/protected-person/photo`,
        {
            method: "DELETE",
        }
    );

    return data?.protected_person ?? null;
}

export {
    deleteProtectedPersonPhotoService,
};
import { apiFetch } from "@/services";

async function getProtectedPersonPhotoService(dossierId) {
    const data = await apiFetch(`/dossiers/${dossierId}/protected-person/photo`, {
            method: "GET",
            responseType: "blob",
        }
    );

    return data;
}

export {
    getProtectedPersonPhotoService,
};
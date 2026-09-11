import { apiFetch } from "@/services";

async function uploadProtectedPersonPhotoService(dossierId, photo) {
    const formData = new FormData();

    formData.append("photo", photo);

    const data = await apiFetch(`/dossiers/${dossierId}/protected-person/photo`, {
            method: "POST",
            body: formData,
        }
    );

    return data?.protected_person ?? null;
}

export {
    uploadProtectedPersonPhotoService,
};
import { apiFetch } from "../api"

async function updateDossierService(dossierId, dossierData) {
    const data = await apiFetch(`/dossiers/${dossierId}`, {
        method: "PATCH",
        body: JSON.stringify(dossierData),
    });

    return data;
}

export {
    updateDossierService,
}
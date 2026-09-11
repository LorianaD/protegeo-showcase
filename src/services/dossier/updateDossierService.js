import { apiFetch } from "@/services";

async function updateDossierService(dossierId, dossierData) {
    const data = await apiFetch(`/dossiers/${dossierId}`, {
        method: "PATCH",
        body: JSON.stringify(dossierData),
    });

    return data?.dossier ?? null;
}

export {
    updateDossierService,
}
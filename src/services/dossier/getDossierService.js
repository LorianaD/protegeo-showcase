import { apiFetch } from "../api";

async function getDossierService(dossierId) {
    const data = await apiFetch(`/dossiers/${dossierId}`, {
        method: "GET",
    })

    const dossier = data.dossier;

    if (!dossier) {
        return null;
    }

    return {
        id: dossier.id,
        reference_number: dossier.referenceNumber,
    };
}

export {
    getDossierService,
}
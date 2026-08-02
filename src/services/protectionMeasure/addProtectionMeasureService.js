import { apiFetch } from "../api";

/**
 * Creates a new protection measure for the selected dossier.
 */
async function addProtectionMeasureService(dossierId) {
    const data = await apiFetch(`/dossiers/${dossierId}/measure-protections`, {
        method: "POST",
    })

    return data;
}

export {
    addProtectionMeasureService,
}
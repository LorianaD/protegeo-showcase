import { apiFetch } from "@/services";

/**
 * Creates a new protection measure for the selected dossier.
 */
async function addProtectionMeasureService(dossierId) {
    const data = await apiFetch(`/dossiers/${dossierId}/measure-protections`, {
        method: "POST",
        body: JSON.stringify(measureData),
    })

    return data?.measure_protection ?? null;
}

export {
    addProtectionMeasureService,
}
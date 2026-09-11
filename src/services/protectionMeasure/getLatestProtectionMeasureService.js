import { apiFetch } from "@/services";

/**
 * Returns the latest protection measure associated with a dossier.
 */
async function getLatestProtectionMeasureService(dossierId) {
    const data = await apiFetch(
        `/dossiers/${dossierId}/measure-protections/latest`
    );

    return data?.measure_protection ?? null;
}

export {
    getLatestProtectionMeasureService,
};
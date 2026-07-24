import { apiFetch } from "../api";

async function getCurrentProtectionMeasureService(dossierId) {
    const data = await apiFetch(`/dossiers/${dossierId}/measure-protections/current`, {
        method: "GET",
    });

    const measure = data.measureProtection;

    if (!measure) {
        return null;
    }

    return data.measureProtection ?? null;
}

export {
    getCurrentProtectionMeasureService,
}
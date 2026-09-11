import { apiFetch } from "@/services";

async function getCurrentProtectionMeasureService(dossierId) {
    const data = await apiFetch(`/dossiers/${dossierId}/measure-protections/current`, {
        method: "GET",
    });

    return data?.measure_protection ?? null;
}

export {
    getCurrentProtectionMeasureService,
}
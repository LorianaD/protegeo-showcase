import { apiFetch } from "@/services";

async function updateProtectionMeasureService(dossierId, measureId, measureData) {
    const data = await apiFetch(`/dossiers/${dossierId}/measure-protections/${measureId}`, {
        method: "PATCH",
        body: JSON.stringify(measureData),
    });

    return data?.measure_protection ?? null;
}

export {
    updateProtectionMeasureService,
}
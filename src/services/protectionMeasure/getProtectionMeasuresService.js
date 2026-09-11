import { apiFetch } from "@/services";

async function getProtectionMeasuresService(dossierId) {
    const data = await apiFetch(`/dossiers/${dossierId}/measure-protections`, {
        method: "GET",
    });

    return data?.measure_protections ?? [];
}

export {
    getProtectionMeasuresService,
};
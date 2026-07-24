import { apiFetch } from "../api"

async function getProtectionMeasuresService(dossierId) {
    const data = await apiFetch(`/dossiers/${dossierId}/measure-protections`, {
        method: "GET",
    })

    return data.measureProtections ?? [];
}

export {
    getProtectionMeasuresService,
}
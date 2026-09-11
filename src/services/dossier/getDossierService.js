import { apiFetch } from "@/services";

async function getDossierService(dossierId) {
    const data = await apiFetch(`/dossiers/${dossierId}`, {
        method: "GET",
    })

    return data?.dossier ?? null;
}

export {
    getDossierService,
}
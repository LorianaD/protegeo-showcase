import { apiFetch } from "@/services";

async function addDossierService(dossierData) {
    const data = await apiFetch("/dossiers", {
        method: "POST",
        body: JSON.stringify(dossierData),
    });

    return data;
}

export {
    addDossierService,
}
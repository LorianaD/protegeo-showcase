import { apiFetch } from "../api";

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
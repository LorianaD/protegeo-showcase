import { apiFetch } from "@/services";

async function getDossierByReferenceService(referenceNumber) {
    const encodedReference = encodeURIComponent(referenceNumber);

    return await apiFetch(
        `/dossiers/reference/${encodedReference}`
    );
}

export {
    getDossierByReferenceService,
};
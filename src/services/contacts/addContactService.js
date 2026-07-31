import { apiFetch } from "../api"

/**
 * Creates a new contact for the selected protected person's dossier.
 */
async function addContactService(dossierId, contactData) {
    const data = await apiFetch(`/dossiers/${dossierId}/contacts`, {
        method: "POST",
        body: JSON.stringify(contactData),
    });

    return data;
}

export {
    addContactService,
}
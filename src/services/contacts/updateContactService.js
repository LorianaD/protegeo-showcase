import { apiFetch } from "../api";

/**
 * Updates an existing contact from the selected protected person's dossier.
 */
async function updateContactService(dossierId, contactId, contactData) {
    const data = await apiFetch(`/dossiers/${dossierId}/contacts/${contactId}`, {
        method: "PATCH",
        body: JSON.stringify(contactData),
    });

    return data;
}

export {
    updateContactService,
}
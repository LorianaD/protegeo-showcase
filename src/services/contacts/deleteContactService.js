import { apiFetch } from "../api";

/**
 * Delete an existing contact from the selected protected person's dossier.
 */
async function deleteContactService(dossierId, contactId) {
    const data = await apiFetch(`/dossiers/${dossierId}/contacts/${contactId}`, {
        method: "DELETE"
    });

    return data;
}

export {
    deleteContactService,
}
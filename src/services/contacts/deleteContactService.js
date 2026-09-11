import { apiFetch } from "@/services";

/**
 * Deletes an existing contact from the selected protected person's dossier.
 */
async function deleteContactService(dossierId, contactId) {
    await apiFetch(`/dossiers/${dossierId}/contacts/${contactId}`, {
        method: "DELETE",
    });

    return true;
}

export {
    deleteContactService,
};
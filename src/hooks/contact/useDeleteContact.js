import { deleteContactService } from "@/services";
import { useState } from "react";

/**
 * Manages the deletion of a contact linked to a dossier.
 */
function useDeleteContact() {
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState(null);

    async function deleteContact(dossierId, contactId) {
        setIsDeleting(true);
        setDeleteError(null);

        try {
            const deleted = await deleteContactService(
                dossierId,
                contactId
            );

            return deleted;
        } catch (error) {
            setDeleteError(error.message);

            return false;
        } finally {
            setIsDeleting(false);
        }
    }

    return {
        deleteContact,
        isDeleting,
        deleteError,
    };
}

export {
    useDeleteContact,
};
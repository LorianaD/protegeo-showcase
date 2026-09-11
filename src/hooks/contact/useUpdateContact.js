import { updateContactService } from "@/services";
import { useState } from "react";

/**
 * Manages the update of a contact linked to a dossier.
 */
function useUpdateContact() {
    const [isUpdating, setIsUpdating] = useState(false);
    const [updateError, setUpdateError] = useState(null);

    async function updateContact(dossierId, contactId, contactData) {
        setIsUpdating(true);
        setUpdateError(null);

        try {
            const updatedContact = await updateContactService(
                dossierId,
                contactId,
                contactData
            );

            return updatedContact;
        } catch (error) {
            setUpdateError(error.message);

            return null;
        } finally {
            setIsUpdating(false);
        }
    }

    return {
        updateContact,
        isUpdating,
        updateError,
    };
}

export {
    useUpdateContact,
};
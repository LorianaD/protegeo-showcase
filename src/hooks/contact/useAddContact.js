import { addContactService } from "@/services";
import { useState } from "react";

/**
 * Manages the creation of a contact linked to a dossier.
 */
function useAddContact() {
    const [isAdding, setIsAdding] = useState(false);
    const [addError, setAddError] = useState(null);

    async function addContact(dossierId, contactData) {
        setIsAdding(true);
        setAddError(null);

        try {
            const data = await addContactService(
                dossierId,
                contactData
            );

            return data;
        } catch (error) {
            setAddError(error.message);

            return null;
        } finally {
            setIsAdding(false);
        }
    }

    return {
        addContact,
        isAdding,
        addError,
    }
}

export {
    useAddContact
}
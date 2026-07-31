import { getContactsService } from "@/services/contacts/getContactsService";
import { useEffect, useState } from "react";

function useContacts(dossierId, contactCategory = null) {
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    async function loadContacts() {
        if (!dossierId) {
            setContacts([]);
            setIsLoading(false);

            return;
        }

        try {
            setIsLoading(true)
            setError(null)

            const contactsData = await getContactsService(dossierId, contactCategory);

            setContacts(contactsData);
        } catch (error) {
            setContacts([]);
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        loadContacts();
    }, [dossierId, contactCategory]);

    return {
        contacts,
        isLoading,
        error,
    };
}

export {
    useContacts,
}
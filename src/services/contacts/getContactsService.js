import { apiFetch } from "../api";

async function getContactsService(dossierId, contactCategory = null) {
    
    let endpoint = `/dossiers/${dossierId}/contacts`;

    if (contactCategory) {
        endpoint += `?contact_category=${contactCategory}`;
    }

    const data = await apiFetch(endpoint, {
        method: "GET",
    });

    const contacts = data.contacts;

    if (!contacts) {
        return [];
    }

    return contacts;
}

export {
    getContactsService,
}
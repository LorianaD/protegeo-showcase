import { apiFetch } from "@/services";

async function getContactsService(dossierId, contactCategory = null) {
    
    let endpoint = `/dossiers/${dossierId}/contacts`;

    if (contactCategory) {
        endpoint += `?contact_category=${contactCategory}`;
    }

    const data = await apiFetch(endpoint, {
        method: "GET",
    });

    return data?.contacts ?? [];
}

export {
    getContactsService,
}
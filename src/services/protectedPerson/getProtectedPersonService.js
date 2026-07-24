import { apiFetch } from "../api";

async function getProtectedPersonService(dossierId) {
    const data = await apiFetch(`/dossiers/${dossierId}/protected-person`, {
        method: "GET",
    });

    const person = data.protectedPerson;

    if (!person) {
        return null;
    }

    return {
        id: person.id,
        photo_url: person.photoUrl,
        civility: person.civility,
        firstname: person.firstname,
        lastname: person.lastname,
        birth_date: person.birthDate,
        birth_place: person.birthPlace,
        nationality: person.nationality,
        family_situation: person.familySituation,
        children_situation: person.childrenSituation,
        address: person.address,
        postal_code: person.postalCode,
        city: person.city,
        phone_number: person.phoneNumber,
        email: person.email,
        profession: person.profession,
        autonomy_level: person.autonomyLevel,
        situation_summary: person.situationSummary,
        family_note: person.familyNote,
        deceased_at: person.deceasedAt,
        created_at: person.createdAt,
        updated_at: person.updatedAt,
    };
}

export {
    getProtectedPersonService,
}
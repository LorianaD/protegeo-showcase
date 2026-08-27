import { apiFetch } from "../api"

async function getProtectedPersonsService() {
    const data = await apiFetch("/dossiers", {
        method: "GET",
    });

    const dossiers = (data ?? []).filter((dossier) => dossier.protectedPerson);

    const protectedPersons = dossiers.map((dossier) => ({
        dossier_id: dossier.id,
        reference_number: dossier.referenceNumber,
        role_type: dossier.roleType,
        protected_person: {
            id: dossier.protectedPerson.id,
            civility: dossier.protectedPerson.civility,
            firstname: dossier.protectedPerson.firstname,
            lastname: dossier.protectedPerson.lastname,
        },
        measure: dossier.measure ?? null,
    }));

    return protectedPersons;
}

export {
    getProtectedPersonsService,
}
import { apiFetch } from "../api"
import { getCurrentProtectionMeasureService } from "../protectionMeasure";

async function getProtectedPersonsService() {
    const data = await apiFetch("/dossiers", {
        method: "GET",
    });

    const dossiers = (data ?? []).filter((dossier) => dossier.protectedPerson);

    async function getProtectedPersonData(dossier) {
        let measure = null;

        try {
            measure = await getCurrentProtectionMeasureService(
                dossier.id
            );
        } catch (error) {
            measure = null;
        }

        const protectedPersonData = {
            dossier_id: dossier.id,
            reference_number: dossier.referenceNumber,
            role_type: dossier.roleType,
            protected_person: {
                id: dossier.protectedPerson.id,
                civility: dossier.protectedPerson.civility,
                firstname: dossier.protectedPerson.firstname,
                lastname: dossier.protectedPerson.lastname,
            },
            measure,
        };

        return protectedPersonData;
    }

    const protectedPersonPromises = dossiers.map(
        getProtectedPersonData
    );

    const protectedPersons = await Promise.all(
        protectedPersonPromises
    );

    return protectedPersons;
}

export {
    getProtectedPersonsService,
}
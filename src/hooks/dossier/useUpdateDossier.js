import { updateDossierService } from "@/services";
import { useState } from "react"

function useUpdateDossier() {
    const [updatingDossier, setUpdatingDossier] = useState(false);
    const [updateErrorDossier, setUpdateErrorDossier] = useState("");

    async function updateDossier(dossierId, dossierData) {
        setUpdatingDossier(true);
        setUpdateErrorDossier("");

        try {
            const updatedDossier = await updateDossierService(dossierId, dossierData);

            return updatedDossier;
        } catch (error) {
            setUpdateErrorDossier(error.message);
        } finally {
            setUpdatingDossier(false);
        }
    }

    return {
        updateDossier,
        updatingDossier,
        updateErrorDossier,
    };
}

export {
    useUpdateDossier,
}
import { updateDossierService } from "@/services";
import { useState } from "react"

function useUpdateDossier() {
    const [updating, setUpdating] = useState(false);
    const [updateError, setUpdateError] = useState("");

    async function updateDossier(dossierId, dossierData) {
        setUpdating(true);
        setUpdateError("");

        try {
            const updatedDossier = await updateDossierService(dossierId, dossierData);

            return updatedDossier;
        } catch (error) {
            setUpdateError(error.message);
        } finally {
            setUpdating(false);
        }
    }

    return {
        updateDossier,
        updating,
        updateError,
    };
}

export {
    useUpdateDossier,
}
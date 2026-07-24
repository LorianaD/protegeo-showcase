import { getDossierService } from "@/services";
import { useEffect, useState } from "react";

function useDossier(dossierId) {
    const [dossier, setDossier] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function fetchDossier() {
        if (!dossierId) {
            setDossier(null);
            setLoading(false);
            return;
        }

        setLoading(true);
        setError("");

        try {
            const dossierData = await getDossierService(dossierId);
            setDossier(dossierData);
        } catch (error) {
            setError(
                error.message || "Impossible de récupérer les informations du dossier."
            );
        } finally {
            setLoading(false);
        }
    }

    function validateDossierId() {
        if (!dossierId) {
            setLoading(false);
            setDossier(null);
            setError("Impossible d’identifier le dossier.");
            return;
        }
        fetchDossier();
    }

    useEffect(() => { 
        validateDossierId();
    }, [dossierId]);

    return {
        dossier,
        loading,
        error,
        refreshDossier: validateDossierId,
    }
}

export {
    useDossier,
}
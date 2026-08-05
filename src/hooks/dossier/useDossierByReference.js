import { getDossierByReferenceService } from "@/services";
import { useEffect, useState } from "react";

function useDossierByReference(referenceNumber) {
    const [dossier, setDossier] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!referenceNumber) {
            setDossier(null);
            setIsLoading(false);
            return;
        }

        async function loadDossier() {
            try {
                setIsLoading(true);
                setError(null);

                const dossierData =
                    await getDossierByReferenceService(referenceNumber);

                setDossier(dossierData);
            } catch (currentError) {
                setDossier(null);
                setError(currentError);
            } finally {
                setIsLoading(false);
            }
        }

        loadDossier();
    }, [referenceNumber]);

    return {
        dossier,
        dossierId: dossier?.id ?? null,
        isLoading,
        error,
    };
}

export {
    useDossierByReference,
}
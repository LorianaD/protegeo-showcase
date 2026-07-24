import { getCurrentProtectionMeasureService } from "@/services";
import { useEffect, useState } from "react"

function useCurrentMeasure(dossierId) {
    const [measure, setMeasure] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    
    async function fetchMeasure() {
        if (!dossierId) {
            setMeasure(null);
            setLoading(false);
            return;
        }

        setLoading(true);
        setError("");

        try {
            const measureData = await getCurrentProtectionMeasureService(dossierId);

            setMeasure(measureData);
        } catch (error) {
            setMeasure(null);

            setError(
                error.message || "Impossible de récupérer les informations."
            );
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMeasure();
    }, [dossierId]);

    return {
        measure,
        loading,
        error,
        refreshMeasure: fetchMeasure,
    }
}

export {
    useCurrentMeasure,
}
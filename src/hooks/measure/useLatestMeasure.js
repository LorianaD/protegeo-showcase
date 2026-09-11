import { getLatestProtectionMeasureService } from "@/services";
import { useCallback, useEffect, useState } from "react";

function useLatestMeasure(dossierId) {
    const [measure, setMeasure] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchMeasure = useCallback(async () => {
        if (!dossierId) {
            setMeasure(null);
            setLoading(false);
            return;
        }

        setLoading(true);
        setError("");

        try {
            const measureData = await getLatestProtectionMeasureService(
                dossierId
            );

            setMeasure(measureData);
        } catch (error) {
            setMeasure(null);
            setError(error.message || "Impossible de récupérer les informations.");
        } finally {
            setLoading(false);
        }
    }, [dossierId]);

    useEffect(() => {
        fetchMeasure();
    }, [fetchMeasure]);

    return {
        measure,
        loading,
        error,
        refreshMeasure: fetchMeasure,
    };
}

export {
    useLatestMeasure,
};
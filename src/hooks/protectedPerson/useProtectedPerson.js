import { getProtectedPersonService } from "@/services";
import { useEffect, useState } from "react"

function useProtectedPerson(dossierId) {
    const [protectedPerson, setProtectedPerson] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function fetchProtectedPerson() {
        if (!dossierId) {
            setProtectedPerson(null);
            setLoading(false);
            return;
        }

        setLoading(true);
        setError("");

        try {
            const personData = await getProtectedPersonService(dossierId);
            
            setProtectedPerson(personData);
        } catch (error) {
            setProtectedPerson(null);
            
            setError(
                error.message || "Impossible de récupérer les informations."
            );
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProtectedPerson();
    }, [dossierId]);

    return {
        protectedPerson,
        loading,
        error,
        refreshProtectedPerson: fetchProtectedPerson,
    }
}

export {
    useProtectedPerson,
}
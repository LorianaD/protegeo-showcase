import { getProtectedPersonsService } from "@/services";
import { useEffect, useState } from "react"

function useProtectedPersons() {
    const [protectedPersons, setProtectedPersons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function fetchProtectedPersons() {
        setLoading(true);
        setError("");

        try {
            const protectedPersonsData = await getProtectedPersonsService();

            setProtectedPersons(protectedPersonsData);
        } catch (error) {
            setProtectedPersons([]);

            setError(
                error.message || "Impossible de récupérer les personnes protégées.",
            );
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProtectedPersons();
    }, []);

    return {
        protectedPersons,
        loading,
        error,
        refreshProtectedPersons: fetchProtectedPersons,
    }
}

export {
    useProtectedPersons,
}
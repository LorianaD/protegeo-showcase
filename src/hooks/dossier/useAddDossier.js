import { addDossierService } from "@/services";

/**
 * Manages the creation of a dossier with its protected person
 * and initial protection measure.
 */
function useAddDossier() {
    const [isAdding, setIsAdding] = useState(false);
    const [addError, setAddError] = useState(null);

    async function addDossier(dossierData) {
        setIsAdding(true);
        setAddError(null);

        try {
            const data = await addDossierService(dossierData);

            return data;
        } catch (error) {
            setAddError(error.message);

            return null;
        } finally {
            setIsAdding(false);
        }
    }

    return {
        addDossier,
        isAdding,
        addError,
    }
}

export {
    useAddDossier,
}
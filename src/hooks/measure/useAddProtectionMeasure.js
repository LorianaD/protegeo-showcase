import { addProtectionMeasureService } from "@/services";

/**
 * Manages the creation of a protection measure linked to a dossier.
 */
function useAddProtectionMeasure() {
    const [isAdding, setIsAdding] = useState(false);
    const [addError, setAddError] = useState(null);

    async function addProtectionMeasure(dossierId, protectionMeasureData) {
        setIsAdding(true);
        setAddError(null);

        try {
            const data = await addProtectionMeasureService(
                dossierId,
                protectionMeasureData
            );

            return data;
        } catch (error) {
            setAddError(error.message);

            return null;
        } finally {
            setIsAdding(false);
        }
    }

    return {
        addProtectionMeasure,
        isAdding,
        addError,
    }
}

export {
    useAddProtectionMeasure,
}
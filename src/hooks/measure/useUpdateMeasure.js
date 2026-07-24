import { updateProtectionMeasureService } from "@/services";
import { useState } from "react"

function useUpdateMeasure() {
    const [updating, setUpdating] = useState(false);
    const [updateError, setUpdateError] = useState("");

    async function updateMeasure(dossierId, measureId, measureData) {
        setUpdating(true);
        setUpdateError("");

        try {
            const updatedMeasure = await updateProtectionMeasureService(dossierId, measureId, measureData);

            return updatedMeasure;
        } catch (error) {
            setUpdateError(error.message);

            return null;
        } finally {
            setUpdating(false);
        }
    }

    return {
        updateMeasure,
        updating,
        updateError,
    };
}

export {
    useUpdateMeasure,
}
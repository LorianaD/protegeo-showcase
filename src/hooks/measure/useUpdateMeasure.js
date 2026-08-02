import { updateProtectionMeasureService } from "@/services";
import { useState } from "react"

function useUpdateMeasure() {
    const [updatingMeasure, setUpdatingMeasure] = useState(false);
    const [updateErrorMeasure, setUpdateErrorMeasure] = useState("");

    async function updateMeasure(dossierId, measureId, measureData) {
        setUpdatingMeasure(true);
        setUpdateErrorMeasure("");

        try {
            const updatedMeasure = await updateProtectionMeasureService(dossierId, measureId, measureData);

            return updatedMeasure;
        } catch (error) {
            setUpdateErrorMeasure(error.message);

            return null;
        } finally {
            setUpdatingMeasure(false);
        }
    }

    return {
        updateMeasure,
        updatingMeasure,
        updateErrorMeasure,
    };
}

export {
    useUpdateMeasure,
}
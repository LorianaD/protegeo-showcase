import { updateProtectedPersonService } from "@/services";
import { useState } from "react"

function useUpdateProtectedPerson() {
    const [updating, setUpdating] = useState(false);
    const [updateError, setUpdateError] = useState("");

    async function updateProtectedPerson(dossierId, personData) {
        setUpdating(true);
        setUpdateError("");

        try {
            const updatedProtectedPerson = await updateProtectedPersonService(dossierId, personData);

            return updatedProtectedPerson;
        } catch (error) {
            setUpdateError(error.message);

            return null;
        } finally {
            setUpdating(false);
        }
    }

    return {
        updateProtectedPerson,
        updating,
        updateError,
    }
}

export {
    useUpdateProtectedPerson,
}
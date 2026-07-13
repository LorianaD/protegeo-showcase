import { updatePasswordService } from "@/services";
import { useState } from "react"

function useUpdatePassword() {
    const [updating, setUpdating] = useState(false);
    const [updateError, setUpdateError] = useState("");

    async function updatePassword(passwordData) {
        setUpdating(true);
        setUpdateError("");

        try {
            const response = await updatePasswordService(passwordData);
            return response;
        } catch (error) {
            setUpdateError(error.message);
            return null;
        } finally {
            setUpdating(false);
        }
    }

    return {
        updatePassword,
        updating,
        updateError,
    };
}

export {
    useUpdatePassword,
}
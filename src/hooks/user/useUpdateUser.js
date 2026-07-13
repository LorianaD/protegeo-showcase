import { updateUserProfileService } from "@/services";
import { useState } from "react";

function useUpdateUser() {
    const [updating, setUpdating] = useState(false);
    const [updateError, setUpdateError] = useState("");

    async function updateProfile(profileData) {
        setUpdating(true);
        setUpdateError("");

        try {
            const updateUser = await updateUserProfileService(profileData);

            return updateUser;
        } catch (error) {
            setUpdateError(error.message);

            return null;
        } finally {
            setUpdating(false);
        }
    }

    return {
        updateProfile,
        updating,
        updateError,
    };
}

export {
    useUpdateUser,
}
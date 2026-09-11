import { deleteProtectedPersonPhotoService, uploadProtectedPersonPhotoService } from "@/services";
import { useState } from "react";

/**
 * Manages the protected person's profile photo update and deletion.
 */
function useUpdateProtectedPersonPhoto() {
    const [updatingPhoto, setUpdatingPhoto] = useState(false);
    const [photoError, setPhotoError] = useState("");

    async function uploadPhoto(dossierId, photo) {
        setUpdatingPhoto(true);
        setPhotoError("");

        try {
            const protectedPerson = await uploadProtectedPersonPhotoService(
                dossierId,
                photo,
            );

            return protectedPerson;
        } catch (error) {
            setPhotoError(
                error.message || "Impossible de mettre à jour la photo.",
            );

            return null;
        } finally {
            setUpdatingPhoto(false);
        }
    }

    async function deletePhoto(dossierId) {
        setUpdatingPhoto(true);
        setPhotoError("");

        try {
            const protectedPerson = await deleteProtectedPersonPhotoService(
                dossierId,
            );

            return protectedPerson;
        } catch (error) {
            setPhotoError(
                error.message || "Impossible de supprimer la photo.",
            );

            return null;
        } finally {
            setUpdatingPhoto(false);
        }
    }

    return {
        uploadPhoto,
        deletePhoto,
        updatingPhoto,
        photoError,
    };
}

export {
    useUpdateProtectedPersonPhoto,
};
import { getProtectedPersonPhotoService } from "@/services";
import { getDefaultProtectedPersonPhoto } from "@/utils";
import { useCallback, useEffect, useRef, useState } from "react";

function useProtectedPersonPhoto(dossierId, protectedPerson) {
    const [photo, setPhoto] = useState(
        getDefaultProtectedPersonPhoto(protectedPerson?.civility)
    );

    const [refreshKey, setRefreshKey] = useState(0);

    const photoUrlRef = useRef(null);

    /**
     * Loads the protected person's photo or uses the default one.
     */
    const fetchPhoto = useCallback(async () => {
        if (!protectedPerson) {
            setPhoto(
                getDefaultProtectedPersonPhoto()
            );

            return;
        }

        if (!protectedPerson.photo_url) {
            const previousPhotoUrl = photoUrlRef.current;

            photoUrlRef.current = null;

            setPhoto(
                getDefaultProtectedPersonPhoto(protectedPerson.civility)
            );

            if (previousPhotoUrl) {
                URL.revokeObjectURL(previousPhotoUrl);
            }

            return;
        }

        try {
            const photoBlob = await getProtectedPersonPhotoService(
                dossierId
            );

            const newPhotoUrl = URL.createObjectURL(photoBlob);
            const previousPhotoUrl = photoUrlRef.current;

            photoUrlRef.current = newPhotoUrl;

            setPhoto(newPhotoUrl);

            /*
             * Releases the previous object URL only after
             * the new photo has been assigned.
             */
            if (previousPhotoUrl) {
                requestAnimationFrame(() => {
                    URL.revokeObjectURL(previousPhotoUrl);
                });
            }
        } catch {
            setPhoto(
                getDefaultProtectedPersonPhoto(protectedPerson.civility)
            );
        }
    }, [
        dossierId,
        protectedPerson?.photo_url,
        protectedPerson?.civility,
        refreshKey,
    ]);

    useEffect(() => {
        fetchPhoto();
    }, [fetchPhoto]);

    /**
     * Releases the temporary photo URL when the hook is unmounted.
     */
    useEffect(() => {
        return () => {
            if (photoUrlRef.current) {
                URL.revokeObjectURL(photoUrlRef.current);
            }
        };
    }, []);

    /**
     * Reloads the protected person's photo.
     */
    function refreshPhoto() {
        setRefreshKey((currentKey) => currentKey + 1);
    }

    return {
        photo,
        refreshPhoto,
    };
}

export {
    useProtectedPersonPhoto,
};
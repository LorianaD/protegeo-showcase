import { useState } from "react";
import { useUpdateProtectedPerson } from "../protectedPerson";

/**
 * Manages the protected person's contact observation update.
 */
function useContactObservation( dossierId, protectedPerson, refreshProtectedPerson ) {
    const [isEditingObservation, setIsEditingObservation] = useState(false);
    const [observationValue, setObservationValue] = useState("");

    const { updateProtectedPerson, updating, updateError } = useUpdateProtectedPerson();

    /**
     * Starts observation editing with the current stored value.
     */
    function handleEditObservation(fieldName) {
        setObservationValue(
            protectedPerson?.[fieldName] ?? ""
        );

        setIsEditingObservation(true);
    }

    /**
     * Updates the observation form value.
     */
    function handleObservationChange(event) {
        setObservationValue(event.target.value);
    }

    /**
     * Cancels observation editing and restores the display mode.
     */
    function handleCancelObservation() {
        setObservationValue("");
        setIsEditingObservation(false);
    }

    /**
     * Saves the protected person's observation.
     */
    async function handleUpdateObservation(event, fieldName) {
        event.preventDefault();

        if (!protectedPerson || updating) {
            return null;
        }

        const updatedProtectedPerson = await updateProtectedPerson(
            dossierId,
            {
                [fieldName]: observationValue,
            }
        );

        if (!updatedProtectedPerson) {
            return null;
        }

        await refreshProtectedPerson();

        setObservationValue("");
        setIsEditingObservation(false);

        return updatedProtectedPerson;
    }

    return {
        isEditingObservation,
        observationValue,
        updatingObservation: updating,
        observationError: updateError,
        handleEditObservation,
        handleObservationChange,
        handleCancelObservation,
        handleUpdateObservation,
    };
}

export {
    useContactObservation,
};
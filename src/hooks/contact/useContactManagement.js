import { useContactActions } from "./useContactActions";
import { useContactObservation } from "./useContactObservation";

/**
 * Manages the global edition mode of a contact section.
 */
function useContactManagement({ dossierId, protectedPerson, refreshProtectedPerson, refreshContacts, observationFieldName }) {
    const contactActions = useContactActions(
        dossierId,
        refreshContacts
    );

    const observation = useContactObservation(
        dossierId,
        protectedPerson,
        refreshProtectedPerson
    );

    /**
     * Enables the global contact section edition mode.
     */
    function handleStartManagement() {
        contactActions.handleStartContactManagement();

        observation.handleEditObservation(
            observationFieldName
        );
    }

    /**
     * Cancels the global contact section edition mode.
     */
    function handleCancelManagement() {
        contactActions.handleCancelContactManagement();
        observation.handleCancelObservation();
    }

    /**
     * Saves the editable section data and closes edition mode.
     */
    async function handleSubmitManagement(event) {
        const updatedProtectedPerson =
            await observation.handleUpdateObservation(
                event,
                observationFieldName
            );

        if (!updatedProtectedPerson) {
            return;
        }

        contactActions.handleCancelContactManagement();
    }

    return {
        ...contactActions,
        ...observation,
        handleStartManagement,
        handleCancelManagement,
        handleSubmitManagement,
    };
}

export {
    useContactManagement,
};
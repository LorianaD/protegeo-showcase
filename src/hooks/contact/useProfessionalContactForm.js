import { useContactForm } from "./useContactForm";

/**
 * Manages the professional contact creation form.
 */
function useProfessionalContactForm(dossierId, form, refreshContacts) {
    return useContactForm(
        dossierId,
        form,
        refreshContacts,
        "professional"
    );
}

export {
    useProfessionalContactForm,
};
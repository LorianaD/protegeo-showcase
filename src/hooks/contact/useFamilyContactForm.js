import { useContactForm } from "./useContactForm";

/**
 * Manages the family contact creation form.
 */
function useFamilyContactForm(dossierId, form, refreshContacts) {
    return useContactForm(
        dossierId,
        form,
        refreshContacts,
        "family"
    );
}

export {
    useFamilyContactForm,
};
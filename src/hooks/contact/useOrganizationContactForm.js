import { useContactForm } from "./useContactForm";

/**
 * Manages the organization contact creation form.
 */
function useOrganizationContactForm( dossierId, form, refreshContacts ) {
    return useContactForm(
        dossierId,
        form,
        refreshContacts,
        "organization"
    );
}

export {
    useOrganizationContactForm,
};
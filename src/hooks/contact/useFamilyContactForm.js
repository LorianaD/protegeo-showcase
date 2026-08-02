import { useState } from "react";
import { useAddContact } from "./useAddContact";

/**
 * Manages the family contact creation form and modal state.
 */
function useFamilyContactForm(dossierId, form, refreshContacts) {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [contactType, setContactType] = useState("");
    const [contactFormData, setContactFormData] = useState({});

    const {
        addContact,
        isAdding,
        addError,
    } = useAddContact();

    /**
     * Opens the contact creation modal.
     */
    function handleOpenContactModal() {
        setIsContactModalOpen(true);
    }

    /**
     * Closes the modal and clears the current form values.
     */
    function handleCloseContactModal() {
        setIsContactModalOpen(false);
        setContactType("");
        setContactFormData({});
    }

    /**
     * Updates the current contact form values.
     */
    function handleContactChange(event) {
        const { name, value } = event.target;

        setContactFormData({
            ...contactFormData,
            [name]: value,
        });

        if (name === "contact_type") {
            setContactType(value);
        }
    }

    /**
     * Creates a family contact and refreshes the displayed list.
     */
    async function handleContactSubmit(event) {
        event.preventDefault();

        if (isAdding) {
            return;
        }

        const contactData = {
            ...contactFormData,
            contact_category: "family",
        };

        const createdContact = await addContact(
            dossierId,
            contactData
        );

        console.log("Contact créé :", createdContact);

        if (!createdContact) {
            return;
        }

        await refreshContacts();
        handleCloseContactModal();
    }

    const contactFormFields = form.fields.filter((field) => {
        if (field.name === "relation_type") {
            return contactType === "trusted_person";
        }

        return true;
    });

    return {
        isContactModalOpen,
        contactFormData,
        contactFormFields,
        isAdding,
        addError,
        handleOpenContactModal,
        handleCloseContactModal,
        handleContactChange,
        handleContactSubmit,
    };
}

export {
    useFamilyContactForm,
};
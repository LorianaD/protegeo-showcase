import { useState } from "react";
import { useDeleteContact } from "./useDeleteContact";
import { useUpdateContact } from "./useUpdateContact";

/**
 * Manages contact update, delete and management mode.
 */
function useContactActions(dossierId, refreshContacts) {
    const [isManagingContacts, setIsManagingContacts] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    const [editFormData, setEditFormData] = useState({});
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const {
        updateContact,
        isUpdating,
        updateError,
    } = useUpdateContact();

    const {
        deleteContact,
        isDeleting,
        deleteError,
    } = useDeleteContact();

    /**
     * Enables contact management mode.
     */
    function handleStartContactManagement() {
        setIsManagingContacts(true);
    }

    /**
     * Disables contact management mode.
     */
    function handleCancelContactManagement() {
        setIsManagingContacts(false);
    }

    /**
     * Opens the edit modal for the selected contact.
     */
    function handleOpenEditModal(contact) {
        setSelectedContact(contact);
        setEditFormData(contact);
        setIsEditModalOpen(true);
    }

    /**
     * Closes the edit modal and resets its state.
     */
    function handleCloseEditModal() {
        setSelectedContact(null);
        setEditFormData({});
        setIsEditModalOpen(false);
    }

    /**
     * Updates the current edit form values.
     */
    function handleEditChange(event) {
        const { name, value } = event.target;

        setEditFormData({
            ...editFormData,
            [name]: value,
        });
    }

    /**
     * Updates the selected contact and refreshes the contact list.
     */
    async function handleUpdateContact(event) {
        event.preventDefault();

        if (!selectedContact || isUpdating) {
            return;
        }

        const updatedContact = await updateContact(
            dossierId,
            selectedContact.id,
            editFormData
        );

        if (!updatedContact) {
            return;
        }

        await refreshContacts();

        handleCloseEditModal();
    }

    /**
     * Deletes a contact and refreshes the contact list.
     */
    async function handleDeleteContact(contact) {
        if (isDeleting) {
            return;
        }

        const deletedContact = await deleteContact(
            dossierId,
            contact.id
        );

        if (!deletedContact) {
            return;
        }

        await refreshContacts();
    }

    return {
        isManagingContacts,
        selectedContact,
        editFormData,
        isEditModalOpen,
        isUpdating,
        updateError,
        isDeleting,
        deleteError,
        handleStartContactManagement,
        handleCancelContactManagement,
        handleOpenEditModal,
        handleCloseEditModal,
        handleEditChange,
        handleUpdateContact,
        handleDeleteContact,
    };
}

export {
    useContactActions,
};
import { useState } from "react";

function useTransactionSectionEdit() {
    const [editingSection, setEditingSection] = useState(null);
    const [formData, setFormData] = useState({});

    /**
     * Opens a transaction section in edit mode.
     */
    function handleEditSection(sectionName, rows) {
        const sectionData = {};

        rows.forEach((row) => {
            row.entries?.forEach((entry) => {
                sectionData[entry.id] = {
                    ...entry.transaction,
                };
            });
        });

        setFormData(sectionData);
        setEditingSection(sectionName);
    }

    /**
     * Updates one field of one transaction.
     */
    function handleChange(transactionId, event) {
        const { name, value } = event.target;

        setFormData((currentData) => ({
            ...currentData,
            [transactionId]: {
                ...currentData[transactionId],
                [name]: value,
            },
        }));
    }

    /**
     * Removes a deleted transaction from the local form data.
     */
    function removeTransactionFromForm(transactionId) {
        setFormData((currentData) => {
            const updatedData = { ...currentData };

            delete updatedData[transactionId];

            return updatedData;
        });
    }

    /**
     * Closes the current section without keeping local changes.
     */
    function handleCancelSection() {
        setFormData({});
        setEditingSection(null);
    }

    function closeEditingSection() {
        setFormData({});
        setEditingSection(null);
    }

    function isEditingSection(sectionName) {
        return editingSection === sectionName;
    }

    return {
        editingSection,
        formData,
        handleEditSection,
        handleChange,
        removeTransactionFromForm,
        handleCancelSection,
        closeEditingSection,
        isEditingSection,
    };
}

export {
    useTransactionSectionEdit,
};
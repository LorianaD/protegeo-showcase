import { useState } from "react";

const initialValues = {
    year: "",
    start_date: "",
    end_date: "",
    note: "",
};

function useManagementAccountModal() {
    const [isManagementAccountModalOpen, setIsManagementAccountModalOpen] =
        useState(false);

    const [managementAccountValues, setManagementAccountValues] =
        useState(initialValues);

    const [editingManagementAccountId, setEditingManagementAccountId] =
        useState(null);

    function openCreateManagementAccountModal(values = null) {
        setEditingManagementAccountId(null);

        setManagementAccountValues({
            ...initialValues,
            ...values,
        });

        setIsManagementAccountModalOpen(true);
    }

    function openEditManagementAccountModal(account) {
        setEditingManagementAccountId(account.id);

        setManagementAccountValues({
            year: account.year ?? "",
            start_date: account.start_date ?? "",
            end_date: account.end_date ?? "",
            note: account.note ?? "",
        });

        setIsManagementAccountModalOpen(true);
    }

    function closeManagementAccountModal() {
        setIsManagementAccountModalOpen(false);
        setEditingManagementAccountId(null);
        setManagementAccountValues(initialValues);
    }

    function handleManagementAccountChange(event) {
        const { name, value } = event.target;

        setManagementAccountValues((currentValues) => ({
            ...currentValues,
            [name]: value,
        }));
    }

    return {
        isManagementAccountModalOpen,
        managementAccountValues,
        editingManagementAccountId,
        openCreateManagementAccountModal,
        openEditManagementAccountModal,
        closeManagementAccountModal,
        handleManagementAccountChange,
    };
}

export {
    useManagementAccountModal,
};
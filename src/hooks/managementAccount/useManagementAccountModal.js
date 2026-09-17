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

    function openManagementAccountModal() {
        setManagementAccountValues(initialValues);
        setIsManagementAccountModalOpen(true);
    }

    function closeManagementAccountModal() {
        setIsManagementAccountModalOpen(false);
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
        openManagementAccountModal,
        closeManagementAccountModal,
        handleManagementAccountChange,
    };
}

export {
    useManagementAccountModal,
};
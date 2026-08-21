import { useState } from "react";

function useAddDossierModal() {
    const [isAddDossierModalOpen, setIsAddDossierModalOpen] = useState(false);

    function openAddDossierModal() {
        setIsAddDossierModalOpen(true);
    }

    function closeAddDossierModal() {
        setIsAddDossierModalOpen(false);
    }

    return {
        isAddDossierModalOpen,
        openAddDossierModal,
        closeAddDossierModal,
    };
}

export {
    useAddDossierModal,
};
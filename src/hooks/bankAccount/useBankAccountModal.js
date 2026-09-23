import { useState } from "react";

function useBankAccountModal() {
    const [isBankAccountModalOpen, setIsBankAccountModalOpen] = useState(false);
    const [bankAccountModalData, setBankAccountModalData] = useState(null);

    function openBankAccountModal(dossierId, bankAccount = null) {
        setBankAccountModalData({
            dossierId,
            bankAccount,
        });

        setIsBankAccountModalOpen(true);
    }

    function closeBankAccountModal() {
        setIsBankAccountModalOpen(false);
        setBankAccountModalData(null);
    }

    return {
        isBankAccountModalOpen,
        bankAccountModalData,
        openBankAccountModal,
        closeBankAccountModal,
    };
}

export {
    useBankAccountModal,
};
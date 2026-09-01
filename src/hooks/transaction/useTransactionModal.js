import { useState } from "react";

function useTransactionModal() {
    const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
    const [transactionModalData, setTransactionModalData] = useState(null);

    function openTransactionModal(data) {
        setTransactionModalData(data);
        setIsTransactionModalOpen(true);
    }

    function closeTransactionModal() {
        setIsTransactionModalOpen(false);
        setTransactionModalData(null);
    }

    return {
        isTransactionModalOpen,
        transactionModalData,
        openTransactionModal,
        closeTransactionModal,
    };
}

export {
    useTransactionModal,
};
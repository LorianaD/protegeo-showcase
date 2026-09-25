import { useState } from "react";

function useBankingTransactionModal() {
    const [bankingTransactionModalData, setBankingTransactionModalData]
        = useState(null);

    const isBankingTransactionModalOpen =
        bankingTransactionModalData !== null;

    function openBankingTransactionModal(data) {
        setBankingTransactionModalData(data);
    }

    function closeBankingTransactionModal() {
        setBankingTransactionModalData(null);
    }

    return {
        isBankingTransactionModalOpen,
        bankingTransactionModalData,
        openBankingTransactionModal,
        closeBankingTransactionModal,
    };
}

export {
    useBankingTransactionModal,
};
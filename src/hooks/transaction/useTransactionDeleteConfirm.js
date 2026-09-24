import { useState } from "react";

function useTransactionDeleteConfirm() {
    const [transactionToDelete, setTransactionToDelete] = useState(null);

    /**
     * Opens the confirmation modal for the selected transaction.
     */
    function openDeleteConfirm(transaction) {
        setTransactionToDelete(transaction);
    }

    /**
     * Closes the confirmation modal and clears the selected transaction.
     */
    function closeDeleteConfirm() {
        setTransactionToDelete(null);
    }

    return {
        transactionToDelete,
        openDeleteConfirm,
        closeDeleteConfirm,
    };
}

export {
    useTransactionDeleteConfirm,
};
import { useState } from "react";

function useTransactionAccordion() {
    const [openedRowId, setOpenedRowId] = useState(null);

    /**
     * Opens the selected row or closes it when it is already open.
     *
     * @param {string|number} rowId
     */
    function handleToggleRow(rowId) {
        setOpenedRowId((currentRowId) =>
            currentRowId === rowId
                ? null
                : rowId
        );
    }

    /**
     * Checks whether the selected row is currently open.
     *
     * @param {string|number} rowId
     * @returns {boolean}
     */
    function isRowOpen(rowId) {
        return openedRowId === rowId;
    }

    return {
        handleToggleRow,
        isRowOpen,
    };
}

export {
    useTransactionAccordion,
};
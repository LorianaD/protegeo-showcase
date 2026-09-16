import { KeyboardArrowDown } from "@/assets/imgs/icons/ui";
import { useTransactionAccordion } from "@/hooks";

function TransactionAccordionTable({ rows = [], emptyMessage = "Aucune donnée enregistrée.", onEdit, variant = "default" }) {
    const {
        handleToggleRow,
        isRowOpen,
    } = useTransactionAccordion();

    if (rows.length === 0) {
        return (
            <p className="transaction-accordion__empty">
                {emptyMessage}
            </p>
        );
    }

    return (
        <div className={`transaction-accordion transaction-accordion--${variant}`}>
            {rows.map((row) => {
                const isOpen = isRowOpen(row.id);

                return (
                    <div
                        key={row.id}
                        className={`
                            transaction-accordion__item
                            transaction-accordion__item--${variant}
                            ${isOpen
                                ? "transaction-accordion__item--open"
                                : ""}
                        `}
                    >
                        <button
                            type="button"
                            className={`
                                transaction-accordion__header
                                transaction-accordion__header--${variant}
                            `}
                            onClick={() =>
                                handleToggleRow(row.id)
                            }
                            aria-expanded={isOpen}
                        >
                            <span className="transaction-accordion__label">
                                {row.label}
                            </span>

                            <span className="transaction-accordion__amount">
                                {row.amount}
                            </span>

                            <img
                                src={KeyboardArrowDown}
                                alt=""
                                className={`
                                    transaction-accordion__chevron
                                    ${isOpen
                                        ? "transaction-accordion__chevron--open"
                                        : ""}
                                `}
                                aria-hidden="true"
                            />
                        </button>

                        {isOpen && (
                            <div className="transaction-accordion__entries">
                                {!row.entries?.length ? (
                                    <p className="transaction-accordion__empty">
                                        Aucune saisie enregistrée.
                                    </p>
                                ) : (
                                    row.entries.map((entry) => (
                                        <button
                                            key={entry.id}
                                            type="button"
                                            className="transaction-accordion__entry"
                                            onClick={() =>
                                                onEdit?.(
                                                    entry.transaction
                                                )
                                            }
                                        >
                                            <span>{entry.label}</span>

                                            <span>
                                                Le {entry.operationDate}
                                            </span>

                                            <span>
                                                {entry.bankAccount}
                                            </span>

                                            <span>
                                                {entry.paymentMethod}
                                            </span>

                                            <span>
                                                {entry.amount}
                                            </span>
                                        </button>
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default TransactionAccordionTable;
import { KeyboardArrowDown } from "@/assets/imgs/icons/ui";
import { useTransactionAccordion } from "@/hooks";
import TransactionAccordionEntry from "./TransactionAccordionEntry";

function TransactionAccordionTable({ rows = [], fields = [], editing = false, formData = {}, onChange, variant = "default" }) {
    const { handleToggleRow, isRowOpen, } = useTransactionAccordion();

    return (
        <div className={`transaction-accordion transaction-accordion--${variant}`}>
            {rows.map((row) => {
                const isOpen = isRowOpen(row.id);

                return (
                    <div key={row.id}
                        className={`transaction-accordion__item transaction-accordion__item--${variant} ${isOpen ? "transaction-accordion__item--open" : ""}`}
                    >
                        <button
                            type="button"
                            className={`transaction-accordion__header transaction-accordion__header--${variant}`}
                            onClick={() => handleToggleRow(row.id)}
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
                                className={`transaction-accordion__chevron ${isOpen ? "transaction-accordion__chevron--open" : ""}`}
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
                                        <TransactionAccordionEntry
                                            key={entry.id}
                                            transaction={entry.transaction}
                                            fields={fields}
                                            editing={editing}
                                            formData={formData[entry.id] ?? {}}
                                            onChange={(event) => onChange(entry.id, event)}
                                            variant={variant}
                                        />
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
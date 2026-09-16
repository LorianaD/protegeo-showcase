import { Button, DashboardTable, DashboardTotal, TransactionAccordionTable } from "@/components/ui";

function DashboardTableSection({ title, actionLabel, columns, rows, emptyMessage, totalLabel, totalValue, displayMode = "table", onAction, onEdit, variant = "default" }) {
    const isAccordion = displayMode === "accordion";
    
    return (
        <section className={`dashboard-table-section dashboard-table-section--${variant}`}>
            <div className={`dashboard-table-section__header dashboard-table-section__header--${variant}`}>
                <h3 className={`dashboard-table-section__title dashboard-table-section__title--${variant}`}>
                    {title}
                </h3>

                {actionLabel && (
                    <Button
                        label={actionLabel}
                        type="button"
                        variant="edit"
                        onClick={onAction}
                    />
                )}
            </div>

            {isAccordion ? (
                <TransactionAccordionTable
                    rows={rows}
                    emptyMessage={emptyMessage}
                    onEdit={onEdit}
                    variant={variant}
                />
            ) : (
                <DashboardTable
                    columns={columns}
                    rows={rows}
                    emptyMessage={emptyMessage}
                    variant={variant}
                />
            )}

            <DashboardTotal
                label={totalLabel}
                value={totalValue}
                variant={variant}
            />
        </section>
    );
}

export default DashboardTableSection;
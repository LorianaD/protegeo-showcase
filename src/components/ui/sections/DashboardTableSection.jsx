import { Button, DashboardTable, DashboardTotal, TransactionAccordionTable, UpdateFormFooter } from "@/components/ui";

function DashboardTableSection({ title, actionLabel, columns, rows, emptyMessage, totalLabel, totalValue, displayMode = "table", fields = [], editing = false, formData = {}, onChange, onAction, onSubmit, onDelete, cancelLabel, submitLabel, onCancel, error, loading, variant = "default" }) {
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

            <form onSubmit={onSubmit} className="update-form">
                {isAccordion ? (
                    <TransactionAccordionTable
                        rows={rows}
                        fields={fields}
                        editing={editing}
                        formData={formData}
                        onChange={onChange}
                        onDelete={onDelete}
                        emptyMessage={emptyMessage}
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

                {editing && (
                    <UpdateFormFooter
                        cancelLabel={cancelLabel}
                        submitLabel={submitLabel}
                        onCancel={onCancel}
                        loading={loading}
                        error={error}
                    />
                )}
            </form>
        </section>
    );
}

export default DashboardTableSection;
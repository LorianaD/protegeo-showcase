import { DashboardTable } from "@/components/ui";
import ContactActions from "./ContactActions";

function ContactTable({ contactType, rows, actions, showActions = false, onEdit, onDelete, disabled = false }) {
        const columns = showActions
            ? [
                ...contactType.columns,
                {
                    key: "actions",
                    label: actions.column_label,
                },
            ]
            : contactType.columns;

        const formattedRows = rows.map((row) => ({
            ...row,
            actions: showActions ? (
                <ContactActions
                    actions={actions}
                    onEdit={() => onEdit(row.contact)}
                    onDelete={() => onDelete(row.contact)}
                    disabled={disabled}
                />
            ) : null,
        }));

    return (
        <div className="contact-table">
            <h4 className="contact-table__title">
                { contactType.title }
            </h4>
            <div>
                <DashboardTable
                    columns={columns}
                    rows={formattedRows}
                    emptyMessage={contactType.emptyMessage}
                    variant="contacts"
                />
            </div>
        </div>
    )
}

export default ContactTable;
import { DashboardTable } from "@/components/ui";

function ContactTable({ contactType, rows }) {
    return (
        <div className="contact-table">
            <h4 className="contact-table__title">
                { contactType.title }
            </h4>
            <div>
                <DashboardTable
                    columns={contactType.columns}
                    rows={rows}
                    emptyMessage={contactType.emptyMessage}
                    variant="contacts"
                />
            </div>
        </div>
    )
}

export default ContactTable;
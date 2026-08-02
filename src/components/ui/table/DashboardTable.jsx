import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

function DashboardTable({ columns = [], rows = [], emptyMessage = "Aucune donnée", variant = "default" }) {
    const tableClassName = `dashboard-table dashboard-table--${variant}`;
    
    return (
        <table className={tableClassName}>
            <TableHeader columns={columns} />
            <TableBody
                columns={columns}
                rows={rows}
                emptyMessage={emptyMessage}
                variant={variant}
            />
        </table>
    )
}

export default DashboardTable;
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

function DashboardTable({columns, rows, emptyMessage = "Aucune donnée"}) {
    return (
        <table className="dashboard-table">
            <TableHeader columns={columns} />
            <TableBody
                columns={columns}
                rows={rows}
                emptyMessage={emptyMessage}
            />
        </table>
    )
}

export default DashboardTable;
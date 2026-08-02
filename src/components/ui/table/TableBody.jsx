import TableRow from "./TableRow";

function TableBody({ columns = [], rows = [], emptyMessage = "Aucune donnée enregistrée.", variant = "default" }) {
    const tableBodyClass = `table-body table-body--${variant}`;

    if (rows.length === 0) {
        return (
            <tbody className={tableBodyClass}>
                <tr className={`table-body__row table-body__row--${variant}`}>
                    <td colSpan={columns.length} className={`dashboard-table-empty dashboard-table-empty--${variant}`}>
                        {emptyMessage}
                    </td>
                </tr>
            </tbody>
        );
    }

    return (
        <tbody className={tableBodyClass}>
            {rows.map((row) => (
                <TableRow
                    key={row.id}
                    columns={columns}
                    row={row}
                    variant={variant}
                />
            ))}
        </tbody>
    );
}

export default TableBody;
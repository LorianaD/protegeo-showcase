import TableRow from "./TableRow";

function TableBody({ columns, rows, emptyMessage }) {
    if (!rows.length) {
        return (
            <tbody>
                <tr>
                    <td
                        colSpan={columns.length}
                        className="dashboard-table-empty"
                    >
                        {emptyMessage}
                    </td>
                </tr>
            </tbody>
        );
    }

    return (
        <tbody className="table-body">
            {rows.map((row) => (
                <TableRow
                    key={row.id}
                    columns={columns}
                    row={row}
                />
            ))}
        </tbody>
    );
}

export default TableBody;
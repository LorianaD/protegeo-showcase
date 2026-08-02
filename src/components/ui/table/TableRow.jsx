import TableCell from "./TableCell";

function TableRow({columns, row, variant}) {
    const gridStyle = {
        "--table-columns": columns.length,
    };

    const tableBodyRowClass = `table-body__row table-body__row--${variant}`;

    return (
        <tr className={tableBodyRowClass} style={gridStyle}>
            {columns.map((column) => {
                const columnName = column.name ?? column.key;

                const value = row[columnName];

                const variantName = column.variantName ?? column.variantKey;

                const cellVariant = variantName ? row[variantName] : null;
                
                return (
                    <TableCell
                        key={`${row.id}-${columnName}`}
                        value={value}
                        type={column.type}
                        variant={cellVariant}
                    />
                );
            })}
        </tr>
    );
}

export default TableRow;
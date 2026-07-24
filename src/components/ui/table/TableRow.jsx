import TableCell from "./TableCell";

function TableRow({columns, row}) {
    const gridStyle = {
        "--table-columns": columns.length,
    };

    return (
        <tr className="table-body__row" style={gridStyle}>
            {columns.map((column) => {
                const value = row[column.name];

                const variant = column.variantName
                    ? row[column.variantName]
                    : null;

                return (
                    <TableCell
                        key={column.name}
                        value={value}
                        type={column.type}
                        variant={variant}
                    />
                );
            })}
        </tr>
    );
}

export default TableRow;
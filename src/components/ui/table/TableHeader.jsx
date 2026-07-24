function TableHeader({columns}) {
    const gridStyle = {
        "--table-columns": columns.length,
    };

    return (
        <thead className="table-header">
            <tr className="table-header__row" style={gridStyle}>
                {columns.map((column) => (
                    <th key={column.name} className="table-header__item">
                        {column.label}
                    </th>
                ))}
            </tr>
        </thead>
    );
}

export default TableHeader;
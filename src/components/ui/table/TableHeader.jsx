function TableHeader({columns, variant = "default"}) {
    const gridStyle = {
        "--table-columns": columns.length,
    };

    return (
        <thead className="table-header">
            <tr className={`table-header__row table-header__row--${variant}`} style={gridStyle}>
                {columns.map((column) => (
                    <th key={column.name ?? column.key} className={`table-header__item table-header__item--${variant}`}>
                        {column.label}
                    </th>
                ))}
            </tr>
        </thead>
    );
}

export default TableHeader;
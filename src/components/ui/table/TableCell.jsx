// TableCell displays table values such as text, badges and buttons.
import { BadgeStatus } from "../badges";
import { Button } from "../buttons";

function TableCell({ name, value, type = "text", variant, label }) {
    const hasValue = value !== null && value !== undefined && value !== "";

    const displayedValue = hasValue ? value : "Non renseigné";

    const itemClassName = `table-body__item table-body__item--${name}`;

    if (type === "badge") {
        return (
            <td className={itemClassName} data-label={label}>
                <BadgeStatus
                    status={displayedValue}
                    variant={variant}
                />
            </td>
        );
    }

    if (type === "truncate") {
        return (
            <td
                className={`${itemClassName} table-body__item--truncate`}
                title={displayedValue}
                data-label={label}
            >
                <span className="table-body__text-truncate">
                    {displayedValue}
                </span>
            </td>
        );
    }

    if (type === "button") {
        return (
            <td className={itemClassName} data-label={label}>
                <Button
                    label={value.label}
                    onClick={value.onClick}
                    variant="primary"
                />
            </td>
        );
    }

    return (
        <td className={itemClassName} data-label={label}>
            <span className="table-body__value">
                {displayedValue}
            </span>
        </td>
    );
}

export default TableCell;
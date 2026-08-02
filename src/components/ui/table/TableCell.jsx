// TableCell affiche les valeur (texte, badge, botton,...)

import { BadgeStatus } from "../badges";

function TableCell({ value, type = "text", variant }) {
    const hasValue = value !== null && value !== undefined && value !== "";

    const displayedValue = hasValue ? value : "Non renseigné";
    
    if(type === "badge") {
        return (
            <td className="table-body__item">
                <BadgeStatus
                    status={ displayedValue }
                    variant={ variant }
                />                
            </td>
        )
    }

    if (type === "truncate") {
        return (
            <td className="table-body__item table-body__item--truncate" title={displayedValue}>
                <span className="table-body__text-truncate">
                    {displayedValue}
                </span>
            </td>
        );
    }

    return (
        <td className="table-body__item">
            { displayedValue }
        </td>
    )
}

export default TableCell;
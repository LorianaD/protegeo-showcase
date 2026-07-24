// TableCell affiche les valeur (texte, badge, botton,...)

import { BadgeStatus } from "../badges";

function TableCell({ value, type = "text", variant }) {
    
    if(type === "badge") {
        return (
            <td className="table-body__item">
                <BadgeStatus
                    status={value}
                    variant={variant}
                />                
            </td>
        )
    }

    return (
        <td className="table-body__item">
            { value }
        </td>
    )
}

export default TableCell;
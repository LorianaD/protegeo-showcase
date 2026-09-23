import { Button } from "../buttons";
import { InfoField, InfoFieldGroup } from "../fields";

function BankAccountCard({ card, actions, showActions = false, onEdit, onDelete, disabled = false }) {
    return (
        <div className="bank-account-card">
            <div className="bank-account-card__header">
                <h4 className="bank-account-card__title">
                    {card.title}
                </h4>
                <Button label={card.editLabel} variant="edit" onClick={() => onEdit?.(card.bankAccount)} />
            </div>
            
            <div className="bank-account-card__info-list">
                {card.fields.map((field) => (
                    <InfoFieldGroup key={`${card.id}-${field.name ?? field.label}`}>
                        <InfoField
                            label = {field.label}
                            value = {field.value}
                            variant = {field.variant}
                            editing = {field.editing}
                            name = {field.name}
                            type = {field.type}
                            onChange = {field.onChange}
                            options = {field.options}
                            placeholder = {field.placeholder}
                        />
                    </InfoFieldGroup>
                ))}
            </div>
        </div>
    )
}

export default BankAccountCard;
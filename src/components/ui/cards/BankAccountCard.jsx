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
                {card.fields.map((row, index) => (
                    <InfoFieldGroup key={`${card.id}-row-${index}`}>
                        {row.map((item) => (
                            <InfoField
                                key={`${card.id}-${item.name}`}
                                label={item.label}
                                value={item.value}
                                variant={item.variant}
                                editing={item.editing}
                                name={item.name}
                                type={item.type}
                                onChange={item.onChange}
                                options={item.options}
                                placeholder={item.placeholder}
                            />
                        ))}
                    </InfoFieldGroup>
                ))}
            </div>
        </div>
    )
}

export default BankAccountCard;
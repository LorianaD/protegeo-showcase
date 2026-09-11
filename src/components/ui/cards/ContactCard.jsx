import { ContactActions } from "@/components/pages/dashboard";
import { InfoField, InfoFieldGroup } from "../fields";

function ContactCard({ card, actions, showActions = false, onEdit, onDelete, disabled = false }) {
    return (
        <div className="contact-card">
            <h4 className="contact-card__title">{card.title}</h4>
            <div className="info-list">
                {card.fields.map((field) => (
                    <InfoFieldGroup key={`${card.id}-${field.name ?? field.label}`}>
                        <InfoField
                            label = {field.label}
                            value = {field.value}
                            editing = {field.editing}
                            name = {field.name}
                            type = {field.type}
                            onChange = {field.onChange}
                            variant = {field.variant}
                            options = {field.options}
                            placeholder = {field.placeholder}
                        />
                    </InfoFieldGroup>
                ))}                    
            </div>

            {showActions && (
                <ContactActions
                    actions={actions}
                    onEdit={() => onEdit(card.contact)}
                    onDelete={() => onDelete(card.contact)}
                    disabled={disabled}
                />
            )}
        </div>
    )
}

export default ContactCard;
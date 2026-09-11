import { ContactCard, InfoField } from "@/components/ui";
import ContactObservationNote from "./ContactObservationNote";

function ContactCardList({ contactCards = [], actions, showActions = false, onEdit, onDelete, disabled = false }) {
    if (contactCards.length === 0) {
        
        return null;
    }

    return (
        <div className="contact-card-list">
            {contactCards.map((card) => (
                <div
                    key={card.id}
                    className="contact-card-list__item"
                >
                    <ContactCard
                        card={card}
                        actions={actions}
                        showActions={showActions}
                        onEdit={onEdit}
                        onDelete={onDelete}
                        disabled={disabled}
                    />

                    {card.notes && (
                        <InfoField
                            label={card.notes.label}
                            value={card.note || card.placeholder}
                            variant="textarea"
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

export default ContactCardList;
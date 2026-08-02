import { ContactCard } from "@/components/ui";

function ContactCardList({ contactCards = [] }) {
    if (contactCards.length === 0) {
        return null;
    }

    return (
        <div className="contact-card-list">
            {contactCards.map((card) => (
                <ContactCard
                    key={card.id}
                    card={card}
                />
            ))}
        </div>
    );
}

export default ContactCardList;
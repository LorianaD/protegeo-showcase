import { InfoField } from "../fields";

function ContactCard({ card }) {
    return (
        <div className="contact-card">
            <h4>{card.title}</h4>
            {card.fields.map((field) => (
                <InfoField
                    key={field.name ?? field.label}
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
            ))}
        </div>
    )
}

export default ContactCard;
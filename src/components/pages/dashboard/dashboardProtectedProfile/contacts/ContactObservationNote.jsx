import { InfoField } from "@/components/ui";

function ContactObservationNote({section}) {

    return (
        <InfoField
            label={section.notes.label}
            type={section.notes.type}
            name={section.notes.name}
            placeholder={section.notes.placeholder}
            // value={editing ? formData[section.notes.name] : protectedPerson[section.notes.name] ?? section.notes.placeholder }
            // editing={editing}
            // onChange={handleChange}
            variant="textarea"
        />
    )
}

export default ContactObservationNote;
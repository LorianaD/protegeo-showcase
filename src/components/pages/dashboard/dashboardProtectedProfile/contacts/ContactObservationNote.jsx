import { InfoField } from "@/components/ui";

function ContactObservationNote({ section, notes, value, editing, onChange }) {
    const noteConfig = notes ?? section?.notes;

    if (!noteConfig) {
        return null;
    }

    return (
        <InfoField
            label={noteConfig.label}
            type={noteConfig.type}
            name={noteConfig.name}
            placeholder={noteConfig.placeholder}
            value={value || noteConfig.placeholder}
            editing={editing}
            onChange={onChange}
            variant="textarea"
        />
    );
}

export default ContactObservationNote;
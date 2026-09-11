import { Button } from "@/components/ui";

function ContactActions({ actions, onEdit, onDelete, disabled = false }) {
    return (
        <div className="contact-actions">
            <Button
                label={actions.edit.label}
                type="button"
                variant={actions.edit.variant}
                onClick={onEdit}
                disabled={disabled}
            />

            <Button
                label={actions.delete.label}
                type="button"
                variant={actions.delete.variant}
                onClick={onDelete}
                disabled={disabled}
            />
        </div>
    );
}

export default ContactActions;
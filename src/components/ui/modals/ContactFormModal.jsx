import { ContactForm } from "../forms";
import Modal from "./Modal";

function ContactFormModal({ form, fields, value, onChange, onClose, onSubmit, category, cancelLabel, submitLabel }) {
    return (
        <Modal title={form.header.title} onClose={onClose}>
            <ContactForm
                form={form}
                fields={fields}
                onChange={onChange}
                onCancel={onClose}
                onSubmit={onSubmit}
                category={category}
                cancelLabel={cancelLabel}
                submitLabel={submitLabel}
            />
        </Modal>
    );
}

export default ContactFormModal;
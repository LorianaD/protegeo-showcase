import { ContactForm } from "../forms";
import Modal from "./Modal";

function ContactFormModal({ form, fields, values = {}, onChange, onClose, onSubmit, category, cancelLabel, submitLabel, loading, error }) {
    return (
        <Modal title={form.header.title} onClose={onClose}>
            <ContactForm
                form={form}
                fields={fields}
                values={values}
                onChange={onChange}
                onCancel={onClose}
                onSubmit={onSubmit}
                category={category}
                cancelLabel={cancelLabel}
                submitLabel={submitLabel}
                loading={loading}
                error={error}
            />
        </Modal>
    );
}

export default ContactFormModal;
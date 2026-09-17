import { ManagementAccountForm } from "../forms";
import Modal from "./Modal";

function ManagementAccountFormModal({form, fields, onChange, onClose, onSubmit, loading, error}) {
    return (
        <Modal
            title={form.header.title}
            onClose={onClose}
        >
            <ManagementAccountForm
                form={form}
                fields={fields}
                onChange={onChange}
                onCancel={onClose}
                onSubmit={onSubmit}
                loading={loading}
                error={error}
            />
        </Modal>
    );
}

export default ManagementAccountFormModal;
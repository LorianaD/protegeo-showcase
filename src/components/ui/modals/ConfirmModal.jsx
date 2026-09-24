import { Button } from "@/components/ui";
import Modal from "./Modal";

function ConfirmModal({title, message, confirmLabel = "Confirmer", cancelLabel = "Annuler", onConfirm, onClose, loading = false,}) {
    return (
        <Modal
            title={title}
            onClose={onClose}
        >
            <div className="confirm-modal">
                <p className="confirm-modal__message">
                    {message}
                </p>

                <div className="confirm-modal__actions">
                    <Button
                        label={cancelLabel}
                        type="button"
                        variant="secondary"
                        onClick={onClose}
                        disabled={loading}
                    />

                    <Button
                        label={loading ? "Suppression..." : confirmLabel}
                        type="button"
                        variant="delete"
                        onClick={onConfirm}
                        disabled={loading}
                    />
                </div>
            </div>
        </Modal>
    );
}

export default ConfirmModal;
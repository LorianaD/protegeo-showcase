import Modal from "./Modal";
import { BodyAddDossier } from "@/components/pages/dashboard/";

function AddDossierModal({ open, onClose, onCreated }) {

    if (!open) {
        return null;
    }

    return (
        <Modal onClose={onClose}>
            <BodyAddDossier onClose={onClose} onCreated={onCreated}/>
        </Modal>
    )
}

export default AddDossierModal;
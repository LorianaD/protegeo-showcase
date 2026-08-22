import { useAddDossier } from "@/hooks";
import Modal from "./Modal";
import { BodyAddDossier } from "@/components/pages/dashboard/";

function AddDossierModal({ open, onClose }) {

    if (!open) {
        return null;
    }

    return (
        <Modal onClose={onClose}>
            <BodyAddDossier onClose={onClose}/>
        </Modal>
    )
}

export default AddDossierModal;
import { useAddDossier } from "@/hooks";

function AddDossierModal({ open, onClose }) {
    const {addDossier, isAdding, addError} = useAddDossier();

    if (!open) {
        return null;
    }

    return (
        <div>
            <h2>Ajouter une personne protégée</h2>

            <button onClick={onClose}>
                Fermer
            </button>
        </div>
    )
}

export default AddDossierModal;
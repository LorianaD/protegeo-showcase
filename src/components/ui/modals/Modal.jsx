function Modal({ title, children, onClose }) {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal__header">
                    <h2 className="modal__title">
                        {title}
                    </h2>

                    <button
                        type="button"
                        className="modal__close"
                        onClick={onClose}
                        aria-label="Fermer la fenêtre"
                    >
                        ×
                    </button>
                </div>

                <div className="modal__content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;
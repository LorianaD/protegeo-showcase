import maquetteDashboard from "../../../assets/imgs/maquette-dashboard.png";

function LoginPreview() {
    return (
        <section className="login-preview">
            <div className="login-preview__content">
                <p className="login-preview__badge">Espace connecté bientôt disponible</p>

                <h2 className="login-preview__title">
                    Connexion à Protégéo
                </h2>

                <p className="login-preview__description">
                    Le futur tableau de bord Protégéo permettra de suivre les ressources,
                    les dépenses, les justificatifs et la préparation du compte de gestion annuel.
                </p>

                <div className="login-preview__actions">
                    <a href="/" className="login-preview__link">
                        Retour à l’accueil
                    </a>
                </div>
            </div>

            <div className="login-preview__visual">
                <img
                    src={maquetteDashboard}
                    alt="Aperçu du futur tableau de bord Protégéo"
                    className="login-preview__img"
                />
            </div>
        </section>
    );
}

export default LoginPreview;